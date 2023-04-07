import { Button, Grid} from '@mui/material'
import React, { useState } from 'react'
import { WorkExperienceTemplate } from './WorkExperienceTemplate';

function WorkExperience() {
    const [companies, setCompanies] = useState([WorkExperienceTemplate()]);
    const handleOpenCompanies = () => {
        setCompanies([...companies,  WorkExperienceTemplate()])
    }
    const RemoveCompanies = (ele) => {
        if (window.confirm(`Are you sure you want to remove ${companies}?`)) {
            const newItems = [...companies];
            newItems.splice(ele, 1);
            setCompanies(newItems);
            }
    
    };

    return (
        <>
            <Grid container>
                <Grid item lg={12} sx={12}>
                    <h2 style={{ border: "0.1px solid #239ce2", backgroundColor: 'rgb(25,118,210)', textAlign: 'center', color: '#fff' }}>Work Experience</h2>
                </Grid>
            </Grid>
            
            {companies.map(company => {
                return <>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: "15px" ,  marginRight: "30px" }}>
                <button style={{width: "30px", height: "30px", backgroundColor: "red", color: "white",cursor: "pointer", borderRadius: "5px",border: "none",fontSize:"25px", fontWeight:"bold"}}  onClick={RemoveCompanies}>X</button>
             </Grid>{company}
                </>;
            })}

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', gap: "15px" ,  marginRight: "30px" }}>
               <Button variant="contained" onClick={handleOpenCompanies}>Add Company</Button>
            </Grid>  
        </>
    )
}

export default WorkExperience
