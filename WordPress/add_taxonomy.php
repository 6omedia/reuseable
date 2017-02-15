/*
*Adds the custom taxonomy function to our functions.php file.
*/
add_action( 'init', 'build_taxonomies', 0 );

function build_taxonomies() {
    register_taxonomy(  'case_study_area', 'case_study',   //Let WordPress know that the artist taxonomy has posts
        array(
            'hierarchical' => true,
            'label' => 'Area of Law', // This tells WordPress how to label the various user interface outlets for the artist taxonomy    
            'query_var' => true,
            'rewrite' => array( 'slug' => 'case_study/area_of_law', 'with_front' => true ))
        );
}