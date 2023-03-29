import { Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import Education from "./Education";
// import ProfessionalSummary from "./ProfessionalSummary";
import SkillSets from "./SkillSets";
import WorkExperience from "./WorkExperience";
import "../style/resume.css";
import axios from 'axios';

const API_URL = '/resume';
// Set the Bearer token
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWpheWtoYWRlbWFpbEBnbWFpbC5jb20iLCJhdXRob3JpdGllcyI6WyJVU0VSIl0sInJvbGVzIjpbIlVTRVIiXSwiaXNFbmFibGUiOnRydWUsImlhdCI6MTY4MDA4MDcxMywiZXhwIjoxNjgwMDg0MzEzfQ.H_Jo6REkdqjfpYljNIxTGG4uKAC3Nc0SbjDSzRb-jgs';

// Set the Axios headers
// const headers = {
//   'Authorization': `Bearer ${token}`,
//   'Content-Type': 'application/json',
// };

// const config = {
//   headers: {  'Authorization': `Bearer ${token}`,
//   'Content-Type': 'application/json', }
// };

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});


function Resume() {
  const [summary, setSummary] = useState("");
  const [summaryList, setSummaryList] = useState([]);
  const [maritalStatus, setMaritalStatus] = useState("");
  const [resumeList, setResumeList] = useState();
 

  const handleSummary = () => {
    setSummaryList([...summaryList, { val: summary }]);
  };

  

  const maritalStatusChangehandle = (event) => {
    setMaritalStatus(event.target.value);
  };

  const removeItem = (ele) => {
    if (window.confirm(`Are you sure you want to remove ${summaryList}?`)) {
      console.log("first", ele);
      const newItems = summaryList.filter((i) => i !== ele);
      setSummaryList(newItems);
      console.log(newItems);
    }
  };

  const dummyFunction = () => {
    const form = document.getElementById("myForm"); // replace 'myForm' with the ID of your form element
    
    const str = [];
    summaryList.forEach((ele) => {
      str.push(ele.val);
    });
    const personalDetails = {
      personalDetails: {
        empName: form.elements.fullName.value,
        email: form.elements.email.value,
        designation: form.elements.mainDesignation.value,
        mobileNo: form.elements.mobileNo.value,
        address: form.elements.address.value,
        gender: form.elements.gender.value,
        maritalStatus: maritalStatus,
      },
      skillSet: {
        technologies: form.elements.technologies.value,
        languages:  form.elements.languages.value,
        tools:  form.elements.tools.value,
        databaseUsed:  form.elements.databaseUsed.value,
        operatingSystems:  form.elements.operatingSystems.value,
        ideUsed:  form.elements.ideUsed.value,
        webServer:  form.elements.webServer.value,
      },
      professionalSummary: {
        summaryDetails: str,
      },
      educationDetails: {
        degree:  form.elements.degree.value,
        university:  form.elements.university.value,
        passingYear:  form.elements.passingYear.value,
      },
      workExperience : [
        {
          company: form.elements.company.value,
          jobRole: form.elements.desigination.value,
          periodFrom: form.elements.periodFrom.value,
          periodTo: form.elements.periodTo.value,
          projects : [
            {
              projectName: form.elements.projectName.value,
              description: form.elements.description.value,
              proTechnologies: form.elements.proTech.value,
              responsibilities : [
                form.elements.proResponsibilities.value
              ]
            }

          ]  
        }
      ]
    };

    const personalDetailsJSON = JSON.stringify(personalDetails);
    //console.log("personalDetailsJSON", personalDetailsJSON)

    setResumeList(personalDetailsJSON);
      // const elementsArray = form.querySelectorAll('input'); // select all input and button elements within the form
      // elementsArray.forEach((element) => {
      //   console.log(element.name,":",element.value);
      //   const personalDetailsJSON = JSON.stringify(element.name,element.value);
      //   console.log(personalDetailsJSON);
      // })
  };

  const submitButtonHandler = (event) => {
    event.preventDefault();
    dummyFunction()
    console.log("ResumeList: -----",resumeList)
  // axios.get(`${API_URL}/alldata`, config)
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  axiosInstance.post('/savedata', resumeList)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
   
   };

  return (
    <>
      <form id="myForm">
        <div className="container">
          <div className="main">
            <h3>Resume</h3>
            <div className="detail">
              <div className="row">
                <TextField
                  Name
                  id="outlined-required"
                  label="Name"
                  placeholder="Enter your Name"
                  name="fullName"
                />
                <TextField
                  Email
                  id="outlined-required"
                  label="Email"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>

              <div className="row">
                <TextField
                  Title
                  id="outlined-required"
                  label="Title"
                  placeholder="Enter your Designation"
                  name="mainDesignation"
                />
                <TextField
                  Enter
                  Phone
                  id="outlined-required"
                  label="Enter Phone"
                  placeholder="Enter Your phone Number"
                  name="mobileNo"
                />
              </div>
              <div className="row">
                <TextField
                  Address
                  id="outlined-required"
                  label="Address"
                  placeholder="Enter your Address"
                  name="address"
                />
                <TextField
                  gender
                  id="outlined-required"
                  label="gender"
                  placeholder="Enter your gender"
                  name="gender"
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <Select
                  sx={{ width: "49%" }}
                  value={maritalStatus}
                  label="MaritalStatus"
                  onChange={maritalStatusChangehandle}
                  name="maritalStatus"
                >
                  <MenuItem value={"Married"}>Married</MenuItem>
                  <MenuItem value={"Unmarried"}>Unmarried</MenuItem>
                </Select>
              </div>
            </div>
            <div>
              <h2
                style={{
                  border: "0.1px solid #239ce2",
                  backgroundColor: "#239ce2",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                Professional Summary
              </h2>
            </div>
            <div className="detail">
              {Array.isArray(summaryList) && summaryList.length ? (
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  {summaryList.map((ele, index) => (
                    <li>
                      {ele.val}
                      <Button onClick={() => removeItem(ele)}>x</Button>
                    </li>
                  ))}{" "}
                </ul>
              ) : (
                " "
              )}
              <div className="row">
                <TextField
                  Summary
                  id="outlined-required"
                  value={summary}
                  label="Summary"
                  placeholder="Enter your summary"
                  onChange={(e) => setSummary(e.target.value)}
                />
                <Button onClick={handleSummary} variant="contained">
                  Add
                </Button>
              </div>
            </div>
            <SkillSets/>
            <Education/>
            <WorkExperience />

            <Button
              variant="contained"
              type="submit"
              value="Submit"
              onClick={submitButtonHandler}
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Resume;
