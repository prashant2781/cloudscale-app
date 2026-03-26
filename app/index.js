
const express = require("express");
const express = PORT = 8080;

app.get("/", (req, res) => {
  res.send("✅ CloudScale App is running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    version: "v1",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`App running on port ${PORT}`);
});
const app = express();

