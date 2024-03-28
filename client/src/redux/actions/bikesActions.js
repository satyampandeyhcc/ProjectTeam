import { message } from 'antd';
import axios from 'axios';
const api = axios.create({
    baseURL: "https://bikeridingventure.onrender.com/",
    // baseURL: "http://localhost:5000",
  });
export const getAllCars=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await api.get('/api/cars/getallcars')
        dispatch({type: 'GET_ALL_CARS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}

export const addCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await api.post('/api/cars/addcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('New bike added successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const editCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await api.post('/api/cars/editcar' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Bike details updated successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const deleteCar=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await api.delete('/api/cars/deletecar/'+reqObj.carid)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('Bike deleted successfully')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
}


