# SQL QUERIES

## CREATE STATEMENTS

### Staff

```sql
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
```

### Patient

```sql

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


```

### Record

```sql
CREATE TABLE record(
    recordId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    recordName VARCHAR(20) NOT NULL,
    PRIMARY KEY(recordId),
    patientId INTEGER UNSIGNED,
    FOREIGN KEY record(patientId) REFERENCES Emr_System.patient(patientId)
)AUTO_INCREMENT=1;
```

### Reports

```sql
CREATE TABLE report(
    reportId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT ,
    reportName VARCHAR(20) NOT NULL,
    Date date NOT NULL,
    file VARCHAR(500) NOT NULL ,
    PRIMARY KEY(reportId),
    recordId INTEGER UNSIGNED,
    FOREIGN KEY report(recordId) REFERENCES Emr_System.record(recordId)
)AUTO_INCREMENT=1;
```

### Prescription

```sql
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
```

### Medicine

```sql
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
```
