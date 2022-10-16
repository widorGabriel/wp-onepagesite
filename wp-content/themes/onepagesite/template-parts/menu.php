<!-- MENU -->
<nav class="menu" id="menu">
	<!-- <a href="javascript:void(0);" class="menu__icon">
		<i class="fa fa-bars"></i>
	</a>
	<div class="menu__sections" id="menuSections">
		<a href="#profile" class="menu__secclink" data-stp-fastscroll-cmd="profile">
			<i class="fa-solid fa-user"></i>
			Profile
		</a>
		<a href="#skills" class="menu__secclink" data-stp-fastscroll-cmd="skills">
			<i class="fa-solid fa-pencil"></i>
			Skills
		</a>
		<a href="#portfolio" class="menu__secclink" data-stp-fastscroll-cmd="portfolio">
			<i class="fa-solid fa-suitcase"></i>
			Portfolio
		</a>
		<a href="#contact" class="menu__secclink" data-stp-fastscroll-cmd="contact">
			<i class="fa-solid fa-envelope"></i>
			Contact
		</a>
	</div>
	<div class="menu__dropdown">
		<a class="menu__dropbtn" href="javascript:;">
			<i class="fa-solid fa-square-pen"></i>
			Resources
			<i class="fa fa-caret-down"></i>
		</a>
		<div class="menu__dropdown-content">
			<a href="https://pixabay.com/" target="_blank">Pixabay</a>
			<a href="https://fonts.google.com/" target="_blank">Google fonts</a>
			<a href="https://fontawesome.com/" target="_blank">Font awesome</a>
			<a href="https://www.fontsquirrel.com/" target="_blank">Font squirrel</a>
			<a href="https://www.w3schools.com//" target="_blank">W3 schools</a>
			<a href="https://zenike.github.io/startpack/" target="_blank">Startpack modules</a>
		</div>
	</div>
	<div class="menu__socialmedia" id="menuSocialmedia">
		<a href="">
			<i class="fa-brands fa-twitter"></i>
		</a>
		<a href="">
			<i class="fa-brands fa-facebook-f"></i>
		</a>
		<a href="">
			<i class="fa-brands fa-instagram"></i>
		</a>
	</div> -->
	<!-- <div class="menu__sections" id="menuSections"> -->
		<?php wp_nav_menu(array('theme_location' => 'primary_navigation', 'items_wrap' => '%3$s', 'container' => false)); ?>
	<!-- </div> -->
</nav>