const sql = require("./db");

// Constructor
const Report = function (report) {
  this.reportName = report.reportName;
  this.date = report.date;
  this.file = report.file;
  this.recordId = report.recordId;
};

//---------------------------------------------------------
//Setters
//---------------------------------------------------------

// * Insert a new patient into the Patient Table
Report.create = (newReport, result) => {
  const query = "INSERT INTO report SET ?";

  sql.query(query, newReport, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }

    console.log("created report");
    result(null, {
      message: "report created",
    });
  });
};

//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// * Returns the data of report by reportId by running SELECT
Report.findByReportID = (recordId, cb) => {
  const query = "SELECT * FROM report WHERE report.recordId = ? ";

  sql.query(query, [recordId], (error, result) => {
    if (error) {
      console.log("error :", error);
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

module.exports = Report;
