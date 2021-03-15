const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 3000;


app.use(express.static("assets"))


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/portfolio", (req, res) => {
  res.sendFile(path.join(__dirname, "./portfolio.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./contact.html"));
});

app.listen(PORT, function () {
  console.log(`server listening on port ---> ${PORT}`);
});
