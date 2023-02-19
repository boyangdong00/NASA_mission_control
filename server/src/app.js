// this is for middleware logics for express
const express = require("express");

const planetsRouter = require("./routes/planets/planets.router")
const app = express();

app.use(express.json());

// setting up routers
app.use(planetsRouter);




module.exports = app;
