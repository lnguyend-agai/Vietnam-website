import React, { useState, useEffect } from 'react';
import './EconomyPage.css';

const EconomyPage = () => {
  const [data, setData] = useState([]);

  // Fetch dữ liệu từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gdp'); // URL của backend
        const result = await response.json();
        // Chuyển dữ liệu từ API thành state phù hợp
        const formattedData = result.map((row) => ({
          year: row.year,
          gdp: row.gdp,
          gdpPerCapita: row.gdp_per_capita,
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="economy-page">
      <h1>Kinh tế Việt Nam (2020-2025)</h1>
      <table className="economy-table">
        <thead>
          <tr>
            <th>Năm</th>
            <th>GDP (tỷ USD)</th>
            <th>GDP Bình quân đầu người (USD)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.gdp}</td>
              <td>{row.gdpPerCapita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EconomyPage;
