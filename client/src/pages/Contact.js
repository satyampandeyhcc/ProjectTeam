import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { contactFormSubmit } from "../redux/actions/userActions";

import contactimg from "../components/images/conatct_form.jpeg";
import location from "../components/images/Map Pin.png";
import mail from "../components/images/Email.png";
import phone from "../components/images/PhoneCall.png";
import "../contact.css";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    feedback: "",
  });

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.alertsReducer);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(contactFormSubmit(formData))
      .then(() => {
        setFormData({
          name: "",
          contact: "",
          subject: "",
          feedback: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting contact form:", error);
      });
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
                          <img
                            className="my-logo-contact mb-2 text-decoration-none"
                            alt=""
                            src={location}
                          />
                          <p className="text-decoration-none text-dark">
                            Show Room no.14,15 Varanasi Residency Haewliya
                            Colony Rathyatra Chauraha Varanasi, UttarPradesh,
                            221007
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
                            BikeRidingVenture@gmail.com
                          </p>
                        </li>
                      </Link>

                      <hr />
                      <Link
                        className="text-decoration-none "
                        to="tel:+918318453686"
                      >
                        <li className="mb-3">
                          <img
                            className="my-logo-contact text-decoration-none text-dark mb-2"
                            alt=""
                            src={phone}
                          />
                          <p className="text-decoration-none text-dark">
                            8318453686
                          </p>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>

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
                    <div className="row mt-3">
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

                      <div className="col-md-6">
                        <div className="md-form mb-3">
                          <input
                            type="tel"
                            placeholder="Phone No."
                            required
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            id="contact"
                            className="form-control contact-form-input p-4 text-dark"
                          />
                        </div>
                      </div>
                    </div>

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

                    <div className="row">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.9107680000175!2d82.9916567!3d25.307201900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2dff8ba7d909%3A0x1ff71cc1948b1f6c!2sRathyatra%20Crossing%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1714461259040!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Link>
          </div>
        </DefaultLayout>
        <Footer />
      </>
    </>
  );
};

export default Contact;
