import React from 'react';
import "../footer/footer.css";
import footerimg from "../hero/logo2_footer.png.webp";

const Footer = () => {
  return (
    <>
      <div className="footer-area footer-padding">
        <div className="container-f">
          <div className="row-justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">

                  <div className="footer-logo mb-35">
                  </div>
                  <div className="footer-tittle">
                    <img src={footerimg} alt="" />
                    <div className="footer-pera">
                      <p className='para'>Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum</p>
                    </div>

                    <ul className="footer-social">
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="https://bit.ly/sai4ull"><i className="fab fa-facebook"></i></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                      <li> <a href="#"><i className="fab fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Navigation</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Services</h4>
                  <ul>
                    <li><a href="#">Drone Mapping</a></li>
                    <li><a href="#"> Real State</a></li>
                    <li><a href="#">Commercial</a></li>
                    <li><a href="#">Construction</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Support</h4>
                  <ul>
                    <li><a href="#">Drone Mapping</a></li>
                    <li><a href="#"> Real State</a></li>
                    <li><a href="#">Commercial</a></li>
                    <li><a href="#">Construction</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-8">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle mb-50">
                  <h4>Contact Us</h4>
                  <ul>
                    <li><a href="#">Drone Mapping</a></li>
                    <li className="number2"><a href="#">contact@carwash.com</a></li>
                    <li className="number"><a href="#">10 (87) 738-3940</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" text-center">
        <p>Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with <i class="fa fa-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="nofollow noopener">Colorlib</a></p>
      </div>
      </div>

      
    </>
  )
}
export default Footer;