import { React, useEffect } from "react";
import { Row, Col, Form, Input } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import AOS from "aos";
import Spinner from "../components/Spinner";
import "aos/dist/aos.css";
import DefaultLayout from "../components/DefaultLayout";
import Footer from "../components/Footer";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { userRegister } from "../redux/actions/userActions";
//also use <link> for styles
import { FcGoogle } from "react-icons/fc";
// ..
AOS.init();
function Login() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer);
  const navigate = useNavigate();
  const location = useLocation();
  const [form] = Form.useForm();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const username = params.get("username");
    const password = params.get("password");

    // Set login form values if username and password are present
    if (username && password) {
      form.setFieldsValue({ username, password });
    }
  }, [location.search, form]);

  function onFinish(values) {
    values.type = false;
    dispatch(userLogin(values));
    console.log(values);
  }

  function handlegoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);

        // const { username, password ,cpassword,mobileNumber,profileName}
        const users = {
          username: user.email,
          mobileNumber: "XXXXXXXXXX",
          profileName: user.displayName,
          password:
            "$2a$10$UjCEhtdnKn.bnk8uVPERDunvx9HLZt.UyDwkhY58/YaW/4KE33ywe",
          cpassword:
            "$2a$10$JLfozFH85oyWYy1KrYTcBu3cCpFjRCAZwQGIXx2cF4hk2xqpckdqu",
          type: true,
        };
        const reg = dispatch(userLogin(users));
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return (
    <>
      <style>
        {`
                @media only screen and (max-width: 1000px)  {
                  .loginimg {
                     display: none;
                  }
               
                }


                @media only screen and (max-width: 1464px)  {
                
                  .login-logo{
                    display:none;
                  }
                }

                .googleicon {
                  cursor: pointer;
                  width: 4vw;
                  height: 38px;
              }
              
              @media only screen and (max-width: 700px) {
                  .googleicon {
                      cursor: pointer;
                      width: 6vw;
                      height: 38px;
                  }
              }

              @media only screen and (max-width: 480px) {
                .googleicon {
                    cursor: pointer;
                    width: 8vw;
                    height: 38px;
                }
            }
                `}
      </style>
      <div className="login">
        {loading && <Spinner />}
        <Row gutter={16} className="d-flex align-items-center">
          <Col lg={16} style={{ position: "relative" }}>
            <img
              className="w-100 loginimg"
              data-aos="slide-right"
              data-aos-duration="1500"
              // src="https://pbs.twimg.com/media/CxdclKVWQAAPwzc?format=jpg&name=medium"
              src="https://wallpaperaccess.com/full/1433024.jpg"
            />
            <h1 className="login-logo">
              B I K E R I D I N G &nbsp; V E N T U R E
            </h1>
          </Col>
          <Col lg={8} className="text-left p-5">
            <Form
              layout="vertical"
              className="login-form p-5"
              onFinish={onFinish}
              form={form}
            >
              <h1>Signin As User</h1>
              <hr />
              <Form.Item
                name="username"
                label="Email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  {
                    type: "email",
                    message: "Please enter a valid email address.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[{ required: true }]}
              >
                <Input type="password" />
              </Form.Item>
              <button className="btn1 mt-2">Signin</button> &nbsp;&nbsp;
              <FcGoogle className="googleicon" onClick={handlegoogle} />
              <hr />
              {/* <h4></h4> */}
              <Link to={"/forgot-pass"}>Forgot password?</Link>
              <br></br>
              <Link to="/register">Don't Have An Account Create One</Link>
              <br />
              <br />
              <Link to="/adminlogin">Signin As Admin</Link>
            </Form>

            {/* <button onClick={handlegoogle} className="btn1 mt-2 mb-3">Signin with Google</button> */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;
