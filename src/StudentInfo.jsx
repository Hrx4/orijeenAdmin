import React from "react";
import backend from './backend'


const StudentInfo = ({ studentList, setStudentList }) => {
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

  return (
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
              <button>Edit</button>
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
  );
};

export default StudentInfo;
