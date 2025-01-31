const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

//dot config
dotenv.config();

//mongodb Connection
connectDB();

// rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
//routs
//1 test route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to LifeConnect",
//   });
// });
app.use("/api/v1/test", require("./routes/testRoutes"));

// to see sever is proper running
// http://localhost:8080/
//add port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.DEV_MODE} mode on Port ${process.env.PORT}`
      .bgBlue.white
  );
});
