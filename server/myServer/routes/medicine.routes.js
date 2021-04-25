module.exports = (app) => {
  const medicines = require("../controller/medicine.controller");

  // Create a new medicine
  app.post("/medicines", medicines.create);

  // Retrieve all medicine with PrescriptionId
  app.get("/medicines/:prescriptionId", medicines.getAllByPrescriptionId);
};
