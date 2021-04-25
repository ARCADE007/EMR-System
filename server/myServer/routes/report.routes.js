module.exports = (app) => {
  const reports = require("../controller/report.controller.js");

  // Create a new medicine
  app.post("/reports", reports.create);

  // Retrieve all medicine with PrescriptionId
  app.get("/reports/:recordId", reports.findByReportID);
};
