import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';


const TeacherNav = () =>{
    const navigate = useNavigate();
    const [details, setDetails] = useState({});
    const [display, setDisplay] = useState(false)

  useEffect(() => {
    setDetails(JSON.parse(localStorage.getItem("teacher")));
  }, []);
    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="back" >
                        <ArrowBackIcon onClick={() => navigate(-1)} />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <img
            src="https://orijeen.in/img/logoOrijeen.png"
            alt="orijeen logo"
            style={{
              width: "150px",
              height: "auto",
              position: "absolute",
              top: "-40px",
              left: "50px",
            }}
          />
                    </Typography>
                    <div onClick={()=>setDisplay((display)=>!display)} style={{cursor:"pointer"}} >Hi, {details?.teacherName}</div>
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
            <Button style={{backgroundColor:"red" , color:"white"}} onClick={() => navigate("/")}>Sign Out</Button>
          </div>
        </div>
        </>
    )
}

export default TeacherNav;