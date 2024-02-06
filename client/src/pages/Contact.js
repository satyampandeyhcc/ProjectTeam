import React, { useState } from "react";
import { Link } from "react-router-dom";

// import Footer from "./Footer";
// import contactimg from "../Component/images/conatct_form.jpeg";
// import location from "../Component/images/Map Pin.png";
// import mail from "../Component/images/Email.png";
// import phone from "../Component/images/PhoneCall.png";
import "../contact.css";
import DefaultLayout from "../components/DefaultLayout";
// import { FaLOcation, FaPhone, FaVoicemail } from 'react-icons/fa';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",

    contact: "",
    subject: "",
    feedback: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add your form submission logic here
    console.log("Form data submitted:", formData);

    // try {
    //   const response = await fetch("http://localhost:5000/api/response", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     const responseData = await response.json();
    //     console.log("Data saved successfully:", responseData);
    //     alert("Submitted successful!");
    //   } else {
    //     const errorData = await response.json();
    //     console.error("Error saving data:", errorData);
    //     // throw new Error('Failed to save data');
    //   }
    // } catch (error) {
    //   console.error("Error saving data:", error);
    //   throw error;
    // }
  };

  return (
    <>
      <>
      <DefaultLayout>
      
        <div className="bg-image-main">
          <img className="w-100" alt="" 
        //   src={contactimg}
           />
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
                        <img
                          className="my-logo-contact mb-2 text-decoration-none"
                          alt=""
                        //   src={location}
                        />
                        <p className="text-decoration-none text-dark">
                          {/* Show Room no.14,15 Darpan Residency Dhindsa Colony
                          Khanpur, Kharar, 140301 */}

                          Show Room no.14,15 Varanasi Residency Haewliya Colony Varanasi, UttarPradesh, 221007
                        </p>
                      </li>
                    </Link>

                    <hr />
                    <Link
                      className="text-decoration-none"
                      target="blank"
                      to="mailto:laughnlaundary@gmail.com"
                    >
                      <li className="mb-3">
                        <img
                          className="my-logo-contact text-decoration-none mb-2"
                          alt=""
                        //   src={mail}
                        />
                        <p className="text-dark text-decoration-none">
                          BikeRidingVenture@gmail.com
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
                        //   src={phone}
                        />
                        <p className="text-decoration-none text-dark">
                          77079-13579
                        </p>
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>

              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-8 ml-lg-5  mb-md-0 mb-5">
                <h2 className="my-heading-contact-form">Just Say Hello!</h2>
                <p className="text-muted mt-2 sub-head-contact-form">
                  Feel free to contact us.
                </p>

                <form
                  id="contact-form"
                  name="contact-form"
                  onSubmit={handleSubmit}
                >
                  {/*Grid row*/}
                  <div className="row mt-3">
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="md-form mb-3 ">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          className="form-control contact-form-input p-4 text-dark"
                          placeholder="Your Name"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="md-form mb-3">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          required
                          name="contact"
                          value={formData.contact}
                          onChange={handleChange}
                          // type="email"
                          id="contact"
                          // name="email"
                          // value={formData.email}
                          className="form-control contact-form-input p-4 text-dark"
                          // placeholder="E-Mail / Phone No."
                          // onChange={handleChange}
                        />
                      </div>
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
                  {/*Grid row*/}
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-3">
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          required
                          placeholder="Subjects"
                          className="form-control contact-form-input p-4 text-dark"
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/*Grid row*/}
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-12">
                      <div className="md-form mb-3">
                        <textarea
                          type="text"
                          id="feedback"
                          name="feedback"
                          rows={2}
                          className="form-control md-textarea contact-form-input p-4 text-dark"
                          value={formData.feedback}
                          onChange={handleChange}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  {/*Grid row*/}
                  <div className="text-center mt-2  text-md-left">
                    <button
                      className="btn my-contact-btn px-3 py-2 font-weight-bold text-white"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>

                <div className="status" />
              </div>
              {/*Grid column*/}
            </div>
          </section>
        </div>
        <div className="container-fluid mb-5 p-0">
          <Link to="https://maps.app.goo.gl/Zh7NH5onwaH9VPXJA">
            <div
              id="map-container-google-1"
              className="z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                width="600"
                height="450"
                loading="lazy"
                allowfullscreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.3570892366429!2d76.62865964166951!3d30.748175605838448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe540b0c4b351%3A0x825036e1078ee30b!2sNew%20Guru%20Nanak%20Dairy%20%26%20Sweets!5e0!3m2!1sen!2sin!4v1704989151523!5m2!1sen!2sin"
              ></iframe>
            </div>
          </Link>
        </div>
        {/*Section: Contact v.2*/}
        {/* <Footer /> */}
      
      </DefaultLayout>
      </>
    </>
  );
};

export default Contact;
