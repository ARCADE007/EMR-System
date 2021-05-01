import React, { useState } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
export default function ReportStaffEditable(props) {
  const [columns, setColumns] = useState([
    {
      title: "ReportName",
      field: "reportName",
      validate: (rowData) =>
        rowData.reportName && rowData.reportName.length < 2
          ? "Name must be have 3 chars"
          : "",

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
      field: "Date",
      type: "date",
      validate: (rowData) =>
        rowData.Date === "" ? "Date cannot be empty" : "",
    },
    {
      title: "File",
      field: "file",
      type: "file",
      validate: (rowData) =>
        rowData.file && rowData.file.length < 9 ? "Upload File" : "",
    },
  ]);

  return (
    <MaterialTable
      style={{ backgroundColor: "Rgb(255,255,255,0.2)", color: "white" }}
      title="ID"
      columns={columns}
      data={props.data}
      actions={[
        (rowData) => {
          return {
            icon: () => (
              <Link to={{ pathname: `${rowData.file}` }} target="_blank">
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
        ...(props.edit && {
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
        }),
      }}
    />
  );
}
