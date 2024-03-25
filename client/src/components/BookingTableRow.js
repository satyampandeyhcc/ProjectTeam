import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tablerow(props) {
  const data = props.data;
  console.log(data.guideRequired);

  console.log(data);
  console.log(1223);
  console.log(data._id)

  function formatDateTime12hr(dateString) {
    const date = new Date(dateString);
  
    // Extract year, month, day, hour, and minute from the date object
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero indexed, so adding 1
    const day = String(date.getDate()).padStart(2, '0');
    let hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');
    const period = hour >= 12 ? 'PM' : 'AM';
  
    // Convert hour to 12-hour format
    hour = hour % 12 || 12;
  
    // Format the date as "year-month-day hour:minute AM/PM"
    return `${year}-${month}-${day}  ${hour}:${minute} ${period}`;
  }
  const [selectedValue, setSelectedValue] = useState(data.status);
  const handleChange = (event) => {
    event.preventDefault();
    const prevvalue = selectedValue;
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  useEffect(() => {
    setSelectedValue(data.status);
  }, [data.status]);

  // const [selectedValue, setSelectedValue] = useState(status);

  return (
    <tr>
      <th className="srid" scope="row">
        {props.sno}
      </th>
      <td className="td-red">
        <Link to={`/adminprofile?id=${data.user._id}&name=${data.user.profileName}&email=${data.user.username}&contact=${data.user.mobileNumber}&verified=${data.user.verified}`} style={{ color: "#D97474" }}>
          {data.user._id}
        </Link>
      </td>

      <td className="td-style-maxi">{data.user.profileName} </td>
      <td className="td-style-maxi">{data._id} </td>
      <td className="td-style-maxi">{data.transactionId} </td>
      <td className="td-style-maxi">{data.car?.name}</td>
      <td className="td-style-service">{formatDateTime12hr(data.createdAt)}</td>
      <td className="td-style-maxi">{data.bookedTimeSlots.from}</td>
      <td className="td-style-maxi">{data.bookedTimeSlots.to}</td>
      <td className="td-style-maxi">{data.totalHours}</td>
      <td className="td-style-maxi">{data.totalAmount}</td>
      <td className="td-style-maxi">{data.car?.rentPerHour}</td>
      <td className="td-style-maxi">{data.car?.fuelType}</td>
      <td className="td-style-maxi">{data.guideRequired?"Yes":"NO"}</td>


      {/* <td className="td-style-maxi">{formatDateTime12hr(data.updatedAt)}</td> */}
      {/* <td className="td-style-maxi">₹{data.totalAmount}</td> */}

      {/* <td>
        {!data.verified?
        <div className="picked">
            Unverified
        </div>:
        <div className="out-for-delivery">
          Verified
          </div>}
        
      </td> */}
    </tr>
  );
}
