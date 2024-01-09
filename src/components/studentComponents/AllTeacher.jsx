import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import backend from "../../backend";

const AllTeacher = () => {
  const [teacherData, setTeacherData] = useState([]);
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

  useEffect(() => {
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
                  <Button variant="contained">Edit</Button>{" "}
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
    </>
  );
};

export default AllTeacher;
