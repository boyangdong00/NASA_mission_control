const launches = new Map();

let latestFlightNumber = 0;

const launch = {
  flightNumber: 0,
  mission: "first moon",
  rocket: "explorer",
  launchDate: new Date("December 27, 2026"),
  target: "kepler-1652b",
  customers: ["Blue origin", "SpaceX"],
  upcoming: true,
  success: true, // success launch
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(Id) {
  return launches.has(Id);
}
function getAllLaunches() {
  return Array.from(launches.values());
}

function submitLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["Blue origin", "SpaceX"],
      flightNumber: latestFlightNumber,
    })
  );
}

function abortLaunchById(id){
    // keep the data history but remove from upcoming list as abort rather than deleting the data
    const aborted = launches.get(id);
    console.log(aborted);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;

}

module.exports = {
  launches,
  getAllLaunches,
  submitLaunch,
  existsLaunchWithId,
  abortLaunchById
};
