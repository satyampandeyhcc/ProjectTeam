import React, { useRef } from 'react';
import '../caraousalbottom.css'
import Item from "./Items";
import Carousal from "@itseasy21/react-elastic-carousel";
// import img1 from "./images/img1.jpeg";
// import img2 from "./images/img2.jpeg";
// import img3 from "./images/img3.jpeg";
// import img4 from "./images/img4.jpeg";
// import btn from "./images/right-arrow.png"

// import img1 from "../Component/images/pexels-amina-filkins-5414061 1.png"
// import img2 from "../Component/images/pexels-tima-miroshnichenko-8774564 1.png"
// import img3 from "../Component/images/Rectangle 71.png"
// import Bubble from "./Bubble";
import img5 from "../components/images/Component1.jpg"
import img6 from "../components/images/enjoyweek.jpg"
import img7 from "../components/images/Affordableprice.jpg"


import img9 from "../components/images/Satisfaction.jpg"

import img11 from "../components/images/customer.jpg"


import img13 from "../components/images/electric.jpg"

// import img8 from "../Component/images/benefits_card4.jpeg";
// import img9 from "../Component/images/benefits_card5.jpeg";
// import React, { useRef } from 'react';

const CaraousalBottom = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 1 },
        { width: 800, itemsToShow: 2},
      
        { width: 1200, itemsToShow: 3.1},
      ];

      // const carouselRef = useRef(null);

      // const handlePrevClick = () => {
      //   carouselRef.current.slidePrev();
      // };
    
      // const handleNextClick = () => {
      //   carouselRef.current.slideNext();
      // };



  return (

<div>
    <style>
{

`
// .irYXhU:hover:enabled, .irYXhU:focus:enabled {
//   color: rgb(51, 51, 51);
//   background-color: rgb(103, 58, 183,0.1);
//   box-shadow: rgb(51, 51, 51) 0px 0px 2px 0px;
// }

`


}
    </style>
    <div className="BottomCaraousal">
    <h1>Why Bike Riding Venture ?</h1>
   
      <Carousal breakPoints={breakPoints}  isRTL={false}  showArrows={true} pagination={false}>
     
       <Item>
        <div className="item">
          <img  src={img6} alt="ueis"  />
          <div id="comp">
          {/* <img  className="first" src={img5} alt="ueis"  /> */}
          </div>
          <div id="cont">
          <p>Availabel On Weekends</p>
          </div>
         
         
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img7} alt="ueis"  />
          <div id="comp">
          {/* <img  src={img7} alt="ueis"  /> */}
          </div>
          
          <div id="cont">
          <p>Affordable Price</p>
          </div>
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img9} alt="ueis"  />
          <div id="comp">
          {/* <img  src={img6} alt="ueis"  /> */}
          </div>
          
          <div id="cont">
          <p>100% Satisfaction Guranteed</p>
          </div>
         
        </div>
       </Item>

       <Item>
        <div className="item">
          <img className='card-img-benefits' src={img11} alt="ueis"  />
          <div id="comp">
          {/* <img  src={img7} alt="ueis"  /> */}
          </div>
          
          <div id="cont">
          <p>Enhanced Customer Experience</p>
          </div>
         
        </div>
       </Item>
       <Item>
        <div className="item">
          <img className='card-img-benefits' src={img13} alt="ueis"  />
          <div id="comp">
          {/* <img  src={img7} alt="ueis"  /> */}
          </div>
          
          <div id="cont">


   
         <p>Eco-Friendly</p>
          </div>
         
        </div>
       </Item>
       {/* <Item>
        <div className="item">
          <img src={img4} alt="ueis" />
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img1} alt="ueis"  />
          
        </div>
       </Item>
       <Item>
        <div className="item">
          <img src={img2} alt="ueis"  />
          
        </div> */}
       {/* </Item> */}
      
      </Carousal>
      {/* <div className="carousel-buttons">
        <button className="carousel-button" onClick={handlePrevClick}>
          Previous
        </button>
        <button className="carousel-button" onClick={handleNextClick}>
          Next
        </button>
      </div> */}
    </div>
    </div>
  )
}

export default CaraousalBottom