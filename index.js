// importing express
const express = require("express");
const dotenv = require("dotenv").config();
const PORT = 5000;
const app = express();
const cors = require("cors");
app.use(cors());
// for json
app.use(express.json());
// form data
app.use(express.urlencoded({ extended: true }));
// using routes
app.use("/", require("./routers"));
//not found route
app.use("*", (req, res) => {
  return res.status(404).json({
    PageNotFound: "Can't Found Page",
  });
});
// starting server
app.listen(PORT, () => {
  console.log(`Successfully Running Server in PORT: ${PORT}`);
});
