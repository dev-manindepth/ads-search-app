const express = require('express');
const { search, createAds, getAllAds } = require('../controller/ads');


const router=express.Router();

router.route("/").get(getAllAds).post(createAds)

router.get("/search",search)

module.exports = router;