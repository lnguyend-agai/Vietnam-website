const express = require('express');
const { Client } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Gamvietnam#126',
  port: 5432,
});

client.connect();

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the GDP API server!');
});

// API lấy dữ liệu từ bảng GDP (code cũ)
app.get('/api/gdp', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM gdp');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query error' });
  }
});

// ➤ API MỚI: Lấy danh sách quốc gia từ bảng countries
app.get('/api/quoc_gia', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM quoc_gia ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query error' });
  }
});
// ➤ API MỚI: Lấy danh sách quốc gia từ bảng countries
app.get('/api/gdp_2', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM gdp_2 ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database query error' });
  }
});

// Lắng nghe server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
