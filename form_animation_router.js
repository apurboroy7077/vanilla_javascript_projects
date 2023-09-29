let express = require("express");
let router = express.Router();
router.get("/form_animation", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/form_animation/index.html");
});
router.get("/form_animation_style.css", (request, response) => {
  response.statusCode = 200;
  response.sendFile(
    __dirname + "/Files/form_animation/form_animation_style.css"
  );
});
router.get("/form_animation_script.js", (request, response) => {
  response.statusCode = 200;
  response.sendFile(
    __dirname + "/Files/form_animation/form_animation_script.js"
  );
});
module.exports = router;
