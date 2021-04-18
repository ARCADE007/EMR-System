const Prescriptions =require("../model/prescription.model");

// -----------------------------------------------------------------
// Create and save a new Prescription
//------------------------------------------------------------------

exports.create=(req,res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Content cannot be empty!",
        });
    }

// Create a new Prescription

const newPrescription = new Prescriptions({
    prescriptionId:null,
    description:req.body.description,
    date:req.body.date,
    disease:req.body.disease,
    staffname:req.body.staffname,
    patientname:req.body.patientname,
});

// Save prescription in the database

Prescriptions.create(newPrescription,(err,data)=>{
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
//Get Prescription by patientId
//----------------------------------------------------------

exports.getAllByPatientID = (req, res) => {
	if (!req.query.patientId) {
		console.log("Query Parameter patientId is not recieved");
		return;
	}
	const patientId = req.query.patientId;
	Answer.getAllByPatientID(patientId, (error, prescriptionData) => {
		if (error) {
			if (error.kind === "not_found") {
				res.status(404).send({
					message: `Cannot find answer with patientId ${patientId}`,
				});
			} else {
				res.status(500).send({
					message: `Internal error occured while fetching the prescriptions with patientId ${patientId}`,
				});
			}
		} else {
			res.status(200).send(prescriptionData);
		}
	});
};