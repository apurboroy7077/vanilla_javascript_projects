let express = require("express");
let router = express.Router();
router.get("/weather_app", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/weather_app/index.html");
});
router.get("/weather_app_style.css", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/weather_app/weather_app_style.css");
});
router.get("/weather_app_script.js", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/weather_app/weather_app_script.js");
});
router.get("/skycons.js", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/weather_app/skycons.js");
});
module.exports = router;
