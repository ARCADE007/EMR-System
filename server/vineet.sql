-- Create Queries

CREATE TABLE staff (
    staffId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    password VARCHAR(64) NOT NULL,
    staffName VARCHAR(20) NOT NULL,
    staffPhoneno VARCHAR(15) NOT NULL,
    staffEmail VARCHAR(50) NOT NULL,
    staffAddress VARCHAR(200)NOT NULL,
    roleName VARCHAR(20) NOT NULl,
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
    patientAddress Varchar(200) NOT NULL,
    PRIMARY KEY(patientId)
)AUTO_INCREMENT=1;

CREATE TABLE record(
    recordId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    recordName VARCHAR(20) NOT NULL,
    PRIMARY KEY(recordId),
    patientId INTEGER UNSIGNED,
    FOREIGN KEY record(patientId) REFERENCES Emr_System.patient(patientId)
)AUTO_INCREMENT=1;

INSERT INTO Record values(null,"Asthma","1"),(null,"Asthma","2"),(null,"Bp","1"),(null,"Bp","2"),(null,"HyperTension","1"),(null,"HyperTension","2"),(null,"Pain in Joint","1"),(null,"Pain in Joint","2"),(null,"Anxiety","1"),(null,"Anxiety","2"),(null,"Diabetes","1"),(null,"Diabetes","2"),(null,"Obesity","1"),(null,"Obesity","2"),(null,"Back pain","1"),(null,"Back pain","2"),(null,"Respiratory problems","1"),(null,"Respiratory problems","2"),(null,"Depressive disorder","1"),(null,"Depressive disorder","2");

CREATE TABLE report(
    reportId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT ,
    reportName VARCHAR(20) NOT NULL,
    Date date NOT NULL,
    file VARCHAR(500) NOT NULL ,
    PRIMARY KEY(reportId),
    recordId INTEGER UNSIGNED,
    FOREIGN KEY report(recordId) REFERENCES Emr_System.record(recordId)
)AUTO_INCREMENT=1;

INSERT INTO report values(null,"a1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","1"),
(null,"a2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","1"),
(null,"a3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","1"),
(null,"a4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","1"),
(null,"b1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","2"),
(null,"b2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","2"),
(null,"b3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","2"),
(null,"b4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","2"),
(null,"c1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","3"),
(null,"c2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","3"),
(null,"c3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","3"),
(null,"c4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","3"),
(null,"d1","1999-01-01","https://drive.google.com/file/d/14pnyj_HlagRJjjiYZvJnc1yUcyvn1IsA/view?usp=sharing","4"),
(null,"d2","1999-02-02","https://drive.google.com/file/d/1cCN7f-jkNs5H0jgB-Q6INqNvZC5ihZTh/view?usp=sharing","4"),
(null,"d3","1999-03-03","https://drive.google.com/file/d/1r08VGOynrgEpUD0_1OqJPQMHKkefrbEi/view?usp=sharing","4"),
(null,"d4","1999-04-04","https://drive.google.com/file/d/1c59S_VD4pF-8l5PFSaB-2ZmymNUbQxTA/view?usp=sharing","4"),




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
(null,"Basic symptoms prefer MRI","Pain in joint","1999-02-02","1","1"),
(null,"Infecion of the outer membrane of the eyeball and the inner eyelid ","Conjunctivits","1999-03-03","1","1"),
(null,"Signs Of High colestrol","Nerve damage","1999-04-04","2","1"),
(null,"Triggers include hormonal changes preceded by warning symptoms","Migraine","1999-05-05","2","1"),
(null,"Basic symptoms prefer MRI","Pain in joint","1999-02-02","1","2"),
(null,"Infecion of the outer membrane of the eyeball and the inner eyelid ","Conjunctivits","1999-03-03","1","2"),
(null,"Signs Of High colestrol","Nerve damage","1999-04-04","2","2"),
(null,"Triggers include hormonal changes preceded by warning symptoms","Migraine","1999-05-05","2","2");


CREATE TABLE medicine(
    medicineId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    name  VARCHAR(50) NOT NULL,
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
(null,"Amitriptyline","1999-02-02","1999-02-09","yes","no","yes","1"),
(null,"Amlodipine","1999-02-02","1999-02-08","no","yes","yes","1"),
(null,"Amoxicillin","1999-02-02","1999-02-09","yes","no","yes","1"),
(null,"Aprepitant","1999-02-02","1999-02-08","no","yes","yes","1"),
(null,"Baclofen","1999-02-02","1999-02-09","yes","no","yes","2"),
(null,"Bleomycin","1999-02-02","1999-02-08","no","yes","yes","2"),
(null,"Bortezomib","1999-02-02","1999-02-09","yes","no","yes","2"),
(null,"Bosentan","1999-02-02","1999-02-08","no","yes","yes","2"),
(null,"Captopril","1999-02-02","1999-02-09","yes","no","yes","3"),
(null,"Carboplatin","1999-02-02","1999-02-08","no","yes","yes","3"),
(null,"Cefaclor","1999-02-02","1999-02-09","yes","no","yes","3"),
(null,"Cefepime","1999-02-02","1999-02-08","no","yes","yes","3"),
(null,"Dasatinib","1999-02-02","1999-02-09","yes","no","yes","4"),
(null,"Dexamethasone","1999-02-02","1999-02-08","no","yes","yes","4"),
(null,"Diclofenac","1999-02-02","1999-02-09","yes","no","yes","4"),
(null,"Didanosine","1999-02-02","1999-02-08","no","yes","yes","4"),
(null,"Erlotinib","1999-02-02","1999-02-09","yes","no","yes","5"),
(null,"Erythromycin","1999-02-02","1999-02-08","no","yes","yes","5"),
(null,"Enoxaparin","1999-02-02","1999-02-09","yes","no","yes","5"),
(null,"Etravirine","1999-02-02","1999-02-08","no","yes","yes","5"),
(null,"Famotidine","1999-02-02","1999-02-09","yes","no","yes","6"),
(null,"Fluconazole","1999-02-02","1999-02-08","no","yes","yes","6"),
(null,"Furosemide","1999-02-02","1999-02-09","yes","no","yes","6"),
(null,"Famciclovir","1999-02-02","1999-02-08","no","yes","yes","6"),
(null,"Ganciclovir","1999-02-02","1999-02-09","yes","no","yes","7"),
(null,"Gefitinib","1999-02-02","1999-02-08","no","yes","yes","7"),
(null,"G-CSF","1999-02-02","1999-02-09","yes","no","yes","7"),
(null,"Hydrocortisone","1999-02-02","1999-02-08","no","yes","yes","7"),
(null,"Hydroxyurea","1999-02-02","1999-02-09","yes","no","yes","8"),
(null,"Ifosfamide","1999-02-02","1999-02-08","no","yes","yes","8"),
(null,"Imatinib","1999-02-02","1999-02-09","yes","no","yes","8"),
(null,"Irinotecan","1999-02-02","1999-02-08","no","yes","yes","8");

