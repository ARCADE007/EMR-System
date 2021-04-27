import React, { useState } from "react";
import MaterialTable from "material-table";
export default function ReportPatientEditable(props) {
  const [columns, setColumns] = useState([
    {
      title: "ReportName",
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
      title: "Date ",
      field: "date",
      type: "date",
    },
    {
      title: "File",
      field: "File",
      type: "file",
    },
  ]);

  const [data, setData] = useState([
    {
      name:
        "https://drive.google.com/file/d/1niep5eK0uQTLDdGQ2Ne3f5J2hKr0zFfU/view?usp=sharing",
      date: "15/04/2018",
      file: "",
    },
    { name: "mmr12", date: "15/04/2018", file: "" },
    { name: "mmr12", date: "15/04/2018", file: "" },
    { name: "mmr12", date: "15/04/2018", file: "" },
  ]);

  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="ID"
      columns={columns}
      data={data}
      options={{
        headerStyle: { backgroundColor: "transparent", color: "black" },
        exportButton: true,
      }}
    />
  );
}
