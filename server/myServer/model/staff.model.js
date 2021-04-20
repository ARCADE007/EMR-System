const sql = require("./db");

// Constructor
const Staff = function (staff) { 
    this.staffID = staff.staffID;
    this.password =  staff.password;
    this.staffName =  staff.staffName;
    this.staffphoneNo = staff.staffphoneNo;
    this.staffemail = staff.staffemail;
    this.staffAddress = staff.staffAddress;
    this.rollName = staff.rollName;
  };

 //---------------------------------------------------------
//Setters
//---------------------------------------------------------
  
  // * Insert a new Staff into the staff Table
  Staff.create = (newStaff, result) => {
  
    const query = "INSERT INTO user SET ?";

  sql.query(query, newStaff, (err, res) => {
  
    if (err) {
      result(err, null);
      return;
    }
    
    console.log("created staff");
    result(null, {
      message:
        "staff created"
    });
  });
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

  // * Updates the staff data by staffID
  Staff.updateById = (staffID, staff, result) => {
    sql.query(
      "UPDATE staff SET ? WHERE staffID = ?",
      [staff, staffID],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found staff with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated staff: ", {
          staffID: staffID,
          ...staff,
        });
        result(null, { staffID: staffID, ...staff });
      }
    );
  };

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// * Returns the data of staff by staffId by running SELECT
Staff.findBystaffID = (staffID, result) => {
    console.log(staffID);
  
    sql.query(
      `SELECT * FROM staff WHERE staffID = ?`,
      staffID,
      (err, res) => {
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
  
        // not found user with the staffID === staffID
        result({ kind: "not_found" }, null);
      }
    );
  };
