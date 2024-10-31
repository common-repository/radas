<?php
namespace Radas\Lib\Elements;

use Radas\Lib\Assets\Admin_Scripts_Lib;
use Radas\Lib\Classes\Abstracts\Wrapper;

/** 
 * @package Radas\Lib\Elements 
 * @author Akah <akah@vaks.in>
 * @since 0.0.1
 * 
 * @inheritDoc
 * @property-read string $id
 * @property-read array $attributes
 * @property-read array $classes
 * @property-read array $tabs
*/
class Tabs extends Wrapper{      
    /**
     * @inheritdoc 
     */
    public function __construct(string $id) {
        parent::__construct($id);
        $this->add_class("rds-tabs");
    }

    /**
     * @inheritdoc 
     */
    public function render(){
        Admin_Scripts_Lib::enqueue("rds-tabs");

        if( is_callable($this->render_cb) ){
            call_user_func($this->render_cb, $this);
            return;
        }       
 
        ?>
        <div <?php $this->render_attributes(); ?>>
            <?php
                // if($this->label) {
                //     printf('<h2>%s</h2>', esc_html($this->label));
                // }
                if($this->description) {
                    printf('<p class="rds-description description">%s</p>', esc_html($this->description));
                }
            ?>            
            <nav class="nav-tab-wrapper">
            <?php 
                /** @var Tab $tab */
                foreach($this->elements as $tab){
                    // if($tab instanceof Tab){
                        printf('<a href="#%s" class="nav-tab">%s</a>', esc_attr($tab->id), esc_html($tab->label));
                    // }
                }
            ?>    
            </nav>
            <div class="rds-tab-content">
            <?php 
                /** @var Tab $tab */
                foreach($this->elements as $tab){
                    // if($tab instanceof Tab){
                        $tab->render();
                    // }
                }            
            ?>
            </div>
        </div>
        <?php
    }
}