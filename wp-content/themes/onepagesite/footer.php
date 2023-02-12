		<!-- FOOTER -->
		<footer class="footer">

			<?php the_field("copyright_privacy_texts", "options"); ?>

			<div class="footer__socialmedia">
				<?php if (have_rows("social_media_links", "options")) : ?>
					<?php while (have_rows("social_media_links", "options")) : the_row(); ?>

						<?php
						$facebook = get_sub_field("facebook");
						$twitter = get_sub_field("twitter");
						$instagram = get_sub_field("instagram");
						$github = get_sub_field("github");
						?>

						<?php if ($facebook) : ?>
							<a href="<?php echo $facebook; ?>" target="_blank">
								<i class="fa-brands fa-facebook-f"></i>
							</a>
						<?php endif; ?>

						<?php if ($twitter) : ?>
							<a href="<?php echo $twitter; ?>" target="_blank">
								<i class="fa-brands fa-twitter"></i>
							</a>
						<?php endif; ?>

						<?php if ($instagram) : ?>
							<a href="<?php echo $instagram; ?>" target="_blank">
								<i class="fa-brands fa-instagram"></i>
							</a>
						<?php endif; ?>

						<?php if ($github) : ?>
							<a href="<?php echo $github; ?>" target="_blank">
								<i class="fa-brands fa-github"></i>
							</a>
						<?php endif; ?>

					<?php endwhile; ?>
				<?php endif; ?>
			</div>

			<?php
			/*Variable used for address*/
			$address = get_field("email_link", "options");
			if ($address) : ?>
				<a class="footer__emaillink" href="<?php echo 'mailto:'. $address ; ?>" target="_blank">
					<?php the_field("email_link", "options"); ?>
				</a>
			<?php endif; ?>

			<a class="footer__topbtn" href="" data-stp-fastscroll-cmd="top">
				<i class="fa-sharp fa-solid fa-arrow-up"></i>
			</a>
		</footer>
		</div>
		<?php wp_footer(); ?>

		<!-- SCRIPTS-->
		<script src="<?php echo get_stylesheet_directory_uri() . '/assets/js/lightbox.js'; ?>"></script>
		<script>
			lightbox.option({
				'wrapAround': true,
				'albumLabel': "Image %1 of %2"
			});

			/* window.onscroll = function() {
				const element = document.getElementById("skills");
				let position = element.scrollHeight;
				alert(position)
			}; */
		</script>
		</body>

		</html>