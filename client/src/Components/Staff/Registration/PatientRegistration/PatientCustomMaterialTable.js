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
    },
    {
      title: "Dob",
      field: "patientDob",
      type: "date",
    },

    {
      title: "Address",
      field: "patientAddress",
    },
    {
      title: "Phone Number",
      field: "patientPhoneno",
      type: "text",
    },

    {
      title: "Email",
      field: "patientEmail",
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
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              props.setData([...props.data, newData]);
              console.log(newData);
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
              console.log(newData);
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
