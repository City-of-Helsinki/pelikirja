<?php
/**
 * The template for displaying the footer
 *
 * Contains the opening of the #site-footer div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?>
<?php
  $url = network_home_url();
?>

      <footer id="site-footer" role="contentinfo" class="site-footer header-footer-group koro koro__before--basic" style="color:#a3e3c2;">

        <div class="section-inner">
          
          <section class="footer-branding">
            
            <div class="footer-titles custom-titles">
            <a href="<?php echo network_home_url(); ?>" class="site-logo">
                <img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/helsinki.svg'; ?>" alt="Helsingin kaupungin logo" width="90" height="42">
              <a/>
              <a href="<?php echo network_home_url(); ?>" class="site-name">
                <span><?php echo get_bloginfo( 'name' ); ?></span>
              </a>
            </div><!-- .footer-titles -->

          </section>

          <section class="footer-navigation">
            <ul>
            <?php
                
 
                // wp_nav_menu( array( 'theme_location' => 'FooterMenu' ) );
                wp_nav_menu(
                  array(
                    'container'  => '',
                    'items_wrap' => '%3$s',
                    'theme_location' => 'primary',
                  )
                );
                ?>
              </ul>
          </section>

          <hr />

          <section class="footer-tools">
            <ul>
              <li><a href="<?php echo esc_url( get_page_link( 794 ) ); ?>">Ota yhteyttä</a></li>
              <li><a href="#pikapalaute">Palaute</a></li>
              <li><a class="to-the-top" href="#site-content">
                <span class="to-the-top-long">
                  <?php
                  /* translators: %s: HTML character for up arrow. */
                  printf( __( 'To the top %s', 'twentytwenty' ), '<span class="arrow" aria-hidden="true">&uarr;</span>' );
                  ?>
                </span><!-- .to-the-top-long -->
                <span class="to-the-top-short">
                  <?php
                  /* translators: %s: HTML character for up arrow. */
                  printf( __( 'Up %s', 'twentytwenty' ), '<span class="arrow" aria-hidden="true">&uarr;</span>' );
                  ?>
                </span><!-- .to-the-top-short -->
              </a></li>
            </ul><!-- .to-the-top -->
          </section>

          <hr />

          <section class="footer-bottom">
            <div class="footer-credits">
              <p class="footer-copyright">&copy; Helsingin kaupunki 2021, CC 4.0.
            </div>
            <div class="footer-extra-links">
              <ul>
                <li><a href="https://brand.hel.fi">brand.hel.fi</a></li>
                <li><a href="https://hds.hel.fi">hds.hel.fi</a></li>
                <li><a href="https://kehmet.hel.fi">Kehmet</a></li>
                <li><a href="https://dev.hel.fi">dev.hel.fi</a></li>
                <li><a href="https://digi.hel.fi">digi.hel.fi</a></li>
              </ul>
            </div>
          </section>

        </div><!-- .section-inner -->

      </footer><!-- #site-footer -->

    <?php wp_footer(); ?>

  </body>
</html>
