import React from "react";
import {Box } from "@mui/material";


const QueryForm = () =>{
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
            <h1>Query Form</h1>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
            />
          </div><div className="form-group">
            <label>Phone no:</label>
            <input
              type="number"
            />
          </div><div className="form-group">
            <label>Message:</label>
            <input
              type="text"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        </Box>
        </div>

        </>
    )
}

export default QueryForm;