const Record = require("../model/record.model");

// * Create and save a new Record
exports.create = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a Record
  const record = new Record({
    recordID: null,
    recordName: req.body.recordName,
    patientID: req.body.patientID,
  });

   // Save Patient in the Database
   Record.create(record, (err, data) => {
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
// * Find a Single Record with a RecordID
exports.findOne = (req, res) => {
    if (checkAccessToken(req.cookies.auth)) {
        Record.findByRecordID(
        req.params.recordID,
        (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found Record with RecordID ${req.params.recordtID}.`,
              });
            } else {
              res.status(500).send({
                message:
                  "Error retrieving Record with recordID " +
                  req.params.recordID,
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
  // Create a Patient
  const Record = {
    recordID: null,
    recordName: req.body.recordName,
    patientID: req.body.patientID,
   
};

// Removes undefined keys
Object.keys(record).forEach(
  (key) => record[key] === undefined && delete record[key]
);

