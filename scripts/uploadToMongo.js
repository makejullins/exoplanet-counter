const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const dataPath = "./ExoplanetList/ExoplanetJSON.json";
console.log(dataPath);

const MONGO_URI =
  "mongodb+srv://exoplanetCounter:iYK0ysDTeJJPqxvD@exoplanetnames.nu20q.mongodb.net/pl_name?retryWrites=true&w=majority";

const exoSchema = new mongoose.Schema({
  pl_name: String,
});

var Exoplanet = mongoose.model("Exoplanet", exoSchema);

console.log("program start");

mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function () {

    console.log("Connected to Mongoose");

    fs.readFile(dataPath, function (err, data) {
      if (err) throw err;

      const exoplanetData = data.toString();

      Exoplanet.collection.insertMany(exoplanetData, function(err, r) {
        console.log("Data added");
      })
    });
  }
);

const db = mongoose.connection;
