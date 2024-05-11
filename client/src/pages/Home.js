import email from "../components/images/Email.png";
import phone from "../components/images/PhoneCall.png";
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { NavLink } from "react-router-dom";
import DefaultLayout from '../components/DefaultLayout';
import CaraousalBottom from '../components/Caraousal';
import Caraousalserv from '../components/Caraousalserv';
import img7 from "../components/images/Component1.jpg"
import Carahome from '../components/Carahome';
import Footer from '../components/Footer'
import Loader from "../components/Loader"
import Navbar from 'react-bootstrap/Navbar';

// import Footer from '../components/Footer';


const Home = () => {

  const loaderRef = useRef();
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchInitialData = async () => {
      // Perform any initial data fetching or setup here

      // Simulate a 3-second delay for demonstration purposes
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Update loading state after the delay
      setLoading(false);
      if(loaderRef.current)
      loaderRef.current.stopLoading();
    };

    fetchInitialData();
  }, []);


  return (
    <>

     {loading ? (
        <Loader ref={loaderRef} />
      ) : (

        <>


<style>
{
            `

            .reg-img {
  object-fit: cover;
  width: 69%;
}

/* styles.css */
.my-section-5 {
  padding: 20px;
  background-color: #f5f5f5;

}

.img-section5 {
  width: 50vw;
  height: auto;
  border-radius:23px;
}

.my-main-heading {
  font-size: 24px;
  font-weight: bold;
}

.my-para-section5 {
  font-size: 18px;
  line-height: 1.5;
  padding:"20px"
}
.image-about{
    display:flex;
}




.h1-text-home{
    // z-index: 2;
    color: #e9d2b8;
    margin-top: -558px;
    font-size: 4vw;
    font-weight: 900;
    width: 800px;

    padding-left: 88px;
}



@media only screen and (max-width: 1500px) and (min-width: 1000px) {
  .h1-text-home {
      margin-top: -500px; /* Adjusted margin for smaller screens */
      font-size: 4vw; /* Adjusted font size for smaller screens */
      width: 50%; /* Adjusted width for smaller screens */
      padding-left: 20px; /* Adjusted padding for smaller screens */
  }
}


@media only screen and (max-width: 1000px) {
  .h1-text-home {
      margin-top: -493px; /* Adjusted margin for smaller screens */
      font-size: 6vw; /* Adjusted font size for smaller screens */
      width: 50%; /* Adjusted width for smaller screens */
      padding-left: 20px; /* Adjusted padding for smaller screens */
  }
}

// .btn-text-book{
//     // position: absolute;
//     margin-left: -54vw;
//     margin-top: 30vw;
// }

.btn-home{
 
        display: inline-block;
        margin-top: 4rem;
        padding: 0.1rem 1rem;
        background: rgb(243, 239, 239);
        // cursor: pointer;
        font-size: 1.4rem;
        border-radius: 0.5rem;
        font-weight: 500;
        text-align: center;
        color: white;
    }



.btn-home:hover{
    background:#d3a386;
    color: #d3a386;
}





.headname{
  color:orange;
 
}
  @media only screen and (max-width: 1000px) {
    .removenav {
      // color: red;
      display: none;
    }

    .headname{
      justify-content: center;
    }

  
  }

  @media only screen and (max-width: 530px) {
   

    .headname{
      font-size:3.5vw;
    }

  
  }

            `
}
</style>


<Navbar bg="dark" variant="dark" sticky="top" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', height: "37px" }}>
<Navbar.Brand href="/" ><p className="headname" >Explore Varanasi live! Secure your ride today!</p></Navbar.Brand>
<Navbar.Toggle />
<Navbar.Collapse className="justify-content-end " >
  <Navbar.Text  className='removenav'  >
    <img
      className="my-logo-nav"
      alt=""
      src={email}
    />&nbsp;
    <a style={{ textTransform: "none" }} href="mailto:bikeridingventure@gmail.com">
      <span style={{ color: "orange" }}>&nbsp;bikeridingventure@gmail.com</span>
    </a>
  </Navbar.Text>
  <Navbar.Text className='removenav'>
    <img
      className="my-logo-nav"
      alt=""
      src={phone}
    />
    <a href="tel:+918318453686">
      <span style={{ color: "orange" }}>&nbsp;+91 8318453686</span>
    </a>
  </Navbar.Text>
</Navbar.Collapse>
</Navbar>


        <DefaultLayout>


       
<div>
{/* <img data-speed="5" className="home-parallax" src="/image/bike.avf.jpg" alt=""  style={{objectFit:"cover", width:"100%"}}/> */}

  <Carahome/>
  
{/* <h1  className='h1-text-home' >
Discover the joy of biking in the serene plains with Plain Ventures!  </h1>

<NavLink className="btn-home  btn-text-book" to="/viewbike"style={{ color: "white" }}>Bike Showcase</NavLink> */}
</div> 

<CaraousalBottom/>



<Caraousalserv/>


<section className="container-fluid my-section-5">
   
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-6">
              {/* <img className="img-section5 mt-5" src="images/section5.jpeg" alt="" /> */}
              <img className="img-section5 mt-5" alt="" src={img7} />
              {/* <h1 class="my-main-heading ">Every Spin Tells A story</h1> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="mt-5 py-lg-5 w-75 m-5">
                {/* <h1 className="font-weight-bold">Laugh n Laundry</h1> */}
                <p className=" my-para-section5  mt-lg-2">
                Welcome to BikeRiding Venture – Your Trusted Riding Partner!
<br/> <br/>
Discover the joy of biking in the serene plains with Plain Ventures! Specializing in top-notch bike adventures in flat landscapes, we bring the thrill of mountain biking to the plains. Our carefully crafted tours are designed by experienced riders who understand the needs of fellow biking enthusiasts.

At Plain Ventures, we prioritize your satisfaction and fun, ensuring every detail of your biking experience is organized with style, passion, and expertise. Embrace the beauty of the plains as we take you on exciting rides, offering not just biking but a chance to immerse yourself in local culture, history, and traditions.

{/* Choose Plain Ventures for an unforgettable biking experience where you'll ride through picturesque landscapes, enjoy delicious local cuisine, and connect with the community. We utilize locally operated services, contributing to the prosperity of the regions we explore. */}
</p>
              </div>
            </div>
          </div>
        </section>

        {/* <Footer/> */}
      </DefaultLayout>
      
<Footer/>

</>

)}
      </>
     
    
  );
};

export default Home;