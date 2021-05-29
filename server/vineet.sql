-- Create Queries

CREATE TABLE staff (
    staffId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    password VARCHAR(64) NOT NULL,
    staffName VARCHAR(20) NOT NULL,
    staffPhoneno VARCHAR(15) NOT NULL,
    staffEmail VARCHAR(50) NOT NULL,
    staffAddress VARCHAR(100)NOT NULL,
    rollName VARCHAR(20) NOT NULl,
    departmentName varchar (30) NOT NULL,
    PRIMARY KEY(staffId)
   )AUTO_INCREMENT=1;



CREATE TABLE patient(
    patientId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    password VARCHAR(64) NOT NULL,
    patientName VARCHAR(20) NOT NULL,
    patientPhoneno VARCHAR(15) NOT NULL,
    patientEmail VARCHAR(50) NOT NULL,
    patientDob date NOT NULL,
    patientAddress Varchar(40) NOT NULL,
    PRIMARY KEY(patientId)
)AUTO_INCREMENT=1;

CREATE TABLE record(
    recordId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    recordName VARCHAR(20) NOT NULL,
    PRIMARY KEY(recordId),
    patientId INTEGER UNSIGNED,
    FOREIGN KEY record(patientId) REFERENCES Emr_System.patient(patientId)
)AUTO_INCREMENT=1;

INSERT INTO record values(null,"Corona","1"),(null,"Corona","2"),(null,"Bp","1"),(null,"Bp","2");


CREATE TABLE report(
    reportId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT ,
    reportName VARCHAR(20) NOT NULL,
    Date date NOT NULL,
    file VARCHAR(500) NOT NULL ,
    PRIMARY KEY(reportId),
    recordId INTEGER UNSIGNED,
    FOREIGN KEY report(recordId) REFERENCES Emr_System.record(recordId)
)AUTO_INCREMENT=1;

INSERT INTO report values(null,"c-1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","1"),
(null,"c-2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","1"),
(null,"c-3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","1"),
(null,"c-4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","1"),
(null,"c-5","1999-05-05","https://drive.google.com/file/d/1M3k7vTQvhUT4bFzAseessr6SjaDn8NpN/view?usp=sharing","1"),
(null,"c-1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","2"),
(null,"c-2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","2"),
(null,"c-3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","2"),
(null,"c-4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","2"),
(null,"c-5","1999-05-05","https://drive.google.com/file/d/1M3k7vTQvhUT4bFzAseessr6SjaDn8NpN/view?usp=sharing","2"),
(null,"bp-1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","3"),
(null,"bp-2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","3"),
(null,"bp-3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","3"),
(null,"bp-4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","3"),
(null,"bp-5","1999-05-05","https://drive.google.com/file/d/1M3k7vTQvhUT4bFzAseessr6SjaDn8NpN/view?usp=sharing","3"),
(null,"bp-1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","4"),
(null,"bp-2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","4"),
(null,"bp-3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","4"),
(null,"bp-4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","4"),
(null,"bp-5","1999-05-05","https://drive.google.com/file/d/1M3k7vTQvhUT4bFzAseessr6SjaDn8NpN/view?usp=sharing","4"),


CREATE TABLE prescription(
    prescriptionId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    description VARCHAR(500) NOT NULL,
    disease VARCHAR(40) NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY(prescriptionId),
    staffId INTEGER UNSIGNED,
    patientId INTEGER UNSIGNED,
    FOREIGN KEY (staffId) REFERENCES Emr_System.staff(staffId),
    FOREIGN KEY (patientId) REFERENCES Emr_System.patient(patientId)
)AUTO_INCREMENT=1;



INSERT INTO prescription VALUES
(null,"Basic symptoms prefer MRI","joint pain","1999-02-02","1","1"),
(null,"Redness on face","Swelling in eyes","1999-03-03","1","1"),
(null,"High colestrol","Nerve damage","1999-04-04","2","1"),
(null,"Low colestrol","brain nerve damage","1999-05-05","2","1"),
(null,"Basic symptoms prefer MRI","joint pain","1999-02-02","1","2"),
(null,"Redness on face","Swelling in eyes","1999-03-03","1","2"),
(null,"High colestrol","Nerve damage","1999-04-04","2","2"),
(null,"Low colestrol","brain nerve damage","1999-05-05","2","2");

CREATE TABLE medicine(
    medicineId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    name  VARCHAR(20) NOT NULL,
    dateFrom date NOT NULL,
    dateTo date NOT NULL,
    timeMorning VARCHAR(20) NOT NULL,
    timeEvening VARCHAR(20) NOT NULL,
    timeNight VARCHAR(20) NOT NULL,
    PRIMARY KEY(medicineId),
    prescriptionId INTEGER UNSIGNED,
    FOREIGN KEY medicine(prescriptionId) REFERENCES Emr_System.prescription(prescriptionId)
)AUTO_INCREMENT=1;

INSERT INTO medicine VALUES
(null,"a12","1999-02-02","1999-02-09","yes","no","yes","1"),
(null,"a13","1999-02-02","1999-02-08","no","yes","yes","1"),
(null,"a14","1999-02-02","1999-02-09","yes","no","yes","1"),
(null,"a15","1999-02-02","1999-02-08","no","yes","yes","1"),
(null,"b12","1999-02-02","1999-02-09","yes","no","yes","2"),
(null,"b13","1999-02-02","1999-02-08","no","yes","yes","2"),
(null,"b14","1999-02-02","1999-02-09","yes","no","yes","2"),
(null,"b15","1999-02-02","1999-02-08","no","yes","yes","2"),
(null,"c12","1999-02-02","1999-02-09","yes","no","yes","3"),
(null,"c13","1999-02-02","1999-02-08","no","yes","yes","3"),
(null,"c14","1999-02-02","1999-02-09","yes","no","yes","3"),
(null,"c15","1999-02-02","1999-02-08","no","yes","yes","3"),
(null,"d12","1999-02-02","1999-02-09","yes","no","yes","4"),
(null,"d13","1999-02-02","1999-02-08","no","yes","yes","4"),
(null,"d14","1999-02-02","1999-02-09","yes","no","yes","4"),
(null,"d15","1999-02-02","1999-02-08","no","yes","yes","4"),
(null,"e12","1999-02-02","1999-02-09","yes","no","yes","5"),
(null,"e13","1999-02-02","1999-02-08","no","yes","yes","5"),
(null,"e14","1999-02-02","1999-02-09","yes","no","yes","5"),
(null,"e15","1999-02-02","1999-02-08","no","yes","yes","5"),
(null,"f12","1999-02-02","1999-02-09","yes","no","yes","6"),
(null,"f13","1999-02-02","1999-02-08","no","yes","yes","6"),
(null,"f14","1999-02-02","1999-02-09","yes","no","yes","6"),
(null,"f15","1999-02-02","1999-02-08","no","yes","yes","6"),
(null,"g12","1999-02-02","1999-02-09","yes","no","yes","7"),
(null,"g13","1999-02-02","1999-02-08","no","yes","yes","7"),
(null,"g14","1999-02-02","1999-02-09","yes","no","yes","7"),
(null,"g15","1999-02-02","1999-02-08","no","yes","yes","7"),
(null,"h12","1999-02-02","1999-02-09","yes","no","yes","8"),
(null,"h13","1999-02-02","1999-02-08","no","yes","yes","8"),
(null,"h14","1999-02-02","1999-02-09","yes","no","yes","8"),
(null,"h15","1999-02-02","1999-02-08","no","yes","yes","8");

