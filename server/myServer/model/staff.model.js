const sql = require("./db");
const bcrypt = require("bcrypt");

// Constructor
const Staff = function (staff) {
  this.password = staff.password;
  this.staffName = staff.staffName;
  this.staffPhoneno = staff.staffPhoneno;
  this.staffEmail = staff.staffEmail;
  this.staffAddress = staff.staffAddress;
  this.rollName = staff.rollName;
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Insert a new Staff into the staff Table
Staff.create = (newStaff, result) => {
  const query = "INSERT INTO staff SET ?";

  sql.query(query, newStaff, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    console.log("created staff: ", {
      Id: res.insertId,
      ...newStaff,
    });

    result(null, {
      message: "Staff created with staffId " + newStaff.staffId,
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
  console.log(staffId);

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

// * Updates Password
Staff.changePassword = (staffId, password, newPassword, result) => {
  Staff.checkPassword(staffId, password, (err, res) => {
    if (err) {
      result({ kind: "not_valId" }, null);
    } else {
      bcrypt
        .hash(newPassword, saltRounds)
        .then((hash) => {
          newPassword = hash;

          sql.query(
            "UPDATE Staff SET password = ? WHERE staffId = ?",
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
    }
  });
};

module.exports = Staff;
