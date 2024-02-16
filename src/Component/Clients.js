import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";
import commas from "../assets/commas.svg";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
const clientsReviews = [
  {
    id: 1,
    imgSrc: client1,
    title: "Nugraha",
    short: "Fonder of Mangcoding",
    text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.",
  },
  {
    id: 2,
    imgSrc: client2,
    title: "Nugraha",
    short: "Fonder of Mangcoding",
    text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.",
  },
  {
    id: 3,
    imgSrc: client3,
    title: "Nugraha",
    short: "Fonder of Mangcoding",
    text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.",
  },
  {
    id: 4,
    imgSrc: client4,
    title: "Nugraha",
    short: "Fonder of Mangcoding",
    text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.",
  },
  {
    id: 5,
    imgSrc: client5,
    title: "Nugraha",
    short: "Fonder of Mangcoding",
    text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.",
  },
  {
    id: 6,
    imgSrc: client6,
    title: "Nugraha",
    short: "Fonder of Mangcoding",
    text: "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress.",
  },
];

export default function Clients() {
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
          delay:150,
          distance: '500px',
          scale: 1,
          easing: 'ease',
          reset: true,
      };
      const configBottom = {
          origin: 'bottom',
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
      srBottom.reveal(bottomElementRef.current, configBottom);
  }, [])
  return (
    <div className="container-fluid px-0" style={{overflowX: "hidden"}}>
      <div className="container" style={{maxWidth: "1600px"}}>
      <div className="row py-5 px-lg-5 px-md-3 m-0 client-row" ref={topElementRef}>
        <div className="clients-top px-0">
          <p className="aboutus-title">What they say about us</p>
          <br />
          <span>
            Work in the IT field includes Web Design, UI/UX Design, Branding and
            Shopify Development
          </span>
        </div>
      </div>

      {/* Clients reviews */}
      <div className="review-container" ref={rightElementRef}>
        <div className="background-last-client"></div>
        <div className="row row-cols-1 row-cols-md-3 g-4 px-lg-5 px-md-3 m-0 client-row">
          {clientsReviews.map((client) => (
            <div className="px-md-1 px-0" key={client.id}>
              <div className="card client-card">
                <div className="client-bio">
                  <div className="client-img-container">
                    <img
                      src={client.imgSrc}
                      className="card-img-top client-img"
                      alt={`Client ${client.id}`}
                    />
                    <div className="client-commas mt-4 px-5">
                      <img src={commas} alt="commas" />
                    </div>
                  </div>
                  <div className="col px-2">
                    <div className="row">
                      <span className="client-title">{client.title}</span>
                    </div>
                    <div className="row">
                      <span className="client-short">{client.short}</span>
                    </div>
                  </div>
                </div>
                <div className="card-body py-4 px-2">
                  <p className="card-text client-feedback">{client.text}</p>
                </div>
              </div>
              <div className="feedback-fading"></div>
              {/* <div className="background-client"></div> */}
            </div>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="676"
          height="529"
          viewBox="0 0 676 529"
          fill="#FFF"
          className="background-svg"
        >
          <path
            opacity="0.1"
            d="M320.527 377.857C320.527 463.852 260.591 529 169.384 529C78.1773 529 0 456.035 0 325.739C0 164.172 122.478 26.0591 281.438 0V96.4187C190.232 114.66 122.478 179.808 122.478 255.379C138.113 244.956 158.961 237.138 192.837 237.138C260.591 237.138 320.527 286.65 320.527 377.857ZM742.685 377.857C742.685 463.852 680.143 529 588.936 529C500.335 529 419.552 456.035 419.552 325.739C419.552 164.172 542.03 26.0591 703.596 0V96.4187C612.389 114.66 544.635 179.808 544.635 252.773C560.271 242.35 583.724 237.138 614.995 237.138C682.749 237.138 742.685 286.65 742.685 377.857Z"
            fill="white"
          />
        </svg>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      </div>
    </div>
  );
}
