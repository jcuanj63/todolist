// TO DO LIST - MODULE EXPORTS (DATE.JS)

const express = require("express");
const bodyParser = require("body-parser");

// External Module "date.js" with module.export object
const dateOne = require(__dirname + "/date.js");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");

// Local Files
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// *****************************************************************
// APP.GET "/" is called when calling LOCALHOST:3000 in browser
// *****************************************************************
app.get("/", function (req, res) {
  // Call external Module date.getDate and assigne it to day
  // We can also use --> let day = dateOne.getDay();

  let day = dateOne.getDate();

  console.log(dateOne);

  res.render("lists", { listTitle: day, newListItems: items });
});

// *****************************************************************
// APP.GET "/WORK" - LOCALHOST:3000/WORK
// *****************************************************************
app.get("/work", function (req, res) {
  res.render("lists", { listTitle: "Work", newListItems: workItems });
});

// *****************************************************************
// APP.GET "/ABOUT" - LOCALHOST:3000/ABOUT
// *****************************************************************
app.get("/about", function (req, res) {
  res.render("about", { listTitle: "About" });
});

// *****************************************************************
// APP.POST is triggered when "New Item" Button is pressed.
// *****************************************************************
app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.button === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

// *****************************************************************
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
