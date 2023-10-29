

 
 //-------mixitup area------//

 var mixer = mixitup('.gallery');
	
	var container = document.querySelector('.gallery');
	var mixer = mixitup(container,{
	      selectors:{control:'[data-mixitup-control]'}
	})
	
	
	
//----------top------------//
   
$('.top').click(function(){
   $("html, body").animate({
      scrollTop:0
	},3000);
	
});

 $('.top').hide();
$(window).scroll(function(){
  var ourWindow = $(this).scrollTop();
  

  if(ourWindow<500){
      $('.top').fadeOut();
  }
  else{
    $('.top').fadeIn();
  }
});
 new WOW().init();
 
   //-------nav-scroll-time------//
	 
	$('.navbar-nav a[href^="#"]').click(function(e){
	    e.preventDefault();
		
		var target = this.hash;
		$('html, body').animate({
		   scrollTop: $(target).offset().top
		}, 2000);
	});
	
	
//----------testimonial------------//
  
  $('.owl-carousel-testimonial').owlCarousel({
    loop:true,
	margin:10,
	nav:false,
	responsive:{
	  0:{
	      items:1
	  },
	  600:{
	      items:1
	  },
	  1000:{
	      items:1
	  },

	}
 });	 

 //----------team------------//
  
  $('.owl-carousel-team').owlCarousel({
    loop:true,
	autoplay:true,
    margin:20,
	nav:true,
	responsive:{
	  0:{
	      items:1
	  },
	  600:{
	      items:2
	  },
	  1000:{
	      items:3
	  },

	}
 });
  



  //----------menu fixed------------//
 
$(window).scroll(function(){
  var ourWindow = $(this).scrollTop();
  
  
  if(ourWindow>100){
      $('body').addClass('fixed');
  }
  else{
    $('body').removeClass('fixed');
  }
});


//---menu active---//

 $('.navbar-nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
 });

