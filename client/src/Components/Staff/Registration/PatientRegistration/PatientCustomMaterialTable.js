import React, { useState } from "react";
import MaterialTable from "material-table";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default function PatientCustomMaterialTable(props) {
  const [addData, setAddData] = useState([]);
  const [columns, setColumns] = useState([
    {
      title: "FullName",
      field: "patientName",

      editComponent: (props) => (
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
      validate: (rowData) =>
        rowData.patientName && rowData.patientName.length < 2
          ? "Name must be have 3 chars"
          : "",
    },
    {
      title: "Dob",
      field: "patientDob",
      type: "date",
      validate: (rowData) =>
        rowData.patientDob === "" ? "Name cannot be empty" : "",
    },

    {
      title: "Address",
      field: "patientAddress",
      validate: (rowData) =>
        rowData.patientAddress && rowData.patientAddress.length < 5
          ? "Address must be have 6 character"
          : "",
    },
    {
      title: "Phone Number",
      field: "patientPhoneno",
      type: "text",
      validate: (rowData) =>
        rowData.patientPhoneno && rowData.patientPhoneno.length < 9
          ? "Phone number must  have 10 digit"
          : "",
    },

    {
      title: "Email",
      field: "patientEmail",
      validate: (rowData) =>
        rowData.patientEmail && rowData.patientEmail.length < 6
          ? "Email is not valid"
          : "",
    },
  ]);

  return (
    <>
      {props.action.view && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title="Patient Registration"
          columns={columns}
          data={props.data}
          options={{
            pageSize: 20,
            pageSizeOptions: [10, 20, 30, 50],
            headerStyle: {
              backgroundColor: "transparent",
              color: "black",
            },
            exportButton: true,
          }}
        />
      )}
      {props.action.add && (
        <>
          <MaterialTable
            style={{
              backgroundColor: "Rgb(255,255,255,0.2)",
              color: "white",
            }}
            title="Patient Registration"
            columns={columns}
            data={addData}
            options={{
              headerStyle: {
                backgroundColor: "transparent",
                color: "black",
              },
              exportButton: true,
            }}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setAddData([...addData, newData]);
                    resolve();
                  }, 1000);
                }),

              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...addData];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setAddData([...dataUpdate]);
                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...addData];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setAddData([...dataDelete]);
                    resolve();
                  }, 1000);
                }),
            }}
          />
          {addData.length !== 0 && (
            <div style={{ float: "right", padding: "6px" }}>
              <Link to="/Registration">
                <Button
                  onClick={() => {
                    addData.forEach((patient) => {
                      axios
                        .post(`http://localhost:3001/patients`, patient)
                        .then()
                        .catch((error) => {
                          console.log(error);
                        });
                    });
                  }}
                >
                  Save
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}
