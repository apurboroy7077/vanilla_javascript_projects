console.log("Hello World");
let app = require("./factory");
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your server is hosted at http://localhost:3000`);
});
