import React, { useEffect } from "react";
// import Navbar from "../Component/Navbar";
import "../admindashboard.css";
import { Link } from "react-router-dom";

import { document } from "postcss";

import { useState } from "react";

import Table from "../components/Table";
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

//   useEffect(() => {
//     console.log(searchValue);
//     const d = data2.filter((element) => {
//       return (
//         element.name.toLowerCase().substring(0, searchValue.length) ===
//         searchValue.toLowerCase()
//       );
//     });
//     setcopydata2(d);
//   }, [searchValue, data2]);

//   useEffect(() => {
//     setSerialNumber(currentindex * 12 + 1);
//   }, [currentindex]);

const fetchAllUser = async () => {
    try {
      const response = await fetch("/api/users/allusers");
      if (response.ok) {
        const data = await response.json();
      // console.log(data);

      setcopydata(data);
      setdata(data);
        // setResp(data);
        console.log("Response:", data);
        console.log("Response:", data);
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

//   let componentsArr = [];
//   for (let i = 1; i <= Math.ceil(copydata.length / 12); i++) {
//     componentsArr.push(
//       <Link key={i} onClick={() => setcurrentindex(i - 1)}>
//         {i}
//       </Link>
//     );
//   }

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

//   useEffect(() => {
//     setdata2(data.slice(currentindex * 12, (currentindex + 1) * 12));
//     setcopydata2(data.slice(currentindex * 12, (currentindex + 1) * 12));
//   }, [data, currentindex]);

//   function getFormattedDate() {
//     const today = new Date();
//     console.log(today);

//     const day = String(today.getDate()).padStart(2, "0");
//     const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
//     const year = today.getFullYear();
//     console.log(`${year}-${month}-${day}`);
//     return `${year}-${month}-${day}`;
//   }
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
        <p className="dash-heading">Dashboard</p>

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
           

            <Table
            //   data={copydata2}

            data={copydata}
              setdata={setdata}
              serialNumber={serialNumber}
            />

            <div className="page">
              {/* <div class="pagination">{componentsArr}</div> */}
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
