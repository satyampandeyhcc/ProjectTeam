import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookingBike from './pages/BookingBike';
import 'antd/dist/antd.css';
import UserBookings from './pages/UserBookings';
import AddBike from './pages/AddBike';
import AdminHome from './pages/AdminHome';
import EditBike from './pages/EditBike';  
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminResponse from './pages/AdminResponse';
import Myprofile from './pages/Myprofile';
import AdminUserDashboard from './pages/AdminUserDashboard';
import AdminProfile from './pages/AdminProfile';
import AdminBookingDashboard from './pages/AdminBookingDashboard';
import ForgetPassword from './pages/Forgetpassword';
import Allstore from './pages/Allstore';
import BikeShowcase from './pages/BikeShowcase';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/viewbike' element={<BikeShowcase />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/booking/:bikeid' element={<BookingBike />} />
          <Route path='/userbookings' element={<UserBookings />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/myprofile' element={<Myprofile />} />
          <Route path='/forgot-pass' element={<ForgetPassword/>} />
          <Route path='/allstore' element={<Allstore/>} />
      


          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/addbike' element={<AddBike />} />
          <Route path='/editbike/:bikeid' element={<EditBike />} />
          <Route path='/adminprofile' element={<AdminProfile />} />
          <Route path="/adminuserdashboard" element={<AdminUserDashboard/>}/>
          <Route path="/adminbookingdashboard" element={<AdminBookingDashboard/>}/>
          <Route path='/adminresponse' element={<AdminResponse/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
