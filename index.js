// imports
const express = require("express");
const axios = require("axios");
const { response } = require("express");
const app = express();

app.get("/", function (req, res) {
  // acess a database if needed
  //make some logic based off what is inside of request
  //acess API and return some data
  //send a response at the end
  res.send("Hello World!");
});

// app.get("/sei", (req, res) => {
//   res.send("SEI 412");
// });

app.get("/rockets", (req, res) => {
  axios
    .get("https://api.spacexdata.com/v3/rockets")
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/greet/:name", (req, res) => {
  console.log(req.params);
  res.send(`Hello ${req.params.name}`);
});

app.get("/github/:username", (req, res) => {
  const { username } = req.params;
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//last route, takes you to 404
//always have at the end of page
app.get("/*", (req, res) => {
  console.log(req.params);
  res.send("404");
});

// listen is always last item on page
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
