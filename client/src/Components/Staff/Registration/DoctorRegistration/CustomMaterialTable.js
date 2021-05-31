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
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
export default function CustomMaterialTable(props) {
  const [addData, setAddData] = useState([]);
  const [updateData, setUpdateData] = useState([]);
  const [staffId, setStaffId] = useState("");
  const [columns] = useState([
    {
      title: "Staff Name",
      field: "staffName",
      type: "string",
      validate: (rowData) =>
        rowData.staffName && rowData.staffName.length < 2
          ? "StaffName must be have 3 chars"
          : "",
    },
    {
      title: "Role",
      field: "roleName",
      lookup: { staff: "Staff", reception: "Reception" },
    },

    {
      title: "Address",
      field: "staffAddress",
      validate: (rowData) =>
        rowData.staffAddress && rowData.staffAddress.length < 5
          ? "Address must be have 6 character"
          : "",
    },
    {
      title: "Phone Number",
      field: "staffPhoneno",
      type: "string",
      validate: (rowData) =>
        rowData.staffPhoneno && rowData.staffPhoneno.length < 9
          ? "Phone number must  have 10 character"
          : "",
    },

    {
      title: "Email",
      field: "staffEmail",
      type: "string",
      validate: (rowData) =>
        rowData.staffEmail && rowData.staffEmail.length < 6
          ? "Email is not valid"
          : "",
    },
    {
      title: "Department",
      field: "departmentName",
      validate: (rowData) =>
        rowData.staffAddress && rowData.staffAddress.length < 4
          ? "Cannot be Empty"
          : "",
    },
  ]);
  useEffect(() => {
    if (staffId !== "") {
      axios
        .get(`http://localhost:3001/staffs/${staffId}`, {
          withCredentials: true,
        })
        .then((result) => {
          setUpdateData(new Array(result.data));
        })
        .catch((err) => {
          console.error("404");
        });
    }
  }, [staffId]);

  return (
    <>
      {props.action.view && (
        <MaterialTable
          style={{
            backgroundColor: "Rgb(255,255,255,0.2)",
            color: "white",
          }}
          title="Staff Registration"
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
            title="Staff Registration"
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
                    addData.forEach((staff) => {
                      axios
                        .post(`http://localhost:3001/staffs`, staff)
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
                setStaffId(e.target.id.value);
              }}
            >
              <Row>
                <Col>
                  <FormGroup className="px-lg-5">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-circle-08" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Enter Staff Id"
                        name="id"
                        type="text"
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="submit">
                      Go
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Container>
          <MaterialTable
            style={{
              backgroundColor: "Rgb(255,255,255,0.2)",
              color: "white",
            }}
            title="Staff Details Updation"
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
                    updateData.forEach((staff) => {
                      axios
                        .patch(
                          `http://localhost:3001/staffs/${staffId}`,
                          staff,
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
