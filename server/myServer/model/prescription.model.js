const sql = require("./db.js");

// Constructor

const Prescription = function (prescription) {
  this.description = prescription.description;
  this.date = prescription.date;
  this.disease = prescription.disease;
  this.staffId = prescription.staffId;
  this.patientId = prescription.patientId;
};

//--------------------------------------------------------
// Setters
//--------------------------------------------------------

// Create new prescription

Prescription.create = (newPrescription, result) => {
  const query = "INSERT INTO prescription Set ?";
  sql.query(query, [newPrescription], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { ...res });
  });
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// Get all prescription by patient id

Prescription.getAllByPatientID = (patientId, staffId, cb) => {
  const query =
    "SELECT * FROM prescription WHERE prescription.patientId = ? AND prescription.staffId = ?";

  sql.query(query, [patientId, staffId], (error, result) => {
    if (error) {
      console.log("error :", error);
      cb(null, error);
      return;
    }
    if (result.affectedRows === 0) {
      // if not found any
      cb({ kind: "not_found" }, null);
    }
    cb(null, result);
  });
};

//---------------------------------------------------------

module.exports = Prescription;
