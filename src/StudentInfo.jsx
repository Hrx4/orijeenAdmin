import React, { useState } from "react";
import backend from './backend'
import { Box, CircularProgress, FormControl, InputLabel, MenuItem, Modal, Select } from "@mui/material";


const StudentInfo = ({ studentList, setStudentList , courseList , subjectList , classList}) => {

  const [modalOpen, setModalOpen] = useState(false)
  const [table , setTable] = useState([])
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentSubjects, setstudentSubjects] = useState([]);
  const [studentCourse, setStudentCourse] = useState([]);

  const uploadFiles = async (e) => {
    const { files } = e.target;
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "solardealership");
    data.append("cloud_name", "dkm3nxmk5");
    await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (files[0].type === "image/jpeg" || files[0].type === "image/png")
          setPhoto(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const key = JSON.parse(id);
    console.log("====================================");
    console.log(key, id);
    console.log("====================================");

    try {
      const response = await fetch(`${backend}/student/${key}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      await response.json();
      console.log("====================================");
      console.log(response);
      console.log("====================================");

      setStudentList([...studentList.filter((item) => item._id !== id)]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = (e) => {
    e.target.checked
      ? setstudentSubjects([...studentSubjects, e.target.value])
      : setstudentSubjects([
          ...studentSubjects.filter((item) => item !== e.target.value),
        ]);
  };

  const handleCheck1 = (e) => {
    e.target.checked
      ? setStudentCourse([...studentCourse, e.target.value])
      : setStudentCourse([
          ...studentCourse.filter((item) => item !== e.target.value),
        ]);
  };

  const handleChange =(item)=>{
    setModalOpen(true)
    setTable(item)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    // Handle form submission here (e.g., send the data to the server)
    try {
      const res = await fetch(`${backend}/student/${table._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEnrollment: table.studentEnrollment,
    studentName: table.studentName,
    studentClass: table.studentClass,
    studentBatch: table.studentBatch,
    studentCourse: table.studentCourse,
    studentSubjects: table.studentSubjects,
    studentPhoto : photo,
    studentPassword : table.studentPassword,
    studentPhone: table.studentPhone,
    studentAddress: table.studentAddress,
    studentPaymentType: table.studentPaymentType,
    studentFee : table.studentFee,
    studentBlood : table.studentBlood,
    studentCategory : table.studentCategory,
    guardianName: table.guardianName,
        }),
      });
      // let resJson = await res.json();

      if (res.status === 201) {
        console.log("fine");

        alert("Student Update")
        
      } else {
        
        console.log("Some error occured");
      }
    } catch (err) {
      
      console.log(err);
    }

    // setLoading(false)
  };

  return (
    <>
      <div style={{ marginTop: 150 }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #000",
        }}
      >
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          <th style={{ border: "1px solid #000", padding: "8px" }}>Id</th>
          <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid #000", padding: "8px" }}>Action</th>
        </tr>
        {studentList.map((item, index) => (
          <tr style={{ border: "1px solid black", padding: 5 }} key={item._id}>
            <td style={{ border: "1px solid #000", padding: "8px" }}>
              {index + 1}
            </td>
            <td
              style={{
                cursor: "pointer",
                border: "1px solid #000",
                padding: "8px",
              }}
            >
              {item.studentName}
            </td>
            <td style={{ border: "1px solid #000", padding: "8px" }}>
              <button onClick={()=>handleChange(item)}>Edit</button>
              <button
                style={{ backgroundColor: "red" }}
                onClick={() => handleDelete(JSON.stringify(item._id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>


    <Modal
        open={modalOpen}
        onClose={()=>setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
          <Box sx={{position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xs:"80%" ,md:500},
            height:"70vh",
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            overflowY:"scroll"
          }}>
            {loading ? <div className="loader"> 
            Please Wait Your File is Uploading......
            <CircularProgress/>
            </div> : null}

            <div style={{width:"auto"}} className="form-container">
            <form onSubmit={handleSubmit}>
            <h2 className="studentHeading">Student Details</h2>
            <div >
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Student Enrollment No.
              </label>
              <br />
              <input
                type="text"
                value={table.studentEnrollment}
              onChange={(e) => setTable({...table , studentEnrollment : e.target.value})}
                
              />
            </div>

            <div >
              <label style={{ marginRight: 10, marginTop: 10 }}>password</label>
              <br />
              <input
                type="text"
                value={table.studentPassword}
              onChange={(e) => setTable({...table , studentPassword : e.target.value})}
                
              />
            </div>
            <div >
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Student Name
              </label>
              <br />
              <input
                type="text"
                value={table.studentName}
              onChange={(e) => setTable({...table , studentName : e.target.value})}
                
              />
            </div>
            <div >
              <label style={{ marginRight: 10, marginTop: 10 }}>Class</label>
              <br />

              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  style={{ width: "60%", backgroundColor: "white" }}

                >
                  <InputLabel style={{ color: "black" }}>
                    Select Your Class
                  </InputLabel>
                  <Select
                    // value={courseForPay}
                    label=""
                    // onChange={(e) => setCourseForPay(e.target.value)}
                    style={{ color: "black" }}
                    value={table.studentClass}
              onChange={(e) => setTable({...table , studentClass : e.target.value})}
                  >
                    {classList?.map((item, index) => (
                      <MenuItem value={item.className}>
                        {item.className}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Courses <br />
              {courseList?.map((item, index) => (
                <label
                  className="checkbox"
                  style={{ marginRight: 10, fontWeight: "lighter" }}
                >
                  <input
                    type="checkbox"
                    name="subject"
                    value={item.courseName}
                    onClick={(e) => handleCheck1(e)}
                  />{" "}
                  {item.courseName}
                </label>
              ))}
            </div>

            <div
              style={{
                marginTop: 20,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Subject <br />
              {subjectList?.map((item, index) => (
                <label
                  className="checkbox"
                  style={{ marginRight: 10, fontWeight: "lighter" }}
                >
                  <input
                    type="checkbox"
                    name="subject"
                    value={item.subjectName}
                    onClick={(e) => handleCheck(e)}
                  />{" "}
                  {item.subjectName}
                </label>
              ))}
            </div>

            <div >
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Father's Name
              </label>
              <br />
              <input
                type="text"
                value={table.guardianName}
              onChange={(e) => setTable({...table , guardianName : e.target.value})}
              />
              
            </div>
            <div >
              <label
                style={{ marginRight: 10, marginTop: 10, marginBottom: 5 }}
              >
                Batch No.
              </label>
              <br />
              <select
                value={table.studentBatch}
              onChange={(e) => setTable({...table , studentBatch : e.target.value})}
                
              >
                <option>Batch A</option>
                <option>Batch B</option>
                <option>Batch C</option>
              </select>
            </div>

            <div className="Guardian">
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Phone no.
              </label>
              <br />
              <input
                type="text"
                value={table.studentPhone}
              onChange={(e) => setTable({...table , studentPhone : e.target.value})}
                
              />
            </div>

            <div className="Guardian">
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Photo of student
              </label>
              <br />
              <input
                type="file"
                accept="image/*"
                onChange={uploadFiles}
                
              />
            </div>
            <div className="Guardian">
              <label style={{ marginRight: 10, marginTop: 10 }}>Address</label>
              <br />
              <input
                type="text"
                value={table.studentAddress}
              onChange={(e) => setTable({...table , studentAddress : e.target.value})}
                
              />
            </div>
            <div className="Guardian">
              <label
                style={{ marginRight: 10, marginTop: 10, marginBottom: 10 }}
              >
                Payment Type
              </label>
              <br />
              <select
                value={table.studentPaymentType}
              onChange={(e) => setTable({...table , studentPaymentType : e.target.value})}
                
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
                type="number"
                value={table.studentFee}
              onChange={(e) => setTable({...table , studentFee : e.target.value})}
                
              />
            </div>
            
              
                <div className="Guardian">
                <label style={{ marginRight: 10, marginTop: 10 }}>
                Admission Amount
              </label>
              <br />
                  <input
                    type="number"
                    placeholder="Admission Amount"
  
                    value={table.admissionAmount}
              onChange={(e) => setTable({...table , admissionAmount : e.target.value})}
                  />
                </div>
              
            <div className="Guardian">
              <label style={{ marginRight: "10px", marginTop: 10 }}>
                Blood Group
              </label>
              <br />
              <input
                type="text"
                value={table.studentBlood}
              onChange={(e) => setTable({...table , studentBlood : e.target.value})}
                
              />
            </div>
            <div className="Guardian">
              <label
                style={{ marginRight: 10, marginTop: 10, marginBottom: 10 }}
              >
                Category{" "}
              </label>
              <br />
              <select
                value={table.studentCategory}
              onChange={(e) => setTable({...table , studentCategory : e.target.value})}
                
              >
                <option>General</option>
                <option>SC/ST</option>
                <option>OBC</option>
              </select>
            </div>

            <div className="Guardian">
              <button style={{ marginTop: 15 }}>Submit</button>
            </div>
        </form>
            </div>

          </Box>
        </Modal>
    </>

  );
};

export default StudentInfo;
