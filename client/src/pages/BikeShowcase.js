import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBikes } from '../redux/actions/bikesActions';
import { Col, Row, DatePicker, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import moment from 'moment';
import DefaultLayout from '../components/DefaultLayout';
import Footer from '../components/Footer';

const { RangePicker } = DatePicker;

function BikeShowcase() {
    const token = localStorage.getItem('user');
    const { bikes } = useSelector(state => state.bikesReducer);
    const { loading } = useSelector(state => state.alertsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [totalBikes, setTotalBikes] = useState([]);
    const [check, setCheck] = useState(false);
    const [selectedRange, setSelectedRange] = useState([]);

  

    useEffect(() => {
        dispatch(getAllBikes());
    }, [dispatch]);

    useEffect(() => {
        setTotalBikes(bikes);
    }, [bikes]);


    

    const setFilter = useCallback(values => {
        if (!values || values.length < 2) {
            setTotalBikes(bikes);
            setCheck(false);
            
            return;
        }
        setSelectedRange(values);
        setCheck(true);
    }, [bikes]);

    const filterBikesByDateRange = useMemo(() => {
        return (bike) => {
            if (!check) return true;

            const selectedFrom = moment(selectedRange[0], 'MMM DD yyyy HH:mm');
            const selectedTo = moment(selectedRange[1], 'MMM DD yyyy HH:mm');

            for (const booking of bike.bookedTimeSlots) {
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

    const handleBookNow = useCallback(bikeId => {
        if (token) {
            if (check) {
                navigate(`/booking/${bikeId}`);
            } else {
                message.info("Please select a start and end date for your journey to check the availability of your desired bike.");
            }
        } else {
            navigate('/login');
        }
    }, [token, check, navigate]);

    const showAllBikes = useCallback(() => {
        setTotalBikes(bikes);
    }, [bikes]);

    const filterByFuelType = useCallback(type => {
    
        
        const filteredBikes = bikes.filter(bike => bike.type === type);
        setTotalBikes(filteredBikes);

        
    }, [bikes]);

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
                            <Button onClick={showAllBikes}>All</Button>&nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Bike')}>Bike</Button>&nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Scooty')}>Scooty</Button> &nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Electric Vehicle')}> Electric Vehicle</Button>
                        </>
                    ) : (
                        <>
                            <Button onClick={showAllBikes}>All</Button>&nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Bike')}>Bike</Button>&nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Scooty')}>Scooty</Button> &nbsp;&nbsp;
                            <Button onClick={() => filterByFuelType('Electric Vehicle')}> Electric Vehicle</Button>
                        </>
                    )}
                </Col>
            </Row>
            {loading && <Spinner />}

            {totalBikes.length===0 ? (
<>
        
        <style>
          {`
                  .emptyimg {
                    height: 37.5vh;
                  }
              
                
                `}
        </style>

        </>
      ) : (
        <p></p>
      )}


            <Row justify="center" gutter={16} className='emptyimg'>
                {totalBikes.filter(filterBikesByDateRange).map(bike => (
                    <Col lg={5} sm={24} xs={24} key={bike._id}>
                        <div className="bike p-2 bs1">
                            <img src={bike.image} className="bikeimg" alt="bike" />
                            <div className="bike-content d-flex align-items-center justify-content-between">
                                <div className="text-left pl-2">
                                    <p>{bike.name}</p>
                                    <p>Rent Per Hour {bike.rentPerHour} /-</p>
                                    <p>Type: {bike.fuelType}</p>
                                    <p>
                                        Picked at Rathyatra Churaha, Varanasi
                                        <br />
                                        Pin Code: 221010
                                    </p>
                                </div>
                                <div>
                                    <button className="btn1 mr-2" onClick={() => handleBookNow(bike._id)}>
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

export default BikeShowcase;
