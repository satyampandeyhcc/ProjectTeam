import {React,useEffect} from 'react'
import {Row , Col , Form , Input, message} from 'antd'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
// import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; 
import DefaultLayout from '../components/DefaultLayout'
import Footer from '../components/Footer'
import { adminLogin } from '../redux/actions/adminActions'
import { useState } from 'react';
//also use <link> for styles
// ..
AOS.init();
function ForgetPassword() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    const navigate = useNavigate();
    const [form] = Form.useForm();
    // Set login form values if username and password are present
    const [email, setEmail] = useState('');
    const [showOtpField, setShowOtpField] = useState(false);
    const [PasswordChange, setPasswordChange] = useState(false);
    const [otp, setOtp] = useState('');
    const [password, setpassword] = useState('');
    const [display,setdisplay] = useState(0);
    const handlePasswordChange = async () => {
      console.log(email,password);
      dispatch({type: 'LOADING' , payload:true})
      try {
        const response = await fetch('https://bikeridingventure.onrender.com/api/users/passChange', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username: email , password : password }),
        });
  
        const data = await response.json();
        console.log(data)
        if(data.message === 'Password updated successfully!'){
          message.info("Password Updated Succcessfully!")
          dispatch({type: 'LOADING' , payload:false})
          navigate('/login');
        }
      } catch (error) {
        console.error('OTP verification failed', error?.message);
      }
    };




    async function handleSubmit(values){
        // e.preventDefault();
        dispatch({type: 'LOADING' , payload:true})
        try {
          const response = await fetch('https://bikeridingventure.onrender.com/api/users/sendEmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: values.email }),
          });
    
          const data = await response.json();
          if(data.otp===undefined){
            message.error("User does not Exist!")
            dispatch({type: 'LOADING' , payload:false})
          }
          console.log('Data for email submission', data.otp);
          if(data.otp === "Success"){
            setdisplay(1);
            message.info("Otp Sent to the email address !")
            dispatch({type: 'LOADING' , payload:false})
          }
          setShowOtpField(true);
        } catch (error) {
          message.error("User not Found!")
          console.error('OTP sent failed', error?.message);
        }
      };
    

      const [passwordMatch, setPasswordMatch] = useState(true);
   
  
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


    const handleOtpSubmit = async (e) => {
      // e.preventDefault();
      dispatch({type: 'LOADING' , payload:true})
      console.log(email);
      try {
        const response = await fetch('https://bikeridingventure.onrender.com/api/users/verifyOTP', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: email }),
        });
  
        const data = await response.json();
        const otpOutput = data.otp;
        console.log(data);
        console.log(otp);
        if (otp === otpOutput) {
          message.info('OTP Verified Successfully!');
          setdisplay(2);
          setPasswordChange(true)
          dispatch({type: 'LOADING' , payload:false})
        } else {
          message.error('Please enter correct OTP!');
          dispatch({type: 'LOADING' , payload:false})
        }
      } catch (error) {
        console.error('Please enter correct OTP!', error?.message);
      }
    };


    

   


    return (
       <>
          <style>
            {
                `
                @media only screen and (max-width: 992px)  {
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
        <div className='login'>


            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100 loginimg'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    // src="https://pbs.twimg.com/media/CxdclKVWQAAPwzc?format=jpg&name=medium"
                    src="https://wallpaperaccess.com/full/1433024.jpg"
                    
                    />
                     <h1 className='login-logo'>B I K E R I D I N G &nbsp;  V E N T U R E</h1>
                </Col>
                <Col lg={8} className='text-left p-5'>{
                    (display===0)?
                    <Form layout='vertical' className='login-form p-5' onFinish={handleSubmit} form={form}>
                         <h1>Enter Email To Verify</h1>
                         <hr />
                         <Form.Item name='email' label='Email' rules={[ { required: true, message: "Please input your Email!" },
              { type: 'email', message: 'Please enter a valid email address.' },]}>
                             <Input
                              type="email"
                              id="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                             
                             />
                         </Form.Item>
                        

                         <button className='btn1 mt-2'>Send OTP</button>

                         <hr />

                         <Link to='/login'>Signin As User</Link>
                       

                    </Form>:((display===1)?
                    <Form layout='vertical' className='login-form p-5' onFinish={handleOtpSubmit} form={form}>
                         <h1>Enter OTP To Verify</h1>
                         <hr />
                         <Form.Item name='OTP' label='OTP' rules={[ { required: true, message: "Please input your OTP!" },
              { type: 'string', message: 'Please enter a valid OTP' },]}>
                             <Input
                             value={otp}
                             onChange={(e) => setOtp(e.target.value)}
                             />
                         </Form.Item>
                        

                         <button className='btn1 mt-2'>Verify OTP</button>

                         <hr />

                         <Link to='/login'>Signin As User</Link>
                       

                    </Form>:
                    <Form layout='vertical' className='login-form p-5' onFinish={handlePasswordChange} form={form}>
                         <h1>Enter Your New Password</h1>
                         <hr />
                         <Form.Item
                name="password"
                label="Password"
                rules={[
                  { required: true, message: "Please input your password!" },
                  { validator: validatePassword },
                ]}
              >
               
              <Input type='password' onChange={(e)=>setpassword(e.target.value)} />
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
              <Input type='password'  onChange={(e)=>setpassword(e.target.value)} />
            </Form.Item>
                        

                         <button className='btn1 mt-2'>Save Password</button>

                         <hr />

                         <Link to='/login'>Signin As User</Link>
                       

                    </Form>)}
                   
                </Col>

            </Row>
        </div>


       
        </>
      
    )
}

export default ForgetPassword