import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { display } from "@mui/system";
import React, { useState } from "react";
import resume from "../../styles/resume.css"
import Education from "./Education";
import SkillSets from "./SkillSets";
import WorkExperience from "./WorkExperience";

function Resume() {
  const [summary, setSummary] = useState('');
  const [summaryList, setSummaryList] = useState([]);
  const [married, setMarried] = useState('');
  const [gender, setGender] = useState('');

  const handleSummary = () => {
    setSummaryList([...summaryList, { val: summary }])
  }

  const handleChangeStatus = (event) => {
    setMarried(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  }


  const removeItem = (ele) => {
    if (window.confirm(`Are you sure you want to remove ${summaryList}?`)) {
      console.log("first", ele)
      const newItems = summaryList.filter((i) => i !== ele);
      setSummaryList(newItems);
      console.log(newItems)
    }
  };

  return (
    <>
      <div className="container">
        <form>
        <div className="main">
          <div >
          <h1>Resume</h1>
          <Button style={{  width : "20%" ,height:"40px", fontSize:"15px" ,fontWeight: "bolder",  left:"78%" , margin:"-100px 0px 0px 0px"}}  variant="contained" >Resume Preview</Button>
          </div>
        
          <div className="detail subContainer">
            <div className="row">
              <TextField
                Name
                id="outlined-required"
                label="Name"
                placeholder="Enter your Name"
                required
              />
              <TextField
                Email
                id="outlined-required"
                label="Email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="row">
              <TextField
                Title
                id="outlined-required"
                label="Title"
                placeholder="Enter your Designation"
                required
              />
              <TextField
                Enter Phone
                id="outlined-required"
                label="Enter Phone"
                placeholder="Enter Your phone Number"
                required
              />
            </div>
            <div className="row" style={{ textAlign: 'left' }}>
              <TextField
                Address
                id="outlined-required"
                label="Address"
                placeholder="Enter your Address"
                required
              />
             
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>

                <Select

                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                  required
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>


            </div>
            <div style={{ textAlign: 'left' }}>

              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">MaritalStatus</InputLabel>

                <Select
                  sx={{ width: '49%' }}
                  value={married}
                  label="MaritalStatus"
                  onChange={handleChangeStatus}
                  required
                >
                  <MenuItem value={10}>Married</MenuItem>
                  <MenuItem value={20}>Unmarried</MenuItem>
                  <MenuItem value={30}>Divorce</MenuItem>
                </Select>
              </FormControl>
      
            </div>
          </div>
          <div>
            <h2 style={{ border: "0.1px solid #239ce2", backgroundColor: 'rgb(25,118,210)', textAlign: 'center', color: '#fff' }}>Professional Summary</h2>
          </div>
          <div className="detail subContainer">
            {Array.isArray(summaryList) && summaryList.length ? <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>{summaryList.map((ele, index) => <li>{ele.val}<Button onClick={() => removeItem(ele)}>x</Button></li>)} </ul> : " "}
            <div className="row">
              <TextField
                Summary
                id="outlined-required"
                value={summary}
                label="Summary"
                placeholder="Enter your summary"
                onChange={(e) => setSummary(e.target.value)}
                required
              />
              <Button onClick={handleSummary} variant="contained">Add</Button>
            </div>
          </div>
        
          <SkillSets />
       
          <Education />
          <WorkExperience />
          <Button style={{  width : "25%" ,padding: "10px", fontSize:"15px" ,fontWeight: "bolder",  left:"38%" , margin:"25px 0px 25px 0px"}}  variant="contained" >Submit Data</Button>
        </div>
        </form>
      </div>
    </>
  )
}
export default Resume

