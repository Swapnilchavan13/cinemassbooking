import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Seat = ({ seatNumber, isSelected, isBooked, onSelect }) => {
  const seatClassName = isSelected ? 'seat selected' : isBooked ? 'seat booked' : 'seat';

  const handleClick = () => {
    if (!isBooked) {
      onSelect(seatNumber);
    }
  };

  return (
    <div className={seatClassName} onClick={handleClick}>
      {seatNumber}
    </div>
  );
};

export const BookingSystem = () => {
  const seatPrice = 100; // Price per seat
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [movieName, setMovieName] = useState('');
  const [time, setTime] = useState('12:00 PM');



  const getMovieTitleFromLocalStorage = () => {
    const storedMovieTitle = localStorage.getItem('selectedMovieTitle');
    if (storedMovieTitle) {
      setMovieName(storedMovieTitle);
    }
  };

  useEffect(() => {
    getMovieTitleFromLocalStorage();
  }, []);



  const calculateTotalPrice = () => {
    return selectedSeats.length * seatPrice;
  };

  // Load previously selected seats from localStorage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('bookingData') || '{}');
    setSelectedSeats(storedData.selectedSeats || []);
  }, []);

 // Function to fetch booked seats from the API
 const fetchBookedSeatsFromAPI = async () => {
  try {
    const response = await axios.get('http://localhost:5000/booked-seats');
    const data = response.data;
    // setBookedSeats(data.bookedSeats.map((seat) => seat.seatNumber));
    setBookedSeats(data.bookedSeats)
  } catch (error) {
    console.error('Failed to fetch booked seats from the API:', error);
  }
};

 // Call the function to fetch booked seats from the API on component mount
 useEffect(() => {
  fetchBookedSeatsFromAPI();
}, []);


  // Update localStorage whenever selected seats change
  useEffect(() => {
    const dataToStore = {
      selectedSeats,
      totalAmount: calculateTotalPrice(),
    };
    localStorage.setItem('bookingData', JSON.stringify(dataToStore));
  }, [selectedSeats]);

  const handleSeatSelect = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  return (
    <div className="booking-system">
      <h2>Movie Name : {movieName}</h2>
      <h3>Show Time : {time}</h3>
      <div className='bookdiv'>
        <h5 htmlFor="">अनुपलब्ध</h5>
        <div className='book'></div>
        <h5 htmlFor="">उपलब्ध</h5>
        <div className='available'></div>
      </div>

    <h2 className="screen">Screen</h2><br />

      <div className="seats">
        {[...Array(26).keys()].map((seatNumber) => (
          <Seat
            key={seatNumber}
            seatNumber={seatNumber + 1}
            isSelected={selectedSeats.includes(seatNumber + 1)}
            isBooked={bookedSeats.includes(seatNumber + 1)}
            onSelect={handleSeatSelect}
            price={seatPrice}
          />
        ))}
      </div>
      
      <div className="selected-seats">
        <h3>Selected Seats: {selectedSeats.join(', ')}</h3>
        <h3>Total Price: Rs.{calculateTotalPrice()}</h3>
      </div>
       <Link to="/details">
        <button>भुगतान करें !</button>
      </Link>
    </div>
  );
};
