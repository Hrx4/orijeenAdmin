import { Box, Button, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import backend from "../../backend";

const AllTeacher = () => {
  const [teacherData, setTeacherData] = useState([]);
  
  const [classData, setClassData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  const [table , setTable] = useState([])

  const handleContactTable = async () => {
    try {
      const response = await fetch(`${backend}/teacher/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setTeacherData(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${backend}/teacher/${id}/`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      await response.json();

      // props.setApplyList( [...props.applyList.filter(item => item._id !== id)]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend}/teacher/${table._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          teacherName: table.teacherName,
          teacherAge:  table.teacherAge,
          teacherGender:  table.teacherGender,
          teacherEducation:  table.teacherEducation,
          teacherEmail:  table.teacherEmail,
          teacherPassword:  table.teacherPassword,
          teacherAddress:  table.teacherAddress,
          teacherSalary: table.teacherSalary ,
          teacherDoj: table.teacherDoj ,
          teacherSubject:  table.teacherSubject,
          teacherClass: table.teacherClass ,
          teacherCourse:  table.teacherCourse,
        }),
      });

      const resJson = await response.json();
      alert("Teacher Update");
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
  };

const handleChange =(item)=>{
  setModalOpen(true)
  setTable(item)
}

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
        setClassData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClassValue();
    const fetchSubjectValue = async () => {
      try {
        const response = await fetch(`${backend}/subject/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setSubjectData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSubjectValue();

    const fetchCourseValue = async () => {
      try {
        const response = await fetch(`${backend}/course/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setCourseData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourseValue();
    handleContactTable();
  }, []);

  return (
    <>
      <div
        className="table-scroll"
        style={{
          width: "100%",
          overflowX: "scroll",
          overflowY: "scroll",
          padding: 10,
          height: "100vh",
        }}
      >
        <table>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: 5 }}>Name</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Email</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Password</th>

              <th style={{ border: "1px solid black", padding: 5 }}>Age</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Gender</th>
              <th style={{ border: "1px solid black", padding: 5 }}>
                Education
              </th>
              <th style={{ border: "1px solid black", padding: 5 }}>Address</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Salary</th>
              <th style={{ border: "1px solid black", padding: 5 }}>
                Date of Job
              </th>
              <th style={{ border: "1px solid black", padding: 5 }}>Subject</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Class</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Course</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {teacherData?.map((item, index) => (
              <tr key={item._id}>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherName}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherEmail}
                </td><td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherPassword}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherAge}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherGender}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherEducation}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherAddress}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherSalary}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherDoj}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherSubject}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherClass}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.teacherCourse}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button variant="contained" onClick={()=> handleChange(item)}>Edit</Button>{" "}
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", md: 500 },
            height: "70vh",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <form onSubmit={handleSubmit}>
          <h1>Teacher Details:</h1>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={table.teacherName}
              onChange={(e) => setTable({...table , teacherName : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={table.teacherEmail}
              onChange={(e) => setTable({...table , teacherEmail : e.target.value})}
            />
          </div>{" "}
          <div className="form-group">
            <label>Password:</label>
            <input
              type="text"
              value={table.teacherPassword}
              onChange={(e) => setTable({...table , teacherPassword : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              value={table.teacherAge}
              onChange={(e) => setTable({...table , teacherAge : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              type="text"
              value={table.teacherGender}
              onChange={(e) => setTable({...table , teacherGender : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Education:</label>
            <input
              type="text"
              value={table.teacherEducation}
              onChange={(e) => setTable({...table , teacherEducation : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={table.teacherAddress}
              onChange={(e) => setTable({...table , teacherAddress : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Base Salary:</label>
            <input
              type="number"
              value={table.teacherSalary}
              onChange={(e) => setTable({...table , teacherSalary : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Date Of Joining:</label>
            <input
              type="text"
              value={table.teacherDoj}
              onChange={(e) => setTable({...table , teacherDoj : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label style={{ marginRight: 10 }}>Subject:</label>
            <select
              type="text"
              value={table.teacherSubject}
              onChange={(e) => setTable({...table , teacherSubject : e.target.value})}
            >
              
              {subjectData?.map((item) => (
                <option key={item?.id} value={item?.value}>
                  {item?.subjectName}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label style={{ marginRight: 10 }}>Class:</label>
            <select
              type="text"
              value={table.teacherClass}
              onChange={(e) => setTable({...table , teacherClass : e.target.value})}
            >
             
              {classData?.map((item) => (
                <option key={item?.id} value={item?.value}>
                  {item?.className}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label style={{ marginRight: 10 }}>Course:</label>
            <select
              type="text"
              value={table.teacherCourse}
              onChange={(e) => setTable({...table , teacherCourse : e.target.value})}
            >
             
              {courseData?.map((item) => (
                <option key={item?.id} value={item?.value}>
                  {item?.courseName}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
        </Box>
      </Modal>


    </>
  );
};

export default AllTeacher;
