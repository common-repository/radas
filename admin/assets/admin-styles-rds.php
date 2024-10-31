<?php
namespace Radas\Admin\Assets;

use Radas\Lib\Classes\Abstracts\Styles;

/** 
 * @package Radas\Admin\Assets 
 * @author Akah <akah@vaks.in>
 * @since 0.0.1  
 * */
class Admin_Styles_Rds extends Styles {
    protected const script_hook = 'admin_enqueue_scripts';

    private const asset_url = RADAS_URL . 'admin/assets/css/';

    protected static $styles = [
        '_rds-style' => [
            'src'   => self::asset_url . 'style.css',
            'deps'  => [],
            'ver'   => '0.0.0.c',
            'media' => 'all'             
        ],
        '_rds-fieldbox' => [
            'src'   => self::asset_url . 'option-page-cpt.css',
            'deps'  => ['rds-datatables', 'rds-page'],
            'ver'   => '0.0.0.c',
            'media' => 'all'             
        ],        
    ];
}