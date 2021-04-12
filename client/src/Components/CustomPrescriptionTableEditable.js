import React, { useState } from 'react';
import MaterialTable from "material-table";
export default function CustomPrescriptionTableEditable(props) {

    const [columns, setColumns] = useState([
        {

            title: 'MedicineName', field: 'name',
            

            editComponent: props => (
                <input
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />

            ),

        },

        
        {
            title: 'Date (from)', field: 'datefrom', type: 'date',
            dateSetting: { locale: "ko-KR"}
        },
        {
            title: 'Date (to)', field: 'dateto', type: 'date' ,
            dateSetting: { locale: "ko-KR"}
        },

        {
            title: 'Morning',
            field: 'morning',
            lookup: { 1: 'yes', 2: 'no' },
            
        },
        {
            title: 'Evening',
            field: 'evening',
            lookup: { 1: 'yes', 2: 'no' },
            
        },
        {
            title: 'Night',
            field: 'night',
            lookup: { 1: 'yes', 2: 'no' },
            
        },

    ]);

    const [data, setData] = useState([
        { name: 'mmr12', datefrom: "15.04.2018", dateto: "15.04.2018", morning:1 ,evening:1, night:1 },
        { name: 'mmr12', datefrom: "15.04.2018", dateto: "15.04.2018", morning:1 ,evening:1, night:1 },
        { name: 'mmr12', datefrom: "15.04.2018", dateto: "15.04.2018", morning:1 ,evening:1, night:1 },
        { name: 'mmr12', datefrom: "16.04.2019", dateto: "15.04.2018", morning:1 ,evening:1, night:1 },

    ]);

    
    return (
        <MaterialTable
            style={{ backgroundColor: "rgb(82,95,127,0.6)" , color: "white"}}
            title="Prescription " 
            columns={columns}
            data={data}
            
            actions={[
                
                {
                  
                  icon: "edit",
                  iconProps: { style: { fontSize: "14px", color: "yellow" } },
                  
                }
              ]}        
            options={{
                headerStyle: { backgroundColor: "rgb(82,95,127,0.5)", color: "white" },
              }}
            
              
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