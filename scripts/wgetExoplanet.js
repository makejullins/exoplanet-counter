const wget = require("wget-improved");
const fs = require("fs");

const src =
  "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+pscomppars&format=json";
const outputFile = "ExoplanetList\\ExoplanetXML.xml";

// Uses wget to pull XML table from caltech NASA API

function wgetExoXML() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
  console.log("Starting download, this might take a minute");
  wget.download(src, outputFile);
}

module.exports = wgetExoXML;