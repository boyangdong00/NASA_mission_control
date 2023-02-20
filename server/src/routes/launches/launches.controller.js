const { 
    getAllLaunches,
    submitLaunch 
} = require("../../models/launches.model");



function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches()); // data access method
}

function httpSubmitLaunch(req,res){
    const launch = req.body;

    // convert json string to date object
    launch.launchDate = new Date(launch.launchDate);

    submitLaunch(launch);
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpSubmitLaunch,
}