import React, { useState } from "react";
import MaterialTable from "material-table";
import Cookies from "js-cookie";
export default function CustomPrescriptionTableEditable(props) {
  const [columns, setColumns] = useState([
    {
      title: "Medicine Name",
      field: "name",
      type: "string",
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
      type: "string",
    },
    {
      title: "Evening",
      field: "timeEvening",
      type: "string",
    },
    {
      title: "Night",
      field: "timeNight",
      type: "string",
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
          title="Prescription"
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
          title="ID"
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
