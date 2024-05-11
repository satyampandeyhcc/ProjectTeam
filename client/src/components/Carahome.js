import React, { useState } from "react";
// import './carahome.css'; // Import your CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';
import img7 from "../components/images/resize-1715367284714733201Component1.jpg";
import { NavLink } from "react-router-dom";
// const images = [
//   '/image/bike.avf.jpg',
//   '/image/config.jpg',
//   '/image/motorcycle.jpg',
// ];

const Carahome = () => {
  return (
    <>
      <style>
        {`.text123{
          position:absolute;
          top:10%;
          color: #e9d2b8;
        
          font-size: 4vw;
          font-weight: 900;
          width: 48vw;

      
          padding-left: 88px;
      }


      .imagecara{

        position:relative;
        zIndex:-10;

      }
      .button-781{
        color: white;
        position:absolute;
        top:60%;
    margin-top: 4rem;
    padding: 0.1rem 1rem;
    background: rgb(243, 239, 239);
    font-size: 1.4rem;
    border-radius: 0.5rem;
    font-weight: 500;
    text-align: center;
    color: white;
    left:42%;
    
      }


      @media only screen and (min-width: 520px) and (max-width: 700px) {
        .button-781{
        
          top:51%;
      margin-top: 4rem;
    
      font-size: 1.1rem;
    
      color: white;
      left:37%;
      
        }
      }


      @media only screen and (min-width: 400px) and (max-width: 519px) {
        .button-781{
        
          top: 58%;
        margin-top: 3rem;
        font-size: 0.8rem;
        left: 36%;
      
        }




        .text123{
          position: absolute;
          top: 10%;
          color: #e9d2b8;
          font-size: 3.5vw;
          font-weight: 900;
          width: 46vw;
          padding-left: 27px;
      }

      .imagecara{
        height:36vh;
      }



    }




    @media only screen and (min-width: 200px) and (max-width: 399px) {
      .button-781{
      
        top:48%;
    margin-top: 3rem;
    
    font-size: 0.8rem;
    
    left:20%;
    
      }




      .text123{
        position:absolute;
        top:10%;
        color: #e9d2b8;
      
        font-size: 3.5vw;
        font-weight: 900;
        width: 48vw;

    
        padding-left: 88px;
    }

    .imagecara{
      height:30vh;
    }



  }

    
      
        `}
      </style>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          
          <div
            className="carousel-item active imagecara"
            style={{ position: "relative" }}
          >
            <img
              // src="https://source.unsplash.com/random/900X700/?bike"
              src="/image/bike.avf.jpg"
              className="d-block w-100 imagecara "
              alt="..."
              style={{ zIndex: "-10" }}
            />

            <h1 className="text123">
              Discover the joy of biking in the serene plains with Plain
              Ventures!{" "}
            </h1>

            <NavLink className="button-781" to="/viewbike" style={{}}>
              Bike Showcase
            </NavLink>
          </div>




          <div
            className="carousel-item active imagecara"
            style={{ position: "relative" }}
          >
            <img
              // src="https://source.unsplash.com/random/900X700/?bike"
              // src="/image/bike.avf.jpg"
              className="d-block w-100 imagecara "
              src={img7}
              alt="..."
              style={{ zIndex: "-10" }}
            />

            <h1 className="text123">
              Discover the joy of biking in the serene plains with Plain
              Ventures!{" "}
            </h1>

            <NavLink className="button-781" to="/viewbike" style={{}}>
              Bike Showcase
            </NavLink>
          </div>

          {/* <div className="carousel-item">
              <img
               
                src="/image/config.jpg"
                className="d-block w-100"
                alt="..."
               
                  />
            </div> */}

          {/* <div className="carousel-item">
              <img
                // src="https://source.unsplash.com/random/900X700/?racingbike"
                src="https://wallpaperaccess.com/full/1433024.jpg"
                // src="/image/config.jpg"
                className="d-block w-100"
                alt="..."
                style={{ 
                    // filter: "brightness(30%)" , 
                width: "900px", height: "600px"}}
              />
            </div> */}

        
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </button>
      </div>
    </>
  );
};

export default Carahome;
