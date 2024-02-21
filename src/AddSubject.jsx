import React, { useEffect, useState } from "react";
import "./AddSubject.css";
import SubjectDetails from "./SubjectDetails";
import backend from './backend'

const AddSubject = () => {
  const [subjectDetails, setSubjectDetails] = useState("");
  const [subjectList, setSubjectList] = useState([]);
  const [check, setCheck] = useState(false);
  const handleSubjectDetails = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend}/subject/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subjectName: subjectDetails,
        }),
      });

      const resJson = await response.json();

      console.log(resJson);
      setCheck(!check);
      alert("Subject Added")
        setSubjectDetails("")
    } catch (err) {
      console.log(err);
    }
  };

  const getList = async () => {
    try {
      const response = await fetch(`${backend}/subject/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      console.log(resJson);
      setSubjectList(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, [check]);

  return (
    <div style={{ marginTop: 40, margin: 20, width: "100%" }}>
      <h1 className="dHeading" style={{ marginLeft: 15 }}>
        Add Subject
      </h1>
      <form
        style={{ marginLeft: 10, width: "20%" }}
        onSubmit={handleSubjectDetails}
      >
        <input
          style={{ height: 50 }}
          type="text"
          placeholder="Enter Your Subject"
          value={subjectDetails}
          onChange={(e) => setSubjectDetails(e.target.value)}
        />

        <button style={{ marginTop: 10 }}>Submit</button>
      </form>

      {<SubjectDetails subjectList={subjectList} />}
    </div>
  );
};

export default AddSubject;
