import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/BikeShowcase';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingBike from './pages/BookingBike';
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddBike from './pages/AddBike';
import AdminHome from './pages/AdminHome';
import EditBike from './pages/EditBike';
import FirstHome from './pages/Home';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminResponse from './pages/AdminResponse';
import Myprofile from './pages/Myprofile';
import AdminDashboard from './pages/AdminDashboard';
import AdminProfile from './pages/AdminProfile';
import BookingDashboard from './pages/BookingDashboard';

import ForgetPassword from './pages/Forgetpassword';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-pass' element={<ForgetPassword/>} />
          <Route path='/' element={<FirstHome />} />
          <Route path='/viewbike' element={<Home />} />
          <Route path='/booking/:bikeid' element={<BookingBike />} />
          <Route path='/userbookings' element={<UserBookings />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myprofile' element={<Myprofile />} />
          {/* <Route path='/forgot-pass' element={<EmailOtpForm />} /> */}
          {/* <Route path='/confirm-pass' element={<ConfirmPassword/>} /> */}


          <Route path='/admin' element={<AdminHome />} />
          <Route path='/addbike' element={<AddBike />} />
          <Route path='/editbike/:bikeid' element={<EditBike />} />
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/adminresponse' element={<AdminResponse/>}/>
          <Route path="/admindashboard" element={<AdminDashboard/>}/>
          <Route path="/bookingdashboard" element={<BookingDashboard/>}/>
          <Route path='/adminprofile' element={<AdminProfile />} />





          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
