const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000; // Port của backend

// Middleware để cho phép giao tiếp giữa frontend và backend
app.use(cors());

// Kết nối PostgreSQL
const client = new Client({
  user: 'postgres',       // Your PostgreSQL username
  host: 'localhost',        // Hostname of your PostgreSQL server
  database: 'postgres',     // Database name (use 'postgres' based on your screenshot)
  password: 'Gamvietnam#126', // Password for the user
  port: 5432,               // Default PostgreSQL port
});
client.connect();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the GDP API server!');
});

// API để lấy dữ liệu từ bảng GDP
app.get('/api/gdp', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM gdp');
    res.json(result.rows); // Trả về JSON dữ liệu
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query error' });
  }
});

// Lắng nghe server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
