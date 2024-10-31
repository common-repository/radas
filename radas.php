<?php
/**
 * Plugin Name:       Radas Options Page
 * Plugin URI: 		  https://wpradas.com
 * Description:       The Lightweight WordPress Plugin for Effortless Options Page Creation
 * Version:           0.0.2
 * Requires at least: 6.5
 * Requires PHP:      8.0
 * Author:            ExpressWEB
 * Author URI:        https://www.eweb.co.id/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       radas
 * Domain Path: 	  /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// setup
define( 'RADAS_PLUGIN_FILE', __FILE__  );
define( 'RADAS_PATH', plugin_dir_path( RADAS_PLUGIN_FILE ) );
define( 'RADAS_URL', plugin_dir_url( RADAS_PLUGIN_FILE ) );
define( 'RADAS_DOMAIN', 'radas' );
define( 'RADAS_PHONE_FORMAT', '3|0xxx-xxxx-xxxxx' );
define( 'RADAS_REST_NAMESPACE', "radas/v1"  );
// define( 'RADAS_DEV_MODE', true  );

// include
require_once RADAS_PATH . 'inc/autoloader.php';
require_once RADAS_PATH . 'inc/plugin.php';
require_once RADAS_PATH . 'lib/plugin.php';

// action
add_action('plugin_loaded', 'radas_load');

/** @return void  */
function radas_load(){    
    do_action('radas_lib_run'); 
    do_action('radas_run'); 
}

