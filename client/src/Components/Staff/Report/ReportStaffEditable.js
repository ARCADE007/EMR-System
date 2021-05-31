import React, { useState } from "react";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
export default function ReportStaffEditable(props) {
  const [columns] = useState([
    {
      title: "ReportName",
      field: "reportName",
      validate: (rowData) =>
        rowData.reportName && rowData.reportName.length < 2
          ? "Name must be have 3 chars"
          : "",
      type: "string",
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
      type: "string",
      hidden: true,
      validate: (rowData) =>
        rowData.file && rowData.file.length < 9 ? "Upload File" : "",
    },
  ]);

  const [columnsEditable] = useState([
    {
      title: "ReportName",
      field: "reportName",
      validate: (rowData) =>
        rowData.reportName && rowData.reportName.length < 2
          ? "Name must be have 3 chars"
          : "",

      type: "string",
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
      type: "string",
      validate: (rowData) =>
        rowData.file && rowData.file.length < 9 ? "Upload File" : "",
    },
  ]);

  return (
    <>
      {!props.edit && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title={props.recordName}
          columns={columns}
          data={props.reports}
          actions={[
            (rowData) => {
              return {
                icon: () => (
                  <Link to={{ pathname: `${rowData.file}` }} target="_blank">
                    🎫
                  </Link>
                ),

                tooltip: "View ",
              };
            },
          ]}
          options={{
            headerStyle: {
              backgroundColor: "transparent",
              color: "black",
            },
            exportButton: true,
          }}
        />
      )}
      <MaterialTable
        style={{
          backgroundColor: "Rgb(255,255,255,0.2)",
          color: "white",
        }}
        title="Add Reports"
        columns={columnsEditable}
        data={props.data}
        actions={[
          (rowData) => {
            return {
              icon: () => (
                <Link to={{ pathname: `${rowData.file}` }} target="_blank">
                  🎫
                </Link>
              ),

              tooltip: "View ",
            };
          },
        ]}
        options={{
          headerStyle: {
            backgroundColor: "transparent",
            color: "black",
          },
          search: false,
        }}
        editable={{
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
        }}
      />
    </>
  );
}
