import React, { useEffect } from 'react';
import "../App.css"
import { NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png"
import { MdArrowOutward } from "react-icons/md";
import ScrollReveal from 'scrollreveal';
const Navbar = () => {
    const topElementRef = React.useRef();
    useEffect(() => {
        const srTop = ScrollReveal();
        const configTop = {
            origin: 'top',
            duration: 1000,
            delay: 150,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true,
        };
        srTop.reveal(topElementRef.current, configTop);
    }, [])
    return (
        <nav className="navbar navbar-expand-lg bg-nav py-3" ref={topElementRef}>
            <div className="container" style={{ maxWidth: "1470px" }}>
                <NavLink to={"/"} className="navbar-brand title-brand d-flex align-items-center"><img src={Logo} alt={'company-logo'} /><span className='pl-2' style={{ paddingLeft: ".5rem", fontSize: "18px", letterSpacing: "1px" }}>Codrivity</span></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link navbar-links active-link" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/"} className="nav-link navbar-links">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-links" aria-current="page" >Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link navbar-links" aria-current="page" >Contacts</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='btn-nav'>
                    <button className='btn btn-start d-flex align-items-center justify-content-between'>Get Started <MdArrowOutward className='arrow-icon' /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;