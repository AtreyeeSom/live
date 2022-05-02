import React from 'react'
import {NavDropdown} from "react-bootstrap"
const Sponser = () => {
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
            {/* <li className="nav-item dropdown"><a href="#" className="dropdown-toggle" id="navbardrop" data-toggle="dropdown">EXPRESS ENTRY/Work</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/LMIA based work permit">LMIA based work permit</a>
                <a className="dropdown-item" href="/Intra company transfer">Intra company transfer</a>
                <a className="dropdown-item" href="/International Agreement">International Agreement</a>
                <a className="dropdown-item" href="/Post graduation work permit">Post graduation work permit</a>
                <a className="dropdown-item" href="/Federal Skilled worker className">Federal Skilled worker class</a>
                <a className="dropdown-item" href="/Federal Skilled Trades Cass">Federal Skilled Trades Cass</a>
                <a className="dropdown-item" href="/Canadian Experience className">Canadian Experience class</a>
                <a className="dropdown-item" href="#">Home childcare giver/ Personal Support Worker</a>
              </div>
               
            </li> */}
            <NavDropdown title="EXPRESS ENTRY/Work" id="collasible-nav-dropdown"className="nav-item dropdown ll" >
        <NavDropdown.Item href="/work" className="dropdown-item">LMIA based work permit</NavDropdown.Item>
        <NavDropdown.Item href="intra" className="dropdown-item">Intra company transfer</NavDropdown.Item>
        <NavDropdown.Item href="/international" className="dropdown-item">International Agreement</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Post graduation work permit</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Federal Skilled worker class</NavDropdown.Item>
        <NavDropdown.Item href="/trades" className="dropdown-item">Federal Skilled Trades Cass</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Canadian Experience class</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3" className="dropdown-item">Home childcare giver/ Personal Support Worker</NavDropdown.Item>
      </NavDropdown>
            <li className="nav-item"><a href="/sponser">sponsor</a></li>
            <li className="nav-item"><a href="/business">BUSINESS </a></li>
            <li className="nav-item"><a href="/pnb">PNP</a></li>
            <li className="nav-item"><a href="#">ASSESSMENT</a></li>
            <li className="nav-item"><a href="/citizenship">CITIZENSHIP</a></li>
            <li className="nav-item"><a href="/blog">BLOG</a></li>
            <li className="nav-item"><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>

<section className="banner__slider">
  
    <div className="slidew">
      <div className="slide__img">
        <img src="images/sponsor-bnr.jpg" className="img-fluid"/>
      </div>
  </div>
</section>


<section className="sponsor-area sponsor-3 bg-cream">
    <div className="container">
        <div className="row">
          <div className="col-md-6">
                <div className="sponsor-content">
                    <h3 className="text-uppercase">family</h3>
                    <h5>Lorem ipsum dolor sit ame</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
                    <a href="#">Get in Touch</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="sponsor-img">
                  <img  src="images/sponsor1.jpg" alt="" className="img-fluid"/>
                  <div className="blu-bx"></div>
                    <div className="bl-grey-bx-left"></div>
                </div>
          </div>
        </div>
    </div>
</section>

<section className="sponsor-area bg-cream">
    <div className="container">
        <div className="row sponsor-row">
            <div className="col-md-6 p-0">
              <div className="sponsor-img">
                <img  src="images/sponsor2.jpg" alt="" className="img-fluid"/>
                <div className="blu-bx-right"></div>
                  <div className="bl-grey-bx-right"></div>
              </div>
        </div>
            <div className="col-md-6">
                <div className="sponsor-content">
                    <h3 className="text-uppercase">spouse and</h3>
                    <h4 className="text-uppercase">children</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
                    <a href="#">Get in Touch</a>
                </div>
            </div>
           
        </div>
    </div>
</section>

<section className="sponsor-area sponsor-2 bg-cream">
    <div className="container">
        <div className="row">
          
            <div className="col-md-6">
                <div className="sponsor-content">
                    <h3 className="text-uppercase">parent and</h3>
                    <h4 className="text-uppercase">grandparent</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
                    <a href="#">Get in Touch</a>
                </div>
            </div>
            <div className="col-md-6 p-0">
                <div className="sponsor-img">
                  <img  src="images/sponsor3.jpg" alt="" className="img-fluid"/>
                  <div className="blu-bx"></div>
                    <div className="bl-grey-bx-left"></div>
                </div>
          </div>
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

export default Sponser