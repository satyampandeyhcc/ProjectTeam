import React from 'react'
import {Link} from "react-router-dom"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaWhatsapp } from "react-icons/fa";
import logo from "../components/images/logoimg.jpg";
// import "../Project.css";
const Footer = () => {
  return  (

    <div>
      
         <footer className="text-center text-lg-start my-footer bg-body-tertiary ">
    {/* Section: Social media */}
   
    <section className="d-flex  justify-content-center justify-content-lg-between  p-0">
     
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="mb-2">
      <div className="container  text-dark text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row  ">
          {/* Grid column */}
          
            
          
          <div className="col-md-5 col-lg-5   col-xl-3 mx-auto mb-5">
            {/* Content */}
            <div className="col-lg-12 col-md-12  col-sm-12">
            <Link  to="/">
              <img
                className="  my-logo-footer"
                alt=""
                src={logo}

                style={{
                  width: "62%",
                  height: "60%",
                  borderRadius: "94px",
                }}
              />
              </Link>
            </div>
            {/* <h2 className="text-uppercase  font-weight-bold mb-4">
            <Link to="/" className="text-reset">
           Laugh n Laundry 
              </Link>
              </h2> */}
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 mt-3 col-lg-3 col-xl-3 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bolder mb-4">
              Company Address
            </h6>
            <p>
              <Link target='blank' to="https://maps.app.goo.gl/UN4CCqPbg4dnBaz67" className="text-reset">
              Show Room no.14,15 <br /> Varanasi Residency <br /> Haewliya Colony <br />  Rathyatra Chauraha Varanasi, UttarPradesh, 221007
              </Link>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 mt-3 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bolder mb-4">
              Operating Hours
            </h6>
            <p >All Days</p>
            <p>10 am - 10 pm</p>
            {/* <p>Sunday: 9am-6pm</p> */}
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 mt-3 col-lg-2 col-xl-2 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase font-weight-bolder mb-3">
              Check us out
            </h6>
            <p className='icons'>
              <Link target='blank' to="tel:+918318453686" className="text-reset">
              <FaWhatsapp />
              </Link>
            </p>
            <p className='icons'>
            <Link target='blank' to="https://www.instagram.com/pandey_satyam24/" className="text-reset">
            <FaInstagram />
              </Link>
            </p>
            <p className='icons'>
            <Link target='blank' to="https://www.facebook.com/profile.php?idW" className="text-reset">
            <FaFacebook />
              </Link>
              </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
 
    {/* Section: Links  */}
    {/* Copyright */}
    {/* Copyright */}
  </footer>




  <div class="bikes_bottom_header_one section_padding_50 text-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p>
              BikeRiding Venture ©2024 | All Rights Reserved, designed and deployed by
              <a href="#">&nbsp;Haribol <i class="fa fa-love"></i></a>
            </p>
          </div>
        </div>
      </div>
    </div>









  
    </div>
  )
}

export default Footer