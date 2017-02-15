// in functions...

	function wpMss_create_widget( $name, $id, $description ) {

		register_sidebar(array(
			'name' => __( $name ),
			'id' => $id, 
			'description' => __( $description ),
			'before_widget' => '<div class="widget">',
			'after_widget' => '</div>',
			// 'before_title' => '<h2 class="module-heading">',
			// 'after_title' => '</h2>'
		));

	}

	wpMss_create_widget( 'Front Page Area', 'frontpage', 'Displays on the front page' );

// in widgetized area...

	<?php if ( !function_exists('dynamic_sidebar') || !dynamic_sidebar('frontpage') ) : 

	endif; ?>




// Createing a widget.. put this in its own file in the plugins folder...

<?php
/*
Plugin Name: Show Recent Posts
Description: Show recent posts
Author: 6o Media
Version: 1
*/

function sixd_check_for_page_tree() {
 
    //start by checking if we're on a page
    if( is_page() ) {
     
        global $post;
     
        // next check if the page has parents
        if ( $post->post_parent ){
         
            // fetch the list of ancestors
            $parents = array_reverse( get_post_ancestors( $post->ID ) );
             
            // get the top level ancestor
            return $parents[0];
             
        }
         
        // return the id  - this will be the topmost ancestor if there is one, or the current page if not
        return $post->ID;
         
    }
 
}

class SixD_Recent_Posts_Widget extends WP_Widget {
     
    function __construct() {
    
    	parent::__construct(
	         
	        // base ID of the widget
	        'SixD_Recent_Posts_Widget',
	         
	        // name of the widget
	        __('Show Recent Posts', 'SixD' ),
	         
	        // widget options
	        array (
	            'title' => __( 'Title of the post', 'SixD' ),
	            'post type' => __( 'Post Type', 'SixD')
	        )
	         
	    );

    }
     
    function form( $instance ) {

    	$defaults = array(
    		'title' => 'Recent Posts',
	        'num_of_posts' => '-1',
	        'post_type' => 'post'
	    );
	    $title = $instance[ 'title' ];
	    $num_of_posts = $instance[ 'num_of_posts' ];
	    $post_type = $instance[ 'post_type' ];

	    // markup for form ?>

			<p>
		        <label for="<?php echo $this->get_field_id( 'title' ); ?>">Title:</label>
		        <input class="widefat" type="text" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo esc_attr( $title ); ?>">
		    </p>

	    	<!-- Number of posts -->
		    <p>
		        <label for="<?php echo $this->get_field_id( 'num_of_posts' ); ?>">Number of Posts:</label>
		        <input class="widefat" type="text" id="<?php echo $this->get_field_id( 'num_of_posts' ); ?>" name="<?php echo $this->get_field_name( 'num_of_posts' ); ?>" value="<?php echo esc_attr( $num_of_posts ); ?>">
		    </p>

		    <!-- Post type -->

		    <p>
		        <label for="<?php echo $this->get_field_id( 'post_type' ); ?>">Post Type:</label>
		        <input class="widefat" type="text" id="<?php echo $this->get_field_id( 'post_type' ); ?>" name="<?php echo $this->get_field_name( 'post_type' ); ?>" value="<?php echo esc_attr( $post_type ); ?>">
		    </p>		    
		             
		<?php
    }
     
    function update( $new_instance, $old_instance ) {       

    	$instance = $old_instance;
        $instance[ 'title' ] = strip_tags( $new_instance[ 'title' ] );
        $instance[ 'num_of_posts' ] = strip_tags( $new_instance[ 'num_of_posts' ] );
        $instance[ 'post_type' ] = strip_tags( $new_instance[ 'post_type' ] );
        return $instance;

    }
     
    function widget( $args, $instance ) {
     
    	extract( $args );
       ?>   

       	<div class="container">
	    	<h2 class="lineh2"><span><?php echo $instance['title']; ?></span></h2>
			<div class="blog_posts">
				<div class="row">
					<?php

						$args = array(
							'post_type' => $instance['post_type'],
							'posts_per_page' => $instance['num_of_posts']
						);

						$query = new WP_Query($args);

					?>

					<?php if( $query->have_posts() ) : while ( $query->have_posts() ) : $query->the_post(); ?>

						<div class="col-sm-6 col-md-4">
							<div class="a_blog_post">
								<h3><?php the_title(); ?></h3>
								<?php echo get_avatar(get_the_author_meta( 'user_email' )); ?>
								<span><em>by <?php the_author_posts_link(); ?></em></span>
								<?php the_excerpt(); ?>
								<!-- <p>
									Nulla facilisi. Cras viverra purus et ipsum viverra, non placerat lectus interdum. Aenean ultricies magna blandit ante vehicula, id ultricies quam dictum. Ut maximus convallis...
								</p> -->
								<a href="<?php the_permalink(); ?>" class="read_more">Read More</a>
							</div>	
						</div>

					<?php endwhile; else : ?>
					<?php endif; ?>
				</div>
			</div>
		</div>

		<?php
    }
     
}

function SixD_Register_Recent_Posts_Widget() {
 
    register_widget( 'SixD_Recent_Posts_Widget' );
 
}
add_action( 'widgets_init', 'SixD_Register_Recent_Posts_Widget' );

?>