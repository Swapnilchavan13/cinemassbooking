import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './Components/Login';
import { RegisterPage } from "./Components/RegisterPage";
import { Homepage } from "./Components/Homepage";
import './App.css';
import { Filmein } from "./Pages/Filmein";
import { Theatre } from "./Pages/Theatre";
import { Shehar } from "./Pages/Shehar";
import { BookingSystem } from "./Components/Bookingsystem";

function App() {
  return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/booking" element={<BookingSystem />} />
          <Route path="/homepage/filmein" element={<Filmein />} />
          <Route path="/homepage/theatre" element={<Theatre />} />
          <Route path="/homepage/shehar" element={<Shehar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
