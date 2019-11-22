const express = require("express");
const path = require("path");



const app = express();
const port = process.env.PORT || "8000";


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});



/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
  res.render("index", { title: "HOME" });
});


app.get("/user", (req, res) => {
  res.render("user", { title: "Profile", userProfile: { nickname: "Auth0" } });
});