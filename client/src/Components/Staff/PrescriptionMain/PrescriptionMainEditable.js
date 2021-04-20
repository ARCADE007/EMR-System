import React, { useState } from "react";
import MaterialTable from "material-table";
export default function PrescriptionMainEditable(props) {
  const [columns, setColumns] = useState([
    {
      title: "Disease",
      field: "Disease",
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
      field: "Description",
      type: "input",
    },
  ]);

  const [data, setData] = useState([
    { Disease: "mmr12", date: "15/04/2018", Description: "" },
    { Disease: "mmr12", date: "15/04/2018", Description: "" },
    { Disease: "mmr12", date: "15/04/2018", Description: "" },
    { Disease: "mmr12", date: "15/04/2018", Description: "" },
  ]);

  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="ID"
      columns={columns}
      data={data}
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
