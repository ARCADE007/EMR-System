const Prescriptions = require("../model/prescription.model");

// -----------------------------------------------------------------
// Create and save a new Prescription
//------------------------------------------------------------------

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
  }

  // Create a new Prescription

  const prescription = new Prescriptions({
    description: req.body.description,
    date: new Date(req.body.date)
      .toISOString()
      .slice(0, 19)
      .replace("T", " "),
    disease: req.body.disease,
    staffId: req.body.staffId,
    patientId: req.body.patientId,
  });

  // Save prescription in the database

  Prescriptions.create(prescription, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating the prescription",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

//----------------------------------------------------------
//Get Prescription by patientId
//----------------------------------------------------------

exports.getAllByPatientID = (req, res) => {
  if (!req.params.patientId) {
    console.log("Params Parameter staffId is not recieved");
    return;
  }
  const staffId = req.params.staffId;
  const patientId = req.params.patientId;
  Prescriptions.getAllByPatientID(
    patientId,
    staffId,
    (error, prescriptionData) => {
      if (error) {
        if (error.kind === "not_found") {
          res.status(404).send({
            message: `Cannot find answer with staffId ${staffId}`,
          });
        } else {
          res.status(500).send({
            message: `Internal error occured while fetching the prescriptions with staffId ${staffId}`,
          });
        }
      } else {
        res.status(200).send(prescriptionData);
      }
    }
  );
};
