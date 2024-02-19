import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from 'react-router-dom';
import './Table.css';
import './Classnote.css';




const Course1 = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const {noteList} = state 
    const x = JSON.parse(localStorage.getItem("student"));
    const [display, setDisplay] = useState(false)


      
    return (
        <>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="back" >
                            <ArrowBackIcon onClick={() => navigate(-1)} />
                        </IconButton>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Logo
                        </Typography>
                        <div onClick={()=>setDisplay((display)=>!display)} style={{cursor:"pointer"}} >Hi, {x?.studentName}</div>

                    </Toolbar>
                </AppBar>
                <div
          style={{
            height: 100,
            width: "100%",
            position: "absolute",
            display : (display ? "block" : "none")
          }}
        >
          <div
            style={{
              height: 100,
              width: 100,
              marginLeft: "auto",
            }}
          >
            <Button style={{backgroundColor:"red" , color:"white"}}>Sign Out</Button>
          </div>
        </div>
                
                <h1 style={{margin:10}}>Dashboard {'>'} Class Note{' > '}Course 1</h1>
                <table className="sdtable" style={{ width: "60%", overflowX: "scroll", overflowY: "scroll", height: "50vh", border: "none", marginLeft: "10px" }}>
                    <thead>
                        <tr style={{border:"2px solid black"}}>
                            <th style={{border:"2px solid black", padding:10, margin:0, fontWeight:"bold"}}>Note Name</th>
                            <th style={{border:"2px solid black", padding:10, margin:0, fontWeight:"bold"}}>Class</th>
                            <th style={{border:"2px solid black", padding:10, margin:0, fontWeight:"bold"}}>Sub</th>
                            <th style={{border:"2px solid black", padding:10, margin:0, fontWeight:"bold"}}>Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            noteList?.map((item , index)=>(
                                <tr>
                            <td style={{border:"2px solid black", padding:10}}>{item.noteTitle}</td>
                            <td style={{border:"2px solid black", padding:10}}>{item.noteClass}</td>
                            <td style={{border:"2px solid black", padding:10}}>{item.noteSubject}</td>
                            <td style={{border:"2px solid black", padding:10}}><button  className=" dlB"
                            component="label" variant="contained"
                            >
                                <a href={item.notePdf} style={{ color:"white"}} download={true}>Download</a>
                            </button></td>
                        </tr>
                            ))
                        }
                       
                    </tbody>
                </table>
            </div>
        </>
    )
}


export default Course1;