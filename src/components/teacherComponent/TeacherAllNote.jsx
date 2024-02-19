import React, { useEffect, useState } from "react";
import TeacherNav from "./TeacherNav";
import { Button } from "@mui/material";
import backend from "../../backend";

const TeacherAllNote = () =>{

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

  useEffect(() => {
    handleContactTable();
  }, []);

    return(
        <>
        <div>
        <TeacherNav />
               

                <h1 style={{ margin: 10 }}>Dashboard {">"} All Note</h1>
        <div
          className="table-scroll"
          style={{
            width: "80%",
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
                    // onClick={()=>CustomerModalOpen(
                    //      item._id,item.noteTitle , item.noteSubject , item.noteClass , item.noteBatch , item.noteImage , item.notePdf, item.noteCourse
                    // )}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </div>
        </>
    )
}

export default TeacherAllNote;