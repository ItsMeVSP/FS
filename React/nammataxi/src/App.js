import './App.css';

import React, { useState } from 'react';
//import Autocomplete from 'react-autocomplete';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
const carTypes = [
  { name: 'Hatchback', rate: 15 },
  { name: 'Sedan', rate: 20 },
  { name: 'SUV', rate: 30 },
];

const city = [
  {
    id: 0,
    name: 'Chennai'
  },
  {
    id: 1,
    name: 'Kovai'
  },
  {
    id: 2,
    name: 'Madurai'
  },
  {
    id: 3,
    name: 'Mumbai'
  },
  {
    id: 4,
    name: 'Bangalore'
  }
]

const GoTaxi = () => {
  const [startingPoint, setStartingPoint] = useState('');
  const [destination, setDestination] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [bookingSlip, setBookingSlip] = useState(null);

  const handleStartingPointChange = (item) => {
    console.log(item);
    setStartingPoint(item);
  };

  const handleDestinationChange = (item) => {
    console.log(item);
    setDestination(item);
  };

  const handlePickupTimeChange = (e) => {
    setPickupTime(e.target.value);
  };

  const handleCarTypeChange = (e) => {
    setSelectedCar(e.target.value);
  };

  // const handleBookButton=()=>{
  //   console.log(startingPoint);
  //   console.log(destination);
  // }
  const handleBookButton = () => {
    const distance = 10; // Assuming 10 km distance
    const carRate = carTypes.find((car) => car.name === selectedCar).rate;
    const totalCost = distance * carRate;
    // console.log(startingPoint);
    // console.log(destination);
    const bookingInfo = {
      startingPoint,
      destination,
      pickupTime,
      selectedCar,
      totalCost,
    };
    // console.log(bookingInfo);
    // console.log(typeof(bookingInfo));
    setBookingSlip(bookingInfo);
  };

  return (
    <div className="go-taxi">
      {console.log(bookingSlip)}
      <h2>GoTaxi - Book a Taxi</h2>
      <div className="form-group">
        <label htmlFor="startingPoint">Starting Point:</label>
        <ReactSearchAutocomplete
          id="startingPoint"
          //value={startingPoint}
          onSelect={handleStartingPointChange}
          items={city} // Replace with your own location options
          menuStyle={{ zIndex: 4}} // Ensure the autocomplete menu appears above other elements
          autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination:</label>
        <ReactSearchAutocomplete
          id="destination"
          //value={destination}
          onSelect={handleDestinationChange}
          items={city} // Replace with your own location options
          menuStyle={{ zIndex: 4 }} // Ensure the autocomplete menu appears above other elements
          autoFocus
        />
      </div>
      <div className="form-group">
        <label htmlFor="pickupTime">Pickup Time:</label>
        <input
          type="time"
          id="pickupTime"
          value={pickupTime}
          onChange={handlePickupTimeChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="carType">Car Type:</label>
        <select id="carType" value={selectedCar} onChange={handleCarTypeChange}>
          <option value="">Select Car Type</option>
          {carTypes.map((car) => (
            <option key={car.name} value={car.name}>
              {car.name}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleBookButton}>Book</button>
      {bookingSlip && (
        <div className="booking-slip">
          <h3>Booking Slip</h3>
          <p>Starting Point: {bookingSlip.startingPoint.name}</p>
          <p>Destination: {bookingSlip.destination.name}</p>
          <p>Pickup Time: {bookingSlip.pickupTime}</p>
          <p>Car Type: {bookingSlip.selectedCar}</p>
          <p>Total Cost: Rs {bookingSlip.totalCost}</p>
        </div>
      )}
    </div>
  );
};

export default GoTaxi;


