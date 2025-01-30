const express = require("express");
// rest object
const app = express();

//routs
//1 test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to LifeConnect",
  });
});
// to see sever is proper running
// http://localhost:8080/
//add port
const PORT = 8080;

app.listen(PORT, () => {
  console.log("Node server is Running");
});
