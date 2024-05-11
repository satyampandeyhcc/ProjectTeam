import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
import Feedback1 from '../components/Feedback1';
// import AdminNavbar from "./AdminNavbar";
import DefaultLayout from "../components/DefaultLayout";
// import AdminNavbar2 from "./AdminNavbar2";

const Allstore = () => {
  const [resp, setResp] = useState([]);

  const fetchResponses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/users/getAllcontact");
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
     
      {/* <AdminNavbar order={false} response={true} /> */}
      <DefaultLayout>
      <section>
        <div className="container my-3 py-5">
          <h2>ALL AVAILABLE BRANCHES IN VARANASI</h2>
          <div className="row d-flex mt-4 justify-content-center">
            <div className="col-md-12 col-lg-10 col-xl-8">
              {/* <h3>BIKE RIDING VENTURE
              </h3> */}

             
              <>
      <div className="card-body">
        <div>

          <h6 className="font-weight-bold mb-1 d-inline">1- DURGAKUND CHURAHA </h6>{" "}

          <div>
          <span className='text-muted ml-3'> JRS Bhawan, Durgakund,Varanasi-221005, Uttar Pradesh, India.
                    
                    Pin Code: 221010
                    <br></br>
                    Email:-durgabiking@gmail.com
                    <br></br>

                    contact:- 98786574233</span>
                    </div>
                  

                    
         
        </div>
       
        
        <hr /> 
      </div>
    </>



    <div className="container ">
              <h4>NEW STORE AVAILABLE SOON!!
              </h4>

              </div>



              <>
      <div className="card-body">
        <div>

          <h6 className="font-weight-bold mb-1 d-inline">2- RATHYATRA CHURAHA  </h6>{" "}

          <div>
          <span className='text-muted ml-3'> JRS Bhawan, Durgakund,Varanasi-221005, Uttar Pradesh, India.
                    
                    Pin Code: 221010
                    <br></br>
                    Email:-durgabiking@gmail.com
                    <br></br>

                    contact:- 98786574233</span>
                    </div>
                  

                    
         
        </div>
       
        
        <hr /> 
      </div>
    </>



    
    <>
      <div className="card-body">
        <div>

          <h6 className="font-weight-bold mb-1 d-inline">3- SARNATH CHURAHA  </h6>{" "}

          <div>
          <span className='text-muted ml-3'> JRS Bhawan, Durgakund,Varanasi-221005, Uttar Pradesh, India.
                    
                    Pin Code: 221010
                    <br></br>
                    Email:-durgabiking@gmail.com
                    <br></br>

                    contact:- 98786574233</span>
                    </div>
                  

                    
         
        </div>
       
        
        <hr /> 
      </div>
    </>



  

    


              {/* <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/>
       <Feedback1/> */}
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      </DefaultLayout>
    </>
  );
};

export default Allstore;