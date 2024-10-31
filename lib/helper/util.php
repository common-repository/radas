<?php
namespace Radas\Lib\Helper;

use Radas\Lib\Classes\Abstracts\Wrapper;
use Radas\Lib\Classes\Abstracts\Element;
use Radas\Lib\Classes\Abstracts\Field;

/**
 * Static utility functions
 * @package Radas\Lib\Helper
 * @author Vaksin <dev@vaks.in>
 * @since 0.0.1
 */
class Util {    

    private static $instance;

    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }

    /**
     * To format phone number
     * <code>
     * $formated
     * </code>
     * @param string $phone  Example: +6281220003131
     * @param string $format Example: 3|0xxx-xxxx-xxxxx
     * @return string Result from example: 0812-2000-3131
     */
    public static function format_phone($phone, $format){
        
        if(!$format) {
            return $phone;
        }

        $opts = explode('|', $format);        
        $start = 0;
        
        if(count($opts)>1) {
            $start = intval($opts[0]);
            $format = $opts[1];
        }

        $arr_format = str_split($format);
        $arr_phone = str_split($phone);

        $i = $start;
        $result = '';

        foreach($arr_format as $value){
            if($value == 'x'){
                if($i >= count($arr_phone)){
                    break;
                }

                $result .= $arr_phone[$i];

                $i += 1;
            } else {
                $result .= $value;
            }
        }

        if($i <= count($arr_phone)){
            $result .= substr($phone, $i);
        }

        return $result;
    }

    /** @return string|false  */
    public static function get_logo_url(){
        $logo_id = get_theme_mod('custom_logo');
        return wp_get_attachment_image_url($logo_id, 'full') ?? '';
    }

    /**
     * To get Instance from wp_cache
     * @param string $class 
     * @return mixed 
     */
    public static function get_cached_instance($class){
        $instance = wp_cache_get($class, 'radas_instance');
        if(!$instance){
            if(!class_exists($class)){
                return false;
            }
            $instance = new $class();
            wp_cache_set($class, $instance, 'radas_instance');
        }
        // wp_cache_flush_group( 'vxn_express_class' );
        return $instance;
    }

    /**
     * To get cached instance with params from wp_cache
     * @param string  $class 
     * @param string  $key 
     * @param mixed $param 
     * @return mixed 
     */
    public static function get_instance_with_param($class, $key, ...$param){
        $instance = wp_cache_get("{$class}_{$key}", 'radas_instance');
        if(!$instance){
            if(!class_exists($class)){
                return false;
            }
            $instance = new $class(...$param);
            wp_cache_set("{$class}_{$key}", $instance, 'radas_instance');
        }
        return $instance;
    }    

    public static function get_function_return_type($function){
        return (new \ReflectionFunction($function))->getReturnType();
    }
    
    public static function get_element_fields(Element $element){
        $fields = [];

        if($element instanceof Field){
            $fields[$element->id] = $element;
        }

        if($element instanceof Wrapper){
            foreach($element->elements as $_element){        
                if($_element instanceof Field){
                    $fields[$_element->id] = $_element;
                }

                if($_element instanceof Wrapper){
                    /** diloop supaya bisa dipush */
                    foreach(self::get_element_fields($_element) as $__element){ //nanti dicek
                        $fields[$__element->id] = $__element;
                    }
                }
            }   
        }
        return $fields;
    }    
 
    public static function set_fields_value(Element &$element, array $values){
        if($element instanceof Field && array_key_exists($element->id, $values)){
            $element->set_value($values[$element->id]);
        }

        if($element instanceof Wrapper){
            foreach($element->elements as $_element){        

                if($_element instanceof Field && array_key_exists($_element->id, $values)){
                    $_element->set_value($values[$_element->id]);
                }
        
                if($_element instanceof Wrapper){
                    self::set_fields_value($_element, $values);
                }
            }   
        }
    }    

    public static function rest_response(string $code, string $message, string|array|null $data, int $status){
        $response = [
            'code' => $code,
            'message' => $message,
            'data' => $data,
        ];
        return new \WP_REST_Response($response, $status);
    }
}
