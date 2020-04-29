(function ($) {

	new WOW().init();

	$(window).load(function() { 
		$(".loading-container, .bubblingG").delay(100).fadeOut("slow");
	});

	if ( page  == 'home' ) {
		//JQUERY TO COLLAPSE THE NAVBAR ON SCROLL
		$(window).scroll(function() {
			if ($(".navbar").offset().top > 50) {
				$(".navbar-fixed-top").addClass("top-nav-collapse");
			} else {
				$(".navbar-fixed-top").removeClass("top-nav-collapse");
			}
		});
	}

	//JQUERY FOR PAGE SCROLLING FEATURE - REQUIRES JQUERY EASING PLUGIN
	$(function() {
		$('.navbar-nav li a, .page-scroll a, .section-heading a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

    var swiper = new Swiper('.sc-partners-sm', {
        pagination: '.swiper-pagination.sw-sm',
        slidesPerView: 4,
        paginationClickable: true,
        nextButton: '.swiper-button-next.sw-sm',
        prevButton: '.swiper-button-prev.sw-sm',
        spaceBetween: 30
    });

    var swiper = new Swiper('.sc-partners-xs', {
        pagination: '.swiper-pagination.sw-xs',
        slidesPerView: 1,
        paginationClickable: true,
        nextButton: '.swiper-button-next.sw-xs',
        prevButton: '.swiper-button-prev.sw-xs',
        spaceBetween: 30
    });

	$(document).ready(function () {
		// CONTACT US VALIDATION
		$('.js-contact-form__submit').click(function(e) {
			$('.js-contact-form').validate({
			 	rules: {
				    name: "required",
				    email: {
				      required: true,
				      email: true
				    },
				    subject: "required",
				    msg: "required"
			  	},
			 	submitHandler: function(form) {
			 		$('.submit-container').show();
			 		$('.send-message').text('PLEASE WAIT');

					$.post("send-message", $('.js-contact-form').serialize(), function(response) {						
						$('.submit-container').hide();
						$('.send-message').text('SUCCESS');

						setTimeout(function(){
							$('.js-contact-form').trigger("reset")
							$('.send-message').text('SEND MESSAGE');
						}, 3000);
					}).fail(function (response) {
						$('.submit-container').hide();
						$('.send-message').text('ERROR OCCURED');

						setTimeout(function(){
							$('.send-message').text('SEND MESSAGE');
						}, 3000);
					});

			    	return false;
			 	}
			});
		});

		// Start of Tawk.to Script
		var $_Tawk_API={},$_Tawk_LoadStart=new Date();
		(function(){
		var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
		s1.async=true;
		s1.src='https://embed.tawk.to/554f5bd204263f994d103f1e/default';
		s1.charset='UTF-8';
		s1.setAttribute('crossorigin','*');
		s0.parentNode.insertBefore(s1,s0);
		})();
		// End of Tawk.to Script
 	}); 
})(jQuery);
