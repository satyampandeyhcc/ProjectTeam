import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tablerow(props) {
  const data = props.data;
  function formatDateTime12hr(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    let hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');
    const period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
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
        <Link to={`/adminprofile?id=${data._id}&name=${data.profileName}&email=${data.username}&contact=${data.mobileNumber}&verified=${data.verified}`} style={{ color: "#D97474" }}>
          {data._id}
        </Link>
      </td>
      <td className="td-style-maxi">{data.profileName} </td>
      <td className="td-style-maxi">{data.username}</td>
      <td className="td-style-maxi">{data.mobileNumber}</td>
      <td className="td-style-service">{formatDateTime12hr(data.createdAt)}</td>
      <td className="td-style-maxi">{formatDateTime12hr(data.updatedAt)}</td>
      {/* <td className="td-style-maxi">₹{data.totalAmount}</td> */}

      <td>
        {!data.verified?
        <div className="picked">
            Unverified
        </div>:
        <div className="out-for-delivery">
          Verified
          </div>}
        
      </td>
      
    </tr>
  );
}
