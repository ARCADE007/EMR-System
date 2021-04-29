const Medicines = require("../model/medicine.model");
const PreMedicine = require("../model/prescription.model");
const { generateAccessToken, checkAccessToken } = require("../utils/jwtAuth");

// -----------------------------------------------------------------
// Create and save a new Medicine
//------------------------------------------------------------------

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
  }

  // Create a new Medicine

  const medicine = new Medicines({
    name: req.body.name,
    dateFrom: req.body.dateFrom,
    dateTo: req.body.dateTo,
    timeMorning: req.body.timeMorning,
    timeEvening: req.body.timeEvening,
    timeNight: req.body.timeNight,
    prescriptionId: req.body.prescriptionId,
  });

  // Save medicine in database

  Medicines.create(medicine, (err, data) => {
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
//Get medicine by prescriptionId
//----------------------------------------------------------

exports.getAllByPrescriptionId = (req, res) => {
  if (!req.params.prescriptionId) {
    console.log("Params Parameter prescriptionId is not recieved");
    return;
  }
  const prescriptionId = req.params.prescriptionId;
  // console.log(prescriptionId);
  const auth = checkAccessToken(req.cookies.auth);
  if (auth && (auth.role == "Patient" || "Staff")) {
    Medicines.getAllByPrescriptionId(
      prescriptionId,
      auth.role == "patient" ? req.cookies.id : req.body.patientId,
      (error, medicineData) => {
        if (error) {
          if (error.kind === "not_found") {
            res.status(404).send({
              message: `Cannot find medicine with prescriptionId ${prescriptionId}`,
            });
          } else {
            res.status(500).send({
              message: `Internal error occured while fetching the medicines with prescriptionId ${prescriptionId}`,
            });
          }
        } else {
          res.status(200).send(medicineData);
        }
      }
    );
  } else {
    res.status(401).send({
      message: `You are not allowed to access this data`,
    });
  }
};

//-----------------------------------------------------------------------

/*

route = /localhost/..../3

auth = checkAuth(cookies.auth)

if(  auth  &&  auth.role ==  "patient"||"staff") ){

  let isAllowed = true

    if (auth.role == "patient"   ){
      isAllowed =   getPatientIdFromPrescriptionId(params.prescriptionId) === auth.id
    }


    if(isAllowed){
      ...
    }else{
      return res not allowed 
    }

}else{
  return res not allowed 
}


*/
