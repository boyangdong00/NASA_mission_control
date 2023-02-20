const launches = new Map();

let latestFlightNumber = 0;

const launch = {
        flightNumber: 0,
        mission: "first moon",
        rocket: "explorer",
        launchDate: new Date('December 27, 2026'),
        target: "kepler-1652b",
        customers: ['Blue origin','SpaceX'],
        upcoming: true,
        sucsess: true   // success launch
    };

launches.set(launch.id ,launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

function submitLaunch(launch){
    latestFlightNumber++;
    launches.set(latestFlightNumber,Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['Blue origin','SpaceX'],
        flightNumber: latestFlightNumber,
    }));
}

// function abortLaunch(id){
//     latestFlightNumber--;
//     launches.delete(id);
// }

module.exports = {
    launches,
    getAllLaunches,
    submitLaunch,
    // abortLaunch
};