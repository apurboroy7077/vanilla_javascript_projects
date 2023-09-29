let express = require("express");
let calculator_routes = require("./calculator_router");
let form_animation_routes = require("./form_animation_router");
let weather_app_routes = require("./weather_app_router");
let app = express();
app.use(calculator_routes);
app.use(form_animation_routes);
app.use(weather_app_routes);
app.get("/", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/home_page.html");
});
app.get("/home_page_style.css", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/home_page_style.css");
});
app.get("/speed_typing", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/speed_typing/index.html");
});
app.get("/speed_typing_style.css", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/speed_typing/speed_typing_style.css");
});
app.get("/speed_typing_script.js", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/speed_typing/speed_typing_script.js");
});
app.get("/speed_typing_factory.js", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/Files/speed_typing/speed_typing_factory.js");
});
app.use("*", (request, response) => {
  response.statusCode = 200;
  response.sendFile(__dirname + "/home_page.html");
});
module.exports = app;
