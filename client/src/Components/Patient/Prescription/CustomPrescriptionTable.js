import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import MaterialTable from "material-table";
export default function CustomPrescriptionTable(props) {
  const { prescriptionId } = useParams();
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

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/medicines/" + prescriptionId, {
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
      style={{ backgroundColor: "rgb(255,255,255,0.2)", color: "white" }}
      title="Prescription "
      columns={columns}
      data={data.map((medicine) => {
        return {
          name: medicine.name,
          dateFrom: medicine.dateFrom,
          dateTo: medicine.dateTo,
          timeMorning: medicine.timeMorning,
          timeEvening: medicine.timeEvening,
          timeNight: medicine.timeNight,
        };
      })}
      options={{
        headerStyle: { backgroundColor: "transparent", color: "black" },
      }}
    />
  );
}
