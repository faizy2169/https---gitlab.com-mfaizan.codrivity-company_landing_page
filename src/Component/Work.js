import React from "react";
import { Link } from "react-router-dom";
import { WiDirectionUpRight } from "react-icons/wi";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
export default function Work() {
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
          reset: true,
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
          delay:350,
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
    <div className="container-fluid px-0" ref={leftElementRef}>
      <div className="work-container">
        <div className="row px-lg-5 px-md-3 px-2 py-5 m-0 flex-md-row flex-column">
          <div className="col">
            <div className="work-content">
              <p className="work-us-title">Let’s work with Us</p>
              <span>
                Codrivity is a biggest company in Pakistan, who provides the
                services in Website Development, Shopify and WordPress, Ai
                Services, Software Development.
              </span>
            </div>
          </div>
          <div className="col">
            <div className="work-button mr-md-0 mr-3">
              <Link to="/">
                <span>
                  Know More <WiDirectionUpRight size={25} className="button__icon"/>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
