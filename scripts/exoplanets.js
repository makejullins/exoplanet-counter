// Libs
const async = require("async");

// Dependencies
const wgetExoplanet = require("./wgetExoplanet.js");
const uploadToMongo = require("./uploadToMongo.js");

// Calls wgetExoplanet which calls uploadToMongo
wgetExoplanet();