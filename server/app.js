const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose= require("mongoose");
const companyRouter=require('./routes/company')
const adsRouter=require('./routes/ads');
dotenv.config();

const app = express();
const port = 8000;
const DB_URL = process.env.MONGO_URL;

app.use(express.json())
app.use(cors());

app.use("/api/v1/company",companyRouter)
app.use("/api/v1/ads",adsRouter)

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => console.log(`Error connection database : ${err.message}`));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
