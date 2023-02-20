const express = require('express');
const {
    httpGetAllLaunches,
    httpSubmitLaunch,
    httpAbortLaunch
} = require("./launches.controller")


const launchRouter = express.Router();

launchRouter.get('/', httpGetAllLaunches);
launchRouter.post('/', httpSubmitLaunch);
launchRouter.delete('/:id',httpAbortLaunch);

module.exports = launchRouter;