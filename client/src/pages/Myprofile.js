import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import {
  ImageFormSubmit,
  contactFormSubmit,
  getAllimages,
} from "../redux/actions/userActions";
import { storage } from "../fbconfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
// import Footer from "./Footer";
import contactimg from "../components/images/editimg.jpeg";
import location from "../components/images/Map Pin.png";
import mail from "../components/images/Email.png";
import phone from "../components/images/PhoneCall.png";
import "../contact.css";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "../components/Footer";

// import { FaLOcation, FaPhone, FaVoicemail } from 'react-icons/fa';
const Contact = () => {

  const { profileImage } = useSelector((state) => state.profileImageView);
  useEffect(() => {
    if(profileImage.length!==0)
      setimagearr(profileImage);
  }, [profileImage])
  
  const [imagearr, setimagearr] = useState(profileImage);

  const { _id,profileName,mobileNumber,username } = JSON.parse(localStorage.getItem("user"));

  console.log(_id);

  const [formData, setFormData] = useState({
    id: _id,
    imagearr: imagearr,
  });

  useEffect(() => {
    dispatch(getAllimages(_id));
  }, []);
  

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.alertsReducer);

  const handleChange = (id, event) => {
    console.log(id);
    const { name, value } = event.target;
    const file = event.target.files[0];
    const imageref = ref(storage, `images/${file.name}`);
    uploadBytes(imageref, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const newArray = [...imagearr];
        newArray[id] = url;
        setFormData((prevData) => ({ ...prevData, imagearr: newArray }));
        setimagearr(newArray);
        
        message.success("Updated Successfully!");
        // document.findElementById("save").click();
      });
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    dispatch(ImageFormSubmit(formData));
  };

  return (
    <>
      <>
        <DefaultLayout>
          <div className="bg-image-main">
            <img className="w-100" alt="" src={contactimg} />
          </div>
          {/*Section: Contact v.2*/}
          <div className="container px-4 px-lg-0 py-3">
            <section className="mb-4">
              <div className="row mt-5">
                {/*Grid column*/}
                <div className="col-md-3 mb-5 text-start">
                  <div className="d-flex flex-column align-items-center">
                    <ul className="list-unstyled px-3 mb-0 text-center">
                      <Link
                        className="text-decoration-none"
                        target="blank"
                        to="https://maps.app.goo.gl/Zh7NH5onwaH9VPXJA"
                      >
                        <li className="mb-3">
                        <div
                            className="imgContainer"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[4]}
                              onClick={() => {
                                document.getElementById("file5").click();
                              }}
                              style={{ width: "196px",  borderRadius:"50%"}}
                            />
                             <input
                            type="file" // Change input type to "file"
                            id="file5" // Assign unique id for file input
                            // name="file"  // Assign name for file input
                            onChange={(e) => handleChange(4, e)} // Attach onChange event handler
                            className="form-control contact-form-input p-4 text-dark"
                            required // Mark the field as required if necessary
                            hidden
                          />
                          </div>
                          <p className="text-decoration-none text-dark">
                           {profileName}
                          </p>
                        </li>
                      </Link>

                      <hr />
                      <Link
                        className="text-decoration-none"
                        target="blank"
                        to="mailto:satyampandeyhcc@gmail.com"
                      >
                        <li className="mb-3">
                          <img
                            className="my-logo-contact text-decoration-none mb-2"
                            alt=""
                            src={mail}
                          />
                          <p className="text-dark text-decoration-none">
                          {username}
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
                            {mobileNumber}
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

                  <form
                    noValidate
                    id="contact-form"
                    name="contact-form"
                    onSubmit={handleSubmit}
                  >
                   

                    <div className="row mt-3">
                      {/*Grid column*/}
                      <div className="col-md-6">
                        <div className="md-form mb-3">
                          <p>Driving License Front</p>
                          <input
                            type="file" // Change input type to "file"
                            id="file1" // Assign unique id for file input
                            // name="file"  // Assign name for file input
                            onChange={(e) => handleChange(0, e)} // Attach onChange event handler
                            className="form-control contact-form-input p-4 text-dark"
                            required // Mark the field as required if necessary
                            hidden
                          />
                          <div
                            className="imgContainer"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[0]}
                              onClick={() => {
                                document.getElementById("file1").click();
                              }}
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
                          <input
                            type="file" // Change input type to "file"
                            id="file2" // Assign unique id for file input
                            // name="file"  // Assign name for file input
                            onChange={(e) => handleChange(1, e)} // Attach onChange event handler
                            className="form-control contact-form-input p-4 text-dark"
                            required // Mark the field as required if necessary
                            hidden
                          />
                          <div
                            className="imgContainer"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[1]}
                              onClick={() => {
                                document.getElementById("file2").click();
                              }}
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
                          <input
                            type="file" // Change input type to "file"
                            id="file3" // Assign unique id for file input
                            // name="file"  // Assign name for file input
                            onChange={(e) => handleChange(2, e)} // Attach onChange event handler
                            className="form-control contact-form-input p-4 text-dark"
                            required // Mark the field as required if necessary
                            hidden
                          />
                          <div
                            className="imgContainer"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[2]}
                              onClick={() => {
                                document.getElementById("file3").click();
                              }}
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
                          <input
                            type="file" // Change input type to "file"
                            id="file4" // Assign unique id for file input
                            // name="file"  // Assign name for file input
                            onChange={(e) => handleChange(3, e)} // Attach onChange event handler
                            className="form-control contact-form-input p-4 text-dark"
                            required // Mark the field as required if necessary
                            hidden
                          />
                          <div
                            className="imgContainer"
                            style={{ cursor: "pointer" }}
                          >
                            <img
                              src={imagearr[3]}
                              onClick={() => {
                                document.getElementById("file4").click();
                              }}
                              style={{ width: "200px" , height:"200px" }}
                            />
                          </div>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>

                    {/*Grid row*/}
                    <div className="text-center mt-2  text-md-left">
                      <button
                        className="btn my-contact-btn px-3 py-2 font-weight-bold text-white"
                        type="submit"
                        id="save"
                        // hidden
                      >
                        Save Profile
                      </button>
                    </div>
                  </form>

                  <div className="status" />
                </div>
                {/*Grid column*/}
              </div>
            </section>
          </div>
     
          {/*Section: Contact v.2*/}
          {/* <Footer /> */}
        </DefaultLayout>
        <Footer />
      </>
    </>
  );
};

export default Contact;
