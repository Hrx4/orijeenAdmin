import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const TeacherNav = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  // const [display, setDisplay] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    setDetails(JSON.parse(localStorage.getItem("teacher")));
  }, []);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back">
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
          <div onClick={toggleBox} style={{ cursor: "pointer" }}>
            Hi, {details?.teacherName}
          </div>
        </Toolbar>
      </AppBar>
     
      {isOpen && (
        <div
          className="navBox"
          style={{
            maxHeight: 400,
            width: 300,
            position: "absolute",
            right: "3%",
            backgroundColor: "white",
            borderRadius:10,
            border:"1px solid blue",
            overflowY: "scroll",
            zIndex: 200,
          }}
        >
          <div
            style={{
              width: 100,
              height: 150,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://orijeen.in/img/logoOrijeen.png"
              alt="Logo"
              style={{ height: "100%", marginLeft: "190px" }}
            />
          </div>
          <button onClick={() => navigate("/")}>Sign Out</button>
        </div>
      )}
    </>
  );
};

export default TeacherNav;
