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
        <h2>नमस्ते {user}</h2>
        <h2>नीचे दिए गए विकल्प में से किसी एक का चयन करें</h2>
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
