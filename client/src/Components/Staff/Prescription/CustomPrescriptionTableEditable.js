import React, { useState } from "react";
import MaterialTable from "material-table";
import Cookies from "js-cookie";
export default function CustomPrescriptionTableEditable(props) {
  const [columns] = useState([
    {
      title: "Medicine Name",
      field: "name",
      type: "string",
      validate: (rowData) =>
        rowData.name && rowData.name.length < 3
          ? "MedicineName must be have 4 chars"
          : "",
    },

    {
      title: "Date (from)",
      field: "dateFrom",
      type: "date",
      validate: (rowData) =>
        rowData.dateFrom && rowData.dateFrom.valueOf() <= new Date().valueOf()
          ? "Date must be current Date or after"
          : "",
    },
    {
      title: "Date (to)",
      field: "dateTo",
      type: "date",

      validate: (rowData) =>
        rowData.dateTo &&
        rowData.dateFrom &&
        rowData.dateTo.valueOf() < rowData.dateFrom.valueOf()
          ? "Date must be Date(from) or after"
          : "",
    },

    {
      title: "Morning",
      field: "timeMorning",
      lookup: { yes: "yes", no: "no" },
    },
    {
      title: "Evening",
      field: "timeEvening",
      lookup: { yes: "yes", no: "no" },
    },
    {
      title: "Night",
      field: "timeNight",
      lookup: { yes: "yes", no: "no" },
    },
  ]);

  return (
    <>
      {((props.medicines.length === 0 && props.staffId !== Cookies.get("id")) ||
        props.medicines.length !== 0) && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title={props.prescriptionId}
          columns={columns}
          data={props.medicines}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              color: "black",
            },
            exportButton: true,
          }}
        />
      )}

      {props.medicines.length === 0 && props.staffId === Cookies.get("id") && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title={props.prescriptionId}
          columns={columns}
          data={props.data}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              color: "black",
            },
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
      )}
    </>
  );
}
