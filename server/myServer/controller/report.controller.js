const Reports = require("../model/report.model");
const { generateAccessToken, checkAccessToken } = require("../utils/jwtAuth");

// * Create and save a new Patient
exports.create = async (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
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
      date: new Date(req.body.date).toISOString().slice(0, 10),
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
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
};

// * Find a all reports with a recordId
exports.findByReportID = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    if (!req.params.recordId) {
      console.log("Params Parameter recordId is not recieved");
      return;
    }

    const recordId = req.params.recordId;
    const auth = checkAccessToken(req.cookies.auth);

    if (auth.role != "Reception" && auth.id) {
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
    } else {
      res.status(401).send({
        message: "Unauthorized",
      });
    }
  }
};
