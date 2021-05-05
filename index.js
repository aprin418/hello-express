// imports
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  // acess a database if needed
  //make some logic based off what is inside of request
  //acess API and return some data
  //send a response at the end
  res.send("Hello World!");
});

app.get("/sei", (req, res) => {
  res.send("SEI 412");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
