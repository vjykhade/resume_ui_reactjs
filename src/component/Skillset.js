import { Button, Chip, Grid, Stack, TextField } from '@mui/material'
import React from 'react'
import { useState } from 'react';

function Skillset() {
    const [language, setLanguage] = useState("");
    const [languageList, setLanguageList] = useState([]);

    const handleSubmit = () => {
        setLanguageList([...languageList, { val: language }])
    }

    const handleDelete = () => {

    }
    return (
        <>
            <Grid container>
                <Grid item lg={12} sx={12}>
                    <h2 style={{ border: "0.1px solid #239ce2", backgroundColor: '#239ce2', textAlign: 'center', color: '#fff' }}>Skill Set</h2>
                </Grid>
            </Grid>
            <Grid container lg={12}>
                <Grid item lg={2}>
                    <TextField
                        Language
                        id="outlined-required"
                        label="Language"
                        placeholder="Language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                </Grid>
                <Grid style={{ padding: '10px 0px' }} item lg={1}>
                    <Button onClick={handleSubmit} variant="contained">Add</Button>
                </Grid>
                {Array.isArray(languageList) && languageList.length ?
                    <Grid item lg={9}>
                         <Stack direction="row" spacing={1}  style={{padding:'10px 0px'}}>
                        {languageList.map((ele, index) =>
                            
                           <Chip color="primary" variant="outlined" label={ele.val} 
                            onDelete={handleDelete}
                             />
                        )}
                        </Stack>
                    </Grid>
                    
                     : " "}

            </Grid>

        </>


    )
}

export default Skillset