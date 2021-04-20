import React, { useState } from 'react';
import MaterialTable from "material-table";
export default function ReportStaffEditable(props) {

    const [columns, setColumns] = useState([
        {

            title: 'ReportName', field: 'name',
            

            editComponent: props => (
                <input
                    type="text"
                    value={props.value}
                    onChange={e => props.onChange(e.target.value)}
                />

            ),

        },

        
        {
            title: 'Date ', field: 'date', type: 'date',
           
        },
        {
            title: 'File', field:'File',type:'submit',
        },


    ]);

    const [data, setData] = useState([
        { name: 'mmr12', date: "15/04/2018",File:1},
        { name: 'mmr12', date: "15/04/2018",File:1},
        { name: 'mmr12', date: "15/04/2018",File:1},
        { name: 'mmr12', date: "15/04/2018",File:1},
    ]);

    
    return (
        <MaterialTable
        style={{backgroundColor:"Rgb(255,255,255,0.2)" , color: "white"}}
            title="ID" 
            columns={columns}
            data={data}
            
            options={{
                headerStyle: { backgroundColor:"transparent", color: "black" },
              }}
            
              
            editable={{
                
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        
                        setTimeout(() => {
                            setData([...data, newData]);

                            resolve();
                        }, 1000)
                    }),
                

            }}
        
        />
    )
}