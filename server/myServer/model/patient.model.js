const sql = require("./db");
const bcrypt = require("bcrypt");

// Constructor
const Patient = function (patient) {
  this.password = patient.password;
  this.patientName = patient.patientName;
  this.patientPhoneno = patient.patientPhoneno;
  this.patientEmail = patient.patientEmail;
  this.patientDob = patient.patientDob;
  this.patientAddress = patient.patientAddress;
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Insert a new patient into the Patient Table
Patient.create = (newPatient, result) => {
  const query = "INSERT INTO patient SET ?";

  sql.query(query, newPatient, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    console.log("created patient: ", {
      Id: res.insertId,
      ...newPatient,
    });

    result(null, {
      message: "Patient created with patientId " + newPatient.patientId,
    });
  });
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Updates the Patient data by patientId
Patient.updateById = (patientId, patient, result) => {
  sql.query(
    "UPDATE Patient SET ? WHERE patientId = ?",
    [patient, patientId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Patient with the Id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Patient: ", {
        patientId: patientId,
        ...patient,
      });
      result(null, { patientId: patientId, ...patient });
    }
  );
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

//Returns the data of doctor and disease from prescription
Patient.findPrescriptionByPatientId = (patientId, result) => {
  console.log(patientId);

  sql.query(
    "Select DISTINCT staff.staffName,staff.departmentName From prescription,staff where staff.staffId = prescription.staffId and patientId=?",
    patientId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found Patient: ", res);
        result(null, res);
        return;
      }

      // not found Patient with the patientId === patientId
      result({ kind: "not_found" }, null);
    }
  );
};
// * Returns the data of Patient by patientId by running SELECT
Patient.findByPatientId = (patientId, result) => {
  console.log(patientId);

  sql.query(
    `SELECT * FROM Patient WHERE patientId = ?`,
    patientId,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found Patient: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found Patient with the patientId === patientId
      result({ kind: "not_found" }, null);
    }
  );
};

// Checks Password

Patient.checkPassword = (id, password, role, result) => {
  const query = `SELECT password from ${
    role == "patient" ? "patient" : "staff"
  } WHERE ${role == "patient" ? "patientId" : "staffId"} = ?`;
  sql.query(query, [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log(res);
    if (res.length) {
      console.log(password, res[0].password);
      bcrypt
        .compare(password, res[0].password)
        .then((passResult) => {
          if (passResult) {
            console.log("password authenticated : ", id);
            result(null, {
              message: "authentication successful",
            });
            return;
          } else {
            result({ kind: "not_found" }, null);
            return;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      result({ kind: "not_found" }, null);
    }
  });
};

// * Updates Password
Patient.changePassword = (patientId, password, newPassword, result) => {
  Patient.checkPassword(patientId, password, (err, res) => {
    if (err) {
      result({ kind: "not_valId" }, null);
    } else {
      bcrypt
        .hash(newPassword, saltRounds)
        .then((hash) => {
          newPassword = hash;

          sql.query(
            "UPDATE Patient SET password = ? WHERE patientId = ?",
            [newPassword, patientId],
            (err, res) => {
              if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
              }

              result(null, "password changed");
            }
          );
        })
        .catch((err) => {
          result(err, null);
        });
    }
  });
};
module.exports = Patient;
