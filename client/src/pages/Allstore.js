import React, { useEffect, useState } from "react";

import Feedback1 from "../components/Feedback1";

import DefaultLayout from "../components/DefaultLayout";

const Allstore = () => {
  const [resp, setResp] = useState([]);

  return (
    <>
      <DefaultLayout>
        <section>
          <div className="container my-3 py-5">
            <h2>ALL AVAILABLE BRANCHES IN VARANASI</h2>
            <div className="row d-flex mt-4 justify-content-center">
              <div className="col-md-12 col-lg-10 col-xl-8">
                <>
                  <div className="card-body">
                    <div>
                      <h6 className="font-weight-bold mb-1 d-inline">
                        1- RATHYATRA CHAURAHA{" "}
                      </h6>{" "}
                      <div>
                        <span className="text-muted ml-3">
                          {" "}
                          Show Room No.14,15 Varanasi Residency Haewliya Colony
                          Rathyatra CHAURAHA Varanasi, UttarPradesh Pin Code:
                          221010
                          <br></br>
                          Email:-bikeridingventure@gmail.com
                          <br></br>
                          contact:- 8318453686
                        </span>
                      </div>
                    </div>

                    <hr />
                  </div>
                </>

                <div className="container ">
                  <h4>NEW Branch AVAILABLE SOON!!</h4>
                </div>

                <>
                  <div className="card-body">
                    <div>
                      <h6 className="font-weight-bold mb-1 d-inline">
                        2- Durgakund CHAURAHA{" "}
                      </h6>{" "}
                      <div>
                        <span className="text-muted ml-3">
                          {" "}
                          Durga Mandir, Durgakund,Varanasi-221005, Uttar
                          Pradesh, India. Pin Code: 221010
                          <br></br>
                          Email:-durgabiking@gmail.com
                          <br></br>
                          contact:- 9569617895
                        </span>
                      </div>
                    </div>

                    <hr />
                  </div>
                </>

                <>
                  <div className="card-body">
                    <div>
                      <h6 className="font-weight-bold mb-1 d-inline">
                        3- SARNATH CHAURAHA{" "}
                      </h6>{" "}
                      <div>
                        <span className="text-muted ml-3">
                          {" "}
                          Ashapur Near Reliance Tower Sarnath CHAURAHA Varanasi,
                          UttarPradesh Pin Code: 221007
                          <br></br>
                          Email:-sarnathbike@gmail.com
                          <br></br>
                          contact:- 9793510356
                        </span>
                      </div>
                    </div>

                    <hr />
                  </div>
                </>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default Allstore;
