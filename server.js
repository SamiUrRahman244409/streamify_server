const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Define the path to the JSON file
const dataFilePath = path.join(__dirname, 'data.json');

// Define a route
app.get('/', (req, res) => {
    // Read the JSON file and send the data as the response
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
const PORT = 3454;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
