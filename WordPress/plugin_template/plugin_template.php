<?php

	/* 
	 * Plugin Name: Meh Featured Posts
	 * Plugin URI: http://6omedia.co.uk
	 * Description: Creates a featured post toggle for posts
	 * Version: 0.0.0
	 * Author: 6oMedia
	 * Author URI:
	 * License: GPL2
	*/
	 
	// Global Variables

	$plugin_url = WP_PLUGIN_URL . '/meh-featured-posts';
	$options = array();

	class MehFeaturedPosts {

		function featposts_menu(){

			global $plugin_url;

			// Add Setting Page
			add_menu_page(
				'Meh Featured Posts',
				'Meh Featured Posts',
				'manage_options',
				'meh-featured-posts',
				array( $this, 'option_page'),
				'dashicons-star-filled'
			);

		}

		function option_page(){

			if( !current_user_can('manage_options') ){
				wp_die('You do not have permission to access this page');
			}

			global $plugin_url;
			global $options;
			global $helpFuncs;

			require('inc/options-page.php');

		}

		function load_admin_assets(){

			wp_enqueue_style('mehfp_styles', plugins_url( 'meh-featured-posts/css/admin_styles.css' ));
			wp_enqueue_script('mehfp_main_js', plugins_url( 'meh-featured-posts/js/main.js' ), array('jquery'));
			// wp_enqueue_script('soff_product_js', plugins_url( 'so-affiliates/js/product.js' ), array('soff_main_js'));

			// if(isset($_GET['page'])){
			// 	if($_GET['page'] == 'soaffilate'){
			// 		wp_enqueue_script('soff_options_js', plugins_url( 'so-affiliates/js/options.js' ), array('soff_main_js'));
			// 	}
			// }

		}

		function __construct() {
		
			// Add Menu
			add_action( 'admin_menu', array( $this, 'featposts_menu' ) );

			// Add Styles and Scripts
			add_action( 'admin_head', array( $this, 'load_admin_assets' ));
			// add_action( 'wp_enqueue_scripts', array($this, 'load_front_assets'));

		}

	}

	// Get the show on the road.
	$mehFeaturedPosts = new MehFeaturedPosts();

	/* 

		Plugin home page
		- select post types to have featured posts 

		add custom field for featured
		save and update featured on post page
		use ajax to toggle on or off featured on post list page

		create function getMehFeaturedPosts('postType', 20);
		-- postType, -- limit returned posts
 
	*/

?>