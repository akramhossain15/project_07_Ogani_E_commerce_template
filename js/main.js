// All Departmests toggle jQuery
$(document).ready(function(){
    $("#show-hide").click(function(){
      $("#title").slideToggle(1000);
    })
  })
//  owl-carousel js script 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    animateIn:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// mixitup js


//  scrollTop hide & show js script 
$(document).ready(function(){
   $(window).scroll(function(){
    if ($(this).scrollTop() > 120) {
        $(".scrollTop").fadeIn(1000)
    } else {
        $(".scrollTop").fadeOut(1000)
    }
   })
})



