import React,{useEffect, useState} from 'react'
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from 'react-bootstrap'
import './home.css'
import {Animated} from "react-animated-css"
import {NavDropdown} from "react-bootstrap"
import Slider from "react-slick";
import { BannerSlider } from './BannerSlider';
import "./animate.css"



const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      }; 
      const settingss = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      }; 
      const setting = {
        dots: true,
        autoplay:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
       
      };
      // const [currentSlide,setCurrentSlide]=useState(0)
      useEffect(() => {
       /// jquery
      }, [])
      // const handleClick=()=>{
      //   const slide=currentSlide +1;
      //   setCurrentSlide(slide);
      //   console.log(slide);
      // }
    
  return (
    <div> 
      <header>
    <div className="container">
      <div className="page-wrapper">
       <div className="nav-wrapper">
        <nav className="navbar">
          <img src="./images/logo.png" alt="Company Logo"/>
          <div className="menu-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className="nav no-search">
            <li className="nav-item active"><a href="#">Home</a></li>
            <li className="nav-item"><a href="/about">About us</a></li>
            <li className="nav-item"><a href="/visitor">VISITOR</a></li>
            <li className="nav-item"><a href="/study">STUDY</a></li>
            
            <NavDropdown title="EXPRESS ENTRY/Work" id="collasible-nav-dropdown"className="nav-item dropdown" >
        <NavDropdown.Item href="/work" className="dropdown-item">LMIA based work permit</NavDropdown.Item>
        <NavDropdown.Item href="/intra" className="dropdown-item">Intra company transfer</NavDropdown.Item>
        <NavDropdown.Item href="/international" className="dropdown-item">International Agreement</NavDropdown.Item>
        <NavDropdown.Item href="/permit" className="dropdown-item">Post graduation work permit</NavDropdown.Item>
        <NavDropdown.Item href="/works" className="dropdown-item">Federal Skilled worker className</NavDropdown.Item>
        <NavDropdown.Item href="/trades" className="dropdown-item">Federal Skilled Trades Cass</NavDropdown.Item>
        <NavDropdown.Item href="/canadian" className="dropdown-item">Canadian Experience className</NavDropdown.Item>
        <NavDropdown.Item href="/child" className="dropdown-item">Home childcare giver/ Personal Support Worker</NavDropdown.Item>
      </NavDropdown>
            <li className="nav-item"><a href="/sponser">sponsor</a></li>
            <li className="nav-item"><a href="/business">BUSINESS </a></li>
            <li className="nav-item"><a href="/pnb">PNP</a></li>
            <li className="nav-item"><a href="/assesment">ASSESSMENT</a></li>
            <li className="nav-item"><a href="/citizenship">CITIZENSHIP</a></li>
            <li className="nav-item"><a href="/blog">BLOG</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>


  <BannerSlider/>
  {/* <Slider {...setting}>
    
    <div className="slide">
   
     <div className="slide__img">
     
        <img src="./images/banner-new.jpg" alt="" data-lazy="./images/banner-new.jpg" className="full-image animated" data-animation-in="zoomInImage"/>
      </div>
      <div className="slide__content slide__content__right ">
        <div className="slide__content--headings ">
        <article> <Animated animationIn="w3-container w3-center w3-animate-left  animated top-title tess" isVisible={true}className="animated top-title tess" data-delay-in="0.8">Immigration</Animated></article>
        
       <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting1 </Animated></h2>
          <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business1</Animated></h3>
          <p><Animated animationIn="w3-container w3-center w3-animate-left" isVisible={true}className="animated text-uppercase temm">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</Animated></p>
          
        </div>
        <i className="fa-solid fa-arrow-right-long"></i>
      </div>
      
    </div>
    <div className="slide">
      <div className="slide__img">
        <img src="./images/banner-new.jpg" alt="" data-lazy="./images/banner-new.jpg" className="full-image animated" data-animation-in="zoomOutImage" data-delay-in="2.9"/>
      </div>
      <div className="slide__content slide__content__right">
        <div className="slide__content--headings ">
        <h1 className="w3-container w3-center w3-animate-right  animated top-title tess" data-delay-in="0.8">Immigration</h1>
       <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting2 </Animated></h2>
          <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business2</Animated></h3>
          <p  className="w3-container w3-center w3-animate-right  animated text-uppercase temm ">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
        </div>
      </div>
    </div>
    <div className="slide">
      <div className="slide__img">
        <img src="./images/banner-new.jpg" alt="" data-lazy="./images/banner-new.jpg" className="full-image animated" data-animation-in="zoomInImage" data-delay-in="4.0"/>
      </div>
      <div className="slide__content slide__content__right">
        <div className="slide__content--headings">
        <h1 className="w3-container w3-center w3-animate-left  animated top-title tess" data-delay-in="0.8">Immigration</h1>
       <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting3 </Animated></h2>
          <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business</Animated></h3>
          <p className="w3-container w3-center w3-animate-left animated text-uppercase temm">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
        </div>
      </div>
    </div>
    </Slider> */}

         




    <section className="know pb-5">
      <div className="container">
        <h2>WE KNOW IMMIGRATION!</h2>
        <p>Looking for professional Canada immigration services? You've come to the right place.</p>
        <div className=""></div>
      </div>
    </section>

  <section className="immagration">
 
    <div className="container">
    
      <div className="imma-hero">
      <div>
          <div  className="slide-img">
          <img src="./images/ima-slide.jpg"/>
          <p>Online immigration assessment</p>
          </div>
        </div>
        <div>
          <div  className="slide-img">
          <img src="./images/slide2.jpg"/>
          <p>Talk to our immigration experts</p>
          </div>
        </div>
        <div>
          <div  className="slide-img">
          <img src="./images/slide3.jpg"/>
          <p>Pay the consultation fee<br/> online</p>
          </div>
        </div>
        <div>
          <div  className="slide-img">
          <img src="./images/slide4.jpg"/>
          <p>Start your immigration<br/> process</p>
          </div>
        </div>
        <div>
          <div  className="slide-img">
          <img src="./images/slide2.jpg"/>
          <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        
      </div>
    </div>
  </section>

  <section className="consultants">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-uppercase">Immigration Consultants</h2>
          <h3 className="text-uppercase">in Busines</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
          <a href="#">learn more</a>
        </div>
        <div className="col-md-6 consultants-img p-0">
          <img  src="./images/about.jpg" alt="" className="img-fluid"/>
        </div>
      </div>
    </div>
  </section>

<section className="step">
  <div className="container">
    <h3 className="text-center text-uppercase">FILL OUT OUR FREE ASSESSMENT</h3>
      <h2 className="text-center text-uppercase">TO GET STARTED</h2>
      <p className="text-center">It’s easy to get started with our immigration process. In only three steps you will be well on your way!</p>
      <div className="row mt-5">
        <div className="col-lg-8 col-sm-12 col-12 mx-auto">
          <div className="row">
            <div className="col-md-4">
              <div className="steps text-center">
                <img src="images/employ.png" className="img-fluid"/>
                <h3 className="text-capitalize">step 1</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="steps gray text-center">
                <img src="images/calendar.png" className="img-fluid"/>
                <h3 className="text-capitalize">step 2</h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="steps text-center">
                <img src="images/approved.png" className="img-fluid"/>
                <h3 className="text-capitalize">step 3</h3>
              </div>
            </div>
          </div>
        </div>
       <div className="col-md-12 mx-auto mt-5">
         <div className="row step-line">
           <div className="col-md-4 text-center">
             <img src="images/next.png" className="img-fluid"/>
           <p>Lorem ipsum dolor sit amet, <br/> 
            consectetuer </p>
           </div>
           <div className="col-md-4 text-center">
            <img src="images/next.png" className="img-fluid"/>
          <p>Lorem ipsum dolor sit amet, <br/> 
           consectetuer </p>
          </div>
          <div className="col-md-4 text-center">
            <img src="images/next.png" className="img-fluid"/>
          <p>Lorem ipsum dolor sit amet,<br/> 
           consectetuer </p>
          </div>
           
         </div>
       </div>
      </div>
  </div>

</section>

<section className="apply-area">
  <div className="container">
    <div className="row">
      <div className="col-md-8 mx-auto">
        <h3 className="text-uppercase text-center">apply<span> Now</span></h3>
        <p className="text-center">Your immigration to Canada is just a click away. There is an immigration program for everyone.</p>
        <form className="mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" placeholder="first name" className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" placeholder="last name" className="form-control"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <select className="form-control" >
                  <option>matrial status</option>
                  <option>single</option>
                  <option>married</option>
                
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <select className="form-control" >
                  <option>select age</option>
                  <option>single</option>
                  <option>married</option>
                
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <select className="form-control" >
                  <option>select education</option>
                  <option>1</option>
                  <option>2</option>
                
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <select className="form-control" >
                  <option>level of english</option>
                  <option>1</option>
                  <option>1</option>
                
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input type="email" placeholder="email address" className="form-control"/>
              </div>
            </div>
          <div className="col-md-6">
            <div className="form-group">
              <select className="form-control" >
                <option>work experience</option>
                <option>1</option>
                <option>1</option>
              
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <select className="form-control" >
                <option>country</option>
                <option>1</option>
                <option>1</option>
              
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="number" placeholder="Phone Number" className="form-control"/>
            </div>
          </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<section className="help-area">
  <div className="container">
 
    <h3 className="text-center text-uppercase">how can <span>i help you</span></h3>
    <p className="text-center">Lorem ipsum dolor sit amet, consectetuer </p>
    
    <div className="row help-hero">
    
        <div  className="slide-img text-center">
        <img  className="sli  text-center" src= {"images/help1.jpg"}/>
          <p className="text-uppercase">I WANT A WORK PERMIT</p>
          </div>
        <div  className="slide-img text-center">
        <img  className="sli  text-center" src= {"images/help2.jpg"}/>
          <p className="text-uppercase text">I WANT to immigrate</p>
          </div>
        <div  className="slide-img text-center">
        <img  className="sli text-center" src= {"images/help3.jpg"}/>
          <p className="text-uppercase">I WANT to study</p>
          </div>
        <div  className="slide-img text-center">
        <img  className="sli text-center" src= {"images/help2.jpg"}/>
          <p className="text-uppercase">I WANT to study</p>
          </div>
     
    </div>
  
  </div>
   {/* <div className='container-fluid' >      
            <div className="row title" style={{marginBottom: "20px"}} >      
            <div className="col-sm-12 btn btn-info">      
           
            </div>      
            </div>  
        </div>  
        <div className='container-fluid' >   
        <h3 className="text-center text-uppercase">how can <span>i help you</span></h3>
    <p className="text-center">Lorem ipsum dolor sit amet, consectetuer </p>
          <OwlCarousel items={3} margin={4} autoplay ={true} >  
        <div ><img  className="slide-img text-center" src= {"images/help1.jpg"}/></div>  
           <div><img  className="slide-img text-center" src= {"images/help2.jpg"}/></div>  
           <div><img  className="slide-img text-center" src= {"images/help3.jpg"}/></div>  
           <div><img  className="slide-img text-center" src= {"images/help2.jpg"}/></div>  
          
      </OwlCarousel>  
      </div>   */}
</section>

<section class="video-area">
  <div class="container-fluid">
<div class="row video-hero text-center">
  <div class="col-md-12 mx-auto">
    <img src="images/video.jpg" class="img-fluid w-100" />
  <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
    <i class="fa fa-play-circle-o " ></i>
    </a>
  </div>
  <div class="col-md-12 mx-auto">
    <img src="images/video.jpg" class="img-fluid w-100"/>
    <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
      <i class="fa fa-play-circle-o" ></i>
      </a>
  </div>
  <div class="col-md-12 mx-auto">
    <img src="images/video.jpg" class="img-fluid w-100"/>
    <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
      <i class="fa fa-play-circle-o " ></i>
      </a>
  </div>
  <div class="col-md-12 mx-auto">
    <img src="images/video.jpg" class="img-fluid w-100"/>
    <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
      <i className="fa fa-play-circle-o " ></i>
      </a>
  </div>
</div>
  </div>
</section>



<section className="membership">
  <div className="container">
    <h3 className="text-center text-uppercase">membership</h3>
    <p className="text-center text-uppercase">Organizations & Affiliations</p>
    <div className="row mt-5">
      <div className="col-md-1"></div>
      <div className="col-md-2">
        <img src="images/member1.png" alt="member" className="img-fluid"/>
      </div>
      <div className="col-md-2">
        <img src="images/member2.png" alt="member" className="img-fluid"/>
      </div>
      <div className="col-md-2">
        <img src="images/member3.png" alt="member" className="img-fluid"/>
      </div>
      <div className="col-md-2">
        <img src="images/member4.png" alt="member" className="img-fluid"/>
      </div>
      <div className="col-md-2">
        <img src="images/member5.png" alt="member" className="img-fluid"/>
      </div>
      <div className="col-md-1"></div>
      </div>
    </div>
  
</section>

<section class="blog-area">
  <div class="container">
    <h3 class="text-center text-uppercase">our <span>blog</span></h3>
    <p class="text-center">Lorem ipsum dolor sit amet, consectetuer</p>
   

    <div class="row position-relative">
      <div class="col-lg-4 col-md-12">
        <div class="blog-inr">
          <img src="images/1.jpg" class="img-fluid"/>
          <div class="blog-txt">
            <h6>2nd may , 2022</h6>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
            <a href="/details">Read More</a>
          </div>
        </div>
      </div> 
      <div class="col-lg-4 col-md-12">
        <div class="blog-inr">
          <img src="images/2.jpg" class="img-fluid"/>
          <div class="blog-txt">
            <h6>2nd may , 2022</h6>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
            <a href="/details">Read More</a>
          </div>
        </div>
      </div> 
      <div class="col-lg-4 col-md-12">
        <div class="blog-inr">
          <img src="images/3.jpg" class="img-fluid"/>
          <div class="blog-txt">
            <h6>2nd may , 2022</h6>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
            <a href="/details">Read More</a>
          </div>
        </div>
      </div>
      
    </div>


    <div class="text-center mt-5">
      <a href="/details" class="btn see-all text-uppercase">See all</a>
    </div>
  </div>
</section>

<footer>
  <div className="ftr-1">
    <div className="container">
      <h3 className="text-uppercase text-center">get in touch</h3>
       
      <ul>
        <li><a href="#"><b>Phone:</b> (666) 555-2222</a></li>
        <li><a href="#"><b>Email Id:</b> info@domain.com</a></li>
        <li><a href="#"><b>Address:</b> Adipiscing elit. Nullam tempor NH 03038</a></li>
      </ul>
    </div>
  </div>
  <div className="copy">
    <div className="container">
      <p>Copyright © 2022 domain.com</p>
    </div>
  </div>
</footer>

<script src="https://alexandrebuffet.fr/codepen/slider/slick-animation.min.js"></script>



</div>
  )
}

export default Home