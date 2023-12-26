import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "./StudentForm.css";

const StudentForm = () => {
  const [studentEnrollment, setStudentEnrollment] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentPaymentType, setStudentPaymentType] =
    useState("Monthly Payment");
  const [monthlyFee, setMonthlyFee] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [category, setCategory] = useState("");
  const [classList, setClassList] = useState([])
  const [subjectList, setSubjectList] = useState([])
  const [courseList, setCourseList] = useState([])


  const getSubjectList = async()=>{
    try {
        const response = await fetch(`https://orijeen-main.vercel.app/subject/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
  
        const resJson = await response.json();
  
        console.log(resJson);
        setSubjectList(resJson)
      } catch (err) {
        console.log(err);
      }
}

const getCourseList = async()=>{
  try {
      const response = await fetch(`https://orijeen-main.vercel.app/course/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      console.log(resJson);
      setCourseList(resJson)
    } catch (err) {
      console.log(err);
    }
}

const getClassList = async()=>{
  try {
      const response = await fetch(`https://orijeen-main.vercel.app/class/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      console.log(resJson);
      setClassList(resJson)
    } catch (err) {
      console.log(err);
    }
}

useEffect(() => {
  getClassList()
  getSubjectList()
  getCourseList()
}, [])


  return (
    <div className="add-form">
      <form>
        <div className="form-part">
          <h2 className="studentHeading">Student Details</h2>
          <div style={{ marginLeft: 40 }}>
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Student Enrollment No.
            </label>
            <br />
            <input
              type="text"
              className="student__field"
              value={studentEnrollment}
              onChange={(e) => setStudentEnrollment(e.target.value)}
              required
            />
          </div>
          <div style={{ marginLeft: 40 }}>
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Student Name
            </label>
            <br />
            <input
              type="text"
              className="student__field"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
            />
          </div>
          <div style={{ marginLeft: 40 }}>
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Class 
            </label>
            <br />

            <Box sx={{ minWidth: 120 }}>
              <FormControl
                style={{ width: "60%", backgroundColor: "white" }}
                className="student__field"
              >
                <InputLabel style={{ color: "black" }}>
                  Select Your Course
                </InputLabel>
                <Select
                  // value={courseForPay}
                  label=""
                  // onChange={(e) => setCourseForPay(e.target.value)}
                  style={{ color: "black" }}
                  value={studentClass}
                  onChange={(e) => {
                    setStudentClass(e.target.value);
                  }}
                >
                {
                  classList?.map((item , index)=>(
                    <MenuItem value={item.className}>
                    {item.className}
                  </MenuItem>
                  ))
                }
                  
                  
                </Select>
              </FormControl>
            </Box>
          </div>

          <div style={{ marginLeft: 40 }}>
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Course Name
            </label>
            <br />

            <Box sx={{ minWidth: 120 }}>
              <FormControl
                style={{ width: "60%", backgroundColor: "white" }}
                className="student__field"
              >
                <InputLabel style={{ color: "black" }}>
                  Select Your Course
                </InputLabel>
                <Select
                  // value={courseForPay}
                  label=""
                  // onChange={(e) => setCourseForPay(e.target.value)}
                  style={{ color: "black" }}
                  value={studentCourse}
                  onChange={(e) => {
                    setStudentCourse(e.target.value);
                  }}
                >
                {
                  courseList?.map((item , index)=>(
                    <MenuItem value={item.courseName}>
                    {item.courseName}
                  </MenuItem>
                  ))
                }
                  
                  
                </Select>
              </FormControl>
            </Box>
          </div>

          <div
            style={{
              marginLeft: 40,
              marginTop: 20,
              marginBottom: 10,
              fontWeight: "bold",
            }}
          >
            Subject <br />
            {
              subjectList?.map((item , index)=>(
                <label
              className="checkbox"
              style={{ marginRight: 10, fontWeight: "lighter" }}
            >
              <input type="checkbox" name="subject" value={item.subjectName} /> {item.subjectName}
            </label>
              ))
            }
            
          </div>

          <div style={{ marginLeft: 40 }}>
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Father's Name
            </label>
            <br />
            <input
              type="text"
              className="student__field"
              value={fatherName}
              onChange={(e) => setFatherName(e.target.value)}
            />
          </div>
        </div>
        <div className="form-part" id="rightForm">
          <div className="Guardian">
            <label style={{ marginRight: 10, marginTop: 10 }}>Phone no.</label>
            <br />
            <input
              type="text"
              className="student__field"
              value={studentPhone}
              onChange={(e) => setStudentPhone(e.target.value)}
              required
            />
          </div>
          <div className="Guardian">
            <label style={{ marginRight: 10, marginTop: 10 }}>Address</label>
            <br />
            <input
              type="text"
              className="student__field"
              value={studentAddress}
              onChange={(e) => setStudentAddress(e.target.value)}
              required
            />
          </div>
          <div className="Guardian">
            <label style={{ marginRight: 10, marginTop: 10, marginBottom: 10 }}>
              Payment Type
            </label>
            <br />
            <select
              className="student__field"
              value={studentPaymentType}
              onChange={(e) => setStudentPaymentType(e.target.value)}
              required
            >
              <option>Monthly Payment</option>
              <option>Quarterly Payment</option>
              <option>Yearly Payment</option>
            </select>
          </div>
          <div className="Guardian">
            <label style={{ marginRight: 10, marginTop: 10 }}>
              Monthly Fee
            </label>
            <br />
            <input
              type="text"
              className="student__field"
              value={monthlyFee}
              onChange={(e) => setMonthlyFee(e.target.value)}
              required
            />
          </div>
          <div className="Guardian">
            <label
              className="checkbox"
              style={{ marginRight: 10, marginTop: 10 }}
            >
              Addmission Fee
              <input type="checkbox" style={{ marginLeft: 10 }} />
            </label>
          </div>
          <div className="Guardian">
            <label style={{ marginRight: "10px", marginTop: 10 }}>
              Blood Group
            </label>
            <br />
            <input
              type="text"
              className="student__field"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            />
          </div>
          <div className="Guardian">
            <label style={{ marginRight: 10, marginTop: 10, marginBottom: 10 }}>
              Category{" "}
            </label>
            <br />
            <select
              className="student__field"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option>General</option>
              <option>SC/ST</option>
              <option>OBC</option>
            </select>
          </div>

          <div className="Guardian">
            <button style={{ marginTop: 15 }}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
