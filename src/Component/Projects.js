import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";
import project1 from "../assets/project (1).png";
import project2 from "../assets/project (2).png";
import project3 from "../assets/project (3).png";
import project4 from "../assets/project (4).png";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
export default function Projects() {
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
          duration: 2000,
          delay: 350,
          distance: '500px',
          scale: 1,
          easing: 'ease',
          reset: true
      };

      const configRight = {
          origin: 'right',
          duration: 2000,
          delay: 350,
          distance: '500px',
          scale: 1,
          easing: 'ease',
          reset: true,
      };

      const configTop = {
          origin: 'top',
          duration: 2000,
          delay: 350,
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
      };
      srLeft.reveal(leftElementRef.current, configLeft);
      srRight.reveal(rightElementRef.current, configRight);
      srTop.reveal(topElementRef.current, configTop);
      srBottom.reveal(bottomElementRef.current, configBottom);
  }, [])
  return (
    <div className="container px-0 project-component position-relative" style={{ maxWidth: '1600px' }}>
      <div className="projects-conatiner py-md-5 px-lg-5 px-md-3 px-2 client-row" ref={leftElementRef}>
        <h3 className="project-title" >Our Projects</h3>
        <div className="row">
          <div className="col-md-8 py-4 order-0 project-top-col-one" ref={leftElementRef}>
            <p>
              help you to build website company that is modern, user friendly,
              good SEO, and Clean design
            </p>
          </div>
          <div className="col-md-4 order-1 project-top-col-two" ref={rightElementRef}>
            <div className="project-button" >
              <Link to="/" >
                <span>
                  All Projects &nbsp; <BsArrowUpRightCircle size={25} className="button__icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="row row-cols-1 row-cols-md-2 g-4 px-lg-5 px-md-3 px-0 m-0 client-row" ref={bottomElementRef}>
          <div className="background-card"></div>
          <div className="background-last-card"></div>
          <div className="col">
            <div className="card projects-card">
              <div className="row g-0">
                <div className="col-md-7">
                  <div className="px-0 pt-3">
                    <h5 className="card-title">
                      <Link to="/OurProjects" style={{ textDecoration: "none" }}>
                        <div className="dev-project-button py-2">
                          <span>Project</span>
                        </div>
                      </Link>
                    </h5>
                    <h3 className="project-title py-md-3 px-md-3 py-2 px-2">Fusion3</h3>
                    <p className="project-text px-md-3 px-2">
                      Mangcoding is a biggest company in Indonesia, who provides
                      the
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={project4}
                    className="card-img-top project-image m-0"
                    alt="project 1"
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="project-last-div my-3">
              <h3>AI Projects</h3>
              <p>
                Mangcoding is a biggest company in Indonesia, who provides the
                services in Development Website, Shopify and Wordpress
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card projects-card">
              <div className="row g-0">
                <div className="col-md-7">
                  <div className="px-0 pt-3">
                    <h5 className="card-title">
                      <Link to="/OurProjects" style={{ textDecoration: "none" }}>
                        <div className="dev-project-button py-2" >
                          <span>Project</span>
                        </div>
                      </Link>
                    </h5>
                    <h3 className="project-title py-md-3 px-md-3 py-2 px-2">IKB.ai</h3>
                    <p className="project-text px-md-3 px-2">
                      Mangcoding is a biggest company in Indonesia, who provides
                      the
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={project3}
                    className="card-img-top project-image m-0"
                    alt="project 1"
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="project-last-div my-3">
              <h3>Software Projects</h3>
              <p>
                Mangcoding is a biggest company in Indonesia, who provides the
                services in Development Website, Shopify and Wordpress
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card projects-card">
              <div className="row g-0">
                <div className="col-md-7">
                  <div className="px-0 pt-3">
                    <h5 className="card-title">
                      <Link to="/OurProjects" style={{ textDecoration: "none" }}>
                        <div className="dev-project-button py-2" >
                          <span>Project</span>
                        </div>
                      </Link>
                    </h5>
                    <h3 className="project-title py-3 px-3">CDS</h3>
                    <p className="project-text px-3">
                      Mangcoding is a biggest company in Indonesia, who provides
                      the
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={project2}
                    className="card-img-top project-image m-0"
                    alt="project 1"
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="project-last-div my-3">
              <h3>React JS</h3>
              <p>
                Mangcoding is a biggest company in Indonesia, who provides the
                services in Development Website, Shopify and Wordpress
              </p>
            </div>
          </div>
          <div className="col">
            <div className="card projects-card">
              <div className="row g-0">
                <div className="col-md-7">
                  <div className="px-0 pt-3">
                    <h5 className="card-title">
                      <Link to="/OurProjects" style={{ textDecoration: "none" }}>
                        <div className="dev-project-button py-2" >
                          <span>Project</span>
                        </div>
                      </Link>
                    </h5>
                    <h3 className="project-title py-3 px-3">Robot Sea Monster</h3>
                    <p className="project-text px-3">
                      Mangcoding is a biggest company in Indonesia, who provides
                      the
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <img
                    src={project1}
                    className="card-img-top project-image m-0"
                    alt="project 1"
                    height={200}
                  />
                </div>
              </div>
            </div>
            <div className="project-last-div my-3">
              <h3>Django Projects</h3>
              <p>
                Mangcoding is a biggest company in Indonesia, who provides the
                services in Development Website, Shopify and Wordpress
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
