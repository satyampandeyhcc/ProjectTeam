import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../components/images/logoimg.jpg";
import email from "../components/images/Email.png";
import phone from "../components/images/PhoneCall.png";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from 'react-bootstrap/Navbar';
// import "../Project.css";

function DefaultLayout(props) {
  const token = localStorage.getItem("user");

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleLogout = (e) => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>





      <style>
        {`
  
  @media screen and (max-width: 991px) {


    .navbar-logout {
      direction:flex;
      flex-direction:column;
    }
    }

    .heading-bike {
      font-size: 2.5vw;
      margin-left: 4px;
      /* fontFamily: sans-serif; */
      border-radius: 94px;
      font-weight: bold;
      color: orangered;
    }
    .my-logo-nav {
      width: 8%;
      height: 60%;
      margin-left: 4px;
    }
    @media screen and (max-width: 900px) {


      .heading-bike {
      font-size:4vw;
     
      }

      .my-logo-nav {
        width: 12%;
      
      }
      }
  
  
  

    .my-nav-btn2:hover {
      text-decoration: none;
    }
    .height123{
      background:#f0f0f082;
      height:10vh;
    }

    @media screen and (max-width: 1000px) {


      .height123{
        
        height:auto;
      }

     
    }

    
  
    
    `}
      </style>



    




      <nav
        // style={{ background: "" ,height:"auto"}}
        className="navbar my-nav-bar navbar-expand-lg height123"
      >
        <Link className="navbar-brand ml-3 w-50 my-links" to="/">
          <div style={{ display: "flex" }}>
            <img
              className="my-logo-nav"
              alt=""
              src={logo}
             
            />
            <div
              className="heading-bike"
              style={{textTransform:"none"}}
          
            >
              bikeRidingVenture
            </div>
          </div>
        </Link>
        {/* <Link className="navbar-brand ml-lg-5 ml-4 my-links" to="/">
          LOGO
        </Link> */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><FaBars /></span>
         
        </button> */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {isNavbarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ml-2">
              <Link className="nav-link " to="/" style={{ color: "orangered" }}>
                Home
              </Link>
            </li>

            <li className="nav-item ml-2">
              <Link
                className="nav-link "
                to="/viewbike"
                style={{ color: "orangered" }}
              >
                Book now
              </Link>
            </li>

            <li className="nav-item ml-2">
              <Link
                className="nav-link "
                to="/contact"
                style={{ color: "orangered" }}
              >
                Contact Us
              </Link>
            </li>


            <li className="nav-item ml-2">
              <Link
                className="nav-link "
                to="/allstore"
                style={{ color: "orangered" }}
              >
                Available Branch
              </Link>
            </li>

            {!token ? (
              <>
                <Button
                  style={{ marginLeft: "20px", color: "orangered" }}
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                >
                  Login
                </Button>
                <Button
                  style={{ marginLeft: "20px", color: "orangered" }}
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                >
                  Signup
                </Button>
              </>
            ) : (
              <div className="d-flex navbar-logout">
                <li className="nav-item ml-2">
                  <Link
                    className="nav-link "
                    to="/userbookings"
                    style={{ color: "orangered" }}
                  >
                    My Booking
                  </Link>
                </li>

                <li className="nav-item ml-2">
                  <Link
                    className="nav-link  "
                    to="/myprofile"
                    style={{ color: "orangered" }}
                  >
                    My Profile
                  </Link>
                </li>

                <Button
                  style={{ marginLeft: "20px", color: "orangered" }}
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href = "/";
                  }}
                  // onClick={handleLogout}
                >
                  Logout
                </Button>
              </div>
            )}
          </ul>
        </div>
      </nav>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
