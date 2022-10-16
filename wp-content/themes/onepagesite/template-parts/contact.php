<!-- CONTACT -->
<section id="contact" class="contact" data-stp-fastscroll-target="contact">
	<h2 style='background-image:url(<?php the_field("contact_title_backimage"); ?>)'>
		<span>
			<?php the_field("contact_title"); ?>
		</span>
	</h2>
	<div class="contact__data">
		<div class="contact__map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.055450982204!2d-100.3801085846589!3d20.585792986239916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344cc768b1e47%3A0xb0d96af5bbc488a3!2sAuditorio%20Josefa%20Ortiz%20de%20Dom%C3%ADnguez!5e0!3m2!1ses!2smx!4v1658454467918!5m2!1ses!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
		<!-- <form class="contact__form" action="">
			<div class="contact__inputs">
				<label>
					<h3>Name*</h3>
					<input type="text" name="name" placeholder="Name" required>
				</label>
				<label>
					<h3>Email*</h3>
					<input type="email" name="email" placeholder="Email" required>
				</label>
				<label>
					<h3>Just a select</h3>
					<select name="select">
						<option value="" selected>Pick an option</option>
						<option value="1">Consectetur adipisicing elit</option>
						<option value="2">Quos deleniti rerum odio</option>
						<option value="3">Praesentium molestias nostrum at facilis</option>
					</select>
				</label>
			</div>
			<label class="contact__message">
				<h3>Message</h3>
				<textarea name="message" id="" cols="30" rows="10" placeholder="Drop a lines"></textarea>
			</label>
			<div class="contact__checkboxes">
				<h3>Some custom checkboxes</h3>

				<label class="contact__checkbox">
					Consectetur adipisicing elit
					<input type="checkbox" checked="checked">
					<span class="checkmark"></span>
				</label>

				<label class="contact__checkbox">
					Aspernatur unde eos modi
					<input type="checkbox">
					<span class="checkmark"></span>
				</label>

				<label class="contact__checkbox">
					Arum quod quos vitae ratione
					<input type="checkbox">
					<span class="checkmark"></span>
				</label>

				<label class="contact__checkbox">
					Quod a eum dignissimos
					<input type="checkbox">
					<span class="checkmark"></span>
				</label>
			</div>
			<div class="contact__checkboxes">
				<h3>Some custom radio buttons</h3>

				<label class="contact__checkbox contact__checkbox--radiobuttons">
					Lorem ipsum dolor
					<input type="radio" checked="checked" name="radio">
					<span class="checkmark"></span>
				</label>

				<label class="contact__checkbox contact__checkbox--radiobuttons">
					Officia velit quasi quos architecto
					<input type="radio" name="radio">
					<span class="checkmark"></span>
				</label>

				<label class="contact__checkbox contact__checkbox--radiobuttons">
					Obcaecati vitae eaque odit
					<input type="radio" name="radio">
					<span class="checkmark"></span>
				</label>

				<label class="contact__checkbox contact__checkbox--radiobuttons">
					Viste non veniam
					<input type="radio" name="radio">
					<span class="checkmark"></span>
				</label>
			</div>
			<input type="submit" value="Send">
		</form> -->
		<?php
			echo do_shortcode('[contact-form-7 id="104" title="Contact form 1"]');
		?>
	</div>
</section>