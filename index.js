const express = require("express");
const app = express();

app.use("/aboutus", (req, res, next) => {
  res.write(
    "Hello Vaskar Sarma! I am the about us page.Try the docker application."
  );
  res.end();
});

app.use("/", (req, res, next) => {
  res.write("Hello Vaskar Sarma! Try the docker application.");
  res.end();
});

app.listen(4444, () => {
  console.log("Server started at port  4444");
});
