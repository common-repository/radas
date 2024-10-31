<?php

use Radas\Admin\Assets\Admin_Scripts_Rds;
use Radas\Admin\Assets\Admin_Styles_Rds;
use Radas\Admin\Option_Page;
use Radas\Admin\Option_Page_CPT;
use Radas\Admin\Rest\CPT\REST_Option_Page;
use Radas\Lib\Helper\Util;

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action('radas_run', function () {
    /** run only once */
    if( did_action('radas_run') > 1 ) return;
    
    add_action('init', 'radas_register_rest');
    add_action('init', 'radas_register_scripts');
    add_action('init', 'radas_register_styles');
    add_action('init', 'radas_register_post_type');
    add_action('init', 'radas_register_admin_page');
    add_action('init', 'radas_load_options_pages');
});

/** @return void  */
function radas_register_rest(){
    /** register REST for option page */
    (new REST_Option_Page());
}

/** @return void  */
function radas_register_scripts(){
    Admin_Scripts_Rds::register();
}

/** @return void  */
function radas_register_styles(){
    Admin_Styles_Rds::register();
}

/** @return void  */
function radas_register_post_type(){    
   
    // https://developer.wordpress.org/reference/functions/register_post_type/
    $args = array(
        'public' => false,
        'show_in_rest' => false,
        'supports' => false,
        'has_archive' => false,
        'rewrite'     => false, 
    );
    register_post_type( 'radas_option_page', $args);    
    
}

/** @return void  */
function radas_register_admin_page(){
    (new Option_Page_CPT());
}

/** @return void  */
function radas_load_options_pages() {    
    // The Query.
    $the_query = new \WP_Query( [
        'post_type' => 'radas_option_page', 
        'nopaging' => true
    ] );        

    // The Loop.
    if ( $the_query->have_posts() ) {
        while ( $the_query->have_posts() ) {
            $the_query->the_post();
            $post_id = get_post()->ID;
            Util::get_instance_with_param(Option_Page::class, $post_id, $post_id)->register();
        }
    }        
}