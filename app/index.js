const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("CloudScale App deployed via CI/CD ✅");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});
// CI/CD test change
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ App running on port ${PORT}`);
});
