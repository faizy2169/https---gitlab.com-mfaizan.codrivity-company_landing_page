import React from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
export default function Footer() {
  const rightElementRef = React.useRef();
  useEffect(() => {
      const srRight = ScrollReveal();
      const configRight = {
          origin: 'right',
          duration: 1000,
          delay: 150,
          distance: '500px',
          scale: 1,
          easing: 'ease',
          reset: true,
      };
      srRight.reveal(rightElementRef.current, configRight);
  }, [])
  return (
    <div className="container-fluid position-relative px-0" ref={rightElementRef}>
      <div className="footer-fading"></div>
      <div className="footer-fading-2"></div>
      <div className="">
        {/* Services */}
        <div className="row footer-row p-md-5 p-2 m-0">
          <div className="col-12 col-md-4">
            <div className="footer-logo-name">
              <img className="logo-img" src={logo} alt="footer-img" /> &nbsp;&nbsp;
              <span className="logo-span">Codrivity</span>
            </div>
            <div className="footer-description">
              <p className="mt-3">
                Companies that can help you in developing your company for the
                future
              </p>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="footer-services mt-2">
              <h3>Services</h3>
              <div className="footer-indexes mt-3">
                <span>
                  <>Home</> <br /> <br />
                  <>Services</> <br /> <br />
                  <>About Us</> <br /> <br />
                  <>Contact Us</>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="footer-services mt-2">
              <h3>Services</h3>
              <div className="footer-indexes mt-3">
                <span>
                  <>Web Developmen</> <br /> <br />
                  <>UI/UX Designer</> <br /> <br />
                  <>Branding</> <br /> <br />
                  <>Shopify</>
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="footer-services mt-2">
              <h3>Business Features</h3>
              <div className="footer-indexes mt-3">
                <span>
                  <>Data-Based Chatbot Training</> <br /> <br />
                  <>Model Fine-Tuning</> <br /> <br />
                  <>Sales & Customer Service Smart Agents</>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* Copyright */}
        <div className="row px-lg-5 px-md-3 py-md-4 py-2 m-0 flex-md-row flex-column">
          <div className="col">
            <p className="copyright-p mb-0 mt-1">
              © 2023 Codrivity. All rights reserved.
            </p>
          </div>
          <div className="col">
            <div className="footer-links">
              <NavLink to={"https://www.instagram.com/codrivity/"} className="social-media-footer" ><FaInstagram /></NavLink>
              <NavLink to={"https://www.facebook.com/people/Codrivity/100088824021110/?_rdc=1&_rdr"} className="social-media-footer" ><FaFacebook /></NavLink>
              <NavLink to={"https://www.linkedin.com/company/codrivity/mycompany/"} className="social-media-footer" ><FaLinkedinIn /></NavLink>
              <NavLink to={"/"} className="social-media-footer" ><FaTwitter /></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
