import React from 'react';
import Footer from "./Footer"
import Body from './Body';
import ProjectComponent from './Projects';
import Clients from "./Clients";
import AboveFooter from "./Work"
const Home = () => {
    return (
        <div style={{overflowX: "hidden"}}>
            <Body />
            <ProjectComponent />
            <Clients />
            <AboveFooter />
            <Footer />
            {/* <Projects /> */}
        </div>
    );
};

export default Home;