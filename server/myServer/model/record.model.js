const sql = require("./db");

// Constructor
const Record = function (record) {
  this.recordName = record.recordName;
  this.patientId = record.patientId;
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Insert a new record into the Record Table
Record.create = (newRecord, result) => {
  const query = "INSERT INTO Record SET ?";

  sql.query(query, newRecord, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    console.log("created Record");
    result(
      null,

      {
        message: "Record created",
      }
    );
  });
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// * Returns the data of Record by recordId by running SELECT
Record.findByRecordID = (patientId, cb) => {
  const query = "SELECT * FROM Record WHERE record.patientId = ?";
  sql.query(query, [patientId], (error, result) => {
    if (error) {
      console.log("error: ", error);
      cb(null, error);
      return;
    }

    if (result.affectedRows === 0) {
      // if not found any
      cb({ kind: "not_found" }, null);
    }
    cb(null, result);
  });
};

//--------------------------------------------------------
module.exports = Record;
