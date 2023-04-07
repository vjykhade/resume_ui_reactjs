import { Grid, TextField } from '@mui/material'
import React from 'react'
import Responsibility from './Responsibility';


export const ProjectTemplate = () => {
    const checkprojectName = (event) =>{
        console.log(event.target.value)
    }

    return <form id='myForm'>
        <Grid container spacing={2}  className='subprojectcls' >


            <Grid item xs={4} style={{ display: 'flex', alignItems: 'start' }}>
                <h3>Projects: </h3>
            </Grid>
            <Grid item xs={4} >
                <TextField
                    style={{ width: '100%' }}
                    Project Name
                    id="outlined-required"
                    label="Project Name"
                    placeholder="Enter Your Project Name"
                    required
                    onChange={checkprojectName}
                />
            </Grid>
            <Grid item xs={4} >
                <TextField
                    style={{ width: '100%' }}
                    Project Technology
                    id="outlined-required"
                    label="Project Technology"
                    placeholder="Enter your Project Technology"
                    required
                />
            </Grid>
            <Grid item xs={4} style={{ display: 'flex' }} >

            </Grid>

            <Grid item xs={8} >
                <TextField
                    style={{ width: '100%' }}
                    Description
                    id="outlined-required"
                    label="Project Description"
                    placeholder="Enter your project description"
                    required
                />
            </Grid>

            <Grid item xs={4} style={{ display: 'flex', alignItems: 'start' }}>

            </Grid>
            <Responsibility />
        
        </Grid>
    </form>

}