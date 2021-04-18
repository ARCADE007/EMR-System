const sql = require("./db.js");


// Constructor

const Medicine=function(medicine){
    this.medicineId=medicine.medicineId;
    this.name=medicine.name;
    this.dateFrom=medicine.dateFrom;
    this.dateTo=medicine.dateTo;
    this.timeMorning=medicine.timeMorning;
    this.timeEvening=medicine.timeEvening;
    this.timeNight=medicine.timeNight;
    this.prescriptionId=medicine.prescriptionId;
};

//--------------------------------------------------------
// Setters
//--------------------------------------------------------

//Create new medicine

Medicine.create=(newMedicine,result)=>{


    const query="INSERT INTO medicine Set ?";
    sql.query(query,[newMedicine],(err,res)=>{
        if(err){
            result(err,null);
            return;
        }
        result(null,{ ...res});
    });
};



//---------------------------------------------------------
//Getters
//---------------------------------------------------------

// Get all prescription by prescription id

Medicine.getAllByPrescriptionId=(prescriptionId,cb)=>{
    const query="SELECT * FROM medicine WHERE medicine.prescriptionId = ? "

    sql.query(query,[prescriptionId],(error,result) =>{
        if(error){
            console.log("error :",error);
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


//---------------------------------------------------------

module.exports=Medicine;