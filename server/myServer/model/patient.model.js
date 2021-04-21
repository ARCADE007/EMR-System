const sql = require("./db");
const bcrypt = require("bcrypt");

// Constructor
const Patient = function (patient) {
  this.patientID = patient.patientID;
  this.password = patient.password;
  this.patientName = patient.patientName;
  this.patientphoneNo = patient.patientphoneNo;
  this.patientemail = patient.patientemail;
  this.patientAge = patient.patientAge;
  this.patientdateOfBirth = patient.patientdateOfBirth;
  this.patientAddress = patient.patientAddress;
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Insert a new patient into the Patient Table
Patient.create = (newPatient, result) => {
  const query = "INSERT INTO user SET ?";

  sql.query(query, newPatient, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    console.log("created patient: ", {
      id: res.insertId,
      ...newPatient,
    });

    result(null, {
      message: "user created with username " + newPatient.username,
    });
  });
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Updates the Patient data by patientID
Patient.updateById = (patientID, patient, result) => {
  sql.query(
    "UPDATE Patient SET ? WHERE patientID = ?",
    [patient, patientID],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Patient with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated Patient: ", {
        patientID: patientID,
        ...patient,
      });
      result(null, { patientID: patientID, ...patient });
    }
  );
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// * Returns the data of Patient by patientId by running SELECT
Patient.findByPatientID = (patientID, result) => {
  console.log(patientID);

  sql.query(
    `SELECT * FROM Patient WHERE patientID = ?`,
    patientID,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found user with the patientID === patientID
      result({ kind: "not_found" }, null);
    }
  );
};

// Checks Password

Patient.checkPassword = (patientId, password, result) => {
  sql.query(
    "SELECT password from patient WHERE patientId = ?",
    [patientId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        bcrypt
          .compare(password, res[0].password)
          .then((passResult) => {
            if (passResult) {
              console.log("password authenticated : ", patientId);
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
    }
  );
};
module.exports = Patient;
