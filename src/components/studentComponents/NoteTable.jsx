import React, { useEffect, useState } from "react";
import { Box, Button, CircularProgress, Modal } from "@mui/material";
import "./Form.css";
import "./Table.css";
import backend from "../../backend";

const NoteTable = (props) => {
  const [classData, setClassData] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false)
  const [table , setTable] = useState([])
  const [pdf, setPdf] = useState("");
  const [loading, setLoading] = useState(false);

  const [noteData, setNoteData] = useState([]);
  const handleContactTable = async () => {
    try {
      const response = await fetch(`${backend}/note/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNoteData(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${backend}/note/${id}/`, {
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
        if (files[0].type === "application/pdf") setPdf(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
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


  const CustomerModalOpen = (item)=>{
    setTable(item)
    setModalOpen(true)
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
      const response = await fetch(`${backend}/note/${table._id}`, {
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
          noteTitle : table.noteTitle,
          noteSubject : table.noteSubject,
          noteClass : table.noteClass,
          noteCourse : table.noteCourse,
          noteBatch : table.noteBatch,
          notePdf : pdf
        }),
      });

      const resJson = await response.json();
      alert("Teacher changed");
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
  };

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
          <tbody>
            {
              <tr>
                <th style={{ border: "1px solid black", padding: 5 }}>Title</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Subject
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>Class</th>
                <th style={{ border: "1px solid black", padding: 5 }}>Batch</th>
                <th style={{ border: "1px solid black", padding: 5 }}>Pdf</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Course
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Buttons
                </th>
              </tr>
            }
            {noteData?.map((item) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.noteTitle}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.noteSubject}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.noteClass}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.noteBatch}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.notePdf}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.noteCourse}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button
                    onClick={() => handleDelete(item._id)}
                    style={{ marginBottom: 5 }}
                    variant="contained"
                    color="error"
                    size="small"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={()=>CustomerModalOpen(
                      item
                    )}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
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
          <div className="form-group">
            <label>Note Title:</label>
            <input
              type="text"
              value={table.noteTitle}
              onChange={(e) => setTable({...table , noteTitle : e.target.value})}
            />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Subject:</label>
            <select
              type="text"
              value={table.noteSubject}
              onChange={(e) => setTable({...table , noteSubject : e.target.value})}
            >
              <option value="" selected disabled>
                Select Your Subject
              </option>
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
              value={table.noteClass}
              onChange={(e) => setTable({...table , noteClass : e.target.value})}
            >
              <option value="" selected disabled>
                Select Your Class
              </option>
              {classData?.map((item) => (
                <option key={item?.id} value={item?.value}>
                  {item?.className}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Batch:</label>
            <select
              type="text"
              value={table.noteBatch}
              onChange={(e) => setTable({...table , noteBatch : e.target.value})}
            >
              <option value="Batch 1">Batch 1</option>
              <option value="Batch 2">Batch 2</option>
              <option value="Batch 3">Batch 3</option>
            </select>
          </div>

          <div className="form-group">
            <label>Upload File:</label>
            <input type="file" accept=".pdf" onChange={uploadFiles} />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Course:</label>
            <select
              type="text"
              value={table.noteCourse}
              onChange={(e) => setTable({...table , noteCourse : e.target.value})}
            >
              <option value="" selected disabled>
                Select Your Course
              </option>
              {courseData?.map((item) => (
                <option key={item?.id} value={item?.value}>
                  {item?.courseName}
                </option>
              ))}
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
            </div>

          </Box>
        </Modal>
    </>
  );
};

export default NoteTable;
