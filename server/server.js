const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/fan-data', (req, res) => {
  const results = [];
  fs.createReadStream('Drawingroom_Fan_1.csv')
    .pipe(csv())
    .on('data', (data) => {
      results.push({
        Temperature: parseFloat(data.Temperature),
        Fan_Speed: parseInt(data.Fan_Speed),
      });
    })
    .on('end', () => {
      res.json(results);
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
