const planets = require("../../models/planets.model")
// using return to eliminate side effect and control execution
function getAllPlanets (req, res) {
    return res.status(200).json(planets);
   
}

module.exports = {
    getAllPlanets,
};