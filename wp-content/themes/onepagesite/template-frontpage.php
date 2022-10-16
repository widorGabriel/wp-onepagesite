<?php
/*
* Template Name: template-frontpage
* Template Post Type: page
*/
?>

<?php get_header(); ?>

<?php
get_template_part('template-parts/menu');
?>

<?php
get_template_part('template-parts/profile');
?>

<?php
get_template_part('template-parts/skills');
?>

<?php
get_template_part('template-parts/portfolio');
?>

<?php
get_template_part('template-parts/contact');
?>

<?php get_footer(); ?>