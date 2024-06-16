import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import {
  ImageFormSubmit,
  contactFormSubmit,
  getAllimages,
  getstatus,
} from "../redux/actions/userActions";
import { storage } from "../fbconfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import contactimg from "../components/images/editimg.jpeg";
import location from "../components/images/Map Pin.png";
import mail from "../components/images/Email.png";
import phone from "../components/images/PhoneCall.png";
import "../contact.css";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import img7 from "../components/images/Green.jpg";

const Myprofile = () => {
  const dispatch = useDispatch();

  const { profileImage } = useSelector((state) => state.profileImageView);
  const { verified } = useSelector((state) => state.statusView);
  const { loading } = useSelector((state) => state.alertsReducer);

  const [imagearr, setimagearr] = useState(profileImage);
  const [phoneNo, setphoneNo] = useState(
    JSON.parse(localStorage.getItem("user")).mobileNumber
  );
  const [disable, setdisable] = useState(verified);
  const [isEditing, setIsEditing] = useState(false);

  const { _id, profileName, username } = JSON.parse(
    localStorage.getItem("user")
  );
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    id: _id,
    imagearr: imagearr,
  });

  useEffect(() => {
    dispatch(getstatus(_id));
    dispatch(getAllimages(_id));
  }, [dispatch, _id]);

  useEffect(() => {
    if (profileImage.length !== 0) setimagearr(profileImage);
  }, [profileImage]);

  useEffect(() => {
    setFormData({ id: _id, imagearr: imagearr });
  }, [imagearr, _id]);

  useEffect(() => {
    setdisable(verified);
  }, [verified]);

  const handleChange = (id, event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const imageref = ref(storage, `images/${file.name}`);
    dispatch({ type: "LOADING", payload: true });
    uploadBytes(imageref, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        const newArray = [...imagearr];
        newArray[id] = url;

        setFormData((prevData) => ({ ...prevData, imagearr: newArray }));
        setimagearr(newArray);
        dispatch({ type: "LOADING", payload: false });
        setdisable(false);
        message.success("Updated Successfully!");
      });
    });
  };

  const handlePhoneChange = (event) => {
    setphoneNo(event.target.value);
    setdisable(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (phoneNo.length === 10) {
      setIsEditing(false);
      handleSubmit();
    } else {
      message.error("Please enter a 10-digit phone number.");
    }
  };

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    const check = (id) =>
      imagearr[id] !== "https://wumbo.net/symbols/plus/feature.png";
    if (
      check(0) &&
      check(1) &&
      check(2) &&
      check(3) &&
      phoneNo !== "XXXXXXXXXX" &&
      phoneNo.length === 10
    ) {
      formData.phone = phoneNo;
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, mobileNumber: phoneNo })
      );
      dispatch(ImageFormSubmit(formData));
    } else if (phoneNo.length !== 10) {
      message.error("Please enter 10 digit PhoneNo.");
    } else if (phoneNo === "XXXXXXXXXX") {
      message.info("Please upload all the documents and Mobile Number");
    } else {
      message.info("Please upload all the documents");
    }
  };

  return (
    <DefaultLayout>
      <div className="bg-image-main">
        <img className="w-100" alt="" src={contactimg} />
      </div>
      {loading && <Spinner />}
      <div className="container px-4 px-lg-0 py-3">
        <section className="mb-4">
          <div className="row mt-5">
            <div className="col-md-3 mb-5 text-start">
              <div className="d-flex flex-column align-items-center">
                <ul className="list-unstyled px-3 mb-0 text-center">
                  <li className="mb-3">
                    <div className="imgContainer" style={{ cursor: "pointer" }}>
                      <img
                        src={imagearr[4]}
                        onClick={() => {
                          document.getElementById("file5").click();
                        }}
                        style={{
                          width: "200px",
                          borderRadius: "50%",
                          height: "200px",
                        }}
                      />
                      <input
                        type="file"
                        id="file5"
                        name="file5"
                        onChange={(e) => handleChange(4, e)}
                        className="form-control contact-form-input p-4 text-dark"
                        hidden
                      />
                    </div>

                    <p className="text-decoration-none text-dark">
                      {disable ? (
                        <>
                          {/* <p className="verified"> Verified ✅ </p>  */}
                          <img
                            className=" mt-3 verified"
                            alt=""
                            src={img7}
                            style={{ width: "150px" }}
                          />
                        </>
                      ) : (
                        <p
                          className="notverified"
                          style={{ color: "red", fontSize: "25px" }}
                        >
                          Not Verified
                        </p>
                      )}
                    </p>
                  </li>
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
                      <p
                        className="text-dark text-decoration-none"
                        style={{ textTransform: "none" }}
                      >
                        {username}
                      </p>
                    </li>
                  </Link>
                  <hr />
                  <div className="text-decoration-none" to="tel:+9177079-13579">
                    <li className="mb-3">
                      <img
                        className="my-logo-contact text-decoration-none text-dark mb-2 phonering"
                        alt=""
                        src={phone}
                      />
                    </li>
                  </div>
                  {isEditing ? (
                    <>
                      <input
                        onChange={handlePhoneChange}
                        value={phoneNo}
                        className="text-decoration-none text-dark"
                        placeholder="Enter Your Mobile Number"
                      />
                      <br></br>
                      <br></br>
                      <button
                        onClick={handleSaveClick}
                        className=" my-contact-btn"
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="text-dark">{phoneNo}</p>
                      <button
                        onClick={handleEditClick}
                        className="btn btn-secondary mt-2"
                      >
                        Edit
                      </button>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-md-8 ml-lg-5 mb-md-0 mb-5">
              <h2 className="my-heading-contact-form">PROFILE</h2>
              <p className="text-muted mt-2 sub-head-contact-form">
                {disable ? (
                  <p>Enjoy your bike booking adventure!</p>
                ) : (
                  <>
                    <p>Complete your Profile !!</p>
                    <p>
                      Account verification within 24 hours unlocks your bike
                      booking adventure! Email will be sent if you will be
                      verified by admin.
                    </p>
                  </>
                )}
              </p>
              <form
                id="contact-form"
                name="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="md-form mb-3">
                      <p>Driving License Front</p>
                      <input
                        type="file"
                        id="file1"
                        name="file1"
                        onChange={(e) => handleChange(0, e)}
                        className="form-control contact-form-input p-4 text-dark"
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
                          style={{
                            width: "auto",
                            height: "200px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-3">
                      <p>Driving License Back</p>
                      <input
                        type="file"
                        id="file2"
                        name="file2"
                        onChange={(e) => handleChange(1, e)}
                        className="form-control contact-form-input p-4 text-dark"
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
                          style={{
                            width: "auto",
                            height: "200px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="md-form mb-3">
                      <p>Aadhar Card Front</p>
                      <input
                        type="file"
                        id="file3"
                        name="file3"
                        onChange={(e) => handleChange(2, e)}
                        className="form-control contact-form-input p-4 text-dark"
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
                          style={{
                            width: "auto",
                            height: "200px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-3">
                      <p>Aadhar Card Back</p>
                      <input
                        type="file"
                        id="file4"
                        name="file4"
                        onChange={(e) => handleChange(3, e)}
                        className="form-control contact-form-input p-4 text-dark"
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
                          style={{
                            width: "auto",
                            height: "200px",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-2 text-md-left">
                  <button
                    className="btn my-contact-btn px-3 py-2 font-weight-bold text-white"
                    type="submit"
                    id="save"
                    disabled={disable}
                  >
                    Save Profile
                  </button>
                </div>
              </form>
              <div className="status" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </DefaultLayout>
  );
};

export default Myprofile;
