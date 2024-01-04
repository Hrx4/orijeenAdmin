import { Button } from "@mui/material";
import React from "react";


const AllExpenses = () =>{
    return(
        <>
            <div className='table-scroll' style={{width:"100%", overflowX:"scroll",overflowY:"scroll", padding:10,height:"100vh"}}>
        <table >
      <thead>
      
        <tr >
        <th style={{border:"1px solid black", padding:5}}>Expense Title</th>
        <th style={{border:"1px solid black", padding:5}}>Description</th>
        <th style={{border:"1px solid black", padding:5}}>Amount</th>
        <th style={{border:"1px solid black", padding:5}}>Date</th>
        <th style={{border:"1px solid black", padding:5}}>Action</th>
      </tr>
      </thead>
      <tbody>
        <tr>
        <td style={{border:"1px solid black", padding:5}}>abcd</td>
        <td style={{border:"1px solid black", padding:5}}>abcd</td>
        <td style={{border:"1px solid black", padding:5}}>abcd</td>
        <td style={{border:"1px solid black", padding:5}}>abcd</td>
        <td style={{border:"1px solid black", padding:5}}>
        <Button variant="contained">Edit</Button>{" "}
        <Button variant="contained" color="error">Delete</Button>
        </td>
        </tr>
      </tbody>
      </table>
      </div>
        </>
    )
}

export default AllExpenses;