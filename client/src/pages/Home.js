import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/bikesActions'
import { Col, Row  , DatePicker, Checkbox} from 'antd'
import {Link,useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
import Footer from '../components/Footer'
const {RangePicker} = DatePicker
function Home() {
    const token=localStorage.getItem("user");
    const {cars} = useSelector(state=>state.carsReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalCars , setTotalcars] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate(); 
    

    useEffect(() => {
        dispatch(getAllCars())
    }, [])

    useEffect(() => {

        setTotalcars(cars)
        
    }, [cars])
    const handleBookNow = (carId) => {
        if (token) {
            navigate(`/booking/${carId}`); // Use navigate instead of history.push
        } else {
            navigate('/login'); // Navigate to login page if token is not available
        }
    };

    function setFilter(values) {



        if (!values || values.length < 2) {
            // Handle the case where values is null or empty
            setTotalcars(cars)
            console.error("Invalid values array:", values);
            return;

            
        }




        var selectedFrom = moment(values[0], 'MMM DD yyyy HH:mm');
        var selectedTo = moment(values[1], 'MMM DD yyyy HH:mm');
        var temp = [];
    
        for (var car of cars) {
            var hasOverlap = false;
    
            for (var booking of car.bookedTimeSlots) {
                var bookingFrom = moment(booking.from);
                var bookingTo = moment(booking.to);
    
                if (selectedFrom.isBetween(bookingFrom, bookingTo) ||
                    selectedTo.isBetween(bookingFrom, bookingTo) ||
                    bookingFrom.isBetween(selectedFrom, selectedTo) ||
                    bookingTo.isBetween(selectedFrom, selectedTo)) {
                    hasOverlap = true;
                    break; // Exit the loop as soon as an overlap is found
                }
            }
    
            if (!hasOverlap) {
                temp.push(car);
            }
        }
    
        setTotalcars(temp);
    }
    

    return (
        <>
        <DefaultLayout>

            <style>
            
                {
                    `
                    @media only screen and (max-width: 1400px) and (min-width: 700px) {
                        .carimg {
                            
                            width: 19vw; /* Adjusted width for smaller screens */
                           
                        }
                      }
                    `
                }
            </style>

             <Row className='mt-3' justify='center'>
                 
                 <Col lg={20} sm={24} className='d-flex justify-content-left'>

                     <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/>
                 
                 </Col>

             </Row>

              {loading == true && (<Spinner/>)}


              
              <Row justify='center' gutter={16}>

                   {totalCars.map(car=>{
                       return <Col lg={5} sm={24} xs={24}>
                            <div className="car p-2 bs1">
                               <img src={car.image} className="carimg"/>

                               <div className="car-content d-flex align-items-center justify-content-between">

                                    <div className='text-left pl-2'>
                                        <p>{car.name}</p>
                                        <p> Rent Per Hour {car.rentPerHour} /-</p>
                                        <p> Type: {car.fuelType} </p>
                                        <p>Picked at Rathyatra Churaha, Varanasi<br></br>
Pin Code: 221010</p>
                                    </div>

                                    <div>
                                        {/* <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button> */}
                                        <button className="btn1 mr-2" onClick={() => handleBookNow(car._id)}>Book Now</button>
                                    </div>

                               </div>
                            </div>
                       </Col>
                   })}

              </Row>

        </DefaultLayout>

        <Footer/>
        </>
    
    )
}

export default Home
