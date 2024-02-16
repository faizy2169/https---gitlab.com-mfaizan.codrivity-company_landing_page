import React, { useEffect, useState } from 'react';
import "../App.css"
import { NavLink } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import MouseImg from "../assets/mouse.png";
import ScrollReveal from 'scrollreveal';
const Header = () => {
    const leftElementRef = React.useRef();
    const rightElementRef = React.useRef();
    const topElementRef = React.useRef();
    useEffect(()=>{
        const srLeft = ScrollReveal();
        const srRight = ScrollReveal();
        const srTop = ScrollReveal();
        const configLeft = {
            origin: 'left',
            duration: 1000,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true,
        };
        const configRight = {
            origin: 'right',
            duration: 1000,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true,
        };
        const configTop = {
            origin: 'top',
            duration: 1000,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true,
        };
        srLeft.reveal(leftElementRef.current, configLeft);
        srRight.reveal(rightElementRef.current, configRight);
        srTop.reveal(topElementRef.current, configTop);
    },[])
    const [btnBg, setBtnBg] = useState(false);
    function handleScrollingEffect(){
        document.documentElement.style.overflowY = "auto";
        window.scrollTo({
            top: 1000,
            behavior: 'smooth',
          });
    }
    return (
        <div id='#header' className='header container'>
            <div className="social-media-section d-flex justify-content-center" ref={topElementRef}>
                <NavLink to={"https://www.instagram.com/codrivity/"} className="social-media" ><FaInstagram /></NavLink>
                <NavLink to={"https://www.facebook.com/people/Codrivity/100088824021110/?_rdc=1&_rdr"} className="social-media" ><FaFacebook /></NavLink>
                <NavLink to={"https://www.linkedin.com/company/codrivity/mycompany/"} className="social-media" ><FaLinkedinIn /></NavLink>
                <NavLink to={"/"} className="social-media" ><FaTwitter /></NavLink>
            </div>
            <div className='header-caption d-flex flex-column justify-content-center '  ref={leftElementRef}>
                <h1 className='header-title'>Building Technology That Links People</h1>
                <p className='company-description'>help you to build website company that is modern, user friendly, good CEO, and Clean design</p>
                <div className='d-flex justify-content-center button-resize' >
                    <button className='btn btn-start-1 d-flex align-items-center  justify-content-between' onMouseEnter={() => { setBtnBg(true) }} onMouseLeave={() => { setBtnBg(false) }}>Get Started <MdArrowOutward className={`${btnBg ? 'arrow-icon-1-hover' : 'arrow-icon-1'} `} /></button>
                </div>
            </div>
            <div className='pb-sm-5 pb-3' ref={rightElementRef} style={{cursor:"pointer"}}  onClick={handleScrollingEffect}>
                <div className="main">
                <div className="mouse">
                    <img src={MouseImg} alt={'mouse-logo'} width="50" height="50" />
                </div>
                    <svg id="rotatingText" viewBox="0 0 200 200" width="200" height="200">
                        <defs>
                            <path id="circle" d="M 100, 100
                m -75, 0
                a 75, 75 0 1, 0 150, 0
                a 75, 75 0 1, 0 -150, 0
                ">
                            </path>
                        </defs>
                        <text width="400">
                            <textPath alignmentBaseline="top" href="#circle" className="text">
                                Click To Scroll Down Together
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Header;