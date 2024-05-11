import { Col, Row, Divider, DatePicker, Checkbox, Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
import Spinner from "../components/Spinner";
import { getAllBikes } from "../redux/actions/bikesActions";
import moment from "moment";
import { bookBike } from "../redux/actions/bookingActions";
import StripeCheckout from "react-stripe-checkout";
import AOS from "aos";
import { useParams,NavLink } from "react-router-dom";

import "aos/dist/aos.css"; // You can also use <link> for styles
import { getstatus } from "../redux/actions/userActions";

const { RangePicker } = DatePicker;
function BookingBike({ match }) {
  const { bikeid } = useParams();
  const { verified } = useSelector((state) => state.statusView);
 
  
  
  useEffect(() => {
    dispatch(getstatus(JSON.parse(localStorage.getItem("user"))._id));
  }, []);
  
  const { bikes } = useSelector((state) => state.bikesReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [bike, setbike] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [guide, setguide] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  //Find bike by id
  useEffect(() => {
    if (bikes.length == 0) {
      dispatch(getAllBikes());
    } else {
      setbike(bikes.find((o) => o._id == bikeid));
    }
  }, [bikes]);
  useEffect(() => {
    let calculatedTotalAmount = totalHours * bike.rentPerHour;
    if (guide) {
      // If guide is required, add $30 per hour
      calculatedTotalAmount += 30 * totalHours;
    }
    
    // Round the totalAmount to two decimal places
    setTotalAmount(parseFloat(calculatedTotalAmount.toFixed(2)));
  }, [guide, totalHours]);

  // function selectTimeSlots(values) {
  //   setFrom(moment(values[0]).format("MMM DD yyyy HH:mm"));
  //   setTo(moment(values[1]).format("MMM DD yyyy HH:mm"));

  //   setTotalHours(values[1].diff(values[0], "hours"));
  // }


  function selectTimeSlots(values) {
    // Check if values is null or empty
    if (!values || values.length < 2) {
        // Handle the case where values is null or empty
        setFrom(null); // Reset from state
        setTo(null); // Reset to state
        setTotalHours(0); // Reset totalHours state
        console.error("Invalid values array:", values);
        return;
    }

    const startTime = moment(values[0]);
    const endTime = moment(values[1]);

    setFrom(startTime.format("MMM DD yyyy HH:mm"));
    setTo(endTime.format("MMM DD yyyy HH:mm"));

    const durationInMinutes = endTime.diff(startTime, "minutes", true) ; // Calculate duration in minutes with an additional minute

    // Convert duration in minutes to hours with two decimal places of precision
    const totalHours = (durationInMinutes / 60).toFixed(2);

    setTotalHours(parseFloat(totalHours)); // Set total hours including minutes as a floating-point number with two decimal places
}




  function onToken(token) {
    console.log(token);
    const reqObj = {
      token,
      user: JSON.parse(localStorage.getItem("user"))._id,
      bike: bike._id,
      totalHours,
      totalAmount,
      guideRequired: guide,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(bookBike(reqObj));
  }
  const disabledDate = (current) => {
    // Disable dates before today
    return current && current < moment().startOf('day');
  };
  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "90vh" }}
      >
        <Col lg={10} sm={24} xs={24} className="p-3">
          <img
            src={bike.image}
            className="bikeimg2 bs1 w-100"
            data-aos="flip-left"
            data-aos-duration="1500"
          />
        </Col>

        <Col lg={10} sm={24} xs={24} className="text-right">
          <Divider type="horizontal" dashed>
            Bike Info
          </Divider>
          <div style={{ textAlign: "right" }}>
            <p>{bike.name}</p>
            <p>{bike.rentPerHour} Rent Per hour /-</p>
            <p>Type / Description: {bike.fuelType}</p>
            <p> Available bikes : {bike.capacity}</p>

            <p>Pick at :-&nbsp;
                  <NavLink className="button-781" to="/allstore" style={{}}>
                   Durgakund Churaha, Varanasi
            </NavLink>

            </p>
          </div>

          <Divider type="horizontal" dashed>
            Select Time Slots
          </Divider>
          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD yyyy HH:mm"
            onChange={selectTimeSlots}
            disabledDate={disabledDate}
          />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          {from && to && (
            <div>
              <p>
                Total Hours : <b>{totalHours}</b>
              </p>
              <p>
                Rent Per Hour : <b>{bike.rentPerHour}</b>
              </p>
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setguide(true);
                  } else {
                    setguide(false);
                  }
                }}
              >
                Driver Required
              </Checkbox>

              <h3>Total Amount : ₹ {totalAmount}</h3>

              {verified?<StripeCheckout
                shippingAddress
                token={onToken}
                currency="INR"
                amount={totalAmount * 100}
                stripeKey="pk_test_51OvXtUSED8rhSVdkZC0cnXzFrtPdrR3vUsDAazba7MAAiuYLd3Px8ChNcSX7u23Tmmq0UuaVJGFpgjNmSDUZJbiq00oskZnlt8"
                // stripeKey="pk_test_51PEY8qSBvNz3idXhsIT15bA0p3ZZ0MOkfVV6bhCC8SwGvhzpoaR0YfPl1vIkf7qAJohv4UyNWrL48cBWBjzvteav00eAF5nTVL"
              >
               <button className="btn1">Book Now</button>
              </StripeCheckout>:<button onClick={()=>window.location.href='/myprofile'} className="btn1">Go To verification</button>}
            </div>
          )}
        </Col>

        {bike.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {bike.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
      </Row>
    </DefaultLayout>
  );
}

export default BookingBike;
