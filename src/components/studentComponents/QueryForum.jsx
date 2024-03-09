import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import AnsPage from "../../AnsPage";
import { Modal, Button, CircularProgress } from "@mui/material";
import { Box } from "@mui/material";
import backend from "../../backend";

const QueryForum = () => {
  const [close, setClose] = useState(true);
  const [classData, setClassData] = useState([]);
  const [classValue, setClassValue] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [subjectValue, setSubjectValue] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [courseValue, setCourseValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState("");
  const [answerList, setAnswerList] = useState([]);
  const [answerId, setAnswerId] = useState("");
  const [itemDetails, setItemDetails] = useState({});
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    const handleStudentPaymentForm1 = async () => {
      try {
        const response = await fetch(`${backend}/answer/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
  
        const resJson = await response.json();
  
        if (response.status === 200) {
          setQuestionList(resJson);
          console.log("====================================");
          console.log(resJson);
          console.log("====================================");
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleStudentPaymentForm1()
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
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
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
        if (files[0].type === "image/jpeg" || files[0].type === "image/png")
          setPhoto(data.url);
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
      const res = await fetch(`${backend}/answer/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          position: position,
          classs: classValue,
          subject: subjectValue,
          course: courseValue,
          title: title,
          description: description,
          photo: photo,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");

        alert("form submitted");
        setClassValue("");
        setCourseValue("");
        setSubjectValue("");
        setOpen(false);
      } else {
        alert("all field required");
        console.log("Some error occured");
      }
    } catch (err) {
      alert("all field required");
      window.location.reload(true);
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
      {close ? (
        <div style={{ width: "100%" }}>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Query Forum
          </h2>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
              marginTop: 20,
            }}
          ></div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 10,
              padding: 10,
            }}
          >
            <h4 style={{ padding: 10 }}>Questions</h4>
            <button
              onClick={() => {
                setOpen(true);
              }}
            >
              Post Question
            </button>
          </div>

          <ul style={{ gap: 10, display: "flex", flexDirection: "column" }}>
            {questionList?.map((item, index) => (
              <li
                style={{
                  width: "90%",
                  border: "1px solid black",
                  padding: 10,
                  borderRadius: 10,
                }}
                key={item._id}
              >
                <div
                  style={{
                    textDecoration: "none",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setItemDetails(item);
                    setAnswerId(item._id);
                    setAnswerList(item.answers);
                    setClose(!close);
                  }}
                >
                  {item.title}
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      backgroundColor: "black",
                      marginTop: 20,
                    }}
                  ></div>
                  Posted By : <FaUserCircle /> {item.name}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <AnsPage
          close={close}
          setClose={setClose}
          answerList={answerList}
          setAnswerList={setAnswerList}
          answerId={answerId}
          setAnswerId={setAnswerId}
          itemDetails={itemDetails}
          setItemDetails={setItemDetails}
        />
      )}

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
          className="forum-modal"
        >
          <form>
            <label for="name">Name: *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              style={{ marginBottom: 10 }}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              for="positionDropdown"
              style={{ margin: "10px", marginLeft: "0px" }}
            >
              Position: *
            </label>
            <select
              id="positionDropdown"
              required
              style={{ marginBottom: 10 }}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="" selected disabled>
                Select Your Position
              </option>
              <option value="superAdmin">Super admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            <br />
            <label style={{ marginRight: 10 }}>Subject:</label>
            <select
              type="text"
              value={subjectValue}
              onChange={(e) => setSubjectValue(e.target.value)}
              style={{ marginBottom: 10 }}
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
            <br />
            <label style={{ marginTop: 10, marginRight: 10 }}>Class:</label>
            <select
              type="text"
              value={classValue}
              onChange={(e) => setClassValue(e.target.value)}
              style={{ marginBottom: 10 }}
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
            <br />
            <label style={{ marginTop: 10, marginRight: 10 }}>Course:</label>
            <select
              type="text"
              value={courseValue}
              onChange={(e) => setCourseValue(e.target.value)}
              style={{ marginBottom: 10 }}
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
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Question Title *"
              required
              style={{ marginTop: 10 }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              id="questionDescription"
              name="questionDescription"
              rows="4"
              cols="37"
              placeholder="Your Question Description *"
              style={{ marginTop: 10 }}
              required
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br />
            <label for="profilePicture" style={{ marginTop: 10 }}>
              Upload Your Question picture:
            </label>
            <input
              type="file"
              id="questionPicture"
              name="questionPicture"
              accept="image/*"
              onChange={uploadFiles}
            />
            <Button
              variant="contained"
              style={{ marginTop: "15px", textTransform: "capitalize" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default QueryForum;
