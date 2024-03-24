import axios from "axios";
import {message} from 'antd'

export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/login' , reqObj)
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
    //     const response = await axios.post('/api/users/register' , reqObj)
    //     message.success('Registration successfull')
    //     setTimeout(() => {
    //         window.location.href='/login'
         
    //     }, 500);
       
    //     dispatch({type: 'LOADING' , payload:false})
        
    // }
    
    try {
        const checkUsernameResponse = await axios.post("/api/users/checkUsername", {
          username: reqObj.username,
        });
    
        if (checkUsernameResponse.data.exists) {
          // If the username exists, reject the registration and display an error message
          message.error("Username is already taken");
          dispatch({ type: "loading", payload: false });
          return;
        }
    
        // If the username is available, proceed with the registration process
        await axios.post("/api/users/register", reqObj);
    
        message.success("Registration Successful");
    
        setTimeout(() => {
          window.location.href = "/login";
        }, 500);
    
        dispatch({ type: "loading", payload: false });

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
        const response = await axios.get('/api/users/getallimages',{params})
        dispatch({type: 'GET_ALL_IMAGES', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
  
  }

    
    
    
    export const contactFormSubmit = (formData) => async (dispatch) => {
        dispatch({ type: "LOADING", payload: true });
  
        try {
            const response = await axios.post("/api/users/contact", formData);
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

export const ImageFormSubmit = (formData) => async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });

    try {
        console.log(formData);
        const response = await axios.post("/api/users/updateprofile", formData);
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

