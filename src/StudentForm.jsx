import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import './StudentForm.css';


const StudentForm = () =>{
    const [studentEnrollment , setStudentEnrollment] = useState('') 
    const [studentName,setStudentName] = useState('')
    const [studentClass , setStudentClass] = useState('IV')
    const [studentCourse , setStudentCourse] = useState('')  
    const [fatherName , setFatherName] = useState('')  
    const [studentPhone , setStudentPhone] = useState('')
    const [studentAddress , setStudentAddress ] = useState('')
    const [studentPaymentType , setStudentPaymentType] = useState('Monthly Payment') 
    const [monthlyFee , setMonthlyFee ] = useState('') 
    const [bloodGroup , setBloodGroup] = useState('')
   const [ category , setCategory] = useState('') 
    return(
        <div className="add-form">
      <form >
        <div className="form-part">
            <h2 className="studentHeading">Student Details</h2>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Student Enrollment No.</label><br/>
            <input type="text" className="student__field"  value={studentEnrollment} onChange={(e) => setStudentEnrollment(e.target.value)}  required />
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Student Name</label><br/>
            <input type="text" className="student__field" value={studentName} onChange={(e) => setStudentName(e.target.value)}  required/>
          </div>
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Class</label><br/>
            <select className="student__field" value={studentClass} onChange={(e) => setStudentClass(e.target.value)}  required>
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

        

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Course Name</label><br/>
            
            <Box sx={{ minWidth: 120 }}>
      <FormControl style={{width:'60%', backgroundColor:'white'}} className="student__field">
        <InputLabel  style={{color:'black'}}>Select Your Course</InputLabel>
        <Select
          
          // value={courseForPay}
          label=""
          // onChange={(e) => setCourseForPay(e.target.value)}
          style={{color:'black'}}
          value={studentCourse} onChange={(e) => {
            setStudentCourse(e.target.value) 
            setStudentSubjects([''])
            }
           } 
        >
          <MenuItem  value="CBSE Board All Subjects"> CBSE Board All Subjects</MenuItem>
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
          
        <div style={{marginLeft:40, marginTop:20,marginBottom:10, fontWeight:'bold'}}>
        Subject <br/>
        <label className="checkbox" style={{marginRight:10, fontWeight:'lighter'}} >
            <input type="checkbox" name="subject" value="English" /> English
        </label>
        <label className="checkbox" style={{marginRight:10,  fontWeight:'lighter'}}>
            <input type="checkbox" name="subject" value="Hindi" /> Hindi
        </label>
        <label className="checkbox" style={{marginRight:10 , fontWeight:'lighter'}}>
            <input type="checkbox" name="subject" value="Mathematics" /> Mathematics
        </label>
        <label className="checkbox" style={{marginRight:10 , fontWeight:'lighter'}}>
            <input type="checkbox" name="subject" value="Science"/> Science
        </label>
        <label className="checkbox" style={{marginRight:10 , fontWeight:'lighter'}}>
            <input type="checkbox" name="subject" value="Social Science"/> Social Science
        </label>
        </div>
        

          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10}}>Father's Name</label><br/>
            <input type="text" className="student__field" value={fatherName} onChange={(e) => setFatherName(e.target.value)}  />
          </div>
         
        </div>
        <div className="form-part" id="rightForm" >

           
            <div className="Guardian" >
            <label style={{marginRight:10, marginTop:10}}>Phone no.</label><br/>
            <input type="text" className="student__field" value={studentPhone} onChange={(e) => setStudentPhone(e.target.value)}  required/>
          </div>
          <div className="Guardian" >
            <label style={{marginRight:10, marginTop:10}}>Address</label><br/>
            <input type="text" className="student__field" value={studentAddress} onChange={(e) => setStudentAddress(e.target.value)}  required/>
          </div>
          <div className="Guardian">
            <label style={{marginRight:10, marginTop:10,marginBottom:10}}>Payment Type</label><br/>
            <select className="student__field" value={studentPaymentType} onChange={(e) => setStudentPaymentType(e.target.value)}  required>
                <option>Monthly Payment</option>
                <option>Quarterly Payment</option>
                <option>Yearly Payment</option>
            </select>
          </div>
          <div className="Guardian">
            <label style={{marginRight:10, marginTop:10}}>Monthly Fee</label><br/>
            <input type="text" className="student__field" value={monthlyFee} onChange={(e) => setMonthlyFee(e.target.value)}  required/>
          </div>
          <div className="Guardian" >
        <label className="checkbox" style={{marginRight:10, marginTop:10}} >Addmission Fee
            <input type="checkbox"  style={{marginLeft:10}}/> 
        </label>
        </div>
            <div className="Guardian">
                <label style={{marginRight:'10px',marginTop:10}}>Blood Group</label><br/>
                <input type="text" className="student__field" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}  required />
            </div>
            <div className="Guardian">
            <label style={{marginRight:10, marginTop:10,marginBottom:10}}>Category </label><br/>
            <select className="student__field" value={category} onChange={(e) => setCategory(e.target.value)}  required>
                <option>General</option>
                <option>SC/ST</option>
                <option>OBC</option>
            </select>
            </div>
          
          
          <div className="Guardian">
            <button style={{marginTop:15}}>Submit</button>
          </div>
        </div>
      </form>
    </div>
    )
}

export default StudentForm;