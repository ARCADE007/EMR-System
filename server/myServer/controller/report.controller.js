const Report = require("../model/report.model");

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
  const report = new Report({
    patientID: null,
    password: req.body.password,
    patientName: req.body.patientName,
    patientphoneNo: req.body.patientphoneNo,
    patientemail: req.body.patientemail,
    patientAge: req.body.patientAge,
    patientdateOfBirth: req.body.patientdateOfBirth,
    patientAddress: req.body.patientAddress,
  });

  // Save Report in the Database
  Report.create(report, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Record.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

// * Find a Single report with a reporttID
exports.findOne = (req, res) => {
    if (checkAccessToken(req.cookies.auth)) {
      Patient.findByReportID(
        req.params.PatientID,
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found record with recordID ${req.params.PatientID}.`,
              });
            } else {
              res.status(500).send({
                message:
                  "Error retrieving Repord with reportID " +
                  req.params.reportID,
              });
            }
          } else {
            res.status(200).send(data);
          }
        }
      );
    } else {
      res.status(401).send({
        message: "Unauthorized",
      });
    }
  };

  // Create a \Report
  const Report= {
    reportID: null,
    reportName: req.body.reportName,
    date: req.body.date,
    file: req.body.file,
    recordID: req.body.recordID,
};
// Removes undefined keys
    Object.keys(report).forEach(
      (key) => report[key] === undefined && delete report[key]
    );