const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use(express.static(__dirname + "/public"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

let data = {};

http.listen(3000, () => {
  console.log("Listening on: 3000");
});

app.get("/public", (req, res) => {
  res.render("index");
});

app.get("/form/data", (req, res) => {
  res.json(data);
});

app.post("/form/data", (req, res) => {
  data = req.body;
  res.sendFile(__dirname + "/public/result.html");
});
