const launches = new Map();

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

module.exports = {
    launches,
    getAllLaunches,
};