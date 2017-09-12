<!DOCTYPE html>
<html>
<head>
    <link rel="icon" type="image/png" href="img/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>

<body>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img src="<?php bloginfo('template_directory'); ?>/img/logo.png">
                    <div id="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div class="col-sm-9">

                    <?php
                    
                        $defaults = array(
                            'container' => false,
                            'theme_location' => 'main-menu',
                            'menu_id' => 'main_nav',
                            'menu_class' => 'list'
                        );
                        
                        wp_nav_menu( $defaults );
                    
                    ?>

                </div>
            </div>
        </div>
    </header>

    <script>
        
        jQuery(document).ready(function($){

            var burger = $('#burger');
            var nav = $('#main_nav');

            burger.on('click', function(){

                if(nav.hasClass('menu_open')){
                    nav.removeClass('menu_open');
                }else{
                    nav.addClass('menu_open');
                }

            });

        });
        
    </script>