import React, { useState, useEffect } from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

export const Homepage = () => {

    const [user, setUser] = useState("user");

  return (
    <div>
        <Navbar />
      <div>
        <h2>Namaste {user}</h2>
        <h3>Neeche Diye Gaye Vikalp Me se Kisi Ek Ka Chayan Karain</h3>
      </div>
      <div>
        <Link to="/homepage/filmein">
        <button className='chayanbutton'>Filmein</button>
        </Link>
        <Link to="/homepage/theatre">
        <button className='chayanbutton'>Theatre</button>
        </Link>
        <Link to="/homepage/shehar">
        <button className='chayanbutton'>Shehar</button>
        </Link>
      </div>

    </div>
  );
};
