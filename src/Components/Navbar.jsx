import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const Navbar = () => {

    const [currlocation, setCurrlocation] = useState({});
  
    useEffect(() => {
      getLocation();
    }, []);
  
    const getLocation = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json");
        setCurrlocation(response.data);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

  return (
    <div className='homepagefirst'>
        <div>
            <h3 onClick={getLocation}>Gps Location</h3> 
            <p>Shehar: {currlocation.city}, {currlocation.region}</p> 
        </div>
        <h3>Settings</h3>
      </div>
  )
}
