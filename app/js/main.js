$(function(){
  

  $('.pets-slider__wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<button type="button" class="btn-slider slick-prev slider-arrows"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow: '<button type="button" class="btn-slider slick-next slider-arrows"><i class="fas fa-long-arrow-alt-right"></i></button>',
    responsive: [
      {
        breakpoint: 1156,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },

      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false
        }
      },


      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    
    ]
   
  });


  
  let headerTop = $("#header-top");
  let info = $("#info");
  let infoH = info.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $("#nav");

  checkScroll(scrollPos, infoH);

  $(window).on("scroll resize", function() {
    infoH = info.innerHeight();
    scrollPos = $(this).scrollTop();
    
    checkScroll(scrollPos, infoH);

  });

  function checkScroll(scrollPos, infoH) {
    if( scrollPos > infoH ) {
      headerTop.addClass("fixed");
      } else {
        headerTop.removeClass("fixed");
      }

  }

  //Smoth scroll //
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");
  

    $("html, body").animate({
      scrollTop: elementOffset - 70

    }), 700;
  });


 



  
});