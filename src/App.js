import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EconomyPage from './pages/EconomyPage';
import SportsPage from './pages/SportsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route cho trang chính */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Categories />
              <Footer />
            </>
          }
        />
        {/* Route cho trang EconomyPage */}
        <Route path="/economy" element={<EconomyPage />} />
        <Route path="/sports" element={<SportsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

