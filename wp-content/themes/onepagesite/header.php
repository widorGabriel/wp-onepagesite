<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title><?php echo get_bloginfo('name'); ?></title>

	<!-- RESPONSIVE ENABLED-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- GOOGLE FONTS -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Oswald:wght@200;400&display=swap" rel="stylesheet">

	<!-- FONT AWESOME -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

	<!-- CSS LIGTHBOX -->
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/assets/css/lightbox.css'; ?>">

	<!-- EXTERNAL CSS STYLESHEET -->
	<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri() . '/assets/css/style.css'; ?>">

	<!-- JQUERY LIBRARY -->
	<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

	<!-- THEME SCRIPTS -->
	<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/app.js';  ?>" async></script>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<div id="container" class="container" data-stp-fastscroll-target="top">

		<?php wp_body_open(); ?>

		<?php if (have_rows("header")) : ?>
			<?php while (have_rows("header")) : the_row(); ?>

				<header class="header" style="background-image:url(<?php the_sub_field("main_banner_image"); ?>)">
					<div class="header__title">
						<h1 class="header__name">
							<?php the_sub_field("title"); ?>
						</h1>
						<h3 class="header__subtitle">
							<?php the_sub_field("subtitle"); ?>
						</h3>
					</div>
				</header>

			<?php endwhile; ?>
		<?php endif; ?>