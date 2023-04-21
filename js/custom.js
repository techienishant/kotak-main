$(document).ready(function(){
		$('.my-sidenav>ul>li').click(function(){
			$(this).children('ul').slideToggle();
			$(this).toggleClass('arrow-class');
			$(this).siblings('li').children('ul').slideUp();
			$(this).siblings('li').removeClass('arrow-class');
			
		});
		

		
		$('.ham-icon').click(function(){
			/*$(this).css('display', 'none');*/
			$('.my-sidenav').css('max-width', '380px');
			
		});
		$('.cross-btn').click(function(){
			$('.my-sidenav').css('max-width', '0px');
			
			/*$('.ham-nav').css('display', 'block');*/
		});
		
		$(".menu-icon").on("click", function() {
                  $("nav").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
		
		
	});
	
	
		$('.my-carousel.owl-carousel').owlCarousel({
		loop:true,
		nav:true,
		navText:"",
		autoplay:false,
		responsiveClass:true,
		dots:false,
		autoplayTimeout:3000,
		smartSpeed: 1000,
		touchDrag:true,
		mouseDrag:false,
		items:1

	});