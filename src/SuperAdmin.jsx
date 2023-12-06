import React, { useState, useRef } from "react";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ClearIcon from "@mui/icons-material/Clear";

import ContactTable from "./ContactTable";

import ApplyTable from "./ApplyTable";
import SnavBar from "./SnavBar";
import Dashboard from "./Dashboard";
import AddClass from "./AddClass";
import AddSubject from "./AddSubject";
import AddCourses from "./AddCourses";
import StudentForm from "./StudentForm";
import StudentPayment from "./StudentPayment";

// import SnavBar from './SnavBar';

const SuperAdmin = () => {
  const ref = useRef(null);
  const [contactList, setContactList] = useState([]);
  const [applyList, setApplyList] = useState([]);
  const [noteView, setNoteView] = useState("noteform");
  const [slideOpen, setSlideOpen] = useState(false);
  const [classManagement, setClassManagement] = useState([{ id: 1, name: '▶ Class Management ', isOpen: false, subItems: ['Add Class', 'Add Subject', 'Add Courses'] }]);

  const toggleClassManagement = (itemId) => {
    setClassManagement((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

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
  const handleDashboard = () => {
    setNoteView('Dashboard');
  }

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
  const handleClassForm = () => {
    setNoteView('classForm');
  }
  const handleSubjectForm = () => {
    setNoteView('subjectForm');
  }
  const handleCoursetForm = () => {
    setNoteView('courseForm');
  }
  const handleStudentForm = () => {
    setNoteView('studentForm');
  }
  const handleStudentPaymentForm = () => {
    setNoteView('studentPaymentForm');
  }


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
            onClick={handleDashboard}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Dashboard
          </div>
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
          <div style={{ paddingTop: 20 }} className='note__btn'>
            <ul style={{ listStyleType: 'none' }}>
              {classManagement.map((classManagementItems) => (
                <li key={classManagementItems.id}>
                  <span
                    onClick={() => toggleClassManagement(classManagementItems.id)}
                    style={{ cursor: 'pointer' }} className='note__btn'
                  >
                    {classManagementItems.name}
                  </span>
                  {classManagementItems.isOpen && (
                    <ul style={{ padding: 10 }}>

                      <li style={{ cursor: "pointer" }} onClick={handleClassForm}>Add Class</li>
                      <li style={{ marginTop: 10, cursor: "pointer" }} onClick={handleSubjectForm}>Add Subject</li>
                      <li style={{ marginTop: 10, cursor: "pointer" }} onClick={handleCoursetForm}>Add Courses</li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>

          </div>
          <div
            onClick={handleStudentForm}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Student
          </div>
          <div
            onClick={handleStudentPaymentForm}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Student Payment
          </div>
        

      </div>
      {noteView === "Dashboard" ? (
        <Dashboard />
      ) : null}
      {noteView === "contacttable" ? (
        <ContactTable
          contactList={contactList}
          setContactList={setContactList}
        />
      ) : null}
      {noteView === "applytable" ? (
        <ApplyTable applyList={applyList} setApplyList={setApplyList} />
      ) : null}
      {noteView === "classForm" ? (
        <AddClass />
      ) : null}
      {noteView === "subjectForm" ? (
        <AddSubject />
      ) : null}
      {noteView === "courseForm" ? (
        <AddCourses />
      ) : null}
      {noteView === "studentForm" ? (
        <StudentForm />
      ) : null}
      {noteView === "studentPaymentForm" ? (
        <StudentPayment />
      ) : null}
    </div>
    </>
  );
};

export default SuperAdmin;
