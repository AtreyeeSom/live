import React from 'react'
import {NavDropdown} from "react-bootstrap"
const About = () => {
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
            <li className="nav-item active"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/about">About us</a></li>
            <li className="nav-item"><a href="/visitor">VISITOR</a></li>
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

<section className="banner__slider inr-bnr">
  
    <div className="slidew">
      <div className="slide__img">
        <img src="images/abt-bnr.jpg" alt=""/>
      </div>
     
  </div>

</section>



  <section className="sponsor-area sponsor-2 visitor-area abt-page" >
    <div className="container">
        <div className="row">
          
            <div className="col-md-6">
                <div className="sponsor-content">
                    <h3 className="text-uppercase">about</h3>
                    <h5>GNI Immigration Services</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
                    <a href="#">learn More</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="sponsor-img">
                  <img className="" src="images/about2.jpg" alt=""/>
                  <div className="blu-bx"></div>
                    <div className="bl-grey-bx-left"></div>
                </div>
          </div>
        </div>
    </div>
</section>

  <section className="abt-content">
      <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
            </div>
         </div> 
      </div>
  </section>

  <section className="video-area">
    <div className="container-fluid">
  <div className="row video-hero text-center">
    <div className="col-md-12 mx-auto">
      <img src="images/video-bg2.jpg" className="img-fluid w-100"/>
    <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
      <i className="fa fa-play-circle-o" ></i>
      </a>
    </div>
    <div className="col-md-12 mx-auto">
      <img src="images/video.jpg" className="img-fluid w-100"/>
      <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
        <i className="fa fa-play-circle-o" ></i>
        </a>
    </div>
    <div className="col-md-12 mx-auto">
      <img src="images/video.jpg" className="img-fluid w-100"/>
      <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
        <i className="fa fa-play-circle-o" ></i>
        </a>
    </div>
    <div className="col-md-12 mx-auto">
      <img src="images/video.jpg" className="img-fluid w-100"/>
      <a href="https://youtu.be/6qBTWBd7TGM" data-fancybox="gallery" data-caption="">
        <i className="fa fa-play-circle-o" ></i>
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




{/* <script src="js/jquery.min.js"></script>
 <script src="js/bootstrap.min.js"></script> 
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="js/webslidemenu.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/jquery.fancybox.min.js"></script>
<script src="https://alexandrebuffet.fr/codepen/slider/slick-animation.min.js"></script>
<script src="js/custom.js"></script>
<script>
  AOS.init();
</script>
<script type="text/javascript">

</script> */}
    </div>
  )
}

export default About