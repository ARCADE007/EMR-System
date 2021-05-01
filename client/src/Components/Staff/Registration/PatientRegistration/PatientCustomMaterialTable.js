import React, { useState } from "react";
import MaterialTable from "material-table";
export default function PatientCustomMaterialTable(props) {
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
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="Patient Registration"
      columns={columns}
      data={props.data}
      options={{
        headerStyle: { backgroundColor: "transparent", color: "black" },
        exportButton: true,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              props.setData([...props.data, newData]);
              resolve();
            }, 1000);
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...props.data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              props.setData([...dataUpdate]);
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...props.data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              props.setData([...dataDelete]);
              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
