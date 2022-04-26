import './bootstrap.min.css';
import './slick.min.css';
import './animate.min.css';
import './demo.css';
import $ from 'jquery';
import './slick.min.js';
import './slick-animation.min.js';


$(document).ready(function ($) {
    $('.slider').slick({
      dots: true,
      infinite: true,
      fade: !0,
      cssEase: 'linear',
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 800,
      lazyLoad: 'progressive',
      draggable: false,
      arrows: false,
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
});	