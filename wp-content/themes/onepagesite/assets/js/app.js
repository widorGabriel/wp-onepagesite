/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/script.js":
/*!*****************************!*\
  !*** ./assets/js/script.js ***!
  \*****************************/
/***/ (() => {

//Constants for menu buttons (used for addEventListener menuResponsive())
var menuIconBtn = document.querySelector('.menu__responsivebtn');
var anchors = document.querySelectorAll('.menu li:not(:first-child)');
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function menuResponsive() {
  if (window.innerWidth <= 700) {
    var menu = document.querySelector('#menu');

    if (menu.className === "menu") {
      menu.className += " menu--responsive";
    } else {
      menu.className = "menu";
    }
  }
} //Sidebar section Changer detecting the window height

/* function currentLink() { */

/* let links = document.querySelectorAll('.menu a');
let currentlink;

for (let i = 0; i < links.length; i++) {
	links[i].classList.remove("currentlink");
} */

/* if(window.innerWidth >= 700) {
			if (window.scrollY >= 0 && window.scrollY <= 1300) {
		currentlink = document.querySelector('.menu__sections a:first-child');
		currentlink.classList.add("currentlink");
	}

	else if (skillsSection.scrollTop <= 0 ) {
		currentlink = document.querySelector('.menu__sections a:nth-child(2)');
		currentlink.classList.add("currentlink");
	}
			else if (window.scrollY >= 2501 && window.scrollY <= 5400) {
		currentlink = document.querySelector('.menu__sections a:nth-child(3)');
		currentlink.classList.add("currentlink");
	}
	else if (window.scrollY >= 5401) {
		currentlink = document.querySelector('.menu__sections a:nth-child(4)');
		currentlink.classList.add("currentlink");
	}
}  */

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

/* } */

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


function showTopButton() {
  var topButton = document.querySelector('.footer__topbtn').classList;

  if (window.scrollY >= 600) {
    topButton.add('footer__topbtn--show');
  } else {
    topButton.remove('footer__topbtn--show');
    return;
  }
} //Listener for activate menuResponsive in menu icon


menuIconBtn.addEventListener('click', function () {
  menuResponsive();
}); //Listener for activate menuResponsive close in all menu links

anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function () {
    menuResponsive();
  });
}); //Listener to detect window scroll

window.onscroll = function () {
  /* 			currentLink();
  			changeColorMenu(); */
  showTopButton();
  /* console.log(skillsSection.scrollTop); */
}; //Listener to detect when user resizes the window


window.onresize = function () {
  /* 	changeColorMenu();
  	currentLink(); */
  showTopButton();
};

/***/ }),

/***/ "./assets/js/startpack.js":
/*!********************************!*\
  !*** ./assets/js/startpack.js ***!
  \********************************/
/***/ (() => {

//////////////////////////////////////////////////////////////////////////////////////
// Fast scroll to
//////////////////////////////////////////////////////////////////////////////////////
function stp_fast_scroll_to(cmd) {
  var id = cmd.attr("data-stp-fastscroll-cmd");
  var target = $("[data-stp-fastscroll-target=" + id + "]");
  var exclusion = $("[data-stp-fastscroll-exclusion=" + id + "]").outerHeight();

  if (exclusion) {//test if exclusion is not null,undefined,NaN,empty string,0,false
  } else {
    exclusion = 0;
  }

  var offset = target.offset();
  offset = offset.top - exclusion;
  $('html,body').animate({
    scrollTop: offset
  }, 500);
}

$(document).ready(function () {
  $("[data-stp-fastscroll-cmd]").on("click", function () {
    stp_fast_scroll_to($(this));
    return false;
  });
}); //////////////////////////////////////////////////////////////////////////////////////
// Autopopup
//////////////////////////////////////////////////////////////////////////////////////

function stp_close_popup(autopopup) {
  autopopup.fadeOut(function () {
    if (autopopup.find("iframe").length > 0) {
      var iframe = autopopup.find("iframe");
      var video = iframe.attr("src");
      iframe.attr("src", "");
      iframe.attr("src", video);
    }
  });
}

function stp_show_popup(id) {
  var popup = $("#" + id);

  if (popup.is(".generated")) {
    popup.fadeIn();
  } else {
    popup.contents().wrapAll("<div class='content_wrapper'>");
    popup.contents().wrapAll("<div class='margin_wrapper'>");
    popup.contents().wrapAll("<div class='vert_wrapper'>");
    popup.contents().wrapAll("<div class='hor_wrapper'>");
    popup.contents().wrapAll("<div class='center_wrapper'>");
    popup.find(".content_wrapper").append("<span class='close cross'><i class='fa fa-times'></i></span>");
    popup.addClass("generated");
    $.event.trigger({
      type: "autopopup_created",
      id_popup: id
    });
    popup.fadeIn();
  }
}

$(document).ready(function () {
  // open by click on command
  $("[data-popup]").on("click", function () {
    var id_popup = $(this).attr("data-popup");
    stp_show_popup(id_popup);
    return false;
  }); // open by test mode

  $(".autopopup.test").each(function () {
    var id_popup = $(this).attr("id");
    stp_show_popup(id_popup);
    return false;
  }); // close by cross

  $("body").on("click", ".autopopup .close", function () {
    stp_close_popup($(this).parents(".autopopup"));
  }); // close by click on black

  $("body").on("click", "[id^='popup_']", function (e) {
    if ($(e.target).is(".autopopup") || $(e.target).is(".vert_wrapper")) {
      stp_close_popup($(this));
    }
  });
}); //////////////////////////////////////////////////////////////////////////////////////
// Lift (when scrolltop is bigger...)
//////////////////////////////////////////////////////////////////////////////////////

function stp_lift_tester() {
  if ($("[data-stp-lift-pusher]").length > 0) {
    var lift_pusher = $("[data-stp-lift-pusher]").outerHeight();
  } else {
    var lift_pusher = 0;
  } // content_lift must have a fixed height to not move when children are moved


  if ($("[data-stp-lift-wrapper]").length > 0 && $(window).scrollTop() > $("[data-stp-lift-wrapper]").offset().top - lift_pusher) {
    $("[data-stp-lift]").addClass("stp-lift-on");
  } else {
    $("[data-stp-lift]").removeClass("stp-lift-on");
  }
}

$(document).ready(function () {
  stp_lift_tester();
});
$(window).on("scroll", function () {
  stp_lift_tester();
}); //////////////////////////////////////////////////////////////////////////////////////
// Parallax
//////////////////////////////////////////////////////////////////////////////////////

function stp_parallax_move() {
  $("[data-stp-parallax]").each(function () {
    // point de scroll au moment ou la zone parallax entre dans la fenêtre par le bas
    var point_0 = $(this).offset().top - $(window).height(); // si ce point d'entrée en négatif (car la zone est trop proche du haut du body), la mettre à

    if (point_0 < 0) {
      point_0 = 0;
    } // point de scroll auquel la zone sort totalement de la fenêtre (par le haut de l'écran)


    var point_100 = $(this).offset().top + $(this).outerHeight(); // scrolltop actuel moins le point de départ afin de ne pas enir compte du scroll inutile

    var scrolltop_rel = $(window).scrollTop() - point_0; // longueur de scroll active. Cad dans laquelle la zone est visible

    var point_100_rel = point_100 - point_0; // convertir le scrolltop (rel) en pourcentage en tenant compte de la longueur visible

    var scrolltop_perc = scrolltop_rel / point_100_rel * 100; // positionner l'image de fond en fonction du pourentage calculé

    if (scrolltop_perc < 0) {
      $(this).css("background-position", "50% 0%");
    } else if (scrolltop_perc >= 0 && scrolltop_perc <= 100) {
      $(this).css("background-position", "50% " + scrolltop_perc + "%");
    } else if (scrolltop_perc > 100) {
      $(this).css("background-position", "50% 100%");
    }
  });
}

$(window).on("load", function () {
  stp_parallax_move();
});
$(window).on("scroll", function () {
  stp_parallax_move();
}); //////////////////////////////////////////////////////////////////////////////////////
// Autoloader
//////////////////////////////////////////////////////////////////////////////////////

function autoloader(cmd) {
  if (cmd == "start") {
    if ($("#autoloader").length == 0) {
      $("body").prepend('<div id="autoloader"><i class="fa fa-spinner fa-spin"></i></div>');
    }

    $("#autoloader").fadeIn();
  } else if (cmd == "stop") {
    $("#autoloader").fadeOut();
  }
} //////////////////////////////////////////////////////////////////////////////////////
// Mobilemenu
//////////////////////////////////////////////////////////////////////////////////////


function stp_show_menu(id) {
  // select the target menu
  var menu = $("[data-stp-menu=" + id + "]");

  if ($("#stp-sidemenu-mask").length > 0) {// stp-sidemenu-mask already created
  } else {
    $("body").prepend("<div id='stp-sidemenu-mask'></div>");
  } // open the menu by a class


  menu.addClass("stp-menu-open"); // Fade IN stp-sidemenu-mask

  $("#stp-sidemenu-mask").fadeIn();
}

function stp_close_menu(menu) {
  // Close the menu by removing a class
  menu.removeClass("stp-menu-open"); // Fade OUT stp-sidemenu-mask

  $("#stp-sidemenu-mask").fadeOut();
}

$(document).ready(function () {
  // Open by button
  $("[data-stp-menu-open]").on("click", function () {
    var id_menu = $(this).attr("data-stp-menu-open");
    stp_show_menu(id_menu);
    return false;
  }); // Close by cross

  $("[data-stp-menu-close]").on("click", function () {
    var menu = $(this).closest("[data-stp-menu]");
    stp_close_menu(menu);
    return false;
  }); // Close by mask click

  $("body").on("click", "#stp-sidemenu-mask", function () {
    var menu = $(".stp-menu-open");
    stp_close_menu(menu);
  });
});

/***/ }),

/***/ "./assets/less/style.less":
/*!********************************!*\
  !*** ./assets/less/style.less ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/app": 0,
/******/ 			"assets/css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/style"], () => (__webpack_require__("./assets/js/startpack.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/style"], () => (__webpack_require__("./assets/js/script.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/style"], () => (__webpack_require__("./assets/less/style.less")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;