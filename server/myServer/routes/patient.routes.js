module.exports = (app) => {
  const patients = require("../controller/patient.controller");

  // Create a new Patient
  app.post("/patients", patients.create);

  // Retrieve a single Patient with PatientId
  app.get("/patients/:patientId", patients.findOne);

  // Retrieve all Patient
  app.get("/allpatients", patients.findAll);

  //Returns the data of doctor and disease from prescription
  app.get(
    "/patients/prescription/:patientId",
    patients.findPrescription
  );

  // Update a Patient with PatientId
  app.patch("/patients/:patientId", patients.update);

  // Login by Authenticate Password
  app.post("/authenticate", patients.authenticate);
};
