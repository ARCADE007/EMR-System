const sql = require("./db.js");

// Constructor

const Medicine = function (medicine) {
  this.name = medicine.name;
  this.dateFrom = medicine.dateFrom;
  this.dateTo = medicine.dateTo;
  this.timeMorning = medicine.timeMorning;
  this.timeEvening = medicine.timeEvening;
  this.timeNight = medicine.timeNight;
  this.prescriptionId = medicine.prescriptionId;
};

//--------------------------------------------------------
// Setters
//--------------------------------------------------------

//Create new medicine

Medicine.create = (newMedicine, result) => {
  const query = "INSERT INTO medicine Set ?";
  sql.query(query, [newMedicine], (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { message: "record created" });
  });
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// Get all prescription by prescription id

Medicine.getAllByPrescriptionId = (prescriptionId, role, id, cb) => {
  const query =
    role === "staff"
      ? "SELECT * FROM medicine, prescription WHERE medicine.prescriptionId = prescription.prescriptionId AND medicine.prescriptionId = ? "
      : "SELECT * FROM medicine, prescription WHERE medicine.prescriptionId = prescription.prescriptionId AND medicine.prescriptionId = ? AND prescription.patientId= ?";

  sql.query(
    query,
    role === "staff" ? [prescriptionId] : [prescriptionId, id],
    (error, result) => {
      if (error) {
        console.log("error :", error);
        cb(null, error);
        return;
      }

      if (result.length === 0) {
        // if not found any
        cb({ kind: "not_found" }, null);
        return;
      }
      // console.log(result);
      // console.log(result[0].patientId);
      // console.log(id);
      cb(null, result);
    }
  );
};

//---------------------------------------------------------

module.exports = Medicine;
