const { getAllPlanets } = require("../../models/planets.model")
// using return to eliminate side effect and control execution
function httpGetAllPlanets (req, res) {
    return res.status(200).json(getAllPlanets());
   
}

module.exports = {
    httpGetAllPlanets,
};