const express = require("express");

const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("app is running in home");
});

app.listen(process.env.PORT || PORT, (req, res) => {
  console.log(`app running in port ${PORT}`);
});
