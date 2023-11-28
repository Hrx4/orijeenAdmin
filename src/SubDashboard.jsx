import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import './SubDashboard.css';


const SubDashBoard = (props) => {
  return (
        <>
      <h1>{props.headingDash}</h1>
      <div class="search-box">
        <input type="text" placeholder="Search..." style={{ width: '60%' }}></input>
        <button type="submit">Search</button>
      </div>
      <div style={{ marginTop: 10 }}>


        <Box sx={{ width:"100%" }}>
          <FormControl style={{ width: '60%', backgroundColor: 'white' }} className="student__field">
            <InputLabel style={{ color: 'black', marginLeft: -13, width:"60%" }}>Select Your Course</InputLabel>
            <Select

              // value={courseForPay}
              label=""
              // onChange={(e) => setCourseForPay(e.target.value)}
              style={{ color: 'black' }}
            //   value={studentCourse} onChange={(e) => {
            //     setStudentCourse(e.target.value) 
            //     setStudentSubjects([''])
            //     }
            //    } 
            >
              <MenuItem value="CBSE Board All Subjects"> CBSE Board All Subjects</MenuItem>
              <MenuItem value="ICSE Board All Subjects">
                ICSE Board All Subjects
              </MenuItem>
              <MenuItem value="Class 11 CBSE Boards + CUET">
                Class 11 CBSE Boards + CUET
              </MenuItem>
              <MenuItem value="Class 11 ICSE Boards + CUET">
                Class 11 ICSE Boards + CUET
              </MenuItem>
              <MenuItem value="Class 12 CBSE Boards + CUET">
                Class 12 CBSE Boards + CUET
              </MenuItem>
              <MenuItem value="Class 12 ICSE Boards + CUET">
                Class 12 ICSE Boards + CUET
              </MenuItem>
              <MenuItem value="JEE Mains ">JEE Mains </MenuItem>
              <MenuItem value="NEET ">NEET </MenuItem>
              <MenuItem value="Foundation Course JEE IIT / NEET">
                Foundation Course JEE IIT / NEET
              </MenuItem>
              <MenuItem value="Commerce Board + CUET">Commerce Board + CUET</MenuItem>
              <MenuItem value="CA Foundation">CA Foundation</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div style={{ marginTop: 10 }}>
        <select className="student__field" required style={{ height: 40 }}>
          <option disabled selected>Select Class</option>
          <option>IV</option>
          <option>V</option>
          <option>VI</option>
          <option>VII</option>
          <option>VIII</option>
          <option>IX</option>
          <option>X</option>
          <option>XI</option>
          <option>XII</option>
        </select>
      </div>
      <div style={{ marginTop: 10 }}>
        <select className="student__field" required style={{ height: 40 }}>
          <option disabled selected>Select Subject</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Mathematics</option>
          <option>Science</option>
          <option>Social Science</option>
        </select>
      </div>
      <div style={{marginTop:40}}>
      <table style={{borderCollapse: 'collapse', width: '100%', border: '1px solid #000'}}>
      
      <thead>
        <tr style={{backgroundColor: '#f2f2f2'}}>
            <th className="dashTab" style={{border: '1px solid #000', padding: '8px'}}>Enrollment No.</th>
            <th className="dashTab" style={{border: '1px solid #000', padding: '8px'}} >Name</th>
            <th className="dashTab" style={{border: '1px solid #000', padding: '8px'}}>Payment Type</th>
            <th className="dashTab" style={{border: '1px solid #000', padding: '8px'}}>Date</th>
            <th className="dashTab" style={{border: '1px solid #000', padding: '8px'}}>Fees</th>
            <th className="dashTab" style={{border: '1px solid #000', padding: '8px'}}>Action</th>

        </tr>
        </thead>
        </table>
      </div>
      </>

      )
}
      export default SubDashBoard;