import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefaultLayout from '../components/DefaultLayout';
import { getAllCars } from '../redux/actions/bikesActions';
import { Col, Row, DatePicker, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import moment from 'moment';
import Footer from '../components/Footer';

const { RangePicker } = DatePicker;

function Home() {
    const token = localStorage.getItem('user');
    const { cars } = useSelector(state => state.carsReducer);
    const { loading } = useSelector(state => state.alertsReducer);
    const [totalCars, setTotalCars] = useState([]);
    const [check,setCheck]=useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [tempdata,settempdata]=useState([]);

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    useEffect(() => {
        setTotalCars(cars);
    }, [cars]);

  

   

    function setFilter(values) {
        // Filter cars based on selected date range
        const temp = [];
        if (!values || values.length < 2) {
            setTotalCars(cars);
            console.error('Invalid values array:', values);
            setCheck(0);
            return;
        }
        setCheck(1);

        const selectedFrom = moment(values[0], 'MMM DD yyyy HH:mm');
        const selectedTo = moment(values[1], 'MMM DD yyyy HH:mm');

        for (const car of cars) {
            let hasOverlap = false;

            for (const booking of car.bookedTimeSlots) {
                const bookingFrom = moment(booking.from);
                const bookingTo = moment(booking.to);

                if (
                    selectedFrom.isBetween(bookingFrom, bookingTo) ||
                    selectedTo.isBetween(bookingFrom, bookingTo) ||
                    bookingFrom.isBetween(selectedFrom, selectedTo) ||
                    bookingTo.isBetween(selectedFrom, selectedTo)
                ) {
                    hasOverlap = true;
                    break;
                }
            }

            if (!hasOverlap) {
                temp.push(car);
            }
        }

        setTotalCars(temp);
        settempdata(temp);
    }


    const handleBookNow = carId => {

        if (token) {

            if(check==1)
            navigate(`/booking/${carId}`);
        else{
            message.info("Filled Start And End Date of Your Journey");
        }
        } else {
            navigate('/login');
        }
    };
 // Function to show all cars regardless of fuel type
 const showAllCars = () => {
    setTotalCars(cars);
};
    // Filter cars by fuel type
    const filterByFuelType = type => {
        const filteredCars = cars.filter(car => car.type === type);
        setTotalCars(filteredCars);
    };



    const showAllCarstemp = () => {
        setTotalCars(tempdata);
    };


// console.log(temp);
    const filterByFuelTypetemp = type => {
        const filteredCars = tempdata.filter(car => car.type === type);
        setTotalCars(filteredCars);
    };

    return (
        <>
            <DefaultLayout>
                <Row className="mt-3" justify="center">
                    <Col lg={20} sm={24} className="d-flex justify-content-left">
                        <RangePicker showTime={{ format: 'HH:mm' }} format="MMM DD yyyy HH:mm" onChange={setFilter} />
                    </Col>
                </Row>
                <Row className="mt-3" justify="center">
                    <Col lg={20} sm={24} className="d-flex justify-content-left">

                    {!check ? (
  <>
    <Button onClick={showAllCars}>All</Button>&nbsp;&nbsp;
    <Button onClick={() => filterByFuelType('Bike')}>Bike</Button>&nbsp;&nbsp;
    <Button onClick={() => filterByFuelType('Scooty')}>Scooty</Button> &nbsp;&nbsp;
    <Button onClick={() => filterByFuelType('Electric Vehicle')}> Electric Vehicle</Button>
  </>
) : (
    <>
    <Button onClick={showAllCarstemp}>All</Button>&nbsp;&nbsp;
    <Button onClick={() => filterByFuelTypetemp('Bike')}>Bike</Button>&nbsp;&nbsp;
    <Button onClick={() => filterByFuelTypetemp('Scooty')}>Scooty</Button> &nbsp;&nbsp;
    <Button onClick={() => filterByFuelTypetemp('Electric Vehicle')}> Electric Vehicle</Button>
  </>
)}
                    </Col>
                </Row>
                {loading && <Spinner />}
                <Row justify="center" gutter={16}>
                    {totalCars.map(car => (
                        <Col lg={5} sm={24} xs={24} key={car._id}>
                            <div className="car p-2 bs1">
                                <img src={car.image} className="carimg" alt="car" />
                                <div className="car-content d-flex align-items-center justify-content-between">
                                    <div className="text-left pl-2">
                                        <p>{car.name}</p>
                                        <p>Rent Per Hour {car.rentPerHour} /-</p>
                                        <p>Type: {car.fuelType}</p>
                                        <p>
                                            Picked at Rathyatra Churaha, Varanasi
                                            <br />
                                            Pin Code: 221010
                                        </p>
                                    </div>
                                    <div>
                                        <button className="btn1 mr-2" onClick={() => handleBookNow(car._id)}>
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </DefaultLayout>
            <Footer />
        </>
    );
}

export default Home;
