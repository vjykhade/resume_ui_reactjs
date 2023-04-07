import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import { ProjectTemplate } from './ProjectTemplate';
import { fontSize, fontWeight } from '@mui/system';

function Projects() {

    const [projects, setProjects] = useState([ProjectTemplate()]);
  
    const handleOpenContainer = () => {
        setProjects([...projects, ProjectTemplate()])
        console.log("projects"+projects)
    }
    const RemoveProject = (ele) => {
      if (window.confirm(`Are you sure you want to remove ${projects}?`)) {
        const newItems = [...projects];
        newItems.splice(ele, 1);
        setProjects(newItems);
        }
    };


    return (
        <>
            {projects.map(project => {
                return <> 
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: "15px" ,  marginRight: "5px" }}>
                <button style={{width: "30px", height: "30px", backgroundColor: "red", color: "white",cursor: "pointer", borderRadius: "5px",border: "none",fontSize:"25px", fontWeight:"bold"}}  onClick={RemoveProject}>X</button>
                </Grid>
             {project} 
             </>
              
            })}
        
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '20px'}}>
                <Button variant="contained" onClick={handleOpenContainer}>Add Projects</Button>
            </Grid>
        </>
    )
}
export default Projects


