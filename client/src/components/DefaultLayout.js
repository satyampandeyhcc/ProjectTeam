import React from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "antd";

function DefaultLayout(props) {
  const token = localStorage.getItem("user");

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
                <Link to="/">Home</Link>
                <Link to="/viewbike" style={{ marginLeft: "20px" }}>
                  BikeShowcase
                </Link>

{token ?( <Link to="/userbookings" style={{ marginLeft: "20px" }}>
                  My Bookings
                </Link>) : (null)}
               



                <Link to="/contact" style={{ marginLeft: "20px" }}>
                  Contact
                </Link>

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
                  <Button
                    style={{ marginLeft: "20px", color: "orangered" }}
                    onClick={() => {
                      localStorage.removeItem("user");
                      window.location.href = "/";
                    }}
                  >
                    Logout
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
