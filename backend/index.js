// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // Import the database connection
const organizationRoutes = require('./routes/organizationRoutes'); //Import routes 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', organizationRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to the Volunteer Matchmaking Platform API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
