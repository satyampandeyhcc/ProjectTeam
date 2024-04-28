import React from "react";
// import DatePick from "./Datepicker";

import { useState } from "react";
import TableRow from "./BookingTableRow";
import { useEffect } from "react";
export default function Table({data,  setdata, serialNumber}) {

    console.log(data);
    console.log(1514);
//   const [startdate, setstartdate] = useState("1970-01-01");
//   const [enddate, setenddate] = useState("1970-01-01");

//   var d1 = startdate.split("-");
//   var d2 = enddate.split("-");

//   var from = new Date(d1[0], parseInt(d1[1]) - 1, d1[2]);
//   var to = new Date(d2[0], parseInt(d2[1]) - 1, d2[2]);




  return (
    <div className="table-content">
      <div className="table-head">
        <div>
          <h3 className="customer-head">All Bookings</h3>
        </div>

        {/* <DatePick setstartdate={setstartdate} setenddate={setenddate} /> */}
      </div>

      <div className="table-container" style={{overflow:"auto"}}>
        <table className="table caption-top">
          <thead>
            <tr className="tr-sub">
              <th scope="col">S.No</th>
              <th scope="col">Customer Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Booking Id</th>
              <th scope="col">Transaction Id</th>
              <th scope="col">Bike Name</th>
              <th scope="col">Booking Date</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Total Hours</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Bike RentPerHour</th>
              <th scope="col">Fuel Type</th>
              <th scope="col">Driver Required</th>
              <th scope="col">Delete Booking</th>
             
              {/* <th scope="col">Weight</th>
              <th scope="col">Amount</th> */}
              {/* <th scope="col">Status</th> */}
            </tr>
          </thead>
          <tbody>
          {console.log(data)}
            {data.map((e,i) => {
            //   let parts = e.date.split("-");
            //   let date = new Date(parts[0], parseInt(parts[1]) - 1, parts[2]);
            //   if (
            //     startdate === "1970-01-01" ||
            //     enddate === "1970-01-01" ||
            //     (date >= from && date <= to)
            //   )
console.log(serialNumber);
                return <TableRow data={e} sno={serialNumber+i}/>;
            })}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
