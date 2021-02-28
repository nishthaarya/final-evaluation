const express = require("express");

const District = require("./models/DistrictSchema");

const registerDistrict = require("./routes/register");
const loginDistrict = require("./routes/login");
const getCities = require("./routes/getCities");
const getCity = require("./routes/getCity");
const addPoll = require("./routes/addPoll");
const getDistrict = require("./routes/getDistrict")

const connectDB = require("./config/db");

const dotenv = require("dotenv");

const app = express();
const port = 8002;

dotenv.config();

connectDB();

app.use(express.json())

app.use("/api", registerDistrict);
app.use("/api", loginDistrict);
app.use("/api", getCities);
app.use("/api", getCity);
app.use("/api", addPoll);
app.use("/api", getDistrict)

app.listen(port, () => {
    console.log("Listening at port", port)
})