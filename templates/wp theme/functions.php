<?php 

add_theme_support('menus');
add_theme_support('post-thumbnails');
add_theme_support('title-tag');
// add_theme_support('woocommerce');

function tp_theme_assets() {
	
	// CSS
	wp_enqueue_style( 'bootstrap_css', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' );
	wp_enqueue_style( 'googleFonts_css', 'https://fonts.googleapis.com/css?family=Open+Sans|PT+Serif' );
	wp_enqueue_style( 'main_css', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'responsive_css', get_template_directory_uri() . '/css/responsive.css' );

	// JS
	wp_enqueue_script( 'main_js', get_template_directory_uri() . '/js/main.js', array('jquery'), '', true);

}
add_action( 'wp_enqueue_scripts', 'tp_theme_assets' );

function tp_register_theme_menus() {
	
	register_nav_menus(
		array(
			'main-menu' => __( 'Main Menu' ),
			'footer-menu' =>__( 'Footer Menu' )
		)
	);
	
}
add_action( 'init', 'tp_register_theme_menus' );

function tp_create_widget( $name, $id, $description ) {

	register_sidebar(array(
		'name' => __( $name ),	 
		'id' => $id, 
		'description' => __( $description ),
		'before_widget' => '<div class="widget">',
		'after_widget' => '</div>',
		'before_title' => '<h2 class="module-heading">',
		'after_title' => '</h2>'
	));

}

tp_create_widget( 'Page Sidebar', 'page', 'Displays on the side of pages with a sidebar' );
tp_create_widget( 'Blog Sidebar', 'blog', 'Displays on the side of pages in the blog section' );

function tp_excerpt_length( $length ) {
	return 32;
}
add_filter( 'excerpt_length', 'wpMss_excerpt_length', 999 );

add_filter( 'auto_update_plugin', '__return_false' );

?>