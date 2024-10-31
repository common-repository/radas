<?php
namespace Radas\Lib\Assets;

use Radas\Lib\Classes\Abstracts\Styles;

/** 
 * @package Radas\Lib\Assets 
 * @author Akah <akah@vaks.in>
 * @since 0.0.1  
 * */
class Admin_Styles_Lib extends Styles{
    protected const script_hook = 'admin_enqueue_scripts';

    private const asset_url = RADAS_URL . 'lib/assets/css/';
    protected static $styles = [      
        'rds-datatables' => [
            'src'   => self::asset_url . 'datatables.css',
            'deps'  => [],
            'ver'   => '0.0.1',
            'media' => 'all'             
        ],  
        
        'rds-style' => [
            'src'   => self::asset_url . 'common/style.css',
            'deps'  => [],
            'ver'   => '0.0.1',
            'media' => 'all'             
        ],

        'rds-page' => [
            'src'   => self::asset_url . 'page.css',
            'deps'  => ['rds-style'],
            'ver'   => '0.0.1',
            'media' => 'all'             
        ],    
    ];
}