import React from 'react';
import './SportsPage.css';

// Import ảnh của các vận động viên và đội tuyển
import badmintonImage from '../assets/badminton.jpg';
import swimmingImage from '../assets/swimming.jpg';
import footballImage from '../assets/football.jpg';

const SportsPage = () => {
  return (
    <div className="sports-page">
      <h1>Thể thao Việt Nam</h1>

      {/* Expander for Badminton */}
      <div className="expander">
        <input type="checkbox" id="badminton" />
        <label htmlFor="badminton">
          Cầu lông
          <span className="arrow">&#9660;</span>
        </label>
        <div className="content">
          <p>Cầu lông là một trong những môn thể thao phổ biến tại Việt Nam.</p>
          <img src={badmintonImage} alt="Cầu lông" />
        </div>
      </div>

      {/* Expander for Swimming */}
      <div className="expander">
        <input type="checkbox" id="swimming" />
        <label htmlFor="swimming">
          Bơi lội
          <span className="arrow">&#9660;</span>
        </label>
        <div className="content">
          <p>Bơi lội là môn thể thao mang về nhiều huy chương cho Việt Nam.</p>
          <img src={swimmingImage} alt="Bơi lội" />
        </div>
      </div>

      {/* Expander for Football */}
      <div className="expander">
        <input type="checkbox" id="football" />
        <label htmlFor="football">
          Bóng đá
          <span className="arrow">&#9660;</span>
        </label>
        <div className="content">
          <p>Bóng đá là môn thể thao vua tại Việt Nam, với nhiều đội tuyển nổi bật.</p>
          <img src={footballImage} alt="Bóng đá" />
        </div>
      </div>
    </div>
  );
};

export default SportsPage;
