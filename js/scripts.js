/*!
 * Start Bootstrap - Freelancer v6.0.3 (https://startbootstrap.com/themes/freelancer)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
 */
(function($) {
	"use strict"; // Start of use strict
  
	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
				scrollTop: (target.offset().top - 71)

			}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
  
	// Scroll to top button appear
	$(document).scroll(function() {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
		$('.scroll-to-top').fadeIn();

		} else {
			$('.scroll-to-top').fadeOut();
		}
	});
  
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll-trigger').click(function() {
		$('.navbar-collapse').collapse('hide');
	});
  
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 80
	});
  
	// Collapse Navbar
	var navbarCollapse = function() {
		if ($("#mainNav").offset().top > 100) {
			$("#mainNav").addClass("navbar-shrink");
			
		} else {
			$("#mainNav").removeClass("navbar-shrink");
		}
	};
	
    // Collapse now if page is not at top
    navbarCollapse();
	
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
	// Floating label headings for the contact form
	$(function() {
		$("body").on("input propertychange", ".floating-label-form-group", function(e) {
			$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
			
		}).on("focus", ".floating-label-form-group", function() {
			$(this).addClass("floating-label-form-group-with-focus");
			
		}).on("blur", ".floating-label-form-group", function() {
			$(this).removeClass("floating-label-form-group-with-focus");
		});
	});
  
	// avatar image manipulation
	var enlarge = true;
	$('#RESIZABLE').on('click', function (){
		if(enlarge){
			
			if(window.innerWidth < 768){
				$(this).animate({
					//top: '-=100px', //100
					width: '20rem',
					opacity: '0%'
				});
				$('#fadeTop').animate({
					//top: '-=60px', //60
					width: '20rem',
					opacity: '100%'
				});
			}else{
				$(this).animate({
					top: '-=100px',
					width: '30rem',
					opacity: '0%'
				});
				$('#fadeTop').animate({
					top: '-=60px',
					width: '30rem',
					opacity: '100%'
				});
			}
			
		}else{
			
			if(window.innerWidth < 768){
				$('#fadeTop').animate({
					//top: '+=60px',
					width: '15rem',
					opacity: '0%'
				});
				$('#RESIZABLE').animate({
					//top: '+=100px',
					width: '15rem',
					opacity: '100%'
				});
				
			}else{
				$('#fadeTop').animate({
					top: '+=60px',
					width: '15rem',
					opacity: '0%'
				});
				$('#RESIZABLE').animate({
					top: '+=100px',
					width: '15rem',
					opacity: '100%'
				});
			}
		}
		
		enlarge = !enlarge;
	});
  
})(jQuery); // End of use strict
  