// TO DO LIST - FIRST VERSION

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Javier"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

// *****************************************************************
// APP.GET is called when calling LOCALHOST:3000 in browser
// It calculates the current date with "toLocaleDateString" function.
// Then passes (RENDERs) the LISTS.EJS file to the browser with
// "todaysDate" variable and "newListItems" array.
// *****************************************************************
app.get("/", function (req, res) {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);

  res.render("lists", { todaysDate: day, newListItems: items });
});
// *****************************************************************
// REDIRECT - When POST request is executed it will redirect
// to our home route (/) and will trigger APP.GET and will render
// again the LISTS file but now with both values: todaysDate and
// newListItem
// *****************************************************************
app.post("/", function (req, res) {
  let item = req.body.newItem;

  // PUSH new typed/submitted item into ITEMS array
  items.push(item);

  // GO TO Home Route (app.get "/")
  res.redirect("/");
});

// *****************************************************************
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
