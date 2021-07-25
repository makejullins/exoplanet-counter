const exoplanetCounter = require('../public/javascripts/exoplanets');
const uploadToMongo = require('../public/javascripts/uploadToMongo.js');

exports.exoplanet_count = function(req, res, next) {

    exoplanetCounter.countExoplanets();

    res.render('exoplanet_count', { title: 'Live Exoplanet Counter', exoplanetCount: count })
}