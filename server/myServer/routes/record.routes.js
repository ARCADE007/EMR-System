module.exports = (app) => {
  const records = require("../controller/record.controller.js");

  // Create a new records
  app.post("/records", records.create);

  // Retrieve all records with PatientId
  app.get("/records/:patientId", records.findByRecordID);
};
