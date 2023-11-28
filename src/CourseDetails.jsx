import React from "react";
import {  Button } from '@mui/material'


const CourseDetails = () =>{
    return(
        <div style={{ marginTop: 150 }}>
            <div>
            <table
            style={{
              borderCollapse: "collapse",
              width: "70%",
              border: "1px solid #000",
            }}
          >
             <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ border: "1px solid #000", padding: "8px" }}>Id</th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
                <td style={{ border: "1px solid #000", padding: "8px" }}>1</td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  Pamela Roy choudhury
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                <Button style={{margin:5}} variant='contained' color='success' size='small' >
                  Edit
                </Button>
                <Button  style={{margin:5}} variant='contained' color='error' size='small' >
                  Delete
                </Button>
                </td>
              </tr>
            </tbody>
          </table>
            </div>
        </div>
    )
}

export default CourseDetails;