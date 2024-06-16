import React, { useEffect, useState } from "react";

import Feedback1 from "../components/Feedback1";

import AdminDefaultLayout from "../components/AdminDefaultLayout";

const Responses = () => {
  const [resp, setResp] = useState([]);

  const fetchResponses = async () => {
    try {
      const response = await fetch(
        "https://bikeridingventure.onrender.com/api/users/getAllcontact"
      );
      if (response.ok) {
        const data = await response.json();
        setResp(data.reverse());
        console.log("Response:", data);
      } else {
        console.error("Error fetching response:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching orders:", error.message);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, []);

  return (
    <>
      <AdminDefaultLayout>
        <section>
          <div className="container my-3 py-5">
            <h2>Responses</h2>
            <div className="row d-flex mt-4 justify-content-center">
              <div className="col-md-12 col-lg-10 col-xl-8">
                <h3>Commends</h3>

                <div className="container">
                  {resp.map((response) => (
                    <Feedback1 response={response} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AdminDefaultLayout>
    </>
  );
};

export default Responses;
