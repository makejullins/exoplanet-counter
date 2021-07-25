// Dependencies
const wgetExoplanet = require("./wgetExoplanet.js");

exports.countExoplanets = function() {
    // Calls wgetExoplanet which calls uploadToMongo
    wgetExoplanet();
};