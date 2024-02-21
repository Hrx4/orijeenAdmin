import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./Classnote.css";
import backend from "../../backend";

const ClassNote = () => {
  const [course, setCourse] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  const x = JSON.parse(localStorage.getItem("student"));


  const handleNote = async (route) => {
    try {
      const response = await fetch(`${backend}/note/student/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          noteCourse: route,
          noteClass: x.studentClass,
          noteBatch: x.studentBatch,
        }),
      });

      const resJson = await response.json();
      navigate(`/course1/${route}`, { state: { noteList: resJson } });
      if (response.status === 200) {
        console.log(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  
  useEffect(() => {
    setCourse(JSON.parse(localStorage.getItem("student")).studentCourse);
  }, []);

  return (
    <>
      <div>
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
            <div onClick={toggleBox} style={{cursor:"pointer"}} >Hi, {x?.studentName}</div>
            
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
       
        <h1 style={{ margin: 10 }}>Dashboard {">"} Class Note</h1>
        <div className="dContainer" style={{ marginTop: 40, margin: 20 }}>
          <div
            className="dInnerContainer"
            style={{ display: "flex", margin: "20px", flexDirection: "row" }}
          >
            {course?.map((item, index) => (
              <div key={index} className="dBox" style={{ cursor: "pointer" }}>
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="crLink"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "85px",
                    }}
                    onClick={() => {
                      handleNote(item);
                    }}
                  >
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassNote;
