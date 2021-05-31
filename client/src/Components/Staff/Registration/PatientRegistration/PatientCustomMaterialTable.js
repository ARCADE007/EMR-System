import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default function PatientCustomMaterialTable(props) {
  const [addData, setAddData] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [patientId, setPatientId] = useState("");
  const [columns] = useState([
    {
      title: "FullName",
      field: "patientName",
      type: "string",

      validate: (rowData) =>
        rowData.patientName && rowData.patientName.length < 2
          ? "Name must be have 3 chars"
          : "",
    },
    {
      title: "Dob",
      field: "patientDob",
      type: "date",
    },

    {
      title: "Address",
      field: "patientAddress",
      validate: (rowData) =>
        rowData.patientAddress && rowData.patientAddress.length < 5
          ? "Address must be have 6 character"
          : "",
    },
    {
      title: "Phone Number",
      field: "patientPhoneno",
      type: "string",
      validate: (rowData) =>
        rowData.patientPhoneno && rowData.patientPhoneno.length < 9
          ? "Phone number must  have 10 digit"
          : "",
    },

    {
      title: "Email",
      field: "patientEmail",
      validate: (rowData) =>
        rowData.patientEmail && rowData.patientEmail.length < 6
          ? "Email is not valid"
          : "",
    },
  ]);
  useEffect(() => {
    if (patientId !== "") {
      axios
        .get(`http://localhost:3001/patients/${patientId}`, {
          withCredentials: true,
        })
        .then((result) => {
          setUpdateData(new Array(result.data));
        })
        .catch((err) => {
          console.error("404");
        });
    }
  }, [patientId]);

  return (
    <>
      {props.action.view && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title="Patient Details"
          columns={columns}
          data={props.data}
          options={{
            pageSize: 20,
            pageSizeOptions: [10, 20, 30, 50],
            headerStyle: {
              backgroundColor: "transparent",
              color: "black",
            },
            exportButton: true,
          }}
        />
      )}
      {props.action.add && (
        <>
          <MaterialTable
            style={{
              backgroundColor: "Rgb(255,255,255,0.2)",
              color: "white",
            }}
            title="Patient Registration"
            columns={columns}
            data={addData}
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
                    setAddData([...addData, newData]);
                    resolve();
                  }, 1000);
                }),

              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...addData];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setAddData([...dataUpdate]);
                    resolve();
                  }, 1000);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...addData];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setAddData([...dataDelete]);
                    resolve();
                  }, 1000);
                }),
            }}
          />
          {addData.length !== 0 && (
            <div style={{ float: "right", padding: "6px" }}>
              <Link to="/Registration">
                <Button
                  onClick={() => {
                    addData.forEach((patient) => {
                      axios
                        .post(`http://localhost:3001/patients`, patient)
                        .then()
                        .catch((error) => {
                          console.log(error);
                        });
                    });
                  }}
                >
                  Save
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
      {props.action.modify && (
        <>
          <Container>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                setPatientId(e.target.id.value);
              }}
            >
              <div style={{ display: "flex", marginLeft: "28%" }}>
                <div style={{ display: "flex", paddingTop: "25px" }}>
                  <FormGroup className="px-lg-5">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Enter Patient Id"
                        name="id"
                        type="text"
                      />
                    </InputGroup>
                  </FormGroup>
                </div>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Button className="my-4" color="primary" type="submit">
                    Go
                  </Button>
                </div>
              </div>
            </Form>
          </Container>
          <MaterialTable
            style={{
              backgroundColor: "Rgb(255,255,255,0.2)",
              color: "white",
            }}
            title="Patient Details Updation"
            columns={columns}
            data={updateData}
            options={{
              headerStyle: {
                backgroundColor: "transparent",
                color: "black",
              },
              search: false,
            }}
            editable={{
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...updateData];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setUpdateData([...dataUpdate]);
                    resolve();
                  }, 1000);
                }),
            }}
          />
          {updateData.length !== 0 && (
            <div style={{ float: "right", padding: "6px" }}>
              <Link to="/Registration">
                <Button
                  onClick={() => {
                    updateData.forEach((patient) => {
                      axios
                        .patch(
                          `http://localhost:3001/patients/${patientId}`,
                          patient,
                          { withCredentials: true }
                        )
                        .then()
                        .catch((error) => {
                          console.log(error);
                        });
                    });
                  }}
                >
                  Update
                </Button>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  );
}
