const Staff = require("../model/staff.model");
const generator = require("generate-password");
const { generateAccessToken, checkAccessToken } = require("../utils/jwtAuth");
const sendMail = require("../utils/mailer");
const fptFunction = require("../utils/templetes/ForgotPass/forgotPasswordTemplete");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// * Create and save a new staff
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
  console.log(("actual password : ", password));

  // Create a Staff
  const staff = new Staff({
    password: password,
    staffName: req.body.staffName,
    staffPhoneno: req.body.staffPhoneno,
    staffEmail: req.body.staffEmail,
    staffAddress: req.body.staffAddress,
    rollName: req.body.rollName,
    departmentName: req.body.departmentName,
  });

  await bcrypt
    .hash(staff.password, saltRounds)
    .then((hash) => {
      staff.password = hash;
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the staff.",
      });
    });

  // Save Staff in the Database
  Staff.create(staff, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Staff.",
      });
    } else {
      sendMail(
        staff.staffEmail,
        "Your Login Credentials",
        fptFunction(data.staffId, password)
      );
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
              "Error retrieving staff with staffId " + req.params.staffId,
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

// * Find a All Staff
exports.findAll = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    Staff.findAllStaff((err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found staffs`,
          });
        } else {
          res.status(500).send({
            message: "Error retrieving staffs",
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
  console.log(req.body);
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  if (!req.params.staffId) {
    res.status(400).send({
      message: "staffId undefined!",
    });
  }

  if (checkAccessToken(req.cookies.auth)) {
    // Create a staff
    const staff = {
      staffName: req.body.staffName,
      staffPhoneno: req.body.staffPhoneno,
      staffEmail: req.body.staffEmail,
      staffAddress: req.body.staffAddress,
      rollName: req.body.rollName,
      departmentName: req.body.departmentName,
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

// * Updates the password for the Staff
exports.updatePassword = (req, res) => {
  if (
    req.cookies.StaffId &&
    checkAccessToken(req.cookies.auth) == req.cookies.staffId
  ) {
    Staff.changePassword(
      req.cookies.staffId,
      req.body.password,
      req.body.newPassword,
      (err, data) => {
        if (err) {
          res.status(500).send({
            message:
              "Could not change password for staff with staffId " +
              req.cookies.staffId,
          });
        } else
          res.status(200).send({
            message: `staff password was changed successfully!`,
          });
      }
    );
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
};
