import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "./StudentPayment.css";
import PayDetailsTab from "./PayDetailsTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "./backend";

const StudentPayment = () => {
  const [course, setCourse] = useState();
  const [courseList, setCourseList] = useState([]);
  const [payDetails, setPayDetails] = useState();
  const [studentPayList, setStudentPayList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [classs, setClasss] = useState();

  const handlePayDetails = async (e) => {
    e.preventDefault();
    setPayDetails("addPayDetails");
    try {
      const res = await fetch(`${backend}/student/getstudent`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentCourse: course,
          studentClass: classs,

        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setStudentPayList(resJson);
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

  useEffect(() => {
    const fetchClassValue = async () => {
      try {
        const response = await fetch(`${backend}/class/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setClassList(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClassValue();
    getCourseList();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="PayBox" style={{ marginTop: 40, margin: 20 }}>
        <h1 id="heading" style={{ marginBottom: "15px" }}>
          Student Payment
        </h1>
        <div style={{ border: "2px solid rgb(30, 144, 255)", padding: 20 }}>
          <h2 style={{ textTransform: "capitalize" }}>Select Course</h2>
          <form onSubmit={handlePayDetails}>
            <label style={{ marginBottom: 10 }}>Course Name:</label>

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
                  <MenuItem value="select course">select course</MenuItem>

                  {courseList?.map((item, index) => (
                    <MenuItem value={item.courseName}>
                      {item.courseName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <label style={{ marginBottom: 10 }}>Class Name:</label>

            <Box>
              <FormControl
                style={{ width: "60%", backgroundColor: "white" }}
                className="student__field"
              >
                <InputLabel style={{ color: "black" }}>
                  Select Your Class
                </InputLabel>
                <Select
                  // value={courseForPay}
                  label=""
                  // onChange={(e) => setCourseForPay(e.target.value)}
                  style={{ color: "black" }}
                  value={classs}
                  onChange={(e) => {
                    setClasss(e.target.value);
                  }}
                >
                  <MenuItem value="select class">select class</MenuItem>

                  {classList?.map((item, index) => (
                    <MenuItem value={item.className}>{item.className}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <button style={{ marginTop: 15 }}>Submit</button>
          </form>
        </div>
        {payDetails === "addPayDetails" ? (
          <PayDetailsTab
            studentPayList={studentPayList}
            setStudentPayList={setStudentPayList}
          />
        ) : null}
      </div>
    </>
  );
};

export default StudentPayment;
