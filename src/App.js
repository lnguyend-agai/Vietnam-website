import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EconomyPage from './pages/EconomyPage';

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
      </Routes>
    </Router>
  );
}

export default App;

