import axios from "axios";
import {message} from 'antd'
const api = axios.create({
    baseURL: "https://bikeridingventure.onrender.com/",
    // baseURL: "http://localhost:5000",
  });
export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})
    console.log(reqObj);

    try {
        const response = await api.post('/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/'
         
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    // try {
    //     const response = await api.post('/api/users/register' , reqObj)
    //     message.success('Registration successfull')
    //     setTimeout(() => {
    //         window.location.href='/login'
         
    //     }, 500);
       
    //     dispatch({type: 'LOADING' , payload:false})
        
    // }
    
    try {
        const checkUsernameResponse = await api.post("/api/users/checkUsername", {
          username: reqObj.username,
        });
    
        if (checkUsernameResponse.data.exists) {
          // If the username exists, reject the registration and display an error message
          message.error("Username is already taken");
          dispatch({ type: "LOADING", payload: false });
          return false;
        }
    
        // If the username is available, proceed with the registration process
        await api.post("/api/users/register", reqObj);
    
        message.success("Registration Successful");
    
        setTimeout(() => {
          window.location.href = "/login";
        }, 500);
    
        dispatch({ type: "LOADING", payload: false });

    }

    
    catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }





}


export const getAllimages=(id)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})
  
    try {
        const params  = {id:id};
        const response = await api.get('/api/users/getallimages',{params})
        dispatch({type: 'GET_ALL_IMAGES', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
  
  }


  

export const getstatus=(id)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})
  
    try {
        const params  = {id:id};
        const response = await api.get('/api/users/getstatus',{params})
        dispatch({type: 'GET_STATUS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
  
  }

    
    
    export const contactFormSubmit = (formData) => async (dispatch) => {
        dispatch({ type: "LOADING", payload: true });
  
        try {
            const response = await api.post("/api/users/contact", formData);
            if (response.status === 200) {
        message.success("Message sent successfully!");
    } else {
        message.error("Failed to send message");
    }
    dispatch({ type: "LOADING", payload: false });
} catch (error) {
    console.error(error);
    message.error("An error occurred while sending message");
    dispatch({ type: "LOADING", payload: false });
}
}



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






export const ImageFormSubmit = (formData) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        console.log(formData);
        const response = await api.post("/api/users/updateprofile", formData);
        if (response.status === 200) {
    message.success("Profile Updated Successfully!");
} else {
    message.error("Failed to send message");
}
dispatch({ type: "LOADING", payload: false });
} catch (error) {
console.error(error);
message.error("An error occurred while sending message");
dispatch({ type: "LOADING", payload: false });
}
}

// export const VerifySubmit = (formData) => async (dispatch) => {
//     dispatch({ type: "LOADING", payload: true });

//     try {
//         console.log(formData);
//         const response = await api.post("/api/users/updateverify", formData);
//         if (response.status === 200) {
//     message.success("Verification status changed!");
// } else {
//     message.error("Failed to send message");
// }
// dispatch({ type: "LOADING", payload: false });
// } catch (error) {
// console.error(error);
// message.error("An error occurred while sending message");
// dispatch({ type: "LOADING", payload: false });
// }
// }


export const VerifySubmit = (formData) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        console.log(formData);
        const response = await api.post("/api/users/updateverify", formData);
        if (response.status === 200) {
            message.success("Verification status changed!");
            // Send verification email
            if(formData.status){

                await api.post("/api/users/sendverifyemail", { email: formData.email ,status:formData.status});
                message.success("Verification email sent!");

            }
            else{
                message.info("Verification is pending!");
            }
        } else {
            message.error("Failed to change verification status");
        }
        dispatch({ type: "LOADING", payload: false });
    } catch (error) {
        console.error(error);
        message.error("An error occurred while changing verification status");
        dispatch({ type: "LOADING", payload: false });
    }
}

