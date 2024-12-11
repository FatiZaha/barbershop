import React from "react";
import logo from './logo_barbershop.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./booking/home";
import { Button } from "@mui/material";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for the home page */}
          <Route path="/home" element={<Home />} />

          {/* Route for the default page */}
          <Route
            path="/"
            element={
              <div>
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <nav>
                    <Link to="/home" style={{
                      color: 'white'
                    }}>
                    <Button color="inherit" type="button" variant="outlined">
                    Book Appointment
                  </Button>
                  </Link>
                  </nav>
                </header>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
