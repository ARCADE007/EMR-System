import React, { useState } from "react";
import MaterialTable from "material-table";
export default function PrescriptionMainEditablePatient(props) {
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
      title: "View Prescription",
      field: "med",
      type: "text",
    },

    {
      title: "Description",
      field: "Description",
      type: "text",
    },
  ]);

  const [data, setData] = useState([
    { med: "mmr12", date: "15/04/2018", Description: "" },
    { med: "mmr12", date: "15/04/2018", Description: "" },
    { med: "mmr12", date: "15/04/2018", Description: "" },
    { med: "mmr12", date: "15/04/2018", Description: "" },
  ]);

  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="Prescription"
      columns={columns}
      data={data}
      options={{
        headerStyle: { backgroundColor: "transparent", color: "black" },
      }}
    />
  );
}
