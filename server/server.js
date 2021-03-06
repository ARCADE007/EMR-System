const express = require("express");
var cors = require("cors");
var cookieParser = require("cookie-parser");

// Initialized Express App
const app = express();

// Added Cors Headers to Whitelist localhost:3000
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// parse requests of content-type - application/json
// * https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Arcade007 application.",
  });
});

// Add Routes
require("./myServer/routes/patient.routes.js")(app);
require("./myServer/routes/staff.routes.js")(app);
require("./myServer/routes/medicine.routes.js")(app);
require("./myServer/routes/prescription.routes.js")(app);
require("./myServer/routes/record.routes")(app);
require("./myServer/routes/report.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
