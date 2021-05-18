const Patient = require("../model/patient.model");
const generator = require("generate-password");
const { generateAccessToken, checkAccessToken } = require("../utils/jwtAuth");

const bcrypt = require("bcrypt");
const saltRounds = 10;

// * Create and save a new Patient
exports.create = async (req, res) => {
  // ValIdate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }
  const password = generator.generate({
    length: 8,
    numbers: true,
  });
  console.log("actual password : ", password);

  // Create a Patient
  const patient = new Patient({
    password: password,
    patientName: req.body.patientName,
    patientPhoneno: req.body.patientPhoneno,
    patientEmail: req.body.patientEmail,
    patientDob: req.body.patientDob,
    patientAddress: req.body.patientAddress,
  });

  await bcrypt
    .hash(patient.password, saltRounds)
    .then((hash) => {
      patient.password = hash;
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the patient.",
      });
    });
  // Save Patient in the Database
  Patient.create(patient, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Patient.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

//Returns the data of doctor and disease from prescription

exports.findPrescription = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    Patient.findPrescriptionByPatientId(req.params.patientId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Patient with PatientId ${req.params.patientId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Patient with PatientId " + req.params.patientId,
          });
        }
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

// //Returns the record from record

// exports.findRecord = (req, res) => {
//   console.log(req.params);
//   if (checkAccessToken(req.cookies.auth)) {
//     Patient.findRecordByPatientId(req.params.patientId, (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Patient with PatientId ${req.params.patientId}.`,
//           });
//         } else {
//           res.status(500).send({
//             message:
//               "Error retrieving Patient with PatientId " + req.params.patientId,
//           });
//         }
//       } else {
//         res.status(200).send(data);
//       }
//     });
//   } else {
//     res.status(401).send({
//       message: "Unauthorized",
//     });
//   }
// };

// * Find a Single Patient with a PatientId
exports.findOne = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    Patient.findByPatientId(req.params.patientId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Patient with PatientId ${req.params.patientId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving Patient with PatientId " + req.params.patientId,
          });
        }
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

// * Find a All Patient
exports.findAll = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    Patient.findAllPatient((err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Patients`,
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Patients",
          });
        }
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

// * Update a patient Identified by the PatientId in the request
exports.update = (req, res) => {
  // ValIdate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (checkAccessToken(req.cookies.auth)) {
    // Create a Patient
    const patient = {
      patientName: req.body.patientName,
      patientPhoneno: req.body.patientPhoneno,
      patientEmail: req.body.patientEmail,
      patientDob: req.body.patientDob,
      patientAddress: req.body.patientAddress,
    };

    // Removes undefined keys
    Object.keys(patient).forEach(
      (key) => patient[key] === undefined && delete patient[key]
    );

    // Update the Patient
    Patient.updateById(req.cookies.patientId, patient, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Patient with patientId ${req.cookies.patientId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error updating Patient with patientId " + req.cookies.patientId,
          });
        }
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

// * Login/Authentication by checking password and id
exports.authenticate = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  console.log(req.body);

  if (!req.body.id || !req.body.password || !req.body.role) {
    res.status(400).send({
      message: "id and password required",
    });
    return;
  }

  Patient.checkPassword(
    req.body.id,
    req.body.password,
    req.body.role,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(400).send({
            message: `authentication unsuccessful`,
          });
        } else {
          res.status(500).send({
            message: "Error authenticating patient " + req.body.id,
          });
        }
      } else {
        const token = generateAccessToken(req.body.id, req.body.role);
        res
          .status(200)
          .cookie("auth", token, {
            httpOnly: false,
            sameSite: true,
          })
          .cookie("role", req.body.role, {
            // httpOnly: true,
            sameSite: true,
          })
          .cookie("id", req.body.id, {
            //   httpOnly: true,
            sameSite: true,
          })
          .redirect(
            "http://localhost:3000/" +
              (req.body.role == "reception"
                ? "Registration"
                : req.body.role == "patient"
                ? "DrDashboardPatient"
                : "AskPatientId")
          );
      }
    }
  );
};

// * Updates the password for the Patient
exports.updatePassword = (req, res) => {
  if (
    req.cookies.PatientId &&
    checkAccessToken(req.cookies.auth) == req.cookies.patientId
  ) {
    Patient.changePassword(
      req.cookies.patientId,
      req.body.password,
      req.body.newPassword,
      (err, data) => {
        if (err) {
          res.status(500).send({
            message:
              "Could not change password for Patient with patientId " +
              req.cookies.patientId,
          });
        } else
          res.status(200).send({
            message: `Patient password was changed successfully!`,
          });
      }
    );
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
};
