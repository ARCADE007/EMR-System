import React, { useState } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function PrescriptionMainEditable(props) {
  const [columns, setColumns] = useState([
    {
      title: "Disease",
      field: "disease",
      type: "string",
    },
    {
      title: "Date",
      field: "date",
      type: "date",
    },

    {
      title: "Description",
      field: "description",
      type: "string",
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
                    View
                  </Link>
                ),
                tooltip: "View ",
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
              prescriptionId:
                newPrescription.prescriptionId,
            };
          })}
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
