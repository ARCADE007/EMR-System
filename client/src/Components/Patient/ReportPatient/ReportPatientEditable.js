import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import MaterialTable from "material-table";
export default function ReportPatientEditable(props) {
  const { recordId, recordName } = useParams();
  const [columns, setColumns] = useState([
    {
      title: "ReportName",
      field: "reportName",

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
    },
    {
      title: "File",
      field: "file",
      type: "file",
      hidden: true,
    },
  ]);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/reports/" + recordId, {
        withCredentials: true,
      })
      .then((result) => {
        setData(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [recordId]);

  return (
    <MaterialTable
      style={{
        backgroundColor: "Rgb(255,255,255,0.2)",
        color: "white",
      }}
      title={recordName}
      columns={columns}
      data={data.map((report) => {
        return {
          reportName: report.reportName,
          Date: report.Date,
          file: report.file,
        };
      })}
      actions={[
        (rowData) => {
          return {
            icon: () => (
              <Link
                to={{ pathname: `${rowData.file}` }}
                target="_blank"
              >
                View
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
  );
}
