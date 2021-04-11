import React, { useState } from "react";
import MaterialTable from "material-table";
export default function CustomMaterialTable(props) {
  const [columns, setColumns] = useState([
    {
      title: "FullName",
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
      title: "Address",
      field: "address",
      
    },
    {
      title: "Phone Number",
      field: "phoneno",
      type: "numeric",
      
    },

    {
      title: "Email",
      field: "mailid",
      
      
    },
  ]);

  const [data, setData] = useState([
    { name: "Vineet", address: "london", phoneno: 1234567895, mailid: "sharma24vineet@gmail.com" },
    { name: "Priya", address: "paris", phoneno: 12345647895, mailid: "priyakaushik2001@gmail.com" },
  ]);

  return (
    <MaterialTable
      style={{ backgroundColor: "rgb(82,95,127,0.6)",color: "white" }}
     
      title="Custom Edit Component Preview"
      columns={columns}
      data={data}
      options={{
        headerStyle: { backgroundColor: "rgb(105,105,105,0.5)", color: "white" },
      }}
      
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}
