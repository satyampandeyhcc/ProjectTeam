import {React,useEffect} from 'react'
import {Row , Col , Form , Input} from 'antd'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
import AOS from 'aos';
import Spinner from '../components/Spinner';
import 'aos/dist/aos.css'; 
import DefaultLayout from '../components/DefaultLayout'
import Footer from '../components/Footer'

//also use <link> for styles
// ..
AOS.init();
function Login() {
    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
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
        dispatch(userLogin(values));
        console.log(values);
      }


    function onFinish(values) {
        dispatch(userLogin(values))
        console.log(values)
        

 }


    return (
       <>
          
        <div className='login'>


            {loading && (<Spinner />)}
            <Row gutter={16} className='d-flex align-items-center' >

                <Col lg={16} style={{position: 'relative'}}>
                    <img 
                    className='w-100'
                    data-aos='slide-right'
                    data-aos-duration='1500'
                    // src="https://pbs.twimg.com/media/CxdclKVWQAAPwzc?format=jpg&name=medium"
                    src="https://wallpaperaccess.com/full/1433024.jpg"
                    
                    />
                     <h1 className='login-logo'>B I K E R I D I N G &nbsp;  V E N T U R E</h1>
                </Col>
                <Col lg={8} className='text-left p-5'>
                    <Form layout='vertical' className='login-form p-5' onFinish={onFinish} form={form}>
                         <h1>Login</h1>
                         <hr />
                         <Form.Item name='username' label='Email' rules={[ { required: true, message: "Please input your Email!" },
              { type: 'email', message: 'Please enter a valid email address.' },]}>
                             <Input/>
                         </Form.Item>
                         <Form.Item name='password' label='Password' rules={[{required: true}]}>
                             <Input type='password'/>
                         </Form.Item>

                         <button className='btn1 mt-2'>Login</button>

                         <hr />

                         <Link to='/register'>Click Here to Register</Link>
                       

                    </Form>
                </Col>

            </Row>
        </div>


       
        </>
      
    )
}

export default Login