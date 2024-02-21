import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import backend from './backend'


const AddCourses = () => {
  const [courseDetails, setCourseDetails] = useState("");
  const [courseList, setCourseList] = useState([]);
  const [check, setCheck] = useState(false);
  const handleCourseDetails = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend}/course/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName: courseDetails,
        }),
      });

      const resJson = await response.json();

      console.log(resJson);
      setCheck(!check);
      alert("Course Added")
        setCourseDetails("")
    } catch (err) {
      console.log(err);
    }
  };

  const getList = async () => {
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
    getList();
  }, [check]);

  return (
    <div style={{ marginTop: 40, margin: 20, width: "100%" }}>
      <h1 className="dHeading" style={{ marginLeft: 15 }}>
        Add Course
      </h1>
      <form
        style={{ marginLeft: 10, width: "20%" }}
        onSubmit={handleCourseDetails}
      >
        <input
          style={{ height: 50 }}
          type="text"
          placeholder="Enter Your Course"
          value={courseDetails}
          onChange={(e) => setCourseDetails(e.target.value)}
        />

        <button style={{ marginTop: 10 }}>Submit</button>
      </form>

      {<CourseDetails courseList={courseList} />}
    </div>
  );
};

export default AddCourses;
