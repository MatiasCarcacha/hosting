/*
 * Copyright (c) 2022 CoddyThemes
 * Author: CoddyThemes
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	oneo_tm_anchor();
	oneo_tm_down();
	oneo_tm_imgtosvg();
	oneo_tm_data_images();
	oneo_tm_animate_text();
	oneo_tm_jarallax();
	oneo_popup();
	oneo_tm_projects();
	oneo_tm_isotope();
	oneo_tm_partners();
	oneo_tm_location();
	oneo_tm_totop();
	oneo_tm_nav_bg();
	oneo_hero_effect();
	oneo_tm_kenburn_slider();
	oneo_tm_ripple();
	oneo_tm_videoplayer();
	morocco_music();
	oneo_tm_about_animation();
	
	
	jQuery(window).on('resize',function(){
		oneo_tm_isotope();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.oneo_tm_preloader').addClass('loaded');
    }, 1000);
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function oneo_tm_anchor(){
	
	"use strict";
	
	jQuery('.oneo_tm_first_menu .inner .menu ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-213
			}, 1000);
		}
		return false;
	});
	
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function oneo_tm_down(){
	
	"use strict";
	
	jQuery('.oneo_tm_arrow_wrap a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-225
			}, 1000);
		}
		return false;
	});
	jQuery('.oneo_tm_arrow_wrap_second a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-220
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function oneo_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function oneo_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function oneo_tm_animate_text(){
	
	"use strict";
	
	var animateSpan1			= jQuery('.oneo_tm_animation_text_word');
	
		animateSpan1.typed({
			strings: ["Freelancer", "Web Developer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
	
	var animateSpan2			= jQuery('.oneo_tm_animation_text_word2');
	
		animateSpan2.typed({
			strings: ["Alexander", "Freelancer", "Developer", "Photographer"],
			loop: true,
			startDelay: 1e3,
			backDelay: 2e3
		});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function oneo_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function oneo_popup(){
		"use strict";
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
	}


// -----------------------------------------------------
// --------------------   SKILLS    --------------------
// -----------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function(i) {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');},(i*300));
	});
}

	jQuery('.oneo_progress').each(function() {

		"use strict";

		var pWrap 			= jQuery(this);
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});

function oneo_tm_projects() {
	
	"use strict";
	
	jQuery('.oneo_tm_portfolio_animation_wrap').each(function() {
		jQuery(this).on('mouseenter', function() {
			if (jQuery(this).data('title')) {
				jQuery('.oneo_tm_portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
				jQuery('.oneo_tm_portfolio_titles').addClass('visible');
			}

			jQuery(document).on('mousemove', function(e) {
				jQuery('.oneo_tm_portfolio_titles').css({
					left: e.clientX - 10,
					top: e.clientY + 25
				});
			});
		}).on('mouseleave', function() {
			jQuery('.oneo_tm_portfolio_titles').removeClass('visible');
		});
	});
}


// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function oneo_tm_isotope(){
	
	"use strict";
	
	jQuery('.masonry').isotope({
		itemSelector: '.masonry_item',
		masonry: {
			
		}
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function oneo_tm_partners(){
	
	"use strict";
	
		var carousel1			= jQuery('.oneo_tm_partners .owl-carousel');
		carousel1.owlCarousel({
				loop: true,
				items: 4,
				lazyLoad: true,
				margin: 40,
				autoplay: true,
				autoplayTimeout: 4000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:4},
					1600:{items:4},
					1920:{items:4}
				}
		});
	
		var carousel2			= jQuery('.oneo_tm_portfolio_testimonial .owl-carousel');
		carousel2.owlCarousel({
				loop: true,
				items: 3,
				margin: 50,
				lazyLoad: true,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
						0:{items:1},
						480:{items:1},
						768:{items:2},
						1040:{items:3},
						1200:{items:3},
						1600:{items:3},
						1920:{items:3}
					}
		});
	
		var carousel4			= jQuery('.oneo_tm_service_second .owl-carousel');
		carousel4.owlCarousel({
				loop: true,
				items: 3,
				lazyLoad: true,
				margin: 50,
				autoplay: true,
				autoplayTimeout: 5000,
				smartSpeed: 2000,
				dots: true,
				nav: false,
				navSpeed: true,
				responsive:{
					0:{items:1},
					480:{items:2},
					768:{items:3},
					1040:{items:3},
					1200:{items:3},
					1600:{items:3},
					1920:{items:3}
				}
		});
		oneo_tm_imgtosvg();
	}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function oneo_tm_location(){
		var button		= jQuery('.href_location');
		button.on('click',function(){
			var element		= jQuery(this);
			var address		= element.text();
			address			= address.replace(/\ /g,'+');
			var text		= 'https://maps.google.com?q=';
			window.open(text+address);
			return false;
		});
	}


// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function oneo_tm_totop(){
	
	"use strict";
	
	jQuery(".oneo_tm_footer .footer_inner .top a").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}

// -----------------------------------------------------
// ------------------    NAV BG SCROLL    --------------
// -----------------------------------------------------

function oneo_tm_nav_bg(){
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.oneo_tm_first_menu');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// -----------------------------------------------------
// --------------------    HERO EFFECT    --------------
// -----------------------------------------------------

function oneo_hero_effect(){
		
	jQuery(window).on('scroll',function(){
		var WinScroll			= jQuery(window).scrollTop();
		var text				= jQuery(".oneo_tm_third_hero .hero_texts");
		var currentScroll		= window.pageYOffset;
		text.css({'opacity' : (1 - (currentScroll/20) / 15)});
		
		if(WinScroll >= 400){
			text.addClass('changed');
		}else{
			text.removeClass('changed');
		}
	});
	
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function oneo_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.oneo_tm_first_hero .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/1.jpg' },
				{ src: 'img/slider/2.jpg' },
				{ src: 'img/slider/5.jpg' },
			]

		});
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function oneo_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function oneo_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// ---------------------    AUDIO   --------------------
// -----------------------------------------------------

jQuery('body.music').append('<audio loop autoplay volume="0" id="audio-player"><source src="audio/2.mp3" type="audio/mpeg"></audio>');
    var audio2 = jQuery("#audio-player");
    audio2.volume = 0.2;

function morocco_music(){
	
	"use strict";
      jQuery('.morocco_music').css({'visibility':'visible'});
      jQuery('body').addClass("audio-on");
      if (jQuery('body').hasClass('audio-off')) {
        jQuery('body').removeClass('audio-on');
      } 
      jQuery(".morocco_music").on('click', function() {
          jQuery('body').toggleClass("audio-on audio-off");         
          if (jQuery('body').hasClass('audio-off')) {
            audio2[0].pause();
          } 
          if (jQuery('body').hasClass('audio-on')) {
            audio2[0].play();
          }
      });

}


// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

	function oneo_tm_about_animation(){
		
		"use strict";
		
		if ($('.parallax').length > 0) { 
		  var scene = $('.parallax').get(0);
		  var parallax = new Parallax(scene, { 
			relativeInput: true,
			onReady: function() { console.log('ready!');
		  } });
		}
	}
