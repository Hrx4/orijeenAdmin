
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "./StudentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const [studentSubjects , setstudentSubjects] = useState([])
  const [monthlyFee, setMonthlyFee] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [category, setCategory] = useState("");
  const [classList, setClassList] = useState([])
  const [subjectList, setSubjectList] = useState([])
  const [courseList, setCourseList] = useState([])
  const [batch, setBatch] = useState(''); 
  const [isChecked, setChecked] = useState(false);
 const [admissionAmount, setAdmissionAmount] = useState(0);
   const handleCheckboxChange = () => {
     setChecked(!isChecked); 
     if (!isChecked) {
       setAdmissionAmount(''); 
     }
   };

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


const handleCheck = (e)=>{
        
  (e.target.checked)?
(setstudentSubjects ([...studentSubjects , e.target.value])):
(
  setstudentSubjects( [...studentSubjects.filter(item => item !== e.target.value)])
)
}

const handleSubmit = async (e) => {
  e.preventDefault();
  // setLoading(true)
  const d = new Date();
  // Handle form submission here (e.g., send the data to the server)
  
  try {
    const res = await fetch(`http://localhost:8080/student/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentEnrollment: studentEnrollment,
    studentName: studentName,
    studentClass: studentClass,
    studentBatch: batch,
    studentCourse: studentCourse,
    studentSubjects: studentSubjects,
    studentPhone: studentPhone,
    studentAddress: studentAddress,
    studentPaymentType: studentPaymentType,
    studentFee : monthlyFee,
    studentBlood : bloodGroup,
    studentCategory : category,
    guardianName: fatherName,
    admissionAmount : admissionAmount,
        createdMonth: d.getMonth(),
        createdYear: d.getFullYear(),
      }),
    });
    // let resJson = await res.json();
    if (res.status === 200) {
      console.log("fine");

      toast.success("Form submitted", {
        position: toast.POSITION.TOP_CENTER,
      });
      setStudentEnrollment("");
  setStudentName("");
  setStudentClass("");
  setBatch("");
  setStudentCourse("");
  setSubjectList([]);
  setStudentPhone("");
  setStudentAddress("");
  setStudentPaymentType("");
  setFatherName("");
    } else {
      toast.error("All field fill required", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log("Some error occured");
    }
  } catch (err) {
    toast.error("All field fill required", {
      position: toast.POSITION.TOP_CENTER,
    });
    console.log(err);
  }

  // setLoading(false)
  
};


useEffect(() => {
  getClassList()
  getSubjectList()
  getCourseList()
}, [])


  return (
    <>
    <ToastContainer/>
      <div className="add-form">
      <form onSubmit={handleSubmit}>
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
                  Select Your Class
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
              <input type="checkbox" name="subject" value={item.subjectName} onClick={(e)=>handleCheck(e)} /> {item.subjectName}
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
          <div style={{marginLeft:40}}>
            <label style={{marginRight:10, marginTop:10, marginBottom:5}}>Batch No.</label><br/>
            <select className="student__field" value={batch} onChange={(e) => setBatch(e.target.value)}  required>
                <option>Batch A</option>
                <option>Batch B</option>
                <option>Batch C</option>
            </select>
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
          <div className="Guardian" >
        <label className="checkbox" style={{marginRight:10, marginTop:10}} >Admission Fee
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} style={{marginLeft:10}}/> 
        </label>
        {isChecked && (
        <div className="Guardian">
            <input
              type="text"
              placeholder="Admission Amount"
              className="student__field"
              value={admissionAmount}
              onChange={(e) => setAdmissionAmount(e.target.value)}
            />
        </div>
      )}
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
            <button style={{ marginTop: 15 }}>Submit</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default StudentForm;
