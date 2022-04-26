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


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
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
            <li className="nav-item"><a href="#">About us</a></li>
            <li className="nav-item"><a href="#">VISITOR</a></li>
            <li className="nav-item"><a href="#">STUDY</a></li>
            
            <NavDropdown title="EXPRESS ENTRY/Work" id="collasible-nav-dropdown"className="nav-item dropdown ll" >
        <NavDropdown.Item href="#action/3.1" className="dropdown-item">LMIA based work permit</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2" className="dropdown-item">Intra company transfer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">International Agreement</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Post graduation work permit</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Federal Skilled worker className</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Federal Skilled Trades Cass</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Canadian Experience className</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Home childcare giver/ Personal Support Worker</NavDropdown.Item>
      </NavDropdown>
            <li className="nav-item"><a href="/sponser">sponsor</a></li>
            <li className="nav-item"><a href="#">BUSINESS </a></li>
            <li className="nav-item"><a href="/pnb">PNP</a></li>
            <li className="nav-item"><a href="#">ASSESSMENT</a></li>
            <li className="nav-item"><a href="#">CITIZENSHIP</a></li>
            <li className="nav-item"><a href="#">BLOG</a></li>
            <li className="nav-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>

<section className="banner__slider">
  

  <div className="slider stick-dots">
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
    <Carousel>
  
  <Carousel.Item>
  
  <img src="./images/banner-new.jpg" alt="" data-lazy="./images/banner-new.jpg" className="full-image animated" data-animation-in="zoomInImage"/>
    <Carousel.Caption>
    <div className="slide__content slide__content__right">
        <div className="slide__content--headings ">
        <h1 className="w3-container w3-center w3-animate-right  animated top-title tess" data-delay-in="0.8">Immigration</h1>
       <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting2 </Animated></h2>
          <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business2</Animated></h3>
          <p  className="w3-container w3-center w3-animate-right  animated text-uppercase temm ">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
        </div>
      </div>

      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="full-image animated"
      src="./images/banner-new.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="slide__content slide__content__right">
        <div className="slide__content--headings ">
        <h1 className="w3-container w3-center w3-animate-right  animated top-title tess" data-delay-in="0.8">Immigration</h1>
       <h2><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Consulting2 </Animated></h2>
          <h3><Animated animationIn="fadeInUp" isVisible={true}className="animated text-uppercase temm">Business2</Animated></h3>
          <p  className="w3-container w3-center w3-animate-right  animated text-uppercase temm ">Aenean imperdiet. Etiam ultricies nisi 
            vel augue. Curabitur ullamcorper...</p>
        </div>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="full-image animated"
      src="./images/banner-new.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3><Animated animationIn="w3-container w3-center w3-animate-bottom tess" isVisible={true}className="animated text-uppercase tess">Business1</Animated></h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
    
  </Carousel.Item>
  
</Carousel>
         
  </div>
  <div className="social-media-links">
    <ul>
      <li><a href="#"><i className="fa-brands fa-facebook-f change"></i></a></li>
      <li><a href="#"><i className="fa-brands fa-instagram change"></i></a></li>
      <li><a href="#"><i className="fa-brands fa-linkedin-in change"></i></a></li>
      <li><a href="#"><i className="fa-brands fa-youtube change"></i></a></li>
     
    </ul>

  </div>
   
</section>



    <section className="know pb-5">
      <div className="container">
        <h2>WE KNOW IMMIGRATION!</h2>
        <p>Looking for professional Canada immigration services? You've come to the right place.</p>
        <div className=""></div>
      </div>
    </section>

  <section className="immagration">
    <div className="container">
      <div className="immagration-slider">
      <Slider {...settings}>
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
        </Slider>
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
    
    <div className="row help-slider">
    <Slider {...settingss}>
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
      </Slider>
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

<section className="video-area">
  <div className="container-fluid">
<div className="row video-slider text-center">
<Slider {...setting}>
  <div className="col-md-12 mx-auto">
    <img src="images/video.jpg" className="img-fluid"/>
    <i className="fa fa-play-circle-o" ></i>
  </div>
  <div className="col-md-12 mx-auto">
    <img src="images/video.jpg" className="img-fluid"/>
    <i className="fa fa-play-circle-o" ></i>
  </div>
  <div className="col-md-12 mx-auto">
    <img src="images/video.jpg" className="img-fluid"/>
    <i className="fa fa-play-circle-o" ></i>
  </div>
  <div className="col-md-12 mx-auto">
    <img src="images/video.jpg" className="img-fluid"/>
    <i className="fa fa-play-circle-o" ></i>
  </div>
  </Slider>
</div>
  </div>
{/*    
        <Slider {...setting}>
       
          <div>
          <img src="images/video.jpg" className="img-fluid w-100"/>
    
          </div>
          <div>
          <img src="images/video.jpg" className="img-fluid w-100"/>
    
          </div>
          <div>
          <img src="images/video.jpg" className="img-fluid w-100"/>
  
          </div>
          <div>
          <img src="images/video.jpg" className="img-fluid w-100"/>
 
          </div>
         
       
        </Slider> */}
        {/* <Carousel>
  <Carousel.Item>
    <img
      className="img-fluid w-100"
      src="images/video.jpg"
    //   alt="First slide"
    />
    <Carousel.Caption>
    <i className="fa fa-play-circle-o" ></i>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid w-100"
      src="images/video.jpg"
    //   alt="Second slide"
    />

    <Carousel.Caption>
    <i className="fa fa-play-circle-o" ></i>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid w-100"
      src="images/video.jpg"
    //   alt="Third slide"
    />

    <Carousel.Caption>
    <i className="fa fa-play-circle-o" ></i>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img-fluid w-100"
      src="images/video.jpg"
    //   alt="Second slide"
    />

    <Carousel.Caption>
    <i className="fa fa-play-circle-o" ></i>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}
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

<section className="blog-area">
  <div className="container">
    <h3 className="text-center text-uppercase">our <span>blog</span></h3>
    <p className="text-center">Lorem ipsum dolor sit amet, consectetuer</p>
    <div className="row mt-5 position-relative">
      <div className="col-md-3">
        <div className="blog-inr text-center">
          <img src="images/blog1.png" alt="blog" className="img-fluid"/>
          <p className="text-uppercase">adipiscing </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="blog-inr text-center">
          <img src="images/blog2.png" alt="blog" className="img-fluid"/>
          <p className="text-uppercase">adipiscing </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="blog-inr text-center">
          <img src="images/blog3.png" alt="blog" className="img-fluid"/>
          <p className="text-uppercase">adipiscing </p>
        </div>
      </div>
      <div className="col-md-3">
        <div className="blog-inr text-center">
          <img src="images/blog4.png" alt="blog" className="img-fluid"/>
          <p className="text-uppercase">adipiscing </p>
        </div>
      </div>
    </div>

    <div className="text-center mt-5">
      <a href="#" className="btn see-all text-uppercase">See all</a>
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





</div>
  )
}

export default Home