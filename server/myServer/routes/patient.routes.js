module.exports = (app) => {
  const patients = require("../controller/patient.controller");

  // Create a new Patient
  app.post("/patients", patients.create);

  // Retrieve a single Patient with PatientId
  app.get("/patients/:PatientId", patients.findOne);

  // Update a Patient with PatientId
  app.patch("/patients/data", patients.update);

  // Login by Authenticate Password
  app.post("/authenticate", patients.authenticate);

  // Confirms a Email JWT
  // app.get("/confirmEmail/:token", patients.confirmEmail);
};
