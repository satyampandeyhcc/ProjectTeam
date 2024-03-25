import React, { useEffect } from "react";
// import Navbar from "../Component/Navbar";
import "../admindashboard.css";
import { Link } from "react-router-dom";

import { document } from "postcss";

import { useState } from "react";

import Table from "../components/BookingTable";
// import AdminNavbar from "./AdminNavbar";
// import AdminNavbar2 from "./AdminNavbar2";
// import Responsesadmin from "./Response2";
import AdminDefaultLayout from "../components/AdminDefaultLayout";
const AdminDashboard = () => {
  const [today, settoday] = useState(0);
  const [pickup, setpickup] = useState(0);
  const [drop, setdrop] = useState(0);
  const [data, setdata] = useState([]);
  const [data2, setdata2] = useState([]);
  const [copydata2, setcopydata2] = useState([]);
  const [searchValue, setsearchValue] = useState("");
  const [copydata, setcopydata] = useState([]);
  const [currentindex, setcurrentindex] = useState(0);
  const [display, setdisplay] = useState(1);

  const [order, setorder] = useState(false);
  const [response, setresponse] = useState(false);
  const [serialNumber, setSerialNumber] = useState(1);
  const [verifieddata, setverifieddata] = useState(0);

  const [numberVerified, setnumberVerified] = useState(0);

  useEffect(() => {
    // console.log(searchValue);
    const d = data2.filter((element) => {
      return (
        element.user.profileName.toLowerCase().substring(0, searchValue.length) ===
        searchValue.toLowerCase()
      );
    });
    setcopydata2(d);
  }, [searchValue, data2]);

  useEffect(() => {
    setSerialNumber(currentindex * 3 + 1);
  }, [currentindex]);

  const fetchAllUser = async () => {
    try {
      const response = await fetch("/api/bookings/getallbookings");
      if (response.ok) {
        const data = await response.json();

        setverifieddata(data);
        console.log(data);
     
        setnumberVerified(data.reduce((acc,curr)=>{
          return acc += curr.guideRequired
    },0));



        setcopydata(data);
        setdata(data);
        // setResp(data);
        // console.log("Response:", data);
        // console.log("Response:", data);
      } else {
        console.error("Error fetching response:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  useEffect(() => {
    fetchAllUser();
  }, []);




  let componentsArr = [];
  for (let i = 1; i <= Math.ceil(copydata.length / 3); i++) {
    componentsArr.push(
      <Link key={i} onClick={() => setcurrentindex(i - 1)}>
        {i}
      </Link>
    );
  }

  const showtable = (e) => {
    e.target.style.background = "#4f89fc";
    setresponse(false);
    setdisplay(1);
    setdata(copydata);
  };

  const handleChange = (x) => {
    // const d = copydata.filter((element) => {
    //   return element.date === getFormattedDate() && element.status === x;
    // });
    // setdata(d);
    // setcurrentindex(0);
  };

  useEffect(() => {
    setdata2(data.slice(currentindex * 3, (currentindex + 1) * 3));
    setcopydata2(data.slice(currentindex * 3, (currentindex + 1) * 3));
  }, [data, currentindex]);

  function getFormattedDate() {
    const today = new Date();
    // console.log(today);

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = today.getFullYear();
    // console.log(`${year}-${month}-${day}`);
    return `${year}-${month}-${day}`;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    // Extract year, month, and day from the date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero indexed, so adding 1
    const day = String(date.getDate()).padStart(2, "0");

    // Format the date as "year-month-day"
    return `${year}-${month}-${day}`;
  }

  //   useEffect(() => {
  //     if (data.length) {
  //       settoday(
  //         data.reduce((acc, element) => {
  //           return (
  //             acc +
  //             (element.date === getFormattedDate() &&
  //               element.status === "order-placed")
  //           );
  //         }, 0)
  //       );
  //       setpickup(
  //         data.reduce((acc, element) => {
  //           return (
  //             acc +
  //             (element.date === getFormattedDate() && element.status === "picked")
  //           );
  //         }, 0)
  //       );
  //       setdrop(
  //         data.reduce((acc, element) => {
  //           return (
  //             acc +
  //             (element.date === getFormattedDate() &&
  //               element.status === "out-for-delivery")
  //           );
  //         }, 0)
  //       );
  //     }
  //   }, [copydata]);

  return (
    <>
      {/* <AdminNavbar2 /> */}
      {/* <AdminNavbar
        order={order}
        setorder={setorder}
        response={response}
        setresponse={setresponse}
      /> */}

      <AdminDefaultLayout>
        <p className="dash-heading">Booking Dashboard</p>

        <div className="navbar search-nav navbar-light">
          <div className="container-search">
            <div className="d-flex">
              <input
                className="form-control-searchbar  me-2"
                type="search"
                placeholder="Enter Customer Name"
                aria-label="Search"
                onChange={(e) => setsearchValue(e.target.value)}
              />
              <div className="btnn-container">
                <button className="search-btn" style={{ padding: "0px 2px" }}>
                  Search
                </button>
              </div>

              {/* <i class="bi bi-search"></i> */}
              <div className="sr">
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#C4C4C4"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {display ? (
          <>
            <div className="cards" style={{ display: "flex" }}>
              <div
                className="card"
                name="order-placed"
               
              >
                <div
                  className="card-body"
                  onClick={() => handleChange("order-placed")}
                >
                  <p className="card-title prices">{numberVerified}</p>
                  <p
                    className="card-subtitle mb-2 today-order"
                   
                  >
                    GuideRequired
                  </p>
                </div>
                <div
                  className="card-msg"
                  onClick={() => handleChange("order-placed")}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="64"
                      height="64"
                      rx="32"
                      fill="#F2994A"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M44 17H20C18.35 17 17 18.35 17 20V47L23 41H44C45.65 41 47 39.65 47 38V20C47 18.35 45.65 17 44 17ZM44 38H21.8L20 39.8V20H44V38Z"
                      fill="#F39C12"
                    />
                  </svg>
                </div>
              </div>
              <div
                className="card"
                name="picked"
                onClick={() => handleChange("picked")}
              >
                <div
                  className="card-body"
                  onClick={() => handleChange("picked")}
                >
                  <p className="card-title prices">{data.length - numberVerified}</p>
                  <p
                    className="card-subtitle mb-2 today-order"
                    onClick={() => handleChange("picked")}
                  >
                    Not GuideRequired
                  </p>
                </div>
                <div
                  className="card-msg"
                  onClick={() => handleChange("picked")}
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="64"
                      height="64"
                      rx="32"
                      fill="#F2994A"
                      fill-opacity="0.2"
                    />
                    <path
                      d="M44 17H20C18.35 17 17 18.35 17 20V47L23 41H44C45.65 41 47 39.65 47 38V20C47 18.35 45.65 17 44 17ZM44 38H21.8L20 39.8V20H44V38Z"
                      fill="#F39C12"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Table
              data={copydata2}
              // data={copydata}
              setdata={setdata}
              serialNumber={serialNumber}
            />

            <div className="page">
              <div class="pagination">{componentsArr}</div>
            </div>
          </>
        ) : (
          <p></p>
          //   <Responsesadmin />
        )}
      </AdminDefaultLayout>
    </>
  );
};

export default AdminDashboard;
