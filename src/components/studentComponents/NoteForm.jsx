import React, { useState, useEffect } from "react";
import "./Form.css";
import { CircularProgress } from "@mui/material";
import backend from "../../backend"
const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [classData, setClassData] = useState([]);
  const [classValue, setClassValue] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [subjectValue, setSubjectValue] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [courseValue, setCourseValue] = useState("");
  const [batch, setBatch] = useState("");
  const [pdf, setPdf] = useState("");
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

    const fetchBatchValue = async () => {
      try {
        const response = await fetch(`${backend}/batch/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setBatchData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBatchValue();
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
  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <div
        className="form-container"
        style={{ marginTop: 60, marginBottom: 50 }}
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
              <option value="" selected disabled>
                Select Your batch
              </option>
              {batchData?.map((item) => (
                <option key={item?.id} value={item?.value}>
                  {item?.batchName}
                </option>
              ))}
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
      </div>
    </>
  );
};

export default NoteForm;
