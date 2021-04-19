const Staff = require("../model/staff.model");

// * Create and save a new staff
exports.create = async (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a Staff
  const staff = new Staff({
    staffID: null,
    password: req.body.password,
    staffName: req.body.staffName,
    staffphoneNo: req.body.staffphoneNo,
    staffemail: req.body.staffemail,
    staffAddress: req.body.staffAddress,
    rollName:req.body.rollName,
  });

  
  // Save Staff in the Database
  Staff.create(staff, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Staff.",
      });
    } else {
      res.status(200).send(data);
    }
  });
};


// * Find a Single staff with a StaffID
exports.findOne = (req, res) => {
  if (checkAccessToken(req.cookies.auth)) {
    Staff.findBystaffID(
      req.params.staffID,
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found staff with staffID ${req.params.staffID}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Error retrieving staff with staffID " +
                req.params.PatientID,
            });
          }
        } else {
          res.status(200).send(data);
        }
      }
    );
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
};

// * Update a staff identified by the staffID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  if (
    checkAccessToken(req.cookies.auth) ==
    req.params.staffID
  ) {
    // Create a Patient
    const staff = {
        staffID: req.body.staffID,
        password: req.body.password,
        staffName: req.body.staffName,
        staffphoneNo: req.body.staffphoneNo,
        staffemail: req.body.staffemail,
        staffAddress: req.body.staffAddress,
        rollName:req.body.rollName,
    };

    // Removes undefined keys
    Object.keys(staff).forEach(
      (key) => staff[key] === undefined && delete staff[key]
    );

    // Update the Staff
    Staff.updateById(
      req.params.staffID,
      staff,
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Staff with staffID ${req.params.staffID}.`,
            });
          } else {
            res.status(500).send({
              message:
                "Error updating Staff with staffID " +
                req.params.staffID,
            });
          }
        } else {
          res.status(200).send(data);
        }
      }
    );
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
};