import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
export default function PrescriptionMainEditablePatient(props) {
  const { staffId, staffName } = useParams();

  const [columns] = useState([
    {
      title: "Disease",
      field: "disease",
      editComponent: (props) => (
        <input
          type="text"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
    {
      title: "Date",
      field: "date",
      type: "date",
    },

    {
      title: "Description",
      field: "description",
      type: "text",
    },
    {
      title: "PrescriptionId",
      field: "header",
      type: "text",
      hidden: true,
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
      .get(
        `http://localhost:3001/prescriptions/${Cookies.get("id")}/${staffId}`,
        {
          withCredentials: true,
        }
      )
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [staffId]);
  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title={staffName}
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
          return {
            icon: () => (
              <Link
                to={`/PrescriptionTable/${staffId}/${staffName}/${rowData.prescriptionId}`}
              >
                🎫
              </Link>
            ),
            tooltip: "View Prescription",
          };
        },
      ]}
      options={{
        headerStyle: { backgroundColor: "transparent", color: "black" },
      }}
    />
  );
}
