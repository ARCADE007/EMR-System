# SQL QUERIES

## CREATE STATEMENTS

### Staff

```sql
CREATE TABLE Staff (
    staffId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    password VARCHAR(64) NOT NULL,
    staffName VARCHAR(20) NOT NULL,
    staffPhoneno INTEGER NOT NULL,
    staffEmail VARCHAR(20) NOT NULL,
    staffAddress VARCHAR(30)NOT NULL,
    rollName VARCHAR(20) NOT NULl,
    PRIMARY KEY(staffId)
   )AUTO_INCREMENT=1;
```

### Patient

```sql
CREATE TABLE Patient(
    patientId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    password VARCHAR(64) NOT NULL,
    patientName VARCHAR(20) NOT NULL,
    patientPhoneno VARCHAR(11) NOT NULL,
    patientEmail VARCHAR(50) NOT NULL,
    patientDob date NOT NULL,
    patientAddress Varchar(40) NOT NULL,
    PRIMARY KEY(patientId)
)AUTO_INCREMENT=1;


```

### Record

```sql
CREATE TABLE Record(
    recordId INTEGER UNSIGNED NOT NULL AUTO_INCREMENT ,
    recordName VARCHAR(20) NOT NULL,
    PRIMARY KEY(recordId),
    patientId INTEGER UNSIGNED,
    FOREIGN KEY Record(patientId) REFERENCES emrsystem.Patient(patientId)
)AUTO_INCREMENT=1;
```

### Reports

```sql
CREATE TABLE Report(
    reportId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT ,
    reportName VARCHAR(20) NOT NULL,
    Date date NOT NULL,
    File BLOB NOT NULL ,
    PRIMARY KEY(reportId),
    recordId INTEGER UNSIGNED,
    FOREIGN KEY Report(recordId) REFERENCES emrsystem.Record(recordId)
)AUTO_INCREMENT=1;
```

### Prescription

```sql
CREATE TABLE Prescription(
    prescriptionId INTEGER  UNSIGNED NOT NULL AUTO_INCREMENT,
    description BLOB NOT NULL,
    disease VARCHAR(40) NOT NULL,
    PRIMARY KEY(prescriptionId),
    staffId INTEGER UNSIGNED,
    patientId INTEGER UNSIGNED,
    FOREIGN KEY (staffId) REFERENCES emrsystem.staff(staffId),
    FOREIGN KEY (patientId) REFERENCES emrsystem.Patient(patientId)
)AUTO_INCREMENT=1;
```

### Medicine

```sql
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
```
