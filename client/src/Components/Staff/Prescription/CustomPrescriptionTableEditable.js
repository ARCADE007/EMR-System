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
        style={{backgroundColor:"Rgb(255,99,71,0.4)" , color: "white"}}
            title="ID" 
            columns={columns}
            data={data}
            
            options={{
                headerStyle: { backgroundColor:"Rgb(255,99,71,0.4)", color: "black" },
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

            }}
        
        />
    )
}