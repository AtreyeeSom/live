import React from 'react'
import {NavDropdown} from "react-bootstrap"
const Blog_details = () => {
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

<section class="banner__slider inr-bnr">
  
    <div class="slidew">
      <div class="slide__img">
        <img src="images/blogd-bnr.jpg" alt=""/>
      </div>
     

  </div>

</section>


  <section class="consultants pnp-cnsult blog-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 ">
          <h3 class="text-uppercase">How  Can Reunite & <br/>
            How to Sponsor</h3>
          
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet.
            </p>
          
        </div>
        <div class="col-lg-6 col-md-12 consultants-img p-0">
          <img src="images/blog-details.png" alt="" class="img-fluid"/>
          
        </div>
      </div>
        
    </div>
  </section>
 
  <section class="blog-content">
      <div class="container">
        <h4><i class="fa fa-calendar"></i>April 5, 2022</h4>
        <h3>Getting Approved: Common Law or Canadian Spousal Sponsorshipstt</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/><br/>

         incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
         <h3>3 Tips to Help You Ace Your Canadian Citizenship Test – Our Guide</h3>
        <ul>
            <li><i class="fa fa-circle"></i>Be a permanent resident</li>
            <li><i class="fa fa-circle"></i>Lived in Canada for three out of the last five years</li>
            <li><i class="fa fa-circle"></i>Have filed your taxes</li>
            <li><i class="fa fa-circle"></i>Pass a citizenship test</li>
            <li><i class="fa fa-circle"></i>Prove your language skills</li>
        </ul>
        <h3>LATEST POST</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
      </div>
  </section>

<footer>
  <div class="ftr-1">
    <div class="container">
      <h3 class="text-uppercase text-center">get in touch</h3>
       
      <ul>
        <li><a href="#"><b>Phone:</b> (666) 555-2222</a></li>
        <li><a href="#"><b>Email Id:</b> info@domain.com</a></li>
        <li><a href="#"><b>Address:</b> Adipiscing elit. Nullam tempor NH 03038</a></li>
      </ul>
    </div>
  </div>
  <div class="copy">
    <div class="container">
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

export default Blog_details