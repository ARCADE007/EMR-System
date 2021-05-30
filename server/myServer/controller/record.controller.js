const Records = require("../model/record.model");
const { generateAccessToken, checkAccessToken } = require("../utils/jwtAuth");
// * Create and save a new Record
exports.create = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content cannot be empty!",
      });
      return;
    }

    // Create a Record
    const record = new Records({
      recordName: req.body.recordName,
      patientId: req.body.patientId,
    });

    // Save Patient in the Database
    Records.create(record, (err, data) => {
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
// * Find a Single Record with a RecordID

exports.findByRecordID = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    if (!req.params.patientId) {
      console.log("Params Parameter patientId is not recieved");
      return;
    }
    const patientId = req.params.patientId;
    Records.findByRecordID(patientId, (error, recordData) => {
      if (error) {
        if (error.kind === "not_found") {
          res.status(404).send({
            message: `Cannot find answer with patientId ${patientId}`,
          });
        } else {
          res.status(500).send({
            message: `Internal error occured while fetching the prescriptions with patientId ${patientId}`,
          });
        }
      } else {
        res.status(200).send(recordData);
      }
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
};
