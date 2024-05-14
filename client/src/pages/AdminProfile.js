import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import {
  ImageFormSubmit,
  VerifySubmit,
  contactFormSubmit,
  getAllimages,
} from "../redux/actions/userActions";
import { storage } from "../fbconfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
// import Footer from "./Footer";
// import contactimg from "../components/images/editimg.jpeg";
import location from "../components/images/Map Pin.png";
import mail from "../components/images/Email.png";
import phone from "../components/images/PhoneCall.png";
import "../contact.css";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";
import { getstatus } from "../redux/actions/userActions";
import AdminDefaultLayout from "../components/AdminDefaultLayout";
// import { FaLOcation, FaPhone, FaVoicemail } from 'react-icons/fa';
const Contact = () => {

    const [queryParameters] = useSearchParams();
    const _id = queryParameters.get("id");
    const contact = queryParameters.get("contact");
    // const email = queryParameters.get("email").toLowerCase();

    const email = queryParameters.get("email")?.toLowerCase() || '';
    const name = queryParameters.get("name");
    const ver = queryParameters.get("verified")
    const { verified } = useSelector((state) => state.statusView);

    const [status, setstatus] = useState(ver==="false"?1:0);
    // console.log(ver);


    useEffect(() => {
        dispatch(getstatus(_id));
    }, []);




    
  const { profileImage } = useSelector((state) => state.profileImageView);
  useEffect(() => {
    if(profileImage.length!==0)
      setimagearr(profileImage);
  }, [profileImage])
  
  const [imagearr, setimagearr] = useState(profileImage);

 

  const [formData, setFormData] = useState({
    id: _id,
    imagearr: imagearr,
  });

  useEffect(() => {
    dispatch(getAllimages(_id));
  }, []);
  

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.alertsReducer);

  const handleVerify = ()=>{
    // console.log(_id);
    console.log(status);
    dispatch(VerifySubmit({id:_id,status:status,  email: email}));
    setstatus(!status);
  }

  return (
    <>
      <>
        <AdminDefaultLayout>
          <div className="bg-image-main">
            {/* <img className="w-100" alt="" src={contactimg} /> */}
          </div>
          {/*Section: Contact v.2*/}
          <div className="container px-4 px-lg-0 py-3">
            <section className="mb-4">
              <div className="row mt-5">
                {/*Grid column*/}
                <div className="col-md-3 mb-5 text-start">
                  <div className="d-flex flex-column align-items-center">
                    <ul className="list-unstyled px-3 mb-0 text-center">
                      <div
                        className="text-decoration-none"
                        
                        
                      >
                        <li className="mb-3">
                        <div
                            className="imgContainer"
                            // style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[4]}
                              
                              style={{ width: "196px",  borderRadius:"50%"}}
                            />
                            
                          </div>
                          <p className="text-decoration-none text-dark">
                           {name}
                          </p>
                        </li>
                      </div>

                      <hr />
                      <Link
                        className="text-decoration-none"
                        target="blank"
                        to={`mailto:${email.toLowerCase()}`}
                      >
                        <li className="mb-3">
                          <img
                            className="my-logo-contact text-decoration-none mb-2"
                            alt=""
                            src={mail}
                            style={{textTransform:"none"}}
                          />
                          <p className="text-dark text-decoration-none">
                          {email.toLowerCase()}
                          </p>
                        </li>
                      </Link>

                      <hr />
                      <Link
                        className="text-decoration-none "
                        to="tel:+9177079-13579"
                      >
                        <li className="mb-3">
                          <img
                            className="my-logo-contact text-decoration-none text-dark mb-2"
                            alt=""
                            src={phone}
                          />
                          <p className="text-decoration-none text-dark">
                            {contact}
                          </p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>

                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-md-8 ml-lg-5  mb-md-0 mb-5">
                  <h2 className="my-heading-contact-form">PROFILE</h2>
                  <p className="text-muted mt-2 sub-head-contact-form">
                    
                  </p>

                  <div
                    id="contact-form"
                    name="contact-form"
                    
                  >
                   

                    <div className="row mt-3">
                      {/*Grid column*/}
                      <div className="col-md-6">
                        <div className="md-form mb-3">
                          <p>Driving License Front</p>
                         
                          <div
                            className="imgContainer"
                            // style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[0]}
                             
                              style={{ width: "200px" , height:"200px"}}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-6">
                        <div className="md-form mb-3">
                          <p>Driving License Back</p>
                         
                          <div
                            className="imgContainer"
                            // style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[1]}
                             
                              style={{ width: "200px" , height:"200px"}}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>

                    <div className="row mt-3">
                      {/*Grid column*/}
                      <div className="col-md-6">
                        <div className="md-form mb-3">
                          <p>Aadhar Card Front</p>
                          
                          <div
                            className="imgContainer"
                            // style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[2]}
                              
                              style={{ width: "200px" , height:"200px" }}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-6">
                        <div className="md-form mb-3">
                          <p>Aadhar Card Back</p>
                          
                          <div
                            className="imgContainer"
                            // style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[3]}
                              
                              style={{ width: "200px" , height:"200px" }}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>

                    {/*Grid row*/}
                    <div className="text-center mt-2  text-md-left">
                      {status?<button
                        className="btn my-contact-btn px-3 py-2 font-weight-bold text-white"
                        type="submit"
                        id="save"
                        onClick={handleVerify}
                        // hidden
                      >
                        Verify
                      </button >:<button onClick={handleVerify} className="btn text-black my-contact-btn bg-green-300">
                        Verified
                        </button>}
                    </div>
                  </div>

                  <div className="status" />
                </div>
                {/*Grid column*/}
              </div>
            </section>
          </div>
     
          {/*Section: Contact v.2*/}
          {/* <Footer /> */}
        </AdminDefaultLayout>
        <Footer />
      </>
    </>
  );
};

export default Contact;
