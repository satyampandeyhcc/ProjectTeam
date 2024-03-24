import React from "react";
// import DatePick from "./Datepicker";
import TableRow from "./Tablerow";
import { useState } from "react";
import Tablerow from "./Tablerow";
import { useEffect } from "react";
export default function Table({data,  setdata, serialNumber}) {

    console.log(data);
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
          <h3 className="customer-head">All Customers</h3>
        </div>

        {/* <DatePick setstartdate={setstartdate} setenddate={setenddate} /> */}
      </div>

      <div className="table-container">
        <table className="table caption-top">
          <thead>
            <tr className="tr-sub">
              <th scope="col">S.No</th>
              <th scope="col">Customer Id</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Created At</th>
              <th scope="col">Updated At</th>

             
              {/* <th scope="col">Weight</th>
              <th scope="col">Amount</th> */}
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
          
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
