import axios from "axios";
import { message } from "antd";

const api = axios.create({
  baseURL: "https://bikeridingventure.onrender.com/",
  // baseURL: "http://localhost:5000",
});

export const bookBike = (reqObj) => async (dispatch) => {



  dispatch({ type: "LOADING", payload: true });

  try {
     await api.post("/api/bookings/bookbike" , reqObj);
     console.log(reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your bike was booked successfully");
    setTimeout(() => {
      window.location.href='/userbookings'
    }, 500);

    
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};

export const deleteBooking=(reqObj)=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
       await api.delete('/api/bookings/deletebooking/'+reqObj._id)
     
       dispatch({type: 'LOADING' , payload:false})
       message.success('Booking deleted successfully')
       setTimeout(() => {
          window.location.reload()
       }, 500);
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }
}



export const getAllBookings=()=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
      const response = await api.get('/api/bookings/getallbookings')
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}