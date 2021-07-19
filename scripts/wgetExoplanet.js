const wget = require("wget-improved");
const fs = require("fs");

// Only pulling planet name, can be configured to pull whatever with 
// https://exoplanetarchive.ipac.caltech.edu/docs/program_interfaces.html

const src =
  "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+pl_name+from+pscomppars&format=json";
const outputFile = "ExoplanetList\\ExoplanetJSON.json";

// Uses wget to pull XML table from caltech NASA API

function wgetExoXML() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
    console.log("Unlinked");
  }
  console.log("Starting download, this might take a minute");
  wget.download(src, outputFile);
  console.log("Downloaded");
}

module.exports = wgetExoXML;
