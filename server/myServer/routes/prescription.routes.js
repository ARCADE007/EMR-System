module.exports = (app) => {
  const prescriptions = require("../controller/prescription.controller");

  // Create a new prescriptions
  app.post("/prescriptions", prescriptions.create);

  // Retrieve all prescriptions with PatientId
  app.get(
    "/prescriptions/:patientId/:staffId",
    prescriptions.getAllByPatientID
  );
};
