import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "antd";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../components/images/logoimg.jpg";

function AdminDefaultLayout(props) {
  const token = localStorage.getItem("admin");

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
    
    `}
      </style>



      {/* <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between align-items-center">
            
               
                  <Link to="/" style={{ color: "orangered" }}>
                    BikeRidingVenture
                  </Link>
                
            
              <div className="d-flex align-items-center">
                <Link to="/admin">Home</Link>

                <Link to="/login" style={{ marginLeft: "20px" }}>
                  User Account
                </Link>
               
                <Link to="/admindashboard" style={{ marginLeft: "20px" }}>
                  User Dashboard
                </Link>

                <Link to="/bookingdashboard" style={{ marginLeft: "20px" }}>
                  Booking Dashboard
                </Link>

                <Link to="/adminresponse" style={{ marginLeft: "20px" }}>
                  Response
                </Link>

               



          

               
                
                  <Button
                    style={{ marginLeft: "20px", color: "orangered" }}
                    onClick={() => {
                      localStorage.removeItem("admin");
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </Button>
               
              </div>
            </div>
          </Col>
        </Row>
      </div> */}


<nav
        style={{ background: "#f0f0f082" }}
        className="navbar my-nav-bar navbar-expand-lg"
      >
        <Link className="navbar-brand ml-3 w-50 my-links" to="/">
          <div style={{display:"flex"}}>
          <img
            className="  my-logo-nav"
            alt=""
            src={logo}
          
            />
          <div  className="heading-bike" >

         BikeRidingVenture
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
              <Link className="nav-link " to="/admin"      style={{color:"orangered"}}>
                Home
              </Link>
            </li>

            <li className="nav-item ml-2">
              <Link
                className="nav-link "
                to="/login"
                style={{color:"orangered"}}
              >
                User Account
              </Link>
            </li>
           
            <li className="nav-item ml-2">
              <Link 
                className="nav-link "
                to="/adminuserdashboard"
                style={{color:"orangered"}}
              >
                User Dashboard
              </Link>
            </li>

            <li className="nav-item ml-2">
              <Link
                className="nav-link "
                to="/adminbookingdashboard"
                style={{color:"orangered"}}
              >
                Booking Dashboard
              </Link>
            </li>
         


            
            <li className="nav-item ml-2">
              <Link
                className="nav-link "
                to="/adminresponse"
                style={{color:"orangered"}}
              >
                Response
              </Link>
            </li>





              <Button 
                      style={{ marginLeft: "20px", color: "orangered",  }}
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.href = "/";
                      }}
                      // onClick={handleLogout}
                    >
                      Logout
                    </Button>

                
            
          </ul>
        </div>
      </nav>






      
      <div className="content">{props.children}</div>
    </div>
  );
}

export default AdminDefaultLayout;
