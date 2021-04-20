const sql = require("./db");

// Constructor
const Report = function (report) {
    this.reportID = report.reportID;
    this.reportName =  report.reportName;
    this.date = report.date;
    this.file = report.file;
    this.recordID = report.recordID;
  };

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

  
  // * Insert a new patient into the Patient Table
  Report.create = (newReport, result) => {
  
    const query = "INSERT INTO user SET ?";

  sql.query(query, newReport, (err, res) => {
  
    if (err) {
      result(err, null);
      return;
    }
    
    console.log("created report");
    result(null, {
      message:
        "report created"
    });
  });
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------


// * Returns the data of report by reportId by running SELECT
Report.findByReportID = (reportID, result) => {
    console.log(reportID);
  
    sql.query(
      `SELECT * FROM Report WHERE reportID = ?`,
      reportID,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
  
        if (res.length) {
          console.log("found report: ", res[0]);
          result(null, res[0]);
          return;
        }
  
        // not found user with the repordID === reportID
        result({ kind: "not_found" }, null);
      }
    );
  };

 