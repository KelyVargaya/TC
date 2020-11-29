(function ($) {
    "use strict";
  
    $(".btn-experiencia").bind("click", function () {
        $(this).text($(this).text() == "Resumen de experiencia" ? "Cerrar" : "Resumen de experiencia");
        $(this).prev().slideToggle();
      if ( $(this).hasClass('btn-close') ) {
        $(this).removeClass('btn-close');
    } else {
        $(this).addClass('btn-close');    
    }
    });

    $(".btn-competencia").bind("click", function () {
        $(this).text($(this).text() == "Competencias técnicas" ? "Cerrar" : "Competencias técnicas");
        $(this).prev().slideToggle();
        if ( $(this).hasClass('btn-close') ) {
            $(this).removeClass('btn-close');
      } else {
        $(this).addClass('btn-close');    
      }
      });

      new WOW().init();

    /*****  Carousel expertos ***/
      $('.expertos-carousel').owlCarousel({
        autoplay: true,
        dots: true,
        items: 2,
           autoplayTimeout: 18000,
        loop:true,
        margin: 30,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            },
            1300:{
                items:4,
            }
        }
    })

})(jQuery);