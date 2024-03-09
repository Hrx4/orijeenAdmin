import React from "react";
import {Box } from "@mui/material";

const TeacherAddNote = () =>{
    return(
        <>
        <div style={{width:"100%"}}>
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
          <form >
            <h1>Add Note</h1>
          <div className="form-group">
            <label>Note Title:</label>
            <input
              type="text"
            />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Subject:</label>
            <select
              type="text"
            >
              <option value="" selected disabled>
                Select Your Subject
              </option>
              
                <option >
                  Pamela
                </option>
              
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Class:</label>
            <select
              type="text"
            >
              <option value="" selected disabled>
                Select Your Class
              </option>
              
                <option >
                  Pamela
                </option>
              
            </select>
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Batch:</label>
            <select
              type="text"
            >
<option value="" selected disabled>
                Select Your Batch
              </option>
                <option >
                  Pamela
                </option>
              
            </select>
          </div>

          <div className="form-group">
            <label>Upload File:</label>
            <input type="file" accept=".pdf"  />
          </div>

          <div className="form-group">
            <label style={{ marginRight: 10 }}>Course:</label>
            <select
              type="text"
            >
              <option value="" selected disabled>
                Select Your Course
              </option>
                <option>
                    Pamela
                </option>
              
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
        </Box>
        </div>

        </>
    )
}

export default TeacherAddNote;