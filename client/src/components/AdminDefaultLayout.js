import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "antd";

function AdminDefaultLayout(props) {
  const token = localStorage.getItem("admin");

  return (
    <div>
      <div className="header bs1">
        <Row gutter={16} justify="center">
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex justify-content-between align-items-center">
              <h1>
                <b>
                  <Link to="/" style={{ color: "orangered" }}>
                    BikeRidingVenture
                  </Link>
                </b>
              </h1>
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

               



                {/* <Link to="/contact" style={{ marginLeft: "20px" }}>
                  Contact
                </Link> */}
                {/* {token ?( <Link to="/userbookings" style={{ marginLeft: "20px" }}>
                  My Booking
                </Link>) : (null)} */}

               
                
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
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default AdminDefaultLayout;
