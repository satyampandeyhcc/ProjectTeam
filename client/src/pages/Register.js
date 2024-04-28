import {React,useState,useEffect} from "react";
import { Row, Col, Form, Input } from "antd";
import { Link,useNavigate } from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux'
import { userRegister } from "../redux/actions/userActions";
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import DefaultLayout from "../components/DefaultLayout";
import Footer from "../components/Footer";
// ..
AOS.init()

function Register() {
 



  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const {loading} = useSelector(state=>state.alertsReducer)

  const [mobileNumber, setMobileNumber] = useState("");
 const [profileName, setprofileName] = useState("")

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  
  const handleNameChange = (e) => {
    setprofileName(e.target.value);
  };
  
    async function onFinish(values) {
      try {
     const user= await dispatch(userRegister({ ...values, mobileNumber,profileName }));
        console.log(values.username);
        const response = await fetch('https://bikeridingventure.onrender.com/api/users/welcomeSendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.username }),
        });
  
        // Redirect to login page with user credentials as query parameters
      if(user)
        navigate(`/login?username=${values.username}&password=${values.password}`);
      } catch (error) {
        console.error("Registration failed", error);
      }
    }




    const [passwordMatch, setPasswordMatch] = useState(true);
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);
  
    const passwordMinLength = 8;
  
    const validateConfirmPassword = (_, value) => {
      const passwordFieldValue = form.getFieldValue("password");
      if (value && value !== passwordFieldValue) {
        setPasswordMatch(false);
        return Promise.reject("Passwords do not match.");
      }
      setPasswordMatch(true);
      return Promise.resolve();
    };
  
    const validatePassword = (_, value) => {
      
      if (value && value.length < passwordMinLength) {
        return Promise.reject(
          `Password must be at least ${passwordMinLength} characters long.`
        );
      }
  
      return Promise.resolve();
    };








  return (
    <>


<style>
            {
                `
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

           
                `
            }
          </style>
      
    <div className="login">
      {loading && (<Spinner />)}
      <Row gutter={16} className="d-flex align-items-center">
        <Col lg={16} style={{ position: "relative" }}>
          <img 
           className='w-100 loginimg'
           data-aos='slide-left'
           data-aos-duration='1500'
          src="https://img.redbull.com/images/c_fill,w_1200,h_630,g_auto,f_auto,q_auto/redbullcom/2020/12/3/c1zjbxauahxsq0vqb09s/the-old-world-visual" />
          <h1 className="login-logo">B I K E R I D I N G   &nbsp; V E N T U R E</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish} form={form}>
            <h1>Register</h1>
            <hr />

          


            <Form.Item
  name="profileName"
  label="Name"
  rules={[
    { required: true, message: "Please input your Name!" },
    { type: 'string', message: 'Please enter a valid name' }
  ]}
>
  <Input onChange={handleNameChange} />
</Form.Item>











            <Form.Item
              name="username"
              label="Email"
              rules={[ { required: true, message: "Please input your Email!" },
              { type: 'email', message: 'Please enter a valid email address.' },]}
            >
              <Input    />
            </Form.Item>
            <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { validator: validatePassword },
                ]}
              >
               
              <Input type='password' />
            </Form.Item>
            <Form.Item
                name="cpassword"
                label="Confirm Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { validator: validateConfirmPassword },
                ]}
                validateStatus={passwordMatch ? "success" : "error"}
                help={!passwordMatch && "Passwords do not match."}
              >
              <Input type='password' />
            </Form.Item>

            <Form.Item
              name="mobileNumber"
              label="Mobile Number"
              rules={[
                { required: true, message: "Please input your mobile number!" },
                { pattern: /^\d{10}$/, message: "Mobile number must be 10 digits." },
              ]}
            >
              <Input onChange={handleMobileNumberChange} />
            </Form.Item>

            <button className="btn1 mt-2 mb-3">Register</button>
           
            <br />

            <Link to="/login">Click Here to Login</Link>
          </Form>
        </Col>
      </Row>
    </div>
    
      
    
    </>
  );
}

export default Register;
