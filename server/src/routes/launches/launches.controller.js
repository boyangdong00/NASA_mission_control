const {
  getAllLaunches,
  submitLaunch,
  abortLaunchById,
  existsLaunchWithId,
} = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches()); // data access method
}

function httpSubmitLaunch(req, res) {
  const launch = req.body;
  // validation on client input data
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "missing required launch properties",
    });
  }
  // convert json string to date object
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "invalid date",
    });
  }

  submitLaunch(launch);
  return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
  const flightId = +req.params.id;

  //can not find launch mission to abort
  if (!existsLaunchWithId(flightId)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }
    const aborted = abortLaunchById(flightId);
  // found and abort the correct mission
    return res.status(200).json(aborted);

}

module.exports = {
  httpGetAllLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};
