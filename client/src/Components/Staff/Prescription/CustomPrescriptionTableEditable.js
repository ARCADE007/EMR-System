import React, { useState } from "react";
import MaterialTable from "material-table";
export default function CustomPrescriptionTableEditable(props) {
  const [columns, setColumns] = useState([
    {
      title: "MedicineName",
      field: "name",

      editComponent: (props) => (
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },

    {
      title: "Date (from)",
      field: "dateFrom",
      type: "date",
    },
    {
      title: "Date (to)",
      field: "dateTo",
      type: "date",
    },

    {
      title: "Morning",
      field: "timeMorning",
      type: "text",
    },
    {
      title: "Evening",
      field: "timeEvening",
      type: "text",
    },
    {
      title: "Night",
      field: "timeNight",
      type: "text",
    },
  ]);

  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="ID"
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
