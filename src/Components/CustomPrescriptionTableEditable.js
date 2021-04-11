import React, { useState } from 'react';
import MaterialTable from "material-table";
export default function CustomPrescriptionTableEditable(props) {

    const [columns, setColumns] = useState([
        {

            title: 'Name', field: 'name',

            editComponent: props => (
                <input

                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />

            ),

            headerStyle: {
                backgroundColor: 'rgb(82,95,127,0.6)',
            }

        },

        {
            title: 'Surname', field: 'surname', headerStyle: {
                backgroundColor: 'rgb(82,95,127,0.6)',
            }
        },
        {
            title: 'Birth Year', field: 'birthYear', type: 'numeric', headerStyle: {
                backgroundColor: 'rgb(82,95,127,0.6)',
            }
        },

        {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
            headerStyle: {
                backgroundColor: 'rgb(82,95,127,0.6)',
            }
        },



    ]);

    const [data, setData] = useState([
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },

    ]);





    return (
        <MaterialTable
            style={{ backgroundColor: "rgb(82,95,127,0.6)" }}
            title="Prescription"
            columns={columns}
            data={data}
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            setData([...data, newData]);

                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);

                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);

                            resolve();
                        }, 1000)
                    }),

            }}
        />
    )
}