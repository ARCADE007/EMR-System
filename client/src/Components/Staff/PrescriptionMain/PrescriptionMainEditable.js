import React, { useState } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrescriptionMainEditable(props) {
  const [columns] = useState([
    {
      title: "Disease",
      field: "disease",
      type: "string",
      validate: (rowData) =>
        rowData.disease && rowData.disease.length < 3
          ? "Name must be have 3 chars"
          : "",
    },
    {
      title: "Date",
      field: "date",
      type: "date",
      editable: "never",
      initialEditValue: new Date(),
    },

    {
      title: "Description",
      field: "description",
      type: "string",
      validate: (rowData) =>
        rowData.description && rowData.description.length < 5
          ? "Name must be have 6 chars"
          : "",
    },
    {
      title: "PrescriptionId",
      field: "prescriptionId",
      type: "string",
      hidden: true,
    },
  ]);

  return (
    <>
      {props.prescriptions.length !== 0 && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title={props.staffName}
          columns={columns}
          data={props.prescriptions.map((prescription) => {
            return {
              date: prescription.date,
              disease: prescription.disease,
              description: prescription.description,
              prescriptionId: prescription.prescriptionId,
            };
          })}
          actions={[
            (rowData) => {
              return {
                icon: () => (
                  <Link
                    to={`/PrescriptionTableEditable/${rowData.prescriptionId}/${props.staffId}`}
                  >
                    🎫
                  </Link>
                ),
                tooltip: "View Prescription ",
              };
            },
          ]}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              color: "black",
            },
          }}
        />
      )}

      {props.staffId === Cookies.get("id") && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title="Add Prescriptions"
          columns={columns}
          data={props.data.map((newPrescription) => {
            return {
              date: newPrescription.date,
              disease: newPrescription.disease,
              description: newPrescription.description,
              prescriptionId: newPrescription.prescriptionId,
            };
          })}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              color: "black",
            },
            search: false,
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
