const sql = require("./db");

// Constructor
const Record = function (record) {
    this.recordID = record.recordID;
    this.recordName = record.recordID;
    this.patientID = record.patientID
  };

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

  // * Insert a new record into the Record Table
  Record.create = (newRecord, result) => {
  
    const query = "INSERT INTO user SET ?";

  sql.query(query, newRecord, (err, res) => {
  
    if (err) {
      result(err, null);
      return;
    }
    
    console.log("created Record");
    result(null, {
      message:
        "Record created"
    });
  });
};



//---------------------------------------------------------
//Getters
//---------------------------------------------------------


// * Returns the data of Record by recordId by running SELECT
Record.findByRecordID = (recordID, result) => {
    console.log(recordID);
  
    sql.query(
      `SELECT * FROM Record WHERE recordID = ?`,
      recordID,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
  
        if (res.length) {
          console.log("found record: ", res[0]);
          result(null, res[0]);
          return;
        }
  
        // not found user with the patientID === patientID
        result({ kind: "not_found" }, null);
      }
    );
  };
  
  