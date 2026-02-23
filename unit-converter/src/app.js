const express = require("express");
const path = require("path");
const length = require("./converters/length");
const weight = require("./converters/weight");
const temperature = require("./converters/temperature");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.post("/api/convert", (req, res) => {
  const { category, unit, value } = req.body;

  if (!value || isNaN(value)) {
    return res.status(400).json({ error: "Invalid value" });
  }

  let result;

  if (category === "length")      result = length(value, unit);
  else if (category === "weight") result = weight(value, unit);
  else if (category === "temperature") result = temperature(value, unit);
  else return res.status(400).json({ error: "Invalid category" });

  if (result === null) {
    return res.status(400).json({ error: "Invalid unit" });
  }

  res.json({ result });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});