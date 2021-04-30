import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
export default function PrescriptionMainEditablePatient(props) {
  const { staffId } = useParams();
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
      .get("http://localhost:3001/prescriptions/" + staffId, {
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
      title="Prescription"
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
              <Link to={`/PrescriptionTable/${rowData.prescriptionId}`}>
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
    />
  );
}
