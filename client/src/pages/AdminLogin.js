import {React,useEffect} from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
// import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; 
import DefaultLayout from '../components/DefaultLayout'
import Footer from '../components/Footer'
import { adminLogin } from '../redux/actions/adminActions'

//also use <link> for styles
// ..
AOS.init();
function AdminLogin() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    const navigate = useNavigate();
    const location = useLocation();
    const [form] = Form.useForm();
 
    
        // Set login form values if username and password are present
        
    
      function onFinish(values) {
        dispatch(adminLogin(values));
        console.log(values);
      }


    function onFinish(values) {
        dispatch(adminLogin(values))
        console.log(values)
        

 }


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
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish} form={form}>
                         <h1>Signin As Admin</h1>
                         <hr />
                         <Form.Item name='email' label='Email' rules={[ { required: true, message: "Please input your Email!" },
              { type: 'email', message: 'Please enter a valid email address.' },]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>

                         <button className='btn1 mt-2'>Login</button>

                         <hr />

                         <Link to='/login'>Signin As User</Link>
                       

                    </Form>
                </Col>

            </Row>
        </div>


       
        </>
      
    )
}

export default AdminLogin