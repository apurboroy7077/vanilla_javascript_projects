let express = require("express");
let router = express.Router();
router.get("/calculator", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/calculator/index.html");
});
router.get("/calculator_style.css", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/calculator/calculator_style.css");
});
router.get("/calculator_script.js", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/calculator/calculator_script.js");
});
module.exports = router;
