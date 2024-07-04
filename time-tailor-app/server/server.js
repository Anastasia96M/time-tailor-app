const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;
const DATA_FILE = './salonData.json';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Helper function to read JSON file
const readJsonFile = (filePath, res, callback) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: `Error reading file: ${filePath}` });
    }
    try {
      const jsonData = JSON.parse(data);
      callback(jsonData);
    } catch (parseError) {
      return res.status(500).json({ error: `Error parsing file: ${filePath}` });
    }
  });
};

// Helper function to write JSON file
const writeJsonFile = (filePath, data, res, successMessage) => {
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: `Error writing file: ${filePath}` });
    }
    res.json({ message: successMessage });
  });
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Endpoint to get all users' data
app.get('/data', (req, res) => {
  readJsonFile(DATA_FILE, res, (jsonData) => {
    res.json(jsonData);
  });
});
