let canvas = document.getElementsByClassName("canvas")[0];
let set_sky = (current_weather) => {
  let skycon = new Skycons({ color: "white" });
  skycon.add(canvas, Skycons[current_weather]);
  skycon.play();
};

// navigator.geolocation.getCurrentPosition((my_position) => {
//   let latitude = my_position.coords.latitude;
//   console.log(my_position);
// });
let temperature = Math.floor(Math.random() * 50);
let description = document.getElementsByClassName("row_3")[0];
console.log(temperature);
let temperature_span = document.getElementsByClassName("temperature")[0];
temperature_span.innerHTML = temperature;
if (temperature <= 5) {
  set_sky("SNOW");
  description.innerHTML = "It's Snowing";
} else if (temperature <= 10 && temperature > 5) {
  set_sky("FOG");
  description.innerHTML = "Foggy Weather";
} else if (temperature <= 15 && temperature > 10) {
  set_sky("CLEAR_NIGHT");
  description.innerHTML = "Clear Night";
} else if (temperature <= 20 && temperature > 15) {
  set_sky("PARTLY_CLOUDY_DAY");
  description.innerHTML = "Partly Cloudy Day";
} else if (temperature <= 25 && temperature > 20) {
  set_sky("PARTLY_CLOUDY_NIGHT");
  description.innerHTML = "Partly Cloudy Night";
} else if (temperature <= 30 && temperature > 25) {
  set_sky("CLOUDY");
  description.innerHTML = "Cloudy";
} else if (temperature <= 35 && temperature > 30) {
  set_sky("RAIN");
  description.innerHTML = "It's Raining";
} else if (temperature <= 40 && temperature > 35) {
  set_sky("SLEET");
  description.innerHTML = "It's Slow Raining";
} else if (temperature <= 45 && temperature > 40) {
  set_sky("WIND");
  description.innerHTML = "Tornedo";
} else if (temperature <= 50 && temperature > 45) {
  set_sky("CLEAR_DAY");
  description.innerHTML = "Clear Day";
}
