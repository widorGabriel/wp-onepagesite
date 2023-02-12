<?php
//////////////////////////////////////////////////////////////////////////////////////
// Create OPTIONS PAGE
//////////////////////////////////////////////////////////////////////////////////////
if (function_exists('acf_add_options_page')) {
	acf_add_options_page();
}
?>

<?php
//////////////////////////////////////////////////////////////////////////////////////
// Add support for Appearence > Menus
//////////////////////////////////////////////////////////////////////////////////////
add_theme_support("menus");
add_action('after_setup_theme', function () {
	register_nav_menus([
	'primary_navigation' => __('Primary Navigation', ''),
	]);
});
?>

<?php
//////////////////////////////////////////////////////////////////////////////////////
// Add function for insert extra attributes to menu items (the scroll fast js effect)
//////////////////////////////////////////////////////////////////////////////////////
function add_specific_menu_location_atts( $atts, $item, $args ) {
	// check if the item is in the primary menu
	if( $args->theme_location == 'primary_navigation' ) {
		// add the desired attributes:
		if ( 98 === $item->ID or 99 === $item->ID or 100 === $item->ID or 101 === $item->ID) { // the ID of your menu items.
			$atts['href'] = 'javascript:;';
			$atts['class'] = 'menulinks';
		}
		if ( 98 === $item->ID ) { // the ID of your menu item.
			$atts['data-stp-fastscroll-cmd'] ="profile";
		}
		if ( 99 === $item->ID ) { // the ID of your menu item.
			$atts['data-stp-fastscroll-cmd'] ="skills";
		}
		if ( 100 === $item->ID ) { // the ID of your menu item.
			$atts['data-stp-fastscroll-cmd'] ="portfolio";
		}
		if ( 101 === $item->ID ) { // the ID of your menu item.
			$atts['data-stp-fastscroll-cmd'] ="contact";
		}
		if ( 127 === $item->ID ) { // the ID of your menu item.
			$atts['title'] = 'Gabriel Calvo profile';
		}
	}
	return $atts;
}
add_filter( 'nav_menu_link_attributes', 'add_specific_menu_location_atts', 10, 3 );
?>