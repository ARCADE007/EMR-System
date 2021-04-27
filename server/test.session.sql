SELECT staff.staffName,staff.departmentName
FROM prescription
INNER JOIN staff ON staff.staffId = prescription.staffId
WHERE prescription.patientId = 1

Select prescription.date,prescription.description
From prescription
INNER JOIN staff ON staff.staffId = prescription.staffId
WHERE prescription.patientId = 3

insert into prescription VALUES(null,"null",'fever','1','3','1998-04-04')

-- DR Dashboard Patient
Select DISTINCT staff.staffId,staff.staffName,staff.departmentName From prescription,staff where staff.staffId = prescription.staffId and patientId=1;

-- prescriptionMain
Select date,description,disease from  prescription where staffId=1 and patientId=1;

--recorddashboardpatient

Select recordId,recordName from record where patientId=?;





