// this is for middleware logics for express
const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

const app = express();

// security feature middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// logging level middleware
app.use(morgan('combined'));


app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
// setting up routers
app.use(planetsRouter);
app.use(launchesRouter);
// render client side assets and ensure all pages will be rendered for production
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
