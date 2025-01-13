import React, { useState } from 'react';
import './EconomyPage.css';

const years = [2020, 2021, 2022, 2023, 2024, 2025];

const EconomyPage = () => {
  const [data, setData] = useState(
    years.map((year) => ({
      year,
      gdp: '',
      gdpPerCapita: '',
    }))
  );

  const handleInputChange = (index, field, value) => {
    const updatedData = [...data];
    updatedData[index][field] = value;
    setData(updatedData);
  };

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
          {data.map((row, index) => (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>
                <input
                  type="number"
                  placeholder="GDP"
                  value={row.gdp}
                  onChange={(e) =>
                    handleInputChange(index, 'gdp', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="GDP Bình quân"
                  value={row.gdpPerCapita}
                  onChange={(e) =>
                    handleInputChange(index, 'gdpPerCapita', e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EconomyPage;
