const express = require("express");
const router = express.Router();
const utilsController = require("../controller/utils");
const initiateRequest = require("../functions");

router.get("/", async ( req, res) => {
    res.status(200).send({ message: 'Welcome to v1 API' })
})

module.exports = {
    router
} 