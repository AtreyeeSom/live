import './slick.min.css';
import './animate.min.css';
import './demo.css';
import $ from 'jquery';
import './slick.min.js';
import './slick-animation.min.js';



$(document).ready(function ($) {
    $('.hero').slick({
      dots: false,
      prevArrow: '<div class="slick-nav prev-arrow"><img src="images/right-arrow.png"></div>',
      nextArrow: '<div class="slick-nav next-arrow"><img src="images/left-arrow.png"></div>',
      infinite: true,
      fade: !0,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed:800,
      draggable: false,
      arrows: true,
      lazyLoad: 'progressive',
      responsive: [
      {
      breakpoint: 1024,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
                }
      },
      {
      breakpoint: 768,
      settings: {
      draggable: true,
                }
      },
      {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      },
      {
      breakpoint: 480,
      settings: {
      slidesToShow: 1,
      draggable: true,
      slidesToScroll: 1
                }
      }
  
                ]
    });
    $('.video-hero').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true,
      prevArrow: <i className="fa-solid fa-circle-chevron-right" aria-hidden="true"></i>,
      nextArrow: <i className="fa-solid fa-circle-chevron-left" aria-hidden="true"></i>,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 1
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 1
          }
      }]
  });
  $('.imma-hero').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: true,
    dots: false,
    prevArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 520,
        settings: {
            slidesToShow: 1
        }
    }]
});
$('.help-hero').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  arrows: true,
  dots: false,
  prevArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
  nextArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
  pauseOnHover: false,
  responsive: [{
      breakpoint: 768,
      settings: {
          slidesToShow: 1
      }
  }, {
      breakpoint: 520,
      settings: {
          slidesToShow: 1
      }
  }]
});
$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });

  $('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});
});	