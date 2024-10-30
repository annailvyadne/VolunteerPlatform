// models/organization.js
const db = require('../db');

// Create Organization table if it doesn't exist
const createOrganizationTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS organizations (
      organization_id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      location VARCHAR(255),
      email_address VARCHAR(255) UNIQUE,
      phone_number VARCHAR(20)
    );
  `;
  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("Organization table created or already exists.");
  });
};

createOrganizationTable();

module.exports = {};
