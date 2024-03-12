import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './CustomNavbar';
import Recipe from './Recipe';
import Bmi from './Bmi';
import About from './About';
import Home2 from './Home2';
import Workout from './Workout';
import CustomFooter from './CustomFooter';
import WebTitleContext from './WebTitleContext';
import Pricing from './Pricing';

function App() {
  const webTitle = "MealAndMotion";

  return (
    <WebTitleContext.Provider value={webTitle}>
      <Router>
        <CustomNavbar />
        <div>
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/bmi" element={<Bmi />} />
            <Route path="/workout" element={<Workout />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <CustomFooter />
      </Router>
    </WebTitleContext.Provider>
  );
}

export default App;