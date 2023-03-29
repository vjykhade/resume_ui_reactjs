import { Grid, TextField } from '@mui/material'
import React from 'react'

function ProfessionalSummary() {
  return (
    <>
     <Grid container>
                <Grid item lg={12} sx={12}>
                    <h2 style={{ border: "0.1px solid #239ce2", backgroundColor: '#239ce2', textAlign: 'center', color: '#fff' }}>Professional Summary</h2>
                </Grid>
     </Grid>

     <Grid container spacing={2}>
                <Grid item xs={2}style={{display:'flex',alignItems:'start'}}>
                    <h3> Professional Summary:</h3>
                </Grid>
                <Grid item xs={10} >
                    <TextField
                        style={{width:'100%'}}
                        Professional Summary
                        id="outlined-required"
                        label=" Professional Summary"
                        placeholder="Enter here Professional Summary"
                    />
                </Grid>

            </Grid> 
    </>
  )
}

export default ProfessionalSummary