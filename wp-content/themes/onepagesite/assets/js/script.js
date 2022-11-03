		//Constants for menu buttons (used for addEventListener menuResponsive())
		const menuIconBtn = document.querySelector('.menu__responsivebtn');
		const anchors = document.querySelectorAll('.menu li:not(:first-child)');
		
		/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
		function menuResponsive() {
			if(window.innerWidth <= 700) {
				let menu = document.querySelector('#menu');
				if (menu.className === "menu") {
					menu.className += " menu--responsive";
				} else {
					menu.className = "menu";
				}
			}
		}
		
		//Sidebar section Changer detecting the window height
		function currentLink() {
			let links = document.querySelectorAll('.menu li');
			let actuallink = null;

			function applyCurrentLink(theLink) {
				let actuallink = document.querySelector(theLink);
				for (let i = 0; i < links.length; i++) {
					links[i].classList.remove("currentlink");
				}
				actuallink.classList.add("currentlink");
			}

			if(window.innerWidth >= 700) {
				if (window.scrollY >= 0 && window.scrollY <= 399) {
					applyCurrentLink('.menu li:nth-child(2)');
				}
				else if (window.scrollY >= 400 && window.scrollY <= 1900) {
					applyCurrentLink('.menu li:nth-child(3)');
				}
				else if (window.scrollY >= 1901 && window.scrollY <= 3399) {
					applyCurrentLink('.menu li:nth-child(4)');
				}
				else if (window.scrollY >= 3400 && window.scrollY <= 6759) {
					applyCurrentLink('.menu li:nth-child(5)');
				}
				/* else if (window.scrollY >= 6800 && window.scrollY <= 9000) { */
				else {
					applyCurrentLink('.menu li:nth-child(6)');
				}
			}
			
			/* else if (window.innerWidth >= 701 && window.innerWidth <= 1149) {

				if (window.scrollY >= 0 && window.scrollY <= 1700) {
					currentlink = document.querySelector('.menu__sections a:first-child');
					currentlink.classList.add("currentlink");
				}
				else if (window.scrollY >= 1701 && window.scrollY <= 3000) {
					currentlink = document.querySelector('.menu__sections a:nth-child(2)');
					currentlink.classList.add("currentlink");
				}
				else if (window.scrollY >= 3001 && window.scrollY <= 6700) {
					currentlink = document.querySelector('.menu__sections a:nth-child(3)');
					currentlink.classList.add("currentlink");
				}
				else if (window.scrollY >= 6701) {
					currentlink = document.querySelector('.menu__sections a:nth-child(4)');
					currentlink.classList.add("currentlink");
				}
			} */

			/* else if (window.innerWidth <= 700) {
				return;
			} */
		}

		/* function changeColorMenu() {
			const element = document.querySelector('.menu').classList;
			if (window.innerWidth >= 700 && window.scrollY >= 600) {
				element.add('menu--dark');
			}
			else {
				element.remove('menu--dark');
				return;
			}
		} */
		
		//Listener for showing to top button
		function showTopButton() {
			const topButton = document.querySelector('.footer__topbtn').classList;
			if(window.scrollY >= 600) {
				topButton.add('footer__topbtn--show');
			} else {
				topButton.remove('footer__topbtn--show');
				return;
			}
		}

		//Listener for activate menuResponsive in menu icon
		menuIconBtn.addEventListener('click', function(){
			menuResponsive();
		});

		//Listener for activate menuResponsive close in all menu links
		anchors.forEach(anchor => {
			anchor.addEventListener('click', () => {
				menuResponsive();
			});
		});

		//Listener to detect window scroll
		window.onscroll = function () {
			currentLink();
			showTopButton();
			console.log(window.scrollY );
		};

		//Listener to detect when user resizes the window
		window.onresize = function () {
			currentLink();
			showTopButton();
		}

		currentLink();
