import React, { useEffect, useState } from "react";
import "./AllStudentForm.css";
import StudentInfo from "./StudentInfo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from './backend'


const AllStudentForm = () => {
  const [course, setCourse] = useState();
  const [studentTab, setStudentTab] = useState();
  const [studentList, setStudentList] = useState([]);
  const [courseList, setCourseList] = useState([]);

  const getCourseList = async () => {
    try {
      const response = await fetch(`${backend}/course/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      console.log(resJson);
      setCourseList(resJson);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAllStudentTable = async (e) => {
    e.preventDefault();
    setStudentTab("studentInfo");
    try {
      const res = await fetch(`${backend}/student/getstudent`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentCourse: course,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setStudentList(resJson);
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
  };

  useEffect(() => {
    getCourseList();
  }, []);
  return (
    <>
      <ToastContainer />
      <div className="BoxStyle" style={{ marginTop: 40, margin: 20 }}>
        <h1 id="heading">All Student</h1>
        <div style={{ border: "2px solid rgb(30, 144, 255)", padding: 20 }}>
          <h2 style={{ textTransform: "capitalize" }}>Select Course</h2>
          <form onSubmit={handleAllStudentTable}>
            <label>Course Name:</label>

            <Box>
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
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                >
                  {courseList?.map((item, index) => (
                    <MenuItem value={item.courseName}>
                      {item.courseName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <button style={{ marginTop: 15 }}>Submit</button>
          </form>
        </div>
        {studentTab === "studentInfo" ? (
          <StudentInfo
            studentList={studentList}
            setStudentList={setStudentList}
          />
        ) : null}
      </div>
    </>
  );
};

export default AllStudentForm;
