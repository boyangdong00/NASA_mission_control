const { parse } = require("csv-parse");
const path = require("path");
const { createReadStream } = require("fs");

const planets = [];
const filepath = path.join(
  __dirname,
  "..",
  "data",
  "cumulative_2023.02.15_07.54.00.csv"
);

// // Planets have been confirmed and insol (amount of lights) has be greater than 0.36 and lower than max 1.11
// // Indicate if possible life form can appear on the planets
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resol, rejec) => {
    createReadStream(filepath)
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      ) // readable stream to a writable stream
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          planets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        rejec(err);
      })
      .on("end", () => {
        // once population data is done we will resolve our promise
        resol();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets,
};
