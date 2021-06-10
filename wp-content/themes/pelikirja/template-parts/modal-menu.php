<?php
/**
 * Displays the menu icon and modal
 *
 * @package WordPress
 * @subpackage Twenty_Twenty
 * @since Twenty Twenty 1.0
 */

?>

<div class="menu-modal cover-modal header-footer-group" data-modal-target-string=".menu-modal">

	<div class="menu-modal-inner modal-inner">

		<div class="menu-wrapper section-inner">

			<div class="menu-top">
				<div class="menu-header">

					<div class="header-titles custom-titles">
						<a href="<?php echo network_home_url(); ?>" class="custom-logo-link">
							<img src="<?php echo get_stylesheet_directory_uri() . '/assets/images/helsinki.svg'; ?>" alt="Helsingin kaupungin logo" width="90" height="42">
						<a/>
						<a href="<?php echo network_home_url(); ?>">
							<span class="site-name"><?php echo get_bloginfo( 'name' ); ?></span>
						</a>
					</div><!-- .header-titles -->

					<button class="toggle close-nav-toggle fill-children-current-color" data-toggle-target=".menu-modal" data-toggle-body-class="showing-menu-modal" aria-expanded="false" data-set-focus=".menu-modal">
						<span class="toggle-text"><?php _e( 'Close Menu', 'twentytwenty' ); ?></span>
						<!-- <?php twentytwenty_the_theme_svg( 'cross' ); ?> -->
						<span class="toggle-icon">
							<span class="dashicons dashicons-no-alt"></span>
						</span>
					</button><!-- .nav-toggle -->
				
				</div>

				
				<div class="search-container">

						<?php
							get_search_form(
								array(
									'label' => __( 'Search for:', 'twentytwenty' ),
								)
							);
						?>

				</div>

				<?php

				$mobile_menu_location = '';

				// If the mobile menu location is not set, use the primary and expanded locations as fallbacks, in that order.
				if ( has_nav_menu( 'mobile' ) ) {
					$mobile_menu_location = 'mobile';
				} elseif ( has_nav_menu( 'primary' ) ) {
					$mobile_menu_location = 'primary';
				} elseif ( has_nav_menu( 'expanded' ) ) {
					$mobile_menu_location = 'expanded';
				}

				if ( has_nav_menu( 'expanded' ) ) {

					$expanded_nav_classes = '';

					if ( 'expanded' === $mobile_menu_location ) {
						$expanded_nav_classes .= ' mobile-menu';
					}

					?>

					<nav class="expanded-menu<?php echo esc_attr( $expanded_nav_classes ); ?>" aria-label="<?php esc_attr_e( 'Expanded', 'twentytwenty' ); ?>" role="navigation">

						<ul class="modal-menu reset-list-style">
							<?php
							if ( has_nav_menu( 'expanded' ) ) {
								wp_nav_menu(
									array(
										'container'      => '',
										'items_wrap'     => '%3$s',
										'show_toggles'   => true,
										'theme_location' => 'expanded',
									)
								);
							}
							?>
						</ul>

					</nav>

					<?php
				}

				if ( 'expanded' !== $mobile_menu_location ) {
					?>

					<nav class="mobile-menu" aria-label="<?php esc_attr_e( 'Mobile', 'twentytwenty' ); ?>" role="navigation">

						<ul class="modal-menu reset-list-style">

						<?php
						if ( $mobile_menu_location ) {

							wp_nav_menu(
								array(
									'container'      => '',
									'items_wrap'     => '%3$s',
									'show_toggles'   => true,
									'theme_location' => $mobile_menu_location,
								)
							);

						} else {

							wp_list_pages(
								array(
									'match_menu_classes' => true,
									'show_toggles'       => true,
									'title_li'           => false,
									'walker'             => new TwentyTwenty_Walker_Page(),
								)
							);

						}
						?>

						</ul>

					</nav>

					<?php
				}
				?>

			</div><!-- .menu-top -->

			<div class="menu-bottom">

				<?php if ( has_nav_menu( 'social' ) ) { ?>

					<nav aria-label="<?php esc_attr_e( 'Expanded Social links', 'twentytwenty' ); ?>" role="navigation">
						<ul class="social-menu reset-list-style social-icons fill-children-current-color">

							<?php
							wp_nav_menu(
								array(
									'theme_location'  => 'social',
									'container'       => '',
									'container_class' => '',
									'items_wrap'      => '%3$s',
									'menu_id'         => '',
									'menu_class'      => '',
									'depth'           => 1,
									'link_before'     => '<span class="screen-reader-text">',
									'link_after'      => '</span>',
									'fallback_cb'     => '',
								)
							);
							?>

						</ul>
					</nav><!-- .social-menu -->

				<?php } ?>

			</div><!-- .menu-bottom -->

		</div><!-- .menu-wrapper -->

	</div><!-- .menu-modal-inner -->

</div><!-- .menu-modal -->
