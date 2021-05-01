import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";
import { Link } from "react-router-dom";
export default function PrescriptionMainEditable(props) {
  const [columns, setColumns] = useState([
    {
      title: "Date",
      field: "date",
      editComponent: (props) => (
        <input
          type="date"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
    {
      title: "Disease",
      field: "disease",
      type: "text",
    },

    {
      title: "Description",
      field: "description",
      type: "text",
    },
    {
      title: "PrescriptionId",
      field: "prescriptionId",
      type: "text",
      hidden: true,
    },
  ]);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/prescriptions/" + props.staffId, {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="ID"
      columns={columns}
      data={data.map((prescription) => {
        return {
          date: prescription.date,
          disease: prescription.disease,
          description: prescription.description,
          prescriptionId: prescription.prescriptionId,
        };
      })}
      actions={[
        (rowData) => {
          console.log(rowData);
          return {
            icon: () => (
              <Link to={`/PrescriptionTableEditable/${rowData.prescriptionId}`}>
                View
              </Link>
            ),
            tooltip: "View ",
          };
        },
      ]}
      options={{
        headerStyle: { backgroundColor: "transparent", color: "black" },
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
