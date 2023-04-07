
import { Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Projects from './Projects';
import { border } from '@mui/system';

export const WorkExperienceTemplate = () => {

  
    return <>
    <div className='subContainer' style={{marginBottom: "20px"}}>
        <Grid container spacing={2} >
            <Grid item xs={4} style={{ display: 'flex', alignItems: 'start' }}>
                <h3>Company:</h3>
            </Grid>
            <Grid item xs={8} >
                <TextField
                    style={{ width: '100%' }}
                    Company
                    id="outlined-required"
                    label="Company"
                    name='companyName'
                    placeholder="Enter your Company Name"
                    required
                />
            </Grid>

        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={4} style={{ display: 'flex', alignItems: 'start' }}>
                <h3>Designation:</h3>
            </Grid>
            <Grid item xs={4} >
                <TextField
                    style={{ width: '100%' }}
                    Designation
                    id="outlined-required"
                    label="Designation"
                    name='designation'
                    placeholder="Enter your Designation"
                    required
                />
            </Grid>
            <Grid item xs={2} >
                <TextField
                    style={{ width: '100%' }}
                    periodFrom
                    id="outlined-required"
                    label="Start"
                    name='startDate'
                    placeholder="Enter your Working Period in last  Company "
                    required
                />
            </Grid>
            <Grid item xs={2} >
                <TextField
                    style={{ width: '100%' }}
                    periodFrom
                    id="outlined-required"
                    label="End"
                    name='endDate'
                    placeholder="Enter your Working Period To "
                    required
                />
            </Grid>
        </Grid>
        <Projects></Projects>     
        </div>
    </> 
}