const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));
http.listen(3000, () => {
  console.log("Listening on: 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/form_page", (req, res) => {
  res.send("POST req to page");
});
