import React from 'react';
import ReactDOM from 'react-dom/client';
import './BannerScript'
import {Animated} from "react-animated-css"
import "./home.css"
export const BannerSlider = function() {
    return(
        <div>
         <section className="banner__slider">
  <div className="hero" data-arrows="true" data-autoplay="true">
   

    <div className="hero-slide">
      <img alt="Mars Image" className="img-responsive cover" src="./images/banner-new.jpg" data-animation-in="zoomInImage"></img>
      <div className="header-content text-black position-absolute slide-content col-lg-4">
     
        <h2 className="animated top-title tess" data-animation-in="fadeInUp" data-delay-in="0.3">Immigration </h2>
          <h2 className="animated text-uppercase temm" data-animation-in="fadeInUp">Consulting</h2>
          <h3 class="animated temo" data-animation-in="fadeInUp">Business</h3>
          <p data-animation-in="fadeInUp" className='temi'>Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
     
      </div>
    </div>
   

    <div className="hero-slide">
      <img alt="Mars Image" className="img-responsive cover" src="./images/banner-new.jpg" data-animation-in="zoomOutImage"></img>
      <div className="header-content text-black position-absolute slide-content col-lg-4">
      
        <h2 className="animated top-title tess" data-animation-in="fadeInUp" data-delay-in="0.3">Immigration </h2>
          <h2 className="animated text-uppercase temm" data-animation-in="fadeInUp">Consulting</h2>
          <h3 class="animated temo" data-animation-in="fadeInUp">Business</h3>
          <p data-animation-in="fadeInUp" className='temi'>Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
     
      </div>
    </div>
  

    <div className="hero-slide">
      <img alt="Mars Image" className="img-responsive cover" src="./images/banner-new.jpg" data-animation-in="zoomInImage"></img>
      <div className="header-content text-black position-absolute slide-content col-lg-4">
     
        <h2 className="animated top-title tess" data-animation-in="fadeInUp" data-delay-in="0.3">Immigration </h2>
          <h2 className="animated text-uppercase temm" data-animation-in="fadeInUp">Consulting</h2>
          <h3 class="animated temo" data-animation-in="fadeInUp">Business</h3>
          <p data-animation-in="fadeInUp" className='temi'>Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
    
      </div>
    </div>
  </div>
 </section>
        </div>
      
    )
}