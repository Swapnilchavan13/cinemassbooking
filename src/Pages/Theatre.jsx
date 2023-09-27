import React, { useState, useEffect } from 'react';
import { Navbar } from '../Components/Navbar';

export const Theatre = () => {
  const [date, setDate] = useState(new Date());
  const [theatreData, setTheatreData] = useState([]);
  const [movieName, setMovieName] = useState('');

  // Function to get the movie title from local storage
  const getMovieTitleFromLocalStorage = () => {
    const storedMovieTitle = localStorage.getItem('selectedMovieTitle');
    if (storedMovieTitle) {
      setMovieName(storedMovieTitle);
    }
  };

  useEffect(() => {
    // Get the movie title from local storage when the component mounts
    getMovieTitleFromLocalStorage();
    fetchTheatreData();
  }, [date]);

  const fetchTheatreData = () => {
    // Dummy data for theaters and show timings
    const theatres = ["PVR Cinema", "INOX", "Big Cinema", "Cinepolis"];
    const showTimings = [
      ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
      ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
      ["10:30 AM", "1:30 PM", "4:30 PM", "7:30 PM"],
      ["11:30 AM", "2:30 PM", "5:30 PM", "8:30 PM"],
    ];

    const theatreData = theatres.map((theatre, index) => ({
      theatreName: theatre,
      movieName: movieName, // Use the movieName state variable
      date: date.toDateString(),
      showTimings: showTimings[index],
    }));

    setTheatreData(theatreData);
  };

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    // Check if the selected date is not in the past
    if (selectedDate >= new Date()) {
      setDate(selectedDate);
    }
  };

  const handleShowTimingClick = (showTiming) => {
    // Handle the click event for show timing here
    console.log(`Show timing selected: ${showTiming}`);
  };

  return (
    <div>
      <Navbar />
      <h1>{movieName} Showtimes</h1>
      <h2>Apni suvidhausar show ka chayan karein</h2>
      <div className='theatremaindiv'>
        <label htmlFor="datePicker">Select Date:</label>
        <input
          type="date"
          id="datePicker"
          onChange={handleDateChange}
          value={date.toISOString().slice(0, 10)}
          min={new Date().toISOString().slice(0, 10)} // Prevent selecting past dates
        />
        <div className='theatrenextdiv'>
          {theatreData.map((theatre, index) => (
            <div className='theatrediv' key={index}>
              <div>
                <h2>Theatre: {theatre.theatreName}</h2>
                <h3>Movie: {movieName}</h3>
                <h4>Date: {theatre.date}</h4>
              </div>
              <div>
                <p>Show Timings:</p>
                {theatre.showTimings.map((showTiming, timingIndex) => (
                  <button
                    className='showbutton'
                    key={timingIndex}
                    onClick={() => handleShowTimingClick(showTiming)}
                  >
                    {showTiming}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
