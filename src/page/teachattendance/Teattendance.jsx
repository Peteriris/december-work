
import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import TextField from '@material-ui/core/TextField';


import './teattendance.css';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 12, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Tabledata() {
  
  return (
    <div style={{ height: 400, width:"80%" }}>
       <div style={{margin: 'top',display: 'box',width: 'fit-content' }}>
           <TextField id="date"   label="Date" type="date" defaultValue="today" InputLabelProps={{shrink: true,}} />
           <br/>
                  
         <div>
             <form className="teacherForm">
               <center>
                 <div className='Addbutton'>
                   <button type="submit" className="teacherButton">Add</button>
                </div>
                
               </center>
              </form>
          </div>

           </div>
           <h4 className='theacherheders'>Teachers Name list</h4>
               <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                disableSelectionOnClick />
                
      
    </div>
    );
      }
    
  