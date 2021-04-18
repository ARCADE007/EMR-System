import React, { useState } from "react";
import MaterialTable from "material-table";
export default function CustomMaterialTable(props) {
  const [columns, setColumns] = useState([
    {
      title: "Patient Name",
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
      style={{backgroundColor:"Rgb(255,99,71,0.2)" , color: "white"}}
     
      title=" Dr Registration"
      columns={columns}
      data={data}
      
      options={{
        headerStyle: { backgroundColor:"transparent", color: "black" },
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
      }}
    />
  );
}
