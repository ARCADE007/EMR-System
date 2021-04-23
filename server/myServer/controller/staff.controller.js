const Staff = require("../model/staff.model");
const generator = require("generate-password");
const { generateAccessToken, checkAccessToken } = require("../utils/jwtAuth");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const password = generator.generate({
  length: 10,
  numbers: true,
});
console.log(password);

// * Create and save a new staff
exports.create = async (req, res) => {
  // ValIdate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a Staff
  const staff = new Staff({
    staffId: null,
    password: password,
    staffName: req.body.staffName,
    staffPhoneno: req.body.staffPhoneno,
    staffeEmail: req.body.staffEmail,
    staffAddress: req.body.staffAddress,
    rollName: req.body.rollName,
  });

  // Save Staff in the Database
  Staff.create(staff, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Staff.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};

// * Find a Single staff with a StaffId
exports.findOne = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    Staff.findBystaffId(req.params.staffId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found staff with staffId ${req.params.staffId}.`,
          });
        } else {
          res.status(500).send({
            message:
              "Error retrieving staff with staffId " + req.params.PatientId,
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

// * Update a staff Identified by the staffId in the request
exports.update = (req, res) => {
  // ValIdate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (checkAccessToken(req.cookies.auth) == req.params.staffId) {
    // Create a Patient
    const staff = {
      staffId: req.body.staffId,
      password: req.body.password,
      staffName: req.body.staffName,
      staffphoneNo: req.body.staffphoneNo,
      staffemail: req.body.staffemail,
      staffAddress: req.body.staffAddress,
      rollName: req.body.rollName,
    };

    // Removes undefined keys
    Object.keys(staff).forEach(
      (key) => staff[key] === undefined && delete staff[key]
    );

    // Update the Staff
    Staff.updateById(req.params.staffId, staff, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Staff with staffId ${req.params.staffId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating Staff with staffId " + req.params.staffId,
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
