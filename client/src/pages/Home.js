import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from '../redux/actions/bikesActions';
import { Col, Row, DatePicker, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import moment from 'moment';
import DefaultLayout from '../components/DefaultLayout';
import Footer from '../components/Footer';

const { RangePicker } = DatePicker;

function Home() {
    const token = localStorage.getItem('user');
    const { cars } = useSelector(state => state.carsReducer);
    const { loading } = useSelector(state => state.alertsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [totalCars, setTotalCars] = useState([]);
    const [check, setCheck] = useState(false);
    const [selectedRange, setSelectedRange] = useState([]);

  

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    useEffect(() => {
        setTotalCars(cars);
    }, [cars]);


    

    const setFilter = useCallback(values => {
        if (!values || values.length < 2) {
            setTotalCars(cars);
            setCheck(false);
            
            return;
        }
        setSelectedRange(values);
        setCheck(true);
    }, [cars]);

    const filterCarsByDateRange = useMemo(() => {
        return (car) => {
            if (!check) return true;

            const selectedFrom = moment(selectedRange[0], 'MMM DD yyyy HH:mm');
            const selectedTo = moment(selectedRange[1], 'MMM DD yyyy HH:mm');

            for (const booking of car.bookedTimeSlots) {
                const bookingFrom = moment(booking.from);
                const bookingTo = moment(booking.to);

                if (
                    selectedFrom.isBetween(bookingFrom, bookingTo) ||
                    selectedTo.isBetween(bookingFrom, bookingTo) ||
                    bookingFrom.isBetween(selectedFrom, selectedTo) ||
                    bookingTo.isBetween(selectedFrom, selectedTo)
                ) {
                    return false;
                }
            }

            return true;
        };
    }, [check, selectedRange]);

    const handleBookNow = useCallback(carId => {
        if (token) {
            if (check) {
                navigate(`/booking/${carId}`);
            } else {
                message.info("Please select a Start and End date for your journey to check the availability of your desired bike.");
            }
        } else {
            navigate('/login');
        }
    }, [token, check, navigate]);

    const showAllCars = useCallback(() => {
        setTotalCars(cars);
    }, [cars]);

    const filterByFuelType = useCallback(type => {
    
        
        const filteredCars = cars.filter(car => car.type === type);
        setTotalCars(filteredCars);

        
    }, [cars]);

    return (
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
                            <Button onClick={() => filterByFuelType('Electric')}> Electric Vehicle</Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={showAllCars}>All</Button>&nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Bike')}>Bike</Button>&nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Scooty')}>Scooty</Button> &nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Electric')}> Electric Vehicle</Button>
                        </>
                    )}
                </Col>
            </Row>
            {loading && <Spinner />}
            <Row justify="center" gutter={16}>
                {totalCars.filter(filterCarsByDateRange).map(car => (
                    <Col lg={5} sm={24} xs={24} key={car._id}>
                        <div className="car p-2 bs1">
                            <img src={car.image} className="carimg" alt="car" />
                            <div className="car-content d-flex align-items-center justify-content-between">
                                <div className="text-left pl-2">
                                    <p>{car.name}</p>
                                    <p>Rent Per Hour {car.rentPerHour} /-</p>
                                    <p>Type: {car.fuelType}</p>
                                    <p>
                                        Pick at Rathyatra Chauraha, Varanasi
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
            <Footer />
        </DefaultLayout>
    );
}

export default Home;
