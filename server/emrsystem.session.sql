-- Create Queries


CREATE TABLE Staff (
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



CREATE TABLE Patient(
    patientId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    password VARCHAR(64) NOT NULL,
    patientName VARCHAR(20) NOT NULL,
    patientPhoneno VARCHAR(15) NOT NULL,
    patientEmail VARCHAR(50) NOT NULL,
    patientDob date NOT NULL,
    patientAddress Varchar(40) NOT NULL,
    PRIMARY KEY(patientId)
)AUTO_INCREMENT=1;

CREATE TABLE Record(
    recordId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    recordName VARCHAR(20) NOT NULL,
    PRIMARY KEY(recordId),
    patientId INTEGER UNSIGNED,
    FOREIGN KEY Record(patientId) REFERENCES emrsystem.Patient(patientId)
)AUTO_INCREMENT=1;

INSERT INTO Record values(null,"Corona","1"),(null,"Corona","2"),(null,"Bp","1"),(null,"Bp","2");


CREATE TABLE Report(
    reportId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT ,
    reportName VARCHAR(20) NOT NULL,
    Date date NOT NULL,
    file VARCHAR(500) NOT NULL ,
    PRIMARY KEY(reportId),
    recordId INTEGER UNSIGNED,
    FOREIGN KEY Report(recordId) REFERENCES emrsystem.Record(recordId)
)AUTO_INCREMENT=1;

INSERT INTO report values(null,"c-1","1999-01-01","https://drive.google.com/file/d/1hKQPKHpETc0TVntmaQ8cBylSJgkd5wNY/view?usp=sharing","1"),
(null,"c-2","1999-02-02","https://drive.google.com/file/d/1p0gEpEzvjWK3JDitiKcB_O6w0fbo2KAb/view?usp=sharing","1"),
(null,"c-3","1999-03-03","https://drive.google.com/file/d/1IABD0sJMA9ewKuC_w_EReGYki8tuzwvp/view?usp=sharing","1"),
(null,"c-4","1999-04-04","https://drive.google.com/file/d/1dHDnSgCFeOKcGS00bATrSI18KsO05f0y/view?usp=sharing","1"),
(null,"c-5","1999-05-05","https://drive.google.com/file/d/1COkXeetNARoZF9gfTLtVFg8FGKLUS5jJ/view?usp=sharing","1"),
(null,"c-1","1999-01-01","https://drive.google.com/file/d/1F5ItCZbmcNdGBKSqQenFH3i7gNg7E65w/view?usp=sharing","2"),
(null,"c-2","1999-02-02","https://drive.google.com/file/d/1y5uEcNefRuOTuzPrOsk1MOrbYc-0jVdP/view?usp=sharing","2"),
(null,"c-3","1999-03-03","https://drive.google.com/file/d/1ho531qINBqiiK4mwF-fuy88GFhz3cAKN/view?usp=sharing","2"),
(null,"c-4","1999-04-04","https://drive.google.com/file/d/1cd21JWA8rD78s_BuEQiQecaQwuE7mXC7/view?usp=sharing","2"),
(null,"c-5","1999-05-05","https://drive.google.com/file/d/14FDeb9XHWinKrA6e47R2SCLaFdvdJdVc/view?usp=sharing","2"),
(null,"Bp-1","2000-01-01","https://drive.google.com/file/d/1niep5eK0uQTLDdGQ2Ne3f5J2hKr0zFfU/view?usp=sharing","3"),
(null,"Bp-2","2000-02-02","https://drive.google.com/file/d/1vaGhFsmKMEZdBWueqxLLizG_Wg7MZTmX/view?usp=sharing","3"),
(null,"Bp-3","2000-03-03","https://drive.google.com/file/d/16umFXCNaUON1Nc_hc8qnH154CXIkjhHp/view?usp=sharing","3"),
(null,"Bp-4","2000-04-04","https://drive.google.com/file/d/127jpU0u1mZYq1Dfoeqlu5DuS9s4a4bgT/view?usp=sharing","3"),
(null,"Bp-5","2000-05-05","https://drive.google.com/file/d/1JGvr2XLigVGX3MG2Gr-oBO3R-LeNstOj/view?usp=sharing","3"),
(null,"Bp-1","2000-01-01","https://drive.google.com/file/d/1niep5eK0uQTLDdGQ2Ne3f5J2hKr0zFfU/view?usp=sharing","4"),
(null,"Bp-2","2000-02-02","https://drive.google.com/file/d/1vaGhFsmKMEZdBWueqxLLizG_Wg7MZTmX/view?usp=sharing","4"),
(null,"Bp-3","2000-03-03","https://drive.google.com/file/d/16umFXCNaUON1Nc_hc8qnH154CXIkjhHp/view?usp=sharing","4"),
(null,"Bp-4","2000-04-04","https://drive.google.com/file/d/127jpU0u1mZYq1Dfoeqlu5DuS9s4a4bgT/view?usp=sharing","4"),
(null,"Bp-5","2000-05-05","https://drive.google.com/file/d/1JGvr2XLigVGX3MG2Gr-oBO3R-LeNstOj/view?usp=sharing","4");


CREATE TABLE Prescription(
    prescriptionId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    description VARCHAR(500) NOT NULL,
    disease VARCHAR(40) NOT NULL,
    date DATE NOT NULL,
    PRIMARY KEY(prescriptionId),
    staffId INTEGER UNSIGNED,
    patientId INTEGER UNSIGNED,
    FOREIGN KEY (staffId) REFERENCES emrsystem.staff(staffId),
    FOREIGN KEY (patientId) REFERENCES emrsystem.Patient(patientId)
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

CREATE TABLE Medicine(
    medicineId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    name  VARCHAR(20) NOT NULL,
    dateFrom date NOT NULL,
    dateTo date NOT NULL,
    timeMorning VARCHAR(20) NOT NULL,
    timeEvening VARCHAR(20) NOT NULL,
    timeNight VARCHAR(20) NOT NULL,
    PRIMARY KEY(medicineId),
    prescriptionId INTEGER UNSIGNED,
    FOREIGN KEY Medicine(prescriptionId) REFERENCES emrsystem.Prescription(prescriptionId)
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

