function aff_product_post_type(){

	// error_log('regiester post type');

	$labels = array(
		'name' => __( 'Aff Products' ),
		'singular_name' => __( 'Aff Product' )
	);

	$supports = array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'revisions', 'custom-fields');

	$args = array(
			'labels' => $labels,
			'supports' => $supports,
			'public' => true,
			'has_archive' => true,
			'taxonomies'          => array( 'brands' ),
			//'show_ui' => false,
			'rewrite' => array('slug' => 'affproducts'),
			'menu_icon' => 'dashicons-cart'
		);

	register_post_type( 'affproducts', $args );

}

add_action( 'init', 'aff_product_post_type');