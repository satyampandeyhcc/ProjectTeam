import React, { useState } from 'react';
// import './carahome.css'; // Import your CSS file
// import 'bootstrap/dist/css/bootstrap.min.css';
import img7 from "../components/images/Component1.jpg"

// const images = [
//   '/image/bike.avf.jpg',
//   '/image/config.jpg',
//   '/image/motorcycle.jpg',
// ];

const Carahome = () => {
 

  return (
    <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important",   zIndex:"-1000"}}
        >
          <div className="carousel-inner" id="carousel">
            {/* <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div class="d-flex justify-content-center">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search" 
                  aria-label="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </div>
            </div> */}
            <div className="carousel-item active" >
              <img
                // src="https://source.unsplash.com/random/900X700/?bike"
                src="/image/bike.avf.jpg"
                className="d-block w-100"
                alt="..."
                style={{ 
                    // filter: "brightness(30%)" 
                     width: "900px", height: "600px" }}
              />
            </div>

            <div className="carousel-item">
              <img
                // src="https://source.unsplash.com/random/900X700/?racingbike"
                src="/image/config.jpg"
                className="d-block w-100"
                alt="..."
                style={{ 
                  // filter: "brightness(30%)" , 
                  width: "900px", height: "600px"}}
                  />
            </div>


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

            <div className="carousel-item">
              <img
                // src="https://source.unsplash.com/random/900X700/?motorcycles"
                src={img7}
                className="d-block w-100"
                alt="..."
                style={{ 
                    // filter: "brightness(30%)" ,
                     width: "900px", height: "600px"}}
              />
            </div>
          </div>
          {/* <button
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
          </button> */}
          {/* <button
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
          </button> */}
        </div>
  );
};

export default Carahome;
