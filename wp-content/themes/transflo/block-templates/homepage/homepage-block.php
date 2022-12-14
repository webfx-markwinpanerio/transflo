<?php

/** 
 * $template note:
 * 
 * Block names should be prefixed with acf/. So if the name you specified in
 * fx_register_block is 'your-block-name', the name you should use here is
 * 'acf/your-block-name' 
 */

$template = [
	['acf/homepage-masthead-slider'],
    ['acf/homepage-counter-section'],
    ['acf/homepage-products-section'],
    ['acf/general-image-button'],
    ['acf/homepage-testimonial-section'],
    ['acf/homepage-latest-news-and-resources'],
    ['acf/homepage-half-image-cta'],
];

?>

<div>
    <InnerBlocks template="<?php echo esc_attr( wp_json_encode( $template ) )?>" templateLock="all" />
</div>
