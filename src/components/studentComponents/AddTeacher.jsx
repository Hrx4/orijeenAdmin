import React, { useState, useEffect } from "react";

const AddTeacher = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [education, setEducation] = useState();
  const [address, setAddress] = useState();
  const [salary, setSalary] = useState();
  const [doj, setDoj] = useState();
  const [classData, setClassData] = useState([]);
  const [classValue, setClassValue] = useState("");
  const [subjectData, setSubjectData] = useState([]);
  const [subjectValue, setSubjectValue] = useState("");
  const [courseData, setCourseData] = useState([]);
  const [courseValue, setCourseValue] = useState("");

  useEffect(() => {
    const fetchClassValue = async () => {
      try {
        const response = await fetch("https://orijeen-main.vercel.app/class/", {
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
        const response = await fetch(
          "https://orijeen-main.vercel.app/subject/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setSubjectData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSubjectValue();

    const fetchCourseValue = async () => {
      try {
        const response = await fetch(
          "https://orijeen-main.vercel.app/course/",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setCourseData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourseValue();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(`https://orijeen-main.vercel.app/teacher/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teacherName : name , 
            teacherAge : age, 
            teacherGender : gender, 
            teacherEducation: education , 
            teacherAddress : address , 
            teacherSalary: salary, 
            teacherDoj : doj ,
            teacherSubject : subjectValue, 
            teacherClass : classValue, 
            teacherCourse : courseValue
          })
        });
  
        const resJson = await response.json();
  alert("Teacher added")
        console.log(resJson);
      } catch (err) {
        console.log(err);
      }
}
  return (
    <>
      <div
        style={{
          marginTop: 60,
          marginBottom: 50,
          display: "flex",
          margin: "auto",
          padding: 50,
          width: 500,
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>Teacher Details:</h1>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Education:</label>
            <input
              type="text"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Base Salary:</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date Of Joining:</label>
            <input
              type="text"
              value={doj}
              onChange={(e) => setDoj(e.target.value)}
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

export default AddTeacher;
