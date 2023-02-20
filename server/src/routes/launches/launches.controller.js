const { getAllLaunches } = require("../../models/launches.model");



function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches()); // data access method
}

module.exports = {
    httpGetAllLaunches,

}