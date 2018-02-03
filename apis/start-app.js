var lgtv = require("lgtv");
var express = require('express');
var router = express.Router();
var request = require('request');
var CONFIG = require('../config')

var startApp = function(app) {
  lgtv.connect(CONFIG.lgtvip, function(err, response) {
    if (!err) {
      switch(app) {
        case "youtube":
          lgtv.start_app("youtube.leanback.v4", function(err, response) {});
          break;
        case "netflix":
          lgtv.start_app("netflix", function(err, response) {});
          break;
        case "amazon":
          lgtv.start_app("amazon", function(err, response) {});
          break;
        case "plex":
          lgtv.start_app("cdp-30", function(err, response) {});
          break;
        case "shield":
          lgtv.start_app("com.webos.app.hdmi3", function(err, response) {});
          break;
        case "ps4":
          lgtv.start_app("com.webos.app.hdmi2", function(err, response) {});
          break;
        default:
          ;
      }
    }
  });
};

router.get('/:app', function (req, res) {
  var app = req.params.app;
  startApp(app);
  res.send('Started ' + app)
});

module.exports = router;
