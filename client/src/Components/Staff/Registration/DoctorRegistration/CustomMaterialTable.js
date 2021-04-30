import React, { useState } from "react";
import MaterialTable from "material-table";
export default function CustomMaterialTable(props) {
  const [columns, setColumns] = useState([
    {
      title: "Staff Name",
      field: "staffName",
      validate: (rowData) =>
        rowData.staffName.length < 2 ? "StaffName must be have 3 chars" : "",

      editComponent: (props) => (
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
    {
      title: "Role",
      field: "rollName",
      lookup: { Staff: "Staff", Reception: "Reception" },
    },

    {
      title: "Address",
      field: "staffAddress",
      validate: (rowData) =>
        rowData.staffAddress.length < 5
          ? "Address must be have 6 character"
          : "",
    },
    {
      title: "Phone Number",
      field: "staffPhoneno",
      type: "text",
      validate: (rowData) =>
        rowData.staffPhoneno.length < 9
          ? "Phone number must  have 10 character"
          : "",
    },

    {
      title: "Email",
      field: "staffEmail",
      validate: (rowData) =>
        rowData.staffAddress.length < 6 ? "Email is not valid" : "",
    },
    {
      title: "Department",
      field: "departmentName",
      validate: (rowData) =>
        rowData.staffAddress.length < 4 ? "Cannot be Empty" : "",
    },
  ]);

  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="Staff Registration"
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
