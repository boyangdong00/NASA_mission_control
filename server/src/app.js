// this is for middleware logics for express
const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

app.use(cors({
    origin: 'http://localhost:3001',

}))
app.use(express.json());

// setting up routers
app.use(planetsRouter);
app.use(launchesRouter);




module.exports = app;
