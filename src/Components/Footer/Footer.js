import React from "react";
import './Footer.css'
import youtube from "../../images/Image-Icon/bxl-youtube-min.png";
import facebook from "../../images/Image-Icon/bxl-facebook-min.png";
import instagram from "../../images/Image-Icon/bxl-instagram-min.png";
import twitter from "../../images/Image-Icon/bxl-twitter-min.png";
import whatsapp from "../../images/Image-Icon/bxl-whatsapp-min.png";

// import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div>
      <div className="cusFooterContainer1 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <a
                href="/"
                className="navbar-brand text-uppercase font-weight-bold"
                style={{ paddingTop: "20px" }}
              >
                <h4 style={{ color: "white", fontWeight: "bold" }}>
                  POWER
                  <span style={{ color: "yellow" }}> X</span>
                </h4>
              </a>
            </div>
            <div className="col-md-10 footer-title">
              <div className="container cusFooter">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Need Help?</h5>
                    <h6>Help Center</h6>
                    <h6>Email Support</h6>
                    <h6>Live Chat</h6>
                    <h6>Gift Certificates</h6>
                    <h6>Send Us Feedback</h6>
                  </div>
                  <div className="col-md-3">
                    <h5>Digital Resources</h5>
                    <h6>Articles</h6>
                    <h6>E-books</h6>
                  </div>
                  <div className="col-md-3">
                    <h5>Connect with Us</h5>
                    <p className="footerIcon">
                      <img src={youtube} alt="" />
                      <img src={facebook} alt="" />
                      <img src={instagram} alt="" />
                      <img src={twitter} alt="" />
                      <img src={whatsapp} alt="" />
                    </p>

                  </div>
                  <div className="col-md-3">
                    <h5>Join Our Newsletter</h5>
                    <h6>
                      Get exclusive news, features, and updates from The
                      Shredder Weight Loss Academy.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <footer className="text-center m-5">
            Copyright @2022 All Right Reserved, power-x official site
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
