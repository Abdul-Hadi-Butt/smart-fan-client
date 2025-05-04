const express = require("express");
const cors = require("cors");
const fs = require("fs");
const csv = require("csv-parser");

const app = express();
app.use(cors()); // <--- THIS IS IMPORTANT

app.get("/api/data", (req, res) => {
  const results = [];
  fs.createReadStream("Drawingroom_Fan_1.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      res.json(results);
    });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
