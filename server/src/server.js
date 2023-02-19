const app = require("./app");
const http = require("http");
const {loadPlanetsData} = require("./models/planets.model")


const PORT = process.env.PORT || 3004;

const server = http.createServer(app);

//commonly used set up DB, wait for data come back
async function startServer(){
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Server is listening on ${PORT}...`);
    });
}

startServer();


