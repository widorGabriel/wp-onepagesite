<!-- SKILLS -->
<section id="skills" class="skills" data-stp-fastscroll-target="skills">
	<h2 style='background-image:url(<?php the_field("skills_title_backimage"); ?>)'>
		<span>
			<?php the_field("skills_title"); ?>
		</span>
	</h2>
	<div class="skills__texts">
		<?php if (have_rows("skills_modules")) : ?>
			<?php while (have_rows("skills_modules")) : the_row(); ?>
				<div>
					<?php the_sub_field("icon_code"); ?>
					<h3>
						<?php the_sub_field("title"); ?>
					</h3>
					<p>
						<?php the_sub_field("text"); ?>
					</p>
				</div>
			<?php endwhile; ?>
		<?php endif; ?>
		<!-- <section class="habilidades__fondo">
			<div class="shape circle"></div>
			<div class="shape triangle"></div>
			<div class="shape polygon"></div>
			<div class="shape rectangle"></div>
		</section> -->
	</div>
</section>