// TO DO LIST - FIRST VERSION

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.set("view engine", "ejs");

// Local Files
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

// *****************************************************************
// APP.GET is called when calling LOCALHOST:3000 in browser
// *****************************************************************
app.get("/", function (req, res) {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);

  res.render("lists", { listTitle: day, newListItems: items });
});

// *****************************************************************
// WORK To Do List Screen
// *****************************************************************
app.get("/work", function (req, res) {
  res.render("lists", { listTitle: "Work List", newListItems: workItems });
});

// *****************************************************************
// APP.POST is triggered when "New Item" Button is pressed.
// *****************************************************************
app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.button === "Work List") {
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
