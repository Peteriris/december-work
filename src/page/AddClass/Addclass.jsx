import React from 'react'
import"./AddClass.css";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
export default function Addclass() {
    return (
        <div className="Adduse">
            
            <div className=' AddClass'>
                <h2>Add Class</h2>  
            </div>
            <div>
      <form className="newUserForm">
      <div className="newUserItem">
          <label>Class </label>
          <input type="text" placeholder="Class number" />
        </div>
        <div className="newUserItem">
          <label>Devision </label>
          <input type="text" placeholder="Enter Devision " />
        </div>
        <div className="newUserItem">
          <label>Class teacher name</label>
          <input type="text" placeholder="Enter Class teacher name" />
        </div>
        
        <div className="newUserItem">
          <label>Mediem</label>
          <input type="text" placeholder="Mediem" />
        </div>
        </form>
            </div>

            <div className='AddRight'>        
               <Box sx={{ '& > :not(style)': { m: 1 } }} className='Allclass'>
               <label className='Addbutton'>Add students</label> <Fab size="medium" color="primary" aria-label="add">  
                <AddIcon onChange={() => {
                  <Click/>
                }} />
                </Fab>
                </Box>
            </div>
        </div>
    )
}
function Click(){
  return(
    <div>
      <h1> hii</h1>
    </div>
  )
}
