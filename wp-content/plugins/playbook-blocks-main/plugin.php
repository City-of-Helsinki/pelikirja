<?php
   /*
   Plugin Name: Playbook custom blocks
   Plugin URI: https://eqsign.fi
   description: >- a plugin to create simple blocks for Playbook theme (Twenty Twenty child theme)
   Version: 1.0.0.
   Author: eQsign / Mika Hämäläinen
   */
  $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
  function webpack_build_enqueue() {
      wp_enqueue_script(
          'webpack_build_script',
          plugins_url( 'build/index.js', __FILE__ ),
          $asset_file['dependencies'],
          $asset_file['version']
      );

      wp_register_script(
        'custom_js',
        plugins_url( 'js/code.js', __FILE__ ),
        [ 'wp-i18n', 'wp-blocks', 'wp-element', 'wp-editor' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'js/code.js' )
      );

  
      wp_register_style(
        'editor_styles',
        plugins_url( 'build/index.css', __FILE__ ),
        [],
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.css' )
      );


      register_block_type( 'playbook/hero', [
        'editor_style' => 'editor_styles', // Loads only on editor.
      ] );
      
  }
  add_action( 'enqueue_block_editor_assets', 'webpack_build_enqueue' );

  function playbook_load_frontend_styles() {
    wp_register_style(
      'teststyle',
      plugins_url( 'build/style-index.css', __FILE__ ),
      [],
      filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' )
    );

    register_block_type( 'playbook/test', [
      'style' => 'teststyle', // Loads both on editor and frontend.
    ] );
  }
  add_action( 'init', 'playbook_load_frontend_styles' );


  function playbook_add_code(){
    wp_register_script( 'playbook_custom_code', plugins_url( 'js/code.js', __FILE__ ), array( 'jquery' ), '1.0', true );
    wp_enqueue_script( 'playbook_custom_code' );

  }
  add_action( 'wp_enqueue_scripts', 'playbook_add_code' );


  function playbook_block_category( $categories ) {
      // setup category array
      $playbook_category = [
        'slug' => 'playbook',
        'title' => __( 'Playbook blocks!' ),
        'icon'  => 'book',
      ];

      // make a new category array and insert ours at position 1
      $new_categories = [];
      $new_categories[0] = $playbook_category;

      // rebuild cats array
      foreach( $categories as $category ) {
          $new_categories[] = $category;
      }

      return $new_categories;
  }

  add_filter( 'block_categories', 'playbook_block_category', 99, 1 );
  
?>