import React, { useState } from "react";
import MaterialTable from "material-table";
export default function CustomMaterialTable(props) {
  const [columns, setColumns] = useState([
    {
      title: "Staff Name",
      field: "staffName",

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
    },
    {
      title: "Phone Number",
      field: "staffPhoneno",
      type: "text",
    },

    {
      title: "Email",
      field: "staffEmail",
    },
    {
      title: "Department",
      field: "departmentName",
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
