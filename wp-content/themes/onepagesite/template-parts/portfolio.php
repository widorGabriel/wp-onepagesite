<!-- PORTFOLIO -->
<section id="portfolio" class="portfolio" data-stp-fastscroll-target="portfolio">
	<h2 style='background-image:url(<?php the_field("portfolio_title_backimage"); ?>)'>
		<span>
			<?php the_field("portfolio_title"); ?>
		</span>
	</h2>
	<div class="portfolio__grid">
		<?php if (have_rows("portfolio_item")) : ?>
			<?php while (have_rows("portfolio_item")) : the_row(); ?>
				<div class="portfolio__item">
					<?php
						$link = get_sub_field('link');
						if ($link) : ?>
							<a href="<?php echo esc_url($link); ?>" data-lightbox="portfolio">
						<?php endif; ?>

						<?php if (get_sub_field('image')) : ?>
								<img src="<?php the_sub_field('image'); ?>" alt="">
						<?php endif; ?>
							</a>
				</div>
			<?php endwhile; ?>
		<?php endif; ?>
	</div>
</section>