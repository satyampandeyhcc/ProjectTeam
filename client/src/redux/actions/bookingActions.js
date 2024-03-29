import axios from "axios";
import { message } from "antd";
export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
     await axios.post("https://bikeridingventure.onrender.com/api/bookings/bookcar" , reqObj);
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
       await axios.delete('https://bikeridingventure.onrender.com/api/bookings/deletebooking/'+reqObj._id)
     
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
      const response = await axios.get('https://bikeridingventure.onrender.com/api/bookings/getallbookings')
      dispatch({type: 'GET_ALL_BOOKINGS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}