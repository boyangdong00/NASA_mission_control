
const API_URL = 'http://localhost:3004';
async function httpGetPlanets() {
  const resp = await fetch(`${API_URL}/planets`);
  return await resp.json();
}

async function httpGetLaunches() {
  const resp = await fetch(`${API_URL}/launches`);
  const fetchedLaunches =  await resp.json();
  return fetchedLaunches.sort((v1,v2)=> {
    return v1.flightNumber - v2.flightNumber; // accending order 
  });
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};