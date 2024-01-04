import React, {useState, useEffect} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TeacherPayDetails from "./TeacherPayDetails";

const TeacherPayment = () =>{
    const [teacher, setTeacher] = useState();
  const [teacherPayDetails, setTeacherPayDetails] = useState();
  const [studentPayList, setStudentPayList] = useState([]);

  const handlePayDetails = async (e) => {
    e.preventDefault();
    setTeacherPayDetails("addTeacherPayDetails");
  }
    return(
        <>
            <div className="PayBox" style={{ marginTop: 40, margin: 20 }}>
        <h1 id="heading" style={{ marginBottom: "15px" }}>
          Teacher Payment
        </h1>
        <div style={{ border: "2px solid rgb(30, 144, 255)", padding: 20 }}>
          <h2 style={{ textTransform: "capitalize" }}>Select Teacher</h2>
          <form onSubmit={handlePayDetails}>
            <label style={{ marginBottom: 10 }}>Teacher Name:</label>

            <Box>
              <FormControl
                style={{ width: "60%", backgroundColor: "white" }}
                className="student__field"
              >
                <InputLabel style={{ color: "black" }}>
                  Select Your Teacher
                </InputLabel>
                <Select
                  // value={courseForPay}
                  label=""
                  // onChange={(e) => setCourseForPay(e.target.value)}
                  style={{ color: "black" }}
                  value={teacher}
                  onChange={(e) => {
                    setTeacher(e.target.value);
                  }}
                >
                  {/* {courseList?.map((item, index) => (
                    <MenuItem value={item.courseName}>
                      {item.courseName}
                    </MenuItem>
                  ))} */}
                </Select>
              </FormControl>
            </Box>
            <button style={{ marginTop: 15 }}>Submit</button>
          </form>
        </div>
        {teacherPayDetails === "addTeacherPayDetails" ? (
          <TeacherPayDetails/>
        ) : null}
      </div>
        </>
    )
}


export default TeacherPayment;