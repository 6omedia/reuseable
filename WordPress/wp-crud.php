<?php

/*** Options way ***/

// create
	add_option( 'option_name', 'option_value' );

// read
	get_option( 'option_name' );

// update
	update_option( 'option_name', 'option_value' );

// destroy
	delete_option( 'option_name' );

/*** Database way ***/

// create

	global $wpdb;
	$wpdb->insert('wp_outcomes', array(
	    'campaign_id' => $cId,
	    'title' => $outcome
	));

	$lastid = $wpdb->insert_id;

// update

	global $wpdb;
	$wpdb->update(
		$wpdb->prefix . 'px_adverts',
		array(
			'top_ad' => $top_ad,
		    'side_ad' => $side_ad,
		    'bottom_ad' => $bottom_ad,
		    'funnel_position' => $funnel_position,
		    'top_link' => $top_link,
		    'side_link' => $side_link,
		    'bottom_link' => $bottom_link
		),
		array(
			'id' => $adId[0]->id
		)
	);
	

// last id

// Delete

	global $wpdb; 
	$wpdb->delete( $wpdb->prefix . 'px_downloads', array( 'id' => $_POST['download_id'] ) );



?>

