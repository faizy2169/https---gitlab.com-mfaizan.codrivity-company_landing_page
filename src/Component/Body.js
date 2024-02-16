import React from 'react';
import "../App.css"
import { MdArrowOutward } from "react-icons/md";
import card1Pic from "../assets/card1-pic.png";
import card1Logo from "../assets/Frame 1597883653.png";
import { NavLink } from 'react-router-dom';
import card2Logo from "../assets/frame2.png";
import card3Logo from "../assets/frame3.png";
import googlePic from "../assets/google.png";
import mangoPic from "../assets/mango.png";
import storePic from "../assets/storeid.png";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
const Body = () => {
    const leftElementRef = React.useRef();
    const rightElementRef = React.useRef();
    const topElementRef = React.useRef();
    const bottomElementRef = React.useRef();
    useEffect(() => {
        const srLeft = ScrollReveal();
        const srRight = ScrollReveal();
        const srTop = ScrollReveal();
        const srBottom = ScrollReveal();

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
        const configBottom = {
            origin: 'bottom',
            duration: 2000,
            delay: 350,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true,
        };
        srLeft.reveal(leftElementRef.current, configLeft);
        srRight.reveal(rightElementRef.current, configRight);
        srTop.reveal(topElementRef.current, configTop);
        srBottom.reveal(bottomElementRef.current, configBottom);
    }, [])
    return (
        <div className='container-fluid work-together px-0'>
            <svg className='line-shape' xmlns="http://www.w3.org/2000/svg" width="100%" height="970px" viewBox="0 0 1287 740" fill="none">
                <path opacity="0.8" d="M57.502 732H48.502C23.0969 732 2.50195 711.405 2.50195 686V315C2.50195 289.595 23.0969 269 48.502 269H1238C1263.41 269 1284 248.405 1284 223V49C1284 23.5949 1263.41 3 1238 3H1221.5" stroke="url(#paint0_linear_663_3246)" strokeWidth="5" />
                <defs>
                    <linearGradient id="paint0_linear_663_3246" x1="30.0019" y1="3" x2="30.0019" y2="732" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#01002B" />
                        <stop offset="0.0314417" stopColor="#854CFF" />
                        <stop offset="0.959393" stopColor="#504CFF" />
                        <stop offset="1" stopColor="#01002B" />
                    </linearGradient>
                </defs>
            </svg>
            <div className='container my-sm-5 my-3 pt-sm-5 pt-3 ' style={{ position: "relative", zIndex: "1", maxWidth: "1600px" }} ref={rightElementRef}>
                <div>
                    <h1 className='body-title' >Companies that can help you in <button type='button' className='btn btn-know'>Know More <MdArrowOutward /></button> developing your company for the future</h1>
                </div>
                <p className='body-content' >Work in the IT field includes Web Design, UI/UX Design, Branding and Shopify Development</p>
                <div className='fading'></div>
                <div className='fading-1'></div>
                <div className='fading-2'></div>
                <div className='d-lg-flex align-items-end justify-content-between'>
                    <div>
                        <h1 className='together-company'>Let’s work together with our company</h1>
                        <p className="company-content" >help you to build website company that is modern, user friendly, good SEO, and clean design</p>
                    </div>
                    <div>
                        <button type='button' className='btn btn-company-start' ref={rightElementRef}>Get Started <MdArrowOutward className='arrow-icon-1' /></button>
                    </div>
                </div>
                <div className='row d-lg-flex d-block mx-auto flex-row column-gap-lg-4 column-gap-md-3 column-gap-2 my-4' ref={topElementRef}>
                    <div className='card-1 mb-lg-0 mb-3 mb-3 position-relative d-flex justify-content-between px-4 pr-0'>
                        <div className='my-5'>
                            <img src={card1Logo} alt={"card-logo"} />
                            <h2 className='text-white my-4'>AI Development</h2>
                            <p className='content'>
                                help you to build website company that is modern, user friendly, good SEO, and clean design
                            </p>
                            <NavLink to={"/"} className={"card-link"} >Start with us <MdArrowOutward /></NavLink>
                        </div>
                        <div className='bg-card-1 d-flex align-items-end'>
                            <img src={card1Pic} alt={"card-pic"} className='card-pic-1' />
                        </div>
                    </div>
                    <div className='card-2 mb-lg-0 mb-3 mb-3 position-relative d-flex justify-content-between px-4 pr-0'>
                        <div className='my-5'>
                            <img src={card2Logo} alt={"card2-logo"} />
                            <h2 className='text-white my-4'>UI/UX Designing</h2>
                            <p className='content'>
                                help you to build website company that is modern, user friendly, good SEO, and clean design
                            </p>
                            <NavLink to={"/"} className={"card-link"} >Start with us <MdArrowOutward /></NavLink>
                        </div>
                        <div className='bg-card-1 d-flex align-items-end'>
                            <img src={card1Pic} alt={"card-pic"} className='card-pic-1' />
                        </div>
                    </div>
                </div>
                <div className='row d-flex mx-auto flex-row column-gap-lg-4 column-gap-md-3 column-gap-2 my-4' ref={bottomElementRef}>
                    <div className='card-3 mb-lg-0 mb-3 mb-3 position-relative d-flex justify-content-between px-4 pr-0'>
                        <div className='my-5'>
                            <img src={card3Logo} alt={"card-logo"} />
                            <h2 className='text-white my-4'>Software Dev</h2>
                            <p className='content'>
                                help you to build website company that is modern, user friendly, good SEO, and clean design
                            </p>
                            <NavLink to={"/"} className={"card-link"} >Start with us <MdArrowOutward /></NavLink>
                        </div>
                        <div className='bg-card-1 d-flex align-items-end'>
                            <img src={card1Pic} alt={"card-pic"} className='card-pic-1' />

                        </div>
                    </div>
                    <div className='card-4 mb-lg-0 mb-3 mb-3 position-relative d-flex justify-content-between px-4 pr-0'>
                        <div className='my-5'>
                            <img src={card2Logo} alt={"card2-logo"} />
                            <h2 className='text-white my-4'>Shopify</h2>
                            <p className='content'>
                                help you to build website company that is modern, user friendly, good SEO, and clean design
                            </p>
                            <NavLink to={"/"} className={"card-link"} >Start with us <MdArrowOutward /></NavLink>
                        </div>
                        <div className='bg-card-1 d-flex align-items-end'>
                            <img src={card1Pic} alt={"card-pic"} className='card-pic-1' />
                        </div>
                    </div>
                </div>
            </div>
            <svg className="line-shape-1" width="100%" height="970px" viewBox="0 0 1287 740" xmlns="http://www.w3.org/2000/svg" fill='none'>
                <path opacity="0.8" d="M1232 521.5H1238C1263.41 521.5 1284 500.905 1284 475.5V355C1284 329.595 1263.41 309 1238 309H49C23.5949 309 3 288.405 3 263V108C3 82.5949 23.5949 62 49 62H894C919.405 62 940 41.4051 940 16V0" stroke="url(#paint0_linear_663_3158)" strokeWidth="5" />
                <defs>
                    <linearGradient id="paint0_linear_663_3158" x1="1246" y1="-13" x2="1246" y2="522" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#01002B" />
                        <stop offset="0.104167" stopColor="#854CFF" />
                        <stop offset="0.965816" stopColor="#504CFF" />
                        <stop offset="1" stopColor="#01002B" />
                    </linearGradient>
                </defs>
            </svg>
            <div id="" className="banner carousel slide ' py-lg-2 py-md-2 py-1 " data-bs-ride="carousel" style={{ background: "#504CFF" }} ref={bottomElementRef}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center my-2 banner-area" >
                            <img src={storePic} className="d-block banner-img" alt="..." />
                            <img src={mangoPic} className="d-block banner-img " alt="..." />
                            <img src={storePic} className="d-block banner-img " alt="..." />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center my-2 banner-area" >
                            <img src={googlePic} className="d-block banner-img " alt="..." />
                            <img src={storePic} className="d-block banner-img " alt="..." />
                            <img src={googlePic} className="d-block  banner-img" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center my-2 banner-area" >
                            <img src={storePic} className="d-block banner-img" alt="..." />
                            <img src={mangoPic} className="d-block banner-img " alt="..." />
                            <img src={storePic} className="d-block banner-img " alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;