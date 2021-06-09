<?php

add_action( 'wp_enqueue_scripts', 'tt_child_enqueue_parent_styles' );
function tt_child_enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

add_action( 'wp_enqueue_scripts', 'custom_js' );
function custom_js() {
  wp_enqueue_script( 'custom_js', get_stylesheet_directory_uri() . '/js/custom.js' );
}

add_action( 'wp_enqueue_scripts', 'hds_styles' );
function hds_styles() {
  wp_enqueue_style('HDS_style', get_theme_file_uri('hds/hds-core/lib/base.css')); 
  wp_enqueue_style('HDS_style', get_theme_file_uri('hds/hds-core/lib/icons/all.css')); 
}

add_action( 'wp_enqueue_scripts', 'load_dashicons_front_end' );
function load_dashicons_front_end() {
wp_enqueue_style( 'dashicons' );
}

function be_reusable_blocks_admin_menu() {
  add_menu_page( 'Reusable Blocks', 'Reusable Blocks', 'edit_posts', 'edit.php?post_type=wp_block', '', 'dashicons-editor-table', 22 );
}
add_action( 'admin_menu', 'be_reusable_blocks_admin_menu' );

// Add slug to body class
function playbook_add_slug_to_body_class( $classes ) {
  global $post;
  if ( isset( $post ) ) {
      $classes[] = $post->post_type . '-' . $post->post_name;
  }
  return $classes;
}
add_filter( 'body_class', 'playbook_add_slug_to_body_class' );

add_action( 'after_setup_theme', 'playbook_setup_theme_supported_features' );
function playbook_setup_theme_supported_features() {
  
  add_theme_support('editor-styles');
  add_editor_style( 'editor-style.css' );
  add_theme_support( 'wp-block-styles' );


  add_theme_support( 'editor-color-palette', array(
      array(
          'name'	=> __( 'Suomenlinna', 'playbook' ),
          'slug'	=> 'suomenlinna',
          'color'	=> '#f5a3c7',
      ),
      array(
          'name'	=> __( 'Tram', 'playbook' ),
          'slug'	=> 'tram',
          'color'	=> '#009246',
      ),
      array(
          'name'	=> __( 'Tram  light', 'playbook' ),
          'slug'	=> 'tram-light',
          'color'	=> '#dff7eb',
      ),
      array(
          'name'	=> __( 'Tram medium light', 'playbook' ),
          'slug'	=> 'tram-medium-light',
          'color'	=> '#a3e3c2',
      ),
      array(
          'name'	=> __( 'Copper medium light', 'playbook' ),
          'slug'	=> 'copper-medium-light',
          'color'	=> '#9ef0de',
      ),
      array(
          'name'	=> __( 'Fog dark', 'playbook' ),
          'slug'	=> 'fog-dark',
          'color'	=> '#72a5cf',
      ),
  ) );
}




?>