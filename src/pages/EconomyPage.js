import React, { useState, useEffect } from 'react';
import './EconomyPage.css';

const EconomyPage = () => {
  const [gdpData, setGdpData] = useState([]);
  const [countries, setCountries] = useState([]);
  const [gdpAseans, setGDPAsean] = useState([]);

  // Lấy dữ liệu GDP (code cũ)
  useEffect(() => {
    const fetchGdpData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/gdp');
        const result = await response.json();
        const formattedData = result.map((row) => ({
          year: row.year,
          gdp: row.gdp,
          gdpPerCapita: row.gdp_per_capita,
        }));
        setGdpData(formattedData);
      } catch (error) {
        console.error('Error fetching GDP data:', error);
      }
    };

    fetchGdpData();
  }, []);

  // ➤ Lấy dữ liệu quốc gia (code mới)
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/quoc_gia');
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

    // ➤ Lấy dữ liệu quốc gia (code mới)
    useEffect(() => {
      const fetchGDPASEAN = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/gdp_2');
          const result = await response.json();
          setGDPAsean(result);
        } catch (error) {
          console.error('Error fetching countries:', error);
        }
      };
  
      fetchGDPASEAN();
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
          {gdpData.map((row) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.gdp}</td>
              <td>{row.gdpPerCapita}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Danh sách quốc gia Đông Nam Á</h1>
      <table className="economy-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên Quốc Gia</th>
            <th>Mã Quốc Gia</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>{country.id}</td>
              <td>{country.ten}</td>
              <td>{country.ma_quoc_gia}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>GDP quốc gia Đông Nam Á</h1>
      <table className="economy-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Quốc gia ID</th>
            <th>Năm</th>
            <th>GDP</th>
          </tr>
        </thead>
        <tbody>
          {gdpAseans.map((country) => (
            <tr key={country.id}>
              <td>{country.id}</td>
              <td>{country.quoc_gia_id}</td>
              <td>{country.nam}</td>
              <td>{country.gdp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EconomyPage;
