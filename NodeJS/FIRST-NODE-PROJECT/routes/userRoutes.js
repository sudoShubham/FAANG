const express = require("express");

const router = express.Router();

const path = require("path");
const adminData = require("./adminRoutes");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.render(shop);
});

module.exports = router;
