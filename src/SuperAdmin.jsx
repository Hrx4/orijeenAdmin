import React, { useState, useRef } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";

import ContactTable from "./ContactTable";

import ApplyTable from "./ApplyTable";
import SnavBar from "./SnavBar";

// import SnavBar from './SnavBar';

const SuperAdmin = () => {
  const ref = useRef(null);
  const [contactList, setContactList] = useState([]);
  const [applyList, setApplyList] = useState([]);
  const [noteView, setNoteView] = useState("noteform");
  const [slideOpen, setSlideOpen] = useState(false);

  const handleContactTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    setNoteView("contacttable");

    try {
      const response = await fetch(`https://orijeen-main.vercel.app/contact/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setContactList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleApplyTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    setNoteView("applytable");

    try {
      const response = await fetch(`https://orijeen-main.vercel.app/apply/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setApplyList(resJson);
        console.log("====================================");
        console.log(resJson);
        console.log("====================================");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
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

  return (
    <>
      <SnavBar />
      <div
        className="super-container"
        style={{
          display: "flex",
          backgroundColor: "white",
          color: "black",
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
            onClick={handleContactTable}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Query Details
          </div>
          <div
            onClick={handleApplyTable}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Apply Details
          </div>
        </div>

        {noteView === "contacttable" ? (
          <ContactTable
            contactList={contactList}
            setContactList={setContactList}
          />
        ) : null}
        {noteView === "applytable" ? (
          <ApplyTable applyList={applyList} setApplyList={setApplyList} />
        ) : null}
      </div>
    </>
  );
};

export default SuperAdmin;
