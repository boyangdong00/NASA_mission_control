const express = require('express');
const {
    httpGetAllLaunches,
    httpSubmitLaunch
} = require("./launches.controller")


const launchRouter = express.Router();

launchRouter.get('/', httpGetAllLaunches);
launchRouter.post("/", httpSubmitLaunch);

module.exports = launchRouter;