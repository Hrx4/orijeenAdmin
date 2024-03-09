import React, { useState, useRef, useEffect } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";

import TeacherProfile from "./TeacherProfile";
import TeacherNav from "./TeacherNav";
import TeacherQueryForm from "./TeacherQueryForm";
import TeacherAddNote from "./TeacherAddNote";
import TeacherAllNote from "./TeacherAllNote";
import TeacherPaymentForTeacherPanel from "./TaecherPayment";
import TeacherNotification from "./TeacherNotification";
import QueryForum from "../studentComponents/QueryForum";
// import SnavBar from './SnavBar';

const TeacherPanel = () => {
  const ref = useRef(null);

  const [noteView, setNoteView] = useState(
    JSON.parse(localStorage.getItem("teacherview")).noteView
  );
  const [slideOpen, setSlideOpen] = useState(false);
  const handleProfile = async () => {
    setNoteView("profile");
    localStorage.setItem(
      "teacherview",
      JSON.stringify({ noteView: "profile" })
    );
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
    localStorage.setItem(
      "teacherview",
      JSON.stringify({ noteView: "queryForm" })
    );
  };
  const handleAddNote = () => {
    setNoteView("addNote");
    localStorage.setItem(
      "teacherview",
      JSON.stringify({ noteView: "addNote" })
    );
  };
  const handleAllNote = () => {
    setNoteView("allNote");
    localStorage.setItem(
      "teacherview",
      JSON.stringify({ noteView: "allNote" })
    );
  };
  const handlePayment = () => {
    setNoteView("payment");
    localStorage.setItem(
      "teacherview",
      JSON.stringify({ noteView: "payment" })
    );
  };
  const handleNotification = () => {
    setNoteView("notification");
    localStorage.setItem(
      "teacherview",
      JSON.stringify({ noteView: "notification" })
    );
  };

  const handleQueryForum = async () => {
    setNoteView("queryForum");
    localStorage.setItem(
      "teacherview",
      JSON.stringify({ noteView: "queryForum" })
    );
  };

  useEffect(() => {
    // handleProfile();
  }, []);

  return (
    <>
      <TeacherNav />
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
            onClick={handleAddNote}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Add Note
          </div>

          <div
            onClick={handleAllNote}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ All Note
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
          >
            ▶ Query Forum
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
          {noteView === "profile" ? <TeacherProfile /> : null}
          {noteView === "queryForm" ? <TeacherQueryForm /> : null}
          {noteView === "addNote" ? <TeacherAddNote /> : null}
          {noteView === "allNote" ? <TeacherAllNote /> : null}
          {noteView === "payment" ? <TeacherPaymentForTeacherPanel /> : null}
          {noteView === "notification" ? <TeacherNotification /> : null}
          {noteView === "queryForum" ? <QueryForum /> : null}
        </div>
      </div>
    </>
  );
};

export default TeacherPanel;
