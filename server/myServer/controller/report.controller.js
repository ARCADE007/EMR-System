const Reports = require("../model/report.model");

// * Create and save a new Patient
exports.create = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }
  // Create a Report
  const report = new Reports({
    reportName: req.body.reportName,
    date: req.body.date,
    file: req.body.file,
    recordId: req.body.recordId,
  });

  // Save Report in the Database
  Reports.create(report, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Record.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

// * Find a all reports with a recordId
exports.findByReportID = (req, res) => {
  if (!req.params.recordId) {
    console.log("Params Parameter recordId is not recieved");
    return;
  }
  const recordId = req.params.recordId;
  Reports.findByReportID(recordId, (error, reportData) => {
    if (error) {
      if (error.kind === "not_found") {
        res.status(404).send({
          message: `Cannot find medicine with recordId ${recordId}`,
        });
      } else {
        res.status(500).send({
          message: `Internal error occured while fetching the reports with recordId ${recordId}`,
        });
      }
    } else {
      res.status(200).send(reportData);
    }
  });
};
