// routes/organizationRoutes.js
const express = require('express');
const db = require('../db');
const router = express.Router();

// Add a new organization
router.post('/organization', (req, res) => {
  const { name, description, location, email_address, phone_number } = req.body;
  const query = `
    INSERT INTO organizations (name, description, location, email_address, phone_number) 
    VALUES (?, ?, ?, ?, ?);
  `;
  db.query(query, [name, description, location, email_address, phone_number], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ message: 'Organization added successfully', organization_id: result.insertId });
    }
  });
});

// Get all organizations
router.get('/organizations', (req, res) => {
  const query = `SELECT * FROM organizations`;
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
