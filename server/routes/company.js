const express = require("express");
const { createCompany, getAllCompany } = require("../controller/company");

const router = express.Router();

router.route("/").get(getAllCompany).post(createCompany);
module.exports = router;
