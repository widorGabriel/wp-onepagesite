<!-- PROFILE -->
<section id="profile" class="profile" data-stp-fastscroll-target="profile">
	<div class="profile__photo">
		<img src="<?php the_field("profile_main_photo"); ?>" alt="">
	</div>
	<div class="profile__texts">
		<h2>
			<?php the_field("profile_title"); ?>
		</h2>
		<article>
			<?php the_field("profile_textbox"); ?>
		</article>
	</div>
</section>