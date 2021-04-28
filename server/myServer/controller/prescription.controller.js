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
    date: req.body.date,
    disease: req.body.disease,
    staffId: req.body.staffId,
    patientId: req.body.patientId,
  });

  // Save prescription in the database

  Prescriptions.create(prescription, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the prescription",
      });
    } else {
      console.log(req.body.prescriptionId);
      res.status(200).send(data);
    }
  });
};

//----------------------------------------------------------
//Get Prescription by patientId
//----------------------------------------------------------

exports.getAllByPatientID = (req, res) => {
  if (!req.params.staffId) {
    console.log("Params Parameter staffId is not recieved");
    return;
  }
  if (!req.cookies.id) {
    console.log("Cookie with patientId is not recieved");
    return;
  }
  const staffId = req.params.staffId;
  const patientId = req.cookies.id;
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
        console.log(prescriptionData);
        res.status(200).send(prescriptionData);
      }
    }
  );
};
