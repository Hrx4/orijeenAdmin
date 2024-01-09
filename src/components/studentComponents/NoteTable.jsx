import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import "./Form.css";
import "./Table.css";
import backend from "../../backend";

const NoteTable = (props) => {
  // const [title, setTitle] = useState('');
  // const [subject, setSubject] = useState('');
  // const [classValue, setClassValue] = useState('');
  // const [batch, setBatch] = useState('');
  // const [image, setImage] = useState('');
  // const [pdf, setPdf] = useState('');
  // const [course, setCourse] = useState('');
  // const [modal, setModal] = useState(false);
  // const [updateId, setUpdateId] = useState("");
  // const [loading, setLoading] = useState(false)

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

  // const handleCustomerClose = () => setModal(false);

  // const CustomerModalOpen = (id , noteTitle , noteSubject , noteClass , noteBatch , noteImage , notePdf, noteCourse) => {
  //     const key = id
  //     setUpdateId(key);
  //     setTitle(noteTitle)
  //     setSubject(noteSubject)
  //     setClassValue(noteClass)
  //     setBatch(noteBatch)
  //     setImage(noteImage)
  //     setPdf(notePdf)
  //     setCourse(noteCourse)

  //     setModal(true)

  //   };

  // const updateList = async (e) => {
  //   e.preventDefault();
  // }
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

      {/* <Modal
        open={modal}
        onClose={handleCustomerClose}
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
              <form onSubmit={updateList} >
                <div className="form-group">
                  <label>Title:</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                  <label style={{marginRight:10}}>Subject:</label>
                  <select type="text" value={subject} onChange={(e) => setSubject(e.target.value)} >
                    <option value="Math">Math</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{marginRight:10}}>Class:</label>
                  <select  type="text" value={classValue} onChange={(e) => setClassValue(e.target.value)}>
                    <option value="Class XI">Class XI</option>
                    <option value="Class XII">Class XII</option>
                  </select>
                </div>

                <div className="form-group">
                  <label style={{marginRight:10}}>Batch:</label>
                  <select type="text" value={batch} onChange={(e) => setBatch(e.target.value)}>
                    <option value="Batch 1">Batch 1</option>
                    <option value="Batch 2">Batch 2</option>
                    <option value="Batch 3">Batch 3</option>

                  </select>
                </div>

                <div className="form-group">
                  <label>Image:</label>
                  <input type="file" accept="image/*" />
                </div>

                <div className="form-group">
                  <label>PDF:</label>
                  <input type="file" accept=".pdf" />
                </div>

                <div className="form-group">
                  <label  style={{marginRight:10}}>Course:</label>
                  <select type="text" value={course} onChange={(e) => setCourse(e.target.value)}>
                    <option value="JEE Main">JEE Main</option>
                    <option value="WBJEE">WBJEE</option>
                  </select>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>

          </Box>
        </Modal> */}
    </>
  );
};

export default NoteTable;
