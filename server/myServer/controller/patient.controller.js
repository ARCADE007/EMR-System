const Patient = require("../model/patient.model");

// * Create and save a new Patient
exports.create = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a Patient
  const patient = new Patient({
    patientID: null,
    password: req.body.password,
    patientName: req.body.patientName,
    patientphoneNo: req.body.patientphoneNo,
    patientemail: req.body.patientemail,
    patientdateOfBirth: req.body.patientdateOfBirth,
    patientAddress: req.body.patientAddress,
  });

  
  // Save Patient in the Database
  Patient.create(patient, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Patient.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};


// * Find a Single Patient with a PatientID
exports.findOne = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    Patient.findByPatientID(
      req.params.PatientID,
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Patient with PatientID ${req.params.PatientID}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Error retrieving Patient with PatientID " +
                req.params.PatientID,
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

// * Update a User identified by the PatientID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (
    checkAccessToken(req.cookies.auth) ==
    req.params.PatientID
  ) {
    // Create a Patient
    const Patient = {
        patientID: req.body.patientID,
        password: req.body.password,
        patientName: req.body.patientName,
        patientphoneNo: req.body.patientphoneNo,
        patientemail: req.body.patientemail,
        patientdateOfBirth: req.body.patientdateOfBirth,
        patientAddress: req.body.patientAddress,
    };

    // Removes undefined keys
    Object.keys(patient).forEach(
      (key) => patient[key] === undefined && delete patient[key]
    );

    // Update the Patient
    Patient.updateById(
      req.params.patientID,
      patient,
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Patient with patientID ${req.params.patientID}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Error updating Patient with patientID " +
                req.params.patientID,
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