import React from 'react'
import {Link} from "react-router-dom"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
// import { FaWhatsapp } from "react-icons/fa";
import logo from "../components/images/Component1.jpg";
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
              Show Room no.14,15 <br /> Darpan Residency <br /> Chindsa Colony <br /> Khanpur, Kharar, 140301
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
              <Link target='blank' to="https://wa.me/c/917707913579" className="text-reset">
              <FaWhatsapp />
              </Link>
            </p>
            <p className='icons'>
            <Link target='blank' to="https://www.instagram.com/laughnlaundry?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D" className="text-reset">
            <FaInstagram />
              </Link>
            </p>
            <p className='icons'>
            <Link target='blank' to="https://www.facebook.com/profile.php?id=61554678826276&mibextid=ZbW" className="text-reset">
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
  <div
    className="text-center p-1 mb-3 mt-3"
    style={{ backgroundColor: "rgba(254, 254, 254, 0.05)" }}
  >
    <p className="font-weight-bolder">Design &amp; Developed by  <Link target='blank' to="https://appeniusprivatelimited.com/" className="text-reset">
            Appenius
              </Link></p>
  </div>
  
    </div>
  )
}

export default Footer