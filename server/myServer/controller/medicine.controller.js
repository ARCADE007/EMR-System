const Medicines =require("../model/MnewMedicine.model");

// -----------------------------------------------------------------
// Create and save a new Medicine
//------------------------------------------------------------------

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Content cannot be empty!",
        });
    }

// Create a new Medicine

const newMedicine = new Medicines({
    name=req.body.name,
    dateFrom=req.body.dateFrom,
    dateTo=req.body.dateTo,
    timeMorning=req.body.timeMorning,
    timeEvening=req.body.timeEvening,
    timeNight=req.body.timeNight,
    prescriptionId=req.body.prescriptionId,
});

// Save medicine in database

Medicines.create(newMedicine,(err,data)=>{
    if(err){
        res.status(500).send({
            message:
              err.message || "Some error occured while creating the prescription",

        });
    }
    else{
        console.log(req.body.prescriptionId);
        res.status(200).send(data);
    }

});
};

//----------------------------------------------------------
//Get medicine by prescriptionId
//----------------------------------------------------------

exports.getAllByPrescriptionId = (req, res) => {
	if (!req.query.prescriptionId) {
		console.log("Query Parameter prescriptionId is not recieved");
		return;
	}
	const prescriptionId = req.query.prescriptionId;
	Answer.getAllByprescriptionId(prescriptionId, (error, medicineData) => {
		if (error) {
			if (error.kind === "not_found") {
				res.status(404).send({
					message: `Cannot find answer with prescriptionId ${prescriptionId}`,
				});
			} else {
				res.status(500).send({
					message: `Internal error occured while fetching the prescriptions with prescriptionId ${prescriptionId}`,
				});
			}
		} else {
			res.status(200).send(medicineData);
		}
	});
};