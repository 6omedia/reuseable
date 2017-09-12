/*

The Loop
***********************************************************************************************/

<?php

	$args = array(
		'post_type' => $postType,
		'category_name' => $cat, 
		'posts_per_page' => 12,
		'paged' => $paged
	);

	$query = new WP_Query( $args );

?>

<?php if( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>

<?php endwhile; else : ?>
<?php endif; ?>

/* 

Loop Through categories and subcategories
**********************************************************************************************/

<?php

	$args = array('hide_empty' => 0); 

	$categories = get_categories( $args );

	foreach ($categories as $cat) {
		// print_r($cat->name);

		echo '<h3>' . $cat->name . '</h3>';
		echo '<ul class="localNav list">';

		$subcats = get_categories('child_of=' . $cat->term_id . '&hide_empty=0');

		foreach ($subcats as $subcat) {
			echo '<li><a href="' . $subcat->slug . '">' . $subcat->name . '</a></li>';
		}

		echo '</ul>';

	}

?>
