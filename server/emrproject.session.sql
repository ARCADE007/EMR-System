-- Create Queries
CREATE TABLE role(
    roleID INTEGER PRIMARY KEY,
    roleName VARCHAR(20)
);

CREATE TABLE staff (
    staffID INTEGER PRIMARY KEY,
    Password VARCHAR(20),
    staffName VARCHAR(20),
    staffPhoneNo INTEGER(1),
    staffEmail VARCHAR(20),
    staffAddress VARCHAR(30),
    roleID INTEGER,
    FOREIGN KEY staff(roleID) REFERENCES emrsystem.role(roleID)
);

CREATE TABLE Patient(
    patientID INTEGER PRIMARY KEY,
    password VARCHAR(20),
    patientName VARCHAR(20),
    patientPhoneNo INTEGER,
    patientEmail VARCHAR(20),
    patientAge INTEGER,
    patientDOB date,
    patientAddress Varchar(40)
);

CREATE TABLE Record(
    recordID INTEGER PRIMARY KEY,
    recordName VARCHAR(20),
    patientID INTEGER ,
    FOREIGN KEY Record(patientID) REFERENCES emrsystem.Patient(patientID)
);

CREATE TABLE Reports(
    reportID INTEGER PRIMARY KEY,
    reportName VARCHAR(10),
    Date date,
    File BLOB ,
    recordID INTEGER,
    FOREIGN KEY Reports(recordID) REFERENCES emrsystem.Record(recordId)
);

CREATE TABLE Prescription(
    prescriptionID INTEGER PRIMARY KEY ,
    description BLOB,
    disease VARCHAR(40),
    staffID INTEGER,
    patientID INTEGER,
    FOREIGN KEY (staffID) REFERENCES emrsystem.staff(staffID),
    FOREIGN KEY (patientID) REFERENCES emrsystem.Patient(patientID)
);

CREATE TABLE Medicine(
    medicineId INTEGER PRIMARY KEY,
    Name  VARCHAR(20),
    `Date(from)` date,
    `Date(to)` date,
    `Time(morning)` BINARY,
    `Time(evening)` BINARY,
    `Time(night)` BINARY,
    prescriptionID INTEGER ,
    FOREIGN KEY Medicine(prescriptionID) REFERENCES emrsystem.Prescription(prescriptionID)
);

-- Insert Queries
