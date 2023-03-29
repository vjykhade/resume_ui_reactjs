import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'

function Projects() {

    const [projects, setProjects] = useState([ProjectTemplate()]);
    // const [projectNo, setProjectNo] = useState(1);


    const handleOpenContainer = () => {
        setProjects([...projects, ProjectTemplate()])
    }
    return (
        <>
            {projects.map(project => {
                return project;
            })}
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px'}}>
                <Button variant="contained" onClick={handleOpenContainer}>Add Project</Button>
            </Grid>
        </>
    )
}

export default Projects


const ProjectTemplate = () => {
    return <Grid container spacing={2}>

        <Grid item xs={2} style={{ display: 'flex', alignItems: 'start'}}>
            <h3>Projects: </h3>
        </Grid>
        <Grid item xs={5} >
            <TextField
                style={{ width: '100%' }}
                Project Name
                id="outlined-required"
                label="Project Name"
                name="projectName"
                placeholder="Enter your Project Name"
            />
        </Grid>
        <Grid item xs={5} >
            <TextField
                style={{ width: '100%' }}
                Project Technology
                id="outlined-required"
                label="Project Technology"
                name="proTech"
                placeholder="Enter your Project Technology"
            />
        </Grid>

        <Grid item xs={2} style={{ display: 'flex' }} >

        </Grid>

        <Grid item xs={10} >
            <TextField
                style={{ width: '100%' }}
                Description
                id="outlined-required"
                label="Project Description"
                name="description"
                placeholder="Enter your project description"
            />
        </Grid>

        <Grid item xs={2} style={{ display: 'flex', alignItems: 'start' }}>

        </Grid>

        <Grid item xs={10} >
            <TextField
                style={{ width: '100%' }}
                responsibilities
                id="outlined-required"
                label="Project Responsibilities"
                name='proResponsibilities'
                placeholder="Enter your project responsibilities "
            />
        </Grid>

    </Grid>
}