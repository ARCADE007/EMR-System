CS1106 Project

**Table of Content**

- [Description](#description)
- [ER Model](#er-model)
  - [Proposed ER Models](#proposed-er-models)
  - [Final ER Model](#final-er-model)
- [Relational Schema](#relational-schema)
  - [Final Schema](#final-schema)
- [Design](#design)
  - [Design](#design-1)
- [Tech Stack](#tech-stack)
- [MySQL](#mysql)
  - [Create a New User](#create-a-new-user)
  - [Grant Different User Permissions](#grant-different-user-permissions)
  - [Table Creation](#table-creation)
    - [Staff](#staff)
    - [Patient](#patient)
    - [Record](#record)
    - [Report](#report)
    - [Prescription](#prescription)
    - [Medicine](#medicine)

## Description

In this era when most commercial transactions are automated for reasons of efficiency and accuracy, it is somewhat ironic that most recording of medical events is still done on paper. Despite a wealth of evidence that the electronic medical record(EMR) can save time and cost as well as lead to improved clinical outcomes and data security, most patient-related information is still recorded manually.

So the Basic idea for this project is to create an online platform where one can see and access all of his/her medical records at a single place and can also be accessed by Doctor and Medical Staff.

The Platform will have:

- Login Funcationality.
- Pill Tracker on daily basis.
- Medicine Update Funcationality.
- Database Connectivity.
- Forgot Password Functionality.
- Searching Functionality.

## ER Model

### Proposed ER Models

![1](client/public/image/EMR1.jpeg)
![2](client/public/image/Emr2.jpeg)

### Final ER Model

![Final](client/public/image/FinalEmrSystem.png)

## Relational Schema

### Final Schema

![1](client/public/image/RelationalSchema.png)

## Design

### Design

![1](client/public/image/FrontendDesign.png)

## Tech Stack

| Technology        | Used for |
| ----------------- | -------- |
| ReactJS           | Frontend |
| NodeJS, ExpressJS | Backend  |
| MySQL             | Database |
| AWS               | Hosting  |
| ReactBootstrap    | Frontend |

## MySQL

### Create a New User

Login as `root` user.

Create a New user using the following command:

```sql
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';
```

At this point, `newuser` has no permissions to do anything with the databases. In fact, even if `newuser` tries to login (with the password, `password`), they will not be able to reach the MySQL shell.

Therefore, the first thing to do is to provide the user with access to the information they will need.

```sql
GRANT ALL PRIVILEGES ON *.* TO 'newuser'@'localhost';
```

The asterisks in this command refer to the database and table (respectively) that they can access—this specific command allows the user to read, edit, execute and perform all tasks across all the databases and tables.

Please note that in this example we are granting `newuser` full root access to everything in our database. While this is helpful for explaining some MySQL concepts, it may be impractical for most use cases and could put your database’s security at high risk.

Once you have finalized the permissions that you want to set up for your new users, always be sure to reload all the privileges.

```sql
FLUSH PRIVILEGES;
```

Your changes will now be in effect.

### Grant Different User Permissions

Here is a short list of other common possible permissions that users can enjoy.

- ALL PRIVILEGES- as we saw previously, this would allow a MySQL user full access to a designated database (or if no database is selected, global access across the system)
- CREATE- allows them to create new tables or databases
- DROP- allows them to them to delete tables or databases
- DELETE- allows them to delete rows from tables
- INSERT- allows them to insert rows into tables
- SELECT- allows them to use the `SELECT` command to read through databases
- UPDATE- allow them to update table rows
- GRANT OPTION- allows them to grant or remove other users’ privileges

To provide a specific user with a permission, you can use this framework:

```sql
GRANT type_of_permission ON database_name.table_name TO 'username'@'localhost';
```

If you want to give them access to any database or to any table, make sure to put an asterisk (\*) in the place of the database name or table name.

Each time you update or change a permission be sure to use the Flush Privileges command.

If you need to revoke a permission, the structure is almost identical to granting it:

```sql
REVOKE type_of_permission ON database_name.table_name FROM 'username'@'localhost';
```

Note that when revoking permissions, the syntax requires that you use `FROM`, instead of `TO` as we used when granting permissions.

You can review a user’s current permissions by running the following:

```sql
SHOW GRANTS FOR 'username'@'localhost';
```

Just as you can delete databases with DROP, you can use DROP to delete a user altogether:

```sql
DROP USER 'username'@'localhost';
```

To test out your new user, log out by typing:

```sql
quit
```

and log back in with this command in terminal:

```bash
mysql -u [username] -p
```

---

### Table Creation

#### Staff

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

**1 Abstract**

In this era when most commercial transactions are automated for reasons of efficiency and accuracy, it is somewhat ironic that most recording of medical events is still done on paper. Despite a wealth of evidence that the electronic medical record(EMR) can save time and cost as well as lead to improved clinical outcomes and data security, most patient-related information is still recorded manually.

So the Basic idea for this project is to create an online platform where one can see and access all of his/her medical records at a single place and can also be accessed by Doctor and Medical Staff.

**Where must the system be placed?**

There are a lot of benefits to the Health center by placing the system at their registration and at drug store offices . At the same time the patients are also benefited using this system. They can get the work done within no time.

**How to use the system?**

Using the system is as simple as using the personal computer. Since end user computing is developing in our country, It is beneficial to both Health center and the patients. Every step is clearly defined and help is provided throughout the application to the user. Even the exceptions are handled well to avoid confusion.

**How is it beneficial to the Health Center?**

The health center can get much out of the system. The system is used to enter the patient details and to enter the details about the health center and the details about the in-patient and out-patient in detail and about the reports of the patients .

# 1.1 Functionalities

- ### Login Functionality

  Login authentication has been implemented which redirects users to their unrestricted set of pages or url after checking their correct password.

- ### Validation Form

  Validation has been implemented on every form and requires the correct set of data to click on the submit button.

- ### Validation on Tables

  Validation has been implemented on every table and requires the correct set of data to click on the submit button also have date restriction on date picker eg. while prescribing a medicine it allows only current date or later to be selected.

- ### Searching Functionality

  Searching has been added on all of the functional components and tables using react filter function.

- ### Password Hashing and Password Autogenerate

  SHA512 algorithm has been used through bcrypt to save passwords in a hashed form and autogenerate functionality has been added on first time registration.

- ### Export Functionality

  Export button has been implemented on every table to get data in pdf or csv form to store on the local machine.

- ### Complete Responsive Website (Support Mobile View)

  Every component of this project has been made with complete responsive functionality which allows this website to run smoothly on desktop as well as small screens including smartphones.

- ### Mailing Functionality

  After successful registration this application auto generates password and id for user and it uses mail functionality to provide those credentials through mail. Also the forgot password link is sent on mail using mailing functionality.

- ### Authentication and Cookies

  After successful login a unique authentication token is generated containing id and role and is stored in browser cookies for the set time duration which allows users to use different functionality on application and also restricts them to not access unauthorized components and functionalities.

- ### Logout Button
  Logout button has been set to the application logo which after clicking removes all the cookies of the user and restricts the application to run without login again.

**7 Conclusion**

The need for the Health Center to computerize the application processing and servicing the Patients request through automated modules is most necessary and now inevitable.

As we have already seen that the need cannot be emphasized for the further development of this system is only timely and helpful to Health Center, the system defined in the above script is up to date and caters to all kinds of request faced by the Health Center employees requirements to provide the better service to the patients, being developed in react it is also flexible modularized highly parameterized and hence can be easily deployed by any other application because of its componentized approach.

Based on the various parameters and properties files everything from the look and feel to the functionalities can be customized.Thus this project is developed from the beginning with reuse in mind and implicitly uses several design patterns. The architecture of this project is such that it suits the diverse and distributed nature of the Health Center Applications.

The features provided by the (Electronic Medical Record System) are in no means comprehensive but by all means fulfilling all important functionalities of Health Center services. Inclusion of further functionalities as days go by can be easily done because the project has been developed in a layered architecture.

External libraries would easily add new features which change with the times and being performance oriented the project will not face any issues. It is also extensible and scalable as all applications should be thus it can be said that it will meet surges of huge employee and patient requests that may come up in the near future.

**8 Project Screenshot**

### Login Page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.008.png)

####

####

####

####

####

####

####

### Patient 1st page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.009.png)

###

###

###

###

###

###

###

###

###

### Patient 2nd page: (View Button):

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.010.png)

Patient 3rd Page: (Action button)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.011.png)

### Patient 3rd page:(View Records Button)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.012.png)

### Patient 4th page: (View Button)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.013.png)

### Staff 1st Page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.014.png)

### Staff 2nd Page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.011.png)

#### Responsive Design:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.015.png)
![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.016.png)

### Staff 3rd Page: (View Button)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.017.png)

#### Responsive Design:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.018.png)

### Staff 4th Page: (Action Button after Adding)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.019.png)

### Staff 5th Page: (Other Doctor)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.020.png)

### Staff 6th Page:(View Records Button)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.021.png)

### Staff 7th Page:(View Button)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.022.png)

### Staff 8th Page:(Add Record Button)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.014.png)

### Registration Page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.023.png)

#### Responsive Design:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.024.png)

### Patient Registration Page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.025.png)

### Add Patient and Staff Page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.026.png)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.027.png)

###

### Mail Template after creating new patient or staff:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.028.png)

Forgot Password Page:

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.029.png)

### Forgot Password Link and Update Password Page :

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.030.png)

![](readmeimg/Aspose.Words.9aad399a-320f-4941-a23d-33f48c0111b4.031.png)
