const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

//middleware
var d = new Date();
var day = d.getDay();
var hour = d.getHours();
const getTime = (req, res, next) => {

  (day >= 1 && day <= 5) && (hour >= 9 && hour <=17)?
  next():
  res.send("<p> sorry, we are not here for you back another day</p>");
};

//routes
app.get("/",getTime, (req, res) => {
    fs.readFile("./public/index.html", "UTF-8", (err, data) => {
      err ? console.log(err) : res.send(data);
    });
  });
app.get("/home",getTime, (req, res) => {
  fs.readFile("./public/Home.html", "UTF-8", (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.get("/ourservices",getTime, (req, res) => {
    fs.readFile("./public/Our Services.html", "UTF-8", (err, data) => {
      err ? console.log(err) : res.send(data);
    });
  });
  app.get("/contactus",getTime, (req, res) => {
    fs.readFile("./public/Contact us.html", "UTF-8", (err, data) => {
      err ? console.log(err) : res.send(data);
    });
  });
// app.set("views engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')) );


const PORT = process.env.PORT || 5000;
const index = app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`index running on port ${PORT}`)
);
