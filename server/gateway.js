const path = require("path");

const express = require("express");

const app = express();

const Port = process.env.PORT || 8080;

app.use("/", express.static(path.join(__dirname, "../build")));

app.listen(Port, () => {
  console.log(`gateway running on port ${Port}`);
});
