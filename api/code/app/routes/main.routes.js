  module.exports = app => {
    const express = require("express");
    const router = express.Router();
    const productRoutes = require("./product.routes.js");
    productRoutes(app,router);

};


