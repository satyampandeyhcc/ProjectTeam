import axios from "axios";
import {message} from 'antd'
const api = axios.create({
    baseURL: "https://bikeridingventure.onrender.com/",
    // baseURL: "http://localhost:5000",
  });
export const adminLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})
    // https://bikeridingventure.onrender.com
    try {
        const response = await api.post('/admin/auth/login' , reqObj)
        localStorage.setItem('admin' , JSON.stringify(response.data))
        message.success('Login success')
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/admin'
         
        }, 500);
    } catch (error) {
        console.log(error)
        message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}

// export const userRegister=(reqObj)=>async dispatch=>{
    
//     dispatch({type: 'LOADING' , payload:true})

    // try {
    //     const response = await axios.post('/api/users/register' , reqObj)
    //     message.success('Registration successfull')
    //     setTimeout(() => {
    //         window.location.href='/login'
         
    //     }, 500);
       
    //     dispatch({type: 'LOADING' , payload:false})
        
    // }
    
//     try {
//         const checkUsernameResponse = await axios.post("/api/users/checkUsername", {
//           username: reqObj.username,
//         });
    
//         if (checkUsernameResponse.data.exists) {
//           // If the username exists, reject the registration and display an error message
//           message.error("Username is already taken");
//           dispatch({ type: "loading", payload: false });
//           return;
//         }
    
//         // If the username is available, proceed with the registration process
//         await axios.post("/api/users/register", reqObj);
    
//         message.success("Registration Successful");
    
//         setTimeout(() => {
//           window.location.href = "/login";
//         }, 500);
    
//         dispatch({ type: "loading", payload: false });

//     }

    
//     catch (error) {
//         console.log(error)
//         message.error('Something went wrong')
//         dispatch({type: 'LOADING' , payload:false})
//     }





// }




    
    
    
//     export const contactFormSubmit = (formData) => async (dispatch) => {
//         dispatch({ type: "LOADING", payload: true });
  
//         try {
//             const response = await axios.post("/api/users/contact", formData);
//             if (response.status === 200) {
//         message.success("Message sent successfully!");
//     } else {
//         message.error("Failed to send message");
//     }
//     dispatch({ type: "LOADING", payload: false });
// } catch (error) {
//     console.error(error);
//     message.error("An error occurred while sending message");
//     dispatch({ type: "LOADING", payload: false });
// }
// }