-- Create Queries

CREATE TABLE Staff (
    staffID INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    password VARCHAR(20) NOT NULL,
    staffName VARCHAR(20) NOT NULL,
    staffPhoneNo INTEGER NOT NULL,
    staffEmail VARCHAR(20) NOT NULL,
    staffAddress VARCHAR(30)NOT NULL,
    rollName VARCHAR(20) NOT NULl,
    PRIMARY KEY(staffID)
   )AUTO_INCREMENT=1;

CREATE TABLE Patient(
    patientId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    password VARCHAR(20) NOT NULL,
    patientName VARCHAR(20) NOT NULL,
    patientPhoneNo VARCHAR(11) NOT NULL,
    patientEmail VARCHAR(50) NOT NULL,
    patientDOB date NOT NULL,
    patientAddress Varchar(40) NOT NULL,
    PRIMARY KEY(patientID)
)AUTO_INCREMENT=1;

CREATE TABLE Record(
    recordID INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    recordName VARCHAR(20) NOT NULL,
    PRIMARY KEY(recordID),
    patientID INTEGER UNSIGNED,
    FOREIGN KEY Record(patientID) REFERENCES emrsystem.Patient(patientID)
)AUTO_INCREMENT=1;

CREATE TABLE Reports(
    reportID INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT ,
    reportName VARCHAR(20) NOT NULL,
    Date date NOT NULL,
    File BLOB NOT NULL ,
    PRIMARY KEY(reportID),
    recordID INTEGER UNSIGNED,
    FOREIGN KEY Reports(recordID) REFERENCES emrsystem.Record(recordId)
)AUTO_INCREMENT=1;

CREATE TABLE Prescription(
    prescriptionID INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    description BLOB NOT NULL,
    disease VARCHAR(40) NOT NULL,
    PRIMARY KEY(prescriptionID),
    staffID INTEGER UNSIGNED,
    patientID INTEGER UNSIGNED,
    FOREIGN KEY (staffID) REFERENCES emrsystem.staff(staffID),
    FOREIGN KEY (patientID) REFERENCES emrsystem.Patient(patientID)
)AUTO_INCREMENT=1;

CREATE TABLE Medicine(
    medicineId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    Name  VARCHAR(20) NOT NULL,
    `Date(from)` date NOT NULL,
    `Date(to)` date NOT NULL,
    `Time(morning)` VARCHAR(20) NOT NULL,
    `Time(evening)`VARCHAR(20) NOT NULL,
    `Time(night)` VARCHAR(20) NOT NULL,
    PRIMARY KEY(medicineID),
    prescriptionID INTEGER UNSIGNED,
    FOREIGN KEY Medicine(prescriptionID) REFERENCES emrsystem.Prescription(prescriptionID)
)AUTO_INCREMENT=1;

-- Insert Queries
INSERT INTO Patient (
    
    password,
    patientName,
    patientPhoneNo,
    patientEmail,
    patientDOB,
    patientAddress
    )
VALUES (
        'Cartoon~1',
        'Priya Kaushik',
        '8954732178',
        'priyakaushik2001@gmail.com',
         DATE('2001/03/12'),
        'H-21 swej farm sodala jaipur'  
    );

