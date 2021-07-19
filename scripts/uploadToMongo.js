const mongoose = require("mongoose");
const fs = require("fs");
const async = require("async");

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

      const exoString = data.toString();
      const exoJSON = JSON.parse(exoString);

      console.log(exoJSON);

      Exoplanet.insertMany(exoJSON);
    });
  }
);

const db = mongoose.connection;
