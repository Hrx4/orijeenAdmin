import React, { useState,useEffect } from "react";
import TeacherNav from "./TeacherNav";
import { Button,Box, Modal, CircularProgress } from "@mui/material";
import backend from "../../backend";
import { Link } from "react-router-dom";
import "./TeacherPanel.css";

const TeacherPanel = () => {


    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpen1, setModalOpen1] = useState(false)

    const [title, setTitle] = useState("");
    const [classData, setClassData] = useState([]);
    const [classValue, setClassValue] = useState("");
    const [subjectData, setSubjectData] = useState([]);
    const [subjectValue, setSubjectValue] = useState("");
    const [courseData, setCourseData] = useState([]);
    const [courseValue, setCourseValue] = useState("");
    const [batch, setBatch] = useState("Batch 1");
    const [pdf, setPdf] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
  
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
    }, []);
  
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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // setLoading(true)
  
      try {
        const res = await fetch(`${backend}/note/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            noteTitle: title,
            noteSubject: subjectValue,
            noteClass: classValue,
            noteBatch: batch,
            notePdf: pdf,
            noteCourse: courseValue,
          }),
        });
        // let resJson = await res.json();
        if (res.status === 200) {
          console.log("fine");
          setTitle("");
          setPdf("");
          alert("form submitted");
        } else {
          alert("all field required");
          console.log("Some error occured");
        }
      } catch (err) {
        alert("all field required");
        console.log(err);
      }
  
      // setLoading(false)
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        // setLoading(true)
    
        try {
          const res = await fetch(`${backend}/contact/`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactName : name ,
              contactEmail : email ,
              contactPhone : phone ,
              contactMessage : message
            }),
          });
          // let resJson = await res.json();
          if (res.status === 200) {
            console.log("fine");
            
            alert("form submitted");
          } else {
            alert("all field required");
            console.log("Some error occured");
          }
        } catch (err) {
          alert("all field required");
          console.log(err);
        }
    
        // setLoading(false)
      };

  return (
    <>
    {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <div>
        <TeacherNav />
        <div
          className="contact"
          style={{
            padding: 20,
            position: "absolute",
            top: "55%",
            right: "8%",
            transform: "translateY(-50%)",
            width: "20%",
          }}
        >
          <div
            className="call"
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#Be2561",
              marginBottom: "20%",
              lineHeight: "normal",
            }}
          >
            For Any Technical Issue Call{" "}
            <span className="ph">+919382637127</span>
          </div>
          <div
            className="soon"
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#808000",
              marginBottom: "20%",
              lineHeight: "normal",
            }}
          >
            We are building online exam system soon
          </div>
          <div
            style={{
              textAlign: "center",
              padding: 20,
              marginTop: -20,
              marginLeft: "-25px",
            }}
          >
            <Button variant="outlined" color="primary" className="panelButton">
              Sign Out
            </Button>
          </div>
        </div>
        <div
          className="mainContainer"
          style={{
            padding: 20,
            width: "100%",
            height: "85%",
            textAlign: "center",
          }}
        >
          {/* <BrowserRouter> */}
          <div className="dContainer" style={{ marginTop: 40, margin: 20 }}>
            <div
              className="dInnerContainer"
              style={{ display: "flex", margin: "20px", flexDirection: "row" }}
            >
              <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    className="sLink"
                    to="/teacherprofile"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "65px",
                    }}
                  >
                    Profile
                  </Link>
                </div>
              </div>
              <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={()=>setModalOpen1(true)}
                >
                  <div
                    className="mlink"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      paddingTop: "40px",
                      paddingLeft: "50px",
                      textDecoration: "none",
                      color: "blue",
                    }}
                  >
                    Query Form{" "}
                  </div>
                </div>
              </div>
              <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    cursor:"pointer"
                  }}
                  onClick={()=>setModalOpen(true)}
                >
                  <div
                    className="cLink"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "60px",
                      color:"blue"
                    }}
                  >
                    Add Note
                  </div>
                </div>
              </div>
            </div>
            <div
              className="dInnerContainer"
              style={{ display: "flex", margin: "20px", flexDirection: "row" }}
            >
              <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    className="rLink"
                    to="/teacherallnote"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                    }}
                  >
                    All Note
                  </Link>
                </div>
              </div>
              <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    className="pLink"
                    to="/teacherpayment"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                    }}
                  >
                    Payment
                  </Link>
                </div>
              </div>
              <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    className="nLink"
                    to="/teachernotification"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                    }}
                  >
                    Notification
                  </Link>
                </div>
              </div>
            </div>
            <div className="dInnerContainer" style={{ display: "flex", margin: "20px", flexDirection: "row" }}>
                <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    className="sLink"
                    to="/queryforum"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "40px",
                      paddingLeft: "65px",
                    }}
                  >
                    Query Forum
                  </Link>
                </div>
                </div>
            </div>
            
          </div>
        </div>
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
          <div className="form-group">
            <label>Note Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Subject:</label>
            <select
              type="text"
              value={subjectValue}
              onChange={(e) => setSubjectValue(e.target.value)}
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
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
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
              value={batch}
              onChange={(e) => setBatch(e.target.value)}
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
              value={courseValue}
              onChange={(e) => setCourseValue(e.target.value)}
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
        </Box>
      </Modal>

      <Modal
        open={modalOpen1}
        onClose={() => setModalOpen1(false)}
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
          <form onSubmit={handleSubmit1}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div><div className="form-group">
            <label>Phone no:</label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div><div className="form-group">
            <label>Message:</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        </Box>
      </Modal>
    </>
  );
};

export default TeacherPanel;
