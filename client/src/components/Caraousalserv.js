
import React from "react";
import "../caraousalserv.css";
import Item from "./Items";
import Carousal from "@itseasy21/react-elastic-carousel";
// import img1 from "./images/img1.jpeg";
// import img2 from "./images/img2.jpeg";
// import img3 from "./images/img3.jpeg";
// import img4 from "./images/img4.jpeg";
// import btn from "./images/right-arrow.png"
// import Bubble from "./Bubble";
// import img1 from "../Component/images/img1.png";
// import img2 from "../Component/images/img2.png";
// import img3 from "../Component/images/img3.png";
// import img4 from "../Component/images/card4_services.jpeg";
// import img5 from "../Component/images/services_card5.png";
// import img6 from "../Component/images/services_card_6.jpeg";

import img7 from "../components/images/longweeksbike.jpg"
import img12 from "../components/images/longweek.avif"
import img13 from "../components/images/camp.jpg"
import img8 from "../components/images/riderimg.jpg"
import img9 from "../components/images/widerange.jpg"
import img10 from "../components/images/equipment.jpg"

const Caraousalserv = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1400, itemsToShow: 4.15 },
  ];
  return (
    <div className="BottomServCaraousal">
      <div className="ourserviceheading">
        <h1  className="heading1-service">Our Services</h1>
      </div>

      <div className="ourserviceparagraph">
        <p className="sub-headin-service p-3 ">
          EXPERIENCE ADVENTURE, RIDE AND DELIVERY OPTIONS, RECEIVE
          ROUND-THE-CLOCK SUPPORT
        </p>
      </div>

      <Carousal
        breakPoints={breakPoints}
        isRTL={false}
        showArrows={true}
        pagination={false}
      >
        <Item>
          <div className="item">
            <img src={img7} alt="ueis" />

            <div id="cont">
              <p>Long Weekened Tours</p>
            </div>
          </div>
        </Item>
        <Item>
          <div className="item">
            <img src={img12} alt="ueis" />

            <div id="cont">
              <p>One day Tours</p>
            </div>
          </div>
        </Item>
        <Item>
          <div className="item">
            <img src={img13} alt="ueis" />

            <div id="cont">
              <p>Camps And Events</p>
            </div>
          </div>
        </Item>

        <Item>
          <div className="item">
            <img src={img8} alt="ueis" />

            <div id="cont">
              <p>Experienced Riders</p>
            </div>
          </div>
        </Item>

        <Item>
          <div className="item">
            <img src={img9} alt="ueis" />

            <div id="cont">
              <p>Wide Range Of Bikes</p>
            </div>
          </div>
        </Item>
        <Item>
          <div className="item">
            <img src={img10} alt="ueis" />

            <div id="cont">
              <p>Advanced Safety</p>
            </div>
          </div>
        </Item>
        {/* <Item>
        <div className="item">
          <img src={img4} alt="ueis"  />
          
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
    </div>
  );
};

export default Caraousalserv;
