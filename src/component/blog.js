import React from 'react'
import {NavDropdown} from "react-bootstrap"
const Blog = () => {
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
            <li className="nav-item"><a href="/study">STUDY</a></li>
            
            <NavDropdown title="EXPRESS ENTRY/Work" id="collasible-nav-dropdown"className="nav-item dropdown ll" >
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

<section className="banner__slider inr-bnr">
  
    <div className="slidew">
      <div className="slide__img">
        <img src="images/blog-bnr.png" alt=""/>
      </div>
     
  </div>

</section>



  
  <section className="blog-area bg-white">
    <div className="container">
      <h3 className="text-center text-uppercase">our <span>blog</span></h3>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetuer</p>
     

      <div className="row position-relative">
        <div className="col-lg-4 col-md-12">
          <div className="blog-inr">
            <img src="images/1.jpg" className="img-fluid"/>
            <div className="blog-txt">
              <h6>2nd may , 2022</h6>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
              <a href="/details">Read More</a>
            </div>
          </div>
        </div> 
        <div className="col-lg-4 col-md-12">
          <div className="blog-inr">
            <img src="images/2.jpg" className="img-fluid"/>
            <div className="blog-txt">
              <h6>2nd may , 2022</h6>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
              <a href="/details">Read More</a>
            </div>
          </div>
        </div> 
        <div className="col-lg-4 col-md-12">
          <div className="blog-inr">
            <img src="images/3.jpg" className="img-fluid"/>
            <div className="blog-txt">
              <h6>2nd may , 2022</h6>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
              <a href="/details">Read More</a>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-12">
          <div className="blog-inr">
            <img src="images/4.jpg" className="img-fluid"/>
            <div className="blog-txt">
              <h6>2nd may , 2022</h6>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
              <a href="/details">Read More</a>
            </div>
          </div>
        </div> 
        <div className="col-lg-4 col-md-12">
          <div className="blog-inr">
            <img src="images/5.jpg" className="img-fluid"/>
            <div className="blog-txt">
              <h6>2nd may , 2022</h6>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
              <a href="/details">Read More</a>
            </div>
          </div>
        </div> 
        <div className="col-lg-4 col-md-12">
          <div className="blog-inr">
            <img src="images/6.jpg" className="img-fluid"/>
            <div className="blog-txt">
              <h6>2nd may , 2022</h6>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h4>
              <a href="/details">Read More</a>
            </div>
          </div>
        </div> 
      </div>


     
  
     <div className="text-center mt-5">
        <a href="/details" className="btn see-all text-uppercase">See all</a>
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




<script src="js/jquery.min.js"></script>
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

</script>
</div>
  )
}

export default Blog