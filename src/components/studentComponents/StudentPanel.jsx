import React, { useState,useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography
  
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";


import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./StudentPanel.css";
import { useNavigate } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import QueryForm from "./QueryForm";
import Payment from "./Payment";
import Notification from "./Notification";
import QueryForum from "./QueryForum";

const StudentPanel = () => {
  const navigate = useNavigate();
  const [classNote, setClassNote] = useState([ {
    id: 1,
    name: "▶ Class Note",
    isOpen: false,
    subItems: ["Basic", "Advance"],
  },]);
  const x = JSON.parse(localStorage.getItem("student"));
  const [isOpen, setIsOpen] = useState(false);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef(null);

  const [noteView, setNoteView] = useState("Dashboard");
  const [slideOpen, setSlideOpen] = useState(false);
  const [questionList, setQuestionList] = useState([]);

  const toggleClassNote = (itemId) => {
    setClassNote((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const handleProfile = async () => {
      setNoteView("profile");
      ref.current.classList.add("slider__close");
      ref.current.classList.remove("slider__open");
      setSlideOpen(false);
    };
    const btnclicked = () => {
      if (!slideOpen) {
        ref.current.classList.remove("slider__close");
        ref.current.classList.add("slider__open");
        setSlideOpen(true);
      } else {
        ref.current.classList.add("slider__close");
        ref.current.classList.remove("slider__open");
        setSlideOpen(false);
      }
    };
    const handleQueryForm = () => {
      setNoteView("queryForm");
    };
    const handleResult = () => {
      setNoteView("result");
    };
    const handleAllNote = () => {
      setNoteView("allNote");
    };
    const handlePayment = () => {
      setNoteView("payment");
    };
    const handleNotification = () => {
      setNoteView("notification");
    };
    const handleQueryForum = () => {
      setNoteView("queryForum");
    };

    useEffect(() => {
      handleProfile();
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

<div
          className="super-container"
          style={{
            display: "flex",
            backgroundColor: "white",
            color: "black",
            height: "100vh",
          }}
        >
          <button
            className="hide__btn"
            style={{ position: "absolute", marginTop: 5 }}
            onClick={btnclicked}
          >
            {!slideOpen ? (
              <DoubleArrowIcon fontSize="small" />
            ) : (
              <ClearIcon fontSize="small" />
            )}
          </button>
          <div
            ref={ref}
            id="super-choose"
            className="super-choose"
            style={{ display: "flex", overflowY: "scroll" }}
          >
            <div
              onClick={handleProfile}
              style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
              className="note__btn"
            >
              ▶ Profile
            </div>
            <div
              onClick={handleQueryForm}
              style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
              className="note__btn"
            >
              ▶ Query Form
            </div>
            <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {classNote.map((noteItems) => (
                <li key={noteItems.id}>
                  <span
                    onClick={() => toggleClassNote(noteItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {noteItems.name}
                  </span>
                  {noteItems.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li >Basic</li>
                      <li style={{ marginTop: 10 }} >
                        Advance
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

            <div
              onClick={handleResult}
              style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
              className="note__btn"
            >
              ▶ Result
            </div>

            <div
              onClick={handlePayment}
              style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
              className="note__btn"
            >
              ▶ Payment
            </div>
           
            <div
              onClick={handleNotification}
              style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
              className="note__btn"
            >
              ▶ Notification
            </div>
            <div
              onClick={handleQueryForum}
              style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
              className="note__btn"
            >▶ Query Forum
            </div>

          </div>
          <div
            style={{
              height: "98%",
              width: "100%",
              display: "flex",
              marginBottom: 20,
              overflowY: "scroll",
            }}
          >
            {noteView === "profile" ? (
              <StudentProfile />
            ) : null}
            {noteView === "queryForm" ? (
              <QueryForm/>
            ) : null}
            {noteView === "payment" ? <Payment /> : null}
            {noteView === "notification" ? (
              <Notification/> 
            ) : null}
           {noteView === "queryForum" ? <QueryForum questionList={questionList} setQuestionList={setQuestionList} /> : null}
    

          </div>
        </div>
        </div>
    </>
  );
};

export default StudentPanel;
