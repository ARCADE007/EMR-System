SELECT staff.staffName,staff.departmentName
FROM prescription
INNER JOIN staff ON staff.staffId = prescription.staffId
WHERE prescription.patientId = 1

Select prescription.date,prescription.description
From prescription
INNER JOIN staff ON staff.staffId = prescription.staffId
WHERE prescription.patientId = 3

insert into prescription VALUES(null,"null",'fever','1','3','1998-04-04')

Select DISTINCT staff.staffName,staff.departmentName From prescription,staff where staff.staffId = prescription.staffId and patientId=?;