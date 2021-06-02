const sql = require("./db");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Constructor
const Staff = function (staff) {
  this.password = staff.password;
  this.staffName = staff.staffName;
  this.staffPhoneno = staff.staffPhoneno;
  this.staffEmail = staff.staffEmail;
  this.staffAddress = staff.staffAddress;
  this.roleName = staff.roleName;
  this.departmentName = staff.departmentName;
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Insert a new Staff into the staff Table
Staff.create = (newStaff, result) => {
  const query = "INSERT INTO staff SET ?";

  sql.query(query, newStaff, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }

    console.log("created staff: ", {
      Id: res.insertId,
      ...newStaff,
    });

    result(null, {
      staffId: res.insertId,
    });
  });
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Updates the staff data by staffId
Staff.updateById = (staffId, staff, result) => {
  sql.query(
    "UPDATE staff SET ? WHERE staffId = ?",
    [staff, staffId],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found staff with the Id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated staff: ", {
        staffId: staffId,
        ...staff,
      });
      result(null, { staffId: staffId, ...staff });
    }
  );
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// * Returns the data of staff by staffId by running SELECT
Staff.findBystaffId = (staffId, result) => {
  sql.query(`SELECT * FROM staff WHERE staffId = ?`, staffId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found staff: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found user with the staffId === staffId
    result({ kind: "not_found" }, null);
  });
};

// Returns all staff

Staff.findAllStaff = (result) => {
  sql.query(`SELECT * FROM staff`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log(res);
    if (res.length) {
      result(null, res);
      return;
    }

    // not found staff with the staffId === staffId
    result({ kind: "not_found" }, null);
  });
};

Staff.changePassword = (staffId, password, result) => {
  bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
      newPassword = hash;

      sql.query(
        "UPDATE staff SET password = ? WHERE staffId = ?",
        [newPassword, staffId],
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
};
// Checks Password

Staff.checkPassword = (staffId, password, result) => {
  // console.log(password,staffId);
  sql.query(
    "SELECT password from staff WHERE staffId = ?",
    [staffId],
    (err, res) => {
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
              console.log("password authenticated : ", staffId);
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

Staff.findEmailId = (Id, result) => {
  sql.query("Select staffEmail From staff where staffId=?", Id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found Staff: ", res);
      result(null, res[0]);
      return;
    }

    // not found Patient with the patientId === patientId
    result({ kind: "not_found" }, null);
  });
};

module.exports = Staff;
