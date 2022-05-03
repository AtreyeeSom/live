import React from 'react'
import {NavDropdown} from "react-bootstrap"
const Assesment = () => {
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
        <NavDropdown.Item href="/works" className="dropdown-item">Federal Skilled worker class</NavDropdown.Item>
        <NavDropdown.Item href="/trades" className="dropdown-item">Federal Skilled Trades Cass</NavDropdown.Item>
        <NavDropdown.Item href="/canadian" className="dropdown-item">Canadian Experience class</NavDropdown.Item>
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
        <img src="images/assesment_bnr.jpg" className="img-fluid"/>
      </div>
     
  </div>

</section>

<section className="assesment-area">
<div className="container">
    <h2 className="text-uppercase">Cum sociis natoque</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
    <h3 className="text-capitalize">Other Immigration Assessment Forms</h3>
   <h4>Business Immigration</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>
   <h4>Family Sponsorship</h4>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum.</p>

   <h2 className="text-capitalize b-bottom">Personal profile</h2>
   <form className="mt-3">
    <div className="row mb-4">
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >age</label>
                <select className="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
            </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >country of residence</label>
                <select className="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
            </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >counrty of citizenship</label>
                <select className="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
            </div>
        </div>
  

        <div className="col-lg-4 col-md-12">
            <label >martial status</label>
            <div className="btn-group">
                <button type="button" className="btn btn-light btn1" >Single</button>
                <button type="button" className="btn btn-light btn1" >Married</button>
                <button type="button" className="btn btn-light btn1" >Law Partner</button>
              </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <label >do you have any children under the age!</label>
            <div className="btn-group">
                <button type="button" className="btn btn-light btn2">Yes</button>
                <button type="button" className="btn btn-light btn2">No</button>
                
              </div>
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >destination</label>
                <select className="form-control" >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
            </div>
        </div>
    </div>
    <h2 className="text-capitalize b-bottom">your language skills</h2>
    <p>Please describe your proficiency in English and/or French under each of the four skills listed below.</p>

    <div className="row align-items-center mt-4">
        <div className="col-md-2">
            
            <label>English</label>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <label >writing</label>
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <label >reading</label>
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <label >speaking</label>
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <label >listening</label>
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
    </div>
    <div className="row align-items-center mt-2 mb-4">
        <div className="col-md-2">
            
            <label>french</label>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
        <div className="col-md-2">
            <div className="form-group">
                <select className="form-control" >
                    <option>Select</option>
                    <option>Select</option>
                  </select>
            </div>
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">your education and training</h2>
    <div className="row mb-4">
        <div className="col-md-12">
            <label className="w-100">Have you completed high school (secondary school)?* </label>
            <div className="btn-group">
                <button type="button" className="btn btn-light btn3">Yes</button>
                <button type="button" className="btn btn-light btn3">No</button>
                
              </div>   
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">your work history</h2>
    <div className="row mb-4">
        <div className="col-md-12">
            <label className="w-100">Have you done any paid work during the last 10 years?*</label>
            <div className="btn-group">
                <button type="button" className="btn btn-light btn4">Yes</button>
                <button type="button" className="btn btn-light btn4">No</button>
                
              </div>   
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">express entry profile</h2>
    <div className="row mb-4">
        <div className="col-md-12">
            <label className="w-100">Have you done any paid work during the last 10 years?*</label>
            <div className="btn-group">
                <button type="button" className="btn btn-light btn5">Yes</button>
                <button type="button" className="btn btn-light btn5">No</button>
                
              </div>   
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">job offer</h2>
    <div className="row mb-4">
        <div className="col-md-12">
            <label className="w-100">Do you have a written job offer from a Canadian employer?</label>
            <div className="btn-group">
                <button type="button" className="btn btn-light btn6">Yes</button>
                <button type="button" className="btn btn-light btn6">No</button>
                
              </div>   
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">your personal net worth</h2>
    <p>This question is optional. Net worth is considered for some immigration programs.</p>
    <div className="row mb-4">
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >currency</label>
                <select className="form-control" >
                    <option>Dollar($)</option>
                    <option>Select</option>
                  </select>
            </div>   
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >amount</label>
              <input type="number" className="form-control"/>
            </div>   
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">Enter Your Contact Information</h2>
    
    <div className="row mt-3 mb-2">
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >first name</label>
                <input type="text" className="form-control" placeholder="Enter Your First Name"/>
            </div>   
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >last name</label>
              <input type="text" className="form-control" placeholder="Enter Your Last Name"/>
            </div>   
        </div>
    </div>
    <div className="row mb-4">
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >email</label>
                <input type="email" className="form-control" placeholder="Enter Your Email"/>
            </div>   
        </div>
        <div className="col-lg-4 col-md-12">
            <div className="form-group">
                <label >telephone</label>
              <input type="number" className="form-control" placeholder="Enter Your Phone"/>
            </div>   
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">question and comments</h2>
    <div className="row mt-3 mb-4">
        <div className="col-md-12">
            <label className="w-100">Do you have a written job offer from a Canadian employer?</label>
            <div className="btn-group">
                <button type="button" className="btn btn-light btn7">Yes</button>
                <button type="button" className="btn btn-light btn7">No</button>
              </div>   
        </div>
    </div>

    <h2 className="text-capitalize b-bottom">immigration newsletter</h2>
    <div className="form-check mb-4 mt-3">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" value=""/>Yes, please send me the free Canadian Immigration Newsletter by email.
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" value=""/>Yes, I would like to receive timely immigration information and special offers from CanadaVisa.com and trusted partners.
        </label>
      </div>

      <div className="row mt-5">
        <div className="col-md-12">
          <input type="button" className="btn btn-submit" value="Submit Form"/>
        </div>
      </div>
   </form>
 
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

export default Assesment