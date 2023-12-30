import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import backend from "../../backend";

const SubDashBoard = (props) => {
  const [classs, setClasss] = useState("");
  const [subject, setSubject] = useState("");
  const [course, setCourse] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [incomeList, setIncomeList] = useState([]);
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


  const handleAllStudentTable = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:8080/student/${props.apiRoute}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentClass: classs,
          studentCourse: course,
          studentSubject: subject,
          studentEnrollment: enrollment,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setIncomeList(resJson);
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
    getClassList()
    getSubjectList()
    getCourseList()
  }, [])

  return (
    <>
      <ToastContainer />
      <div style={{ width: "95%" }}>
        <h1>{props.headingDash}</h1>
        <div class="search-box">
          <input
            type="text"
            placeholder="Search..."
            style={{ width: "60%" }}
            value={enrollment}
            onChange={(e) => setEnrollment(e.target.value)}
          ></input>
          <button onClick={handleAllStudentTable}>Search</button>
        </div>
        <div style={{ marginTop: 10 }}>
          <Box sx={{ minWidth: "100%" }}>
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
        <div style={{ marginTop: 10 }}>
        <Box sx={{ minWidth: "100%" }}>
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
        <div style={{ marginTop: 10 }}>
        <Box sx={{ minWidth: "100%" }}>
          <FormControl
                style={{ width: "60%", backgroundColor: "white" }}
                className="student__field"
              >
                <InputLabel style={{ color: "black" }}>
                  Select Your Subject
                </InputLabel>
                <Select
                  // value={courseForPay}
                  label=""
                  // onChange={(e) => setCourseForPay(e.target.value)}
                  style={{ color: "black" }}
                  value={course}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                >
                {
                  subjectList?.map((item , index)=>(
                    <MenuItem value={item.subjectName}>
                    {item.subjectName}
                  </MenuItem>
                  ))
                }
                  
                  
                </Select>
              </FormControl>
          </Box>
        </div>

        {incomeList ? (
          <div
            className="table-scroll"
            style={{
              marginTop: 40,
              overflowX: "scroll",
              overflowY: "scroll",
              width: "100%",
            }}
          >
            <table>
              <tbody>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Enrollment No.
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Name
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Payment Type
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Date
                  </th>
                  <th style={{ border: "1px solid #000", padding: "8px" }}>
                    Fees
                  </th>
                </tr>

                {incomeList.map((item) => (
                  <tr
                    style={{ border: "1px solid black", padding: 5 }}
                    key={item._id}
                    onClick={() => {
                      console.log(item._id);
                    }}
                  >
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.paymentId}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.studentName}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.paymentType}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.lastIncomeDate}
                    </td>
                    <td style={{ border: "1px solid black", padding: 5 }}>
                      {item?.paymentMoney}
                    </td>

                    {/* <td style={{border:"1px solid black" , padding:5}}>
                <Button style={{marginBottom:5}} variant='contained' color='error' size='small' onClick={() => handleDelete(JSON.stringify(item._id))} >
                  Delete
                </Button>
                <Button variant='contained' color='success' size='small' onClick={()=>CustomerModalOpen(
                     item._id,item.noteTitle , item.noteSubject , item.noteClass , item.noteBatch , item.noteImage , item.notePdf, item.noteCourse
                )} >
                  Update
                </Button>
              </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default SubDashBoard;
