import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom'

export const Demo = function() {
    return(
      <header className="hero-text">
  <div className="hero" data-arrows="true" data-autoplay="true">
   

    <div className="hero-slide">
      <img alt="Mars Image" className="img-responsive cover" src="https://raw.githubusercontent.com/solodev/text-animations-slick-slider/master/images/rocket.jpg"></img>
      <div className="header-content text-white position-absolute slide-content col-lg-4">
        <h1 className="mb-4">Be part of the <span className="d-block font-weight-bold">Lunar XPerience</span></h1>
        <a className="btn btn-primary btn-lg w-max mt-2" href="#" tabindex="0">Tour Our Ships</a>
      </div>
    </div>
   

    <div className="hero-slide">
      <img alt="Mars Image" className="img-responsive cover" src="https://raw.githubusercontent.com/solodev/text-animations-slick-slider/master/images/mars-mission.jpg"></img>
      <div className="header-content text-white position-absolute slide-content col-lg-4">
        <h1 className="mb-4">LunarXP Voted Best Mars Mission</h1>
        <p className="font-weight-bold">Inc. magazine today ranked LunarXP as the fastest growing company in the Mars Mission category.</p>
        <a className="btn btn-primary btn-lg w-max mt-2" href="#" tabindex="0">Read More</a>
      </div>
    </div>
  

    <div className="hero-slide">
      <img alt="Mars Image" className="img-responsive cover" src="https://raw.githubusercontent.com/solodev/text-animations-slick-slider/master/images/cosmos.jpg"></img>
      <div className="header-content text-white position-absolute slide-content col-lg-4">
        <p>Our fleet of advanced spacecraft have revolutionized the lunar economy and provided safe travel for thousands of scientists, engineers, technicians, medical staff and civilians. These amazing vessels are also paving the way for reaching Mars in the next decade.</p>
        <a className="btn btn-primary btn-lg w-max mt-2" href="#" tabindex="0">Read More</a>
      </div>
    </div>
  </div>
 
</header>

    )
}