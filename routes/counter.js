var express = require('express');
var router = express.Router();

var exo_controller = require('../controllers/exoplanetController.js');

// GET homepage
router.get('/', function(req, res, next) {
    res.send(exo_controller.exoplanet_count);
});

module.exports = router;