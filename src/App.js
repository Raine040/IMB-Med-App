// Import necessary modules from React library
import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './components/Navbar/Navbar';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          <LandingPage />

          {/* Set up the Routes for different pages */}
          <Routes>
            <Route path="/" element={<LandingPage />} />

            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;