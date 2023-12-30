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
import AddBatch from "./AddBatch";
import AllStudentForm from "./AllStudentForm";

// import SnavBar from './SnavBar';

const SuperAdmin = () => {
  const ref = useRef(null);
  const [contactList, setContactList] = useState([]);
  const [applyList, setApplyList] = useState([]);
  const [noteView, setNoteView] = useState("noteform");
  const [slideOpen, setSlideOpen] = useState(false);
  const [classManagement, setClassManagement] = useState([{ id: 1, name: '▶ Class Management ', isOpen: false, subItems: ['Add Class', 'Add Subject', 'Add Courses', 'Add Batch'] }]);
  const [studentItem, setStudentItem] = useState([ { id: 1, name: '▶ Student', isOpen: false, subItems: ['Add Student', 'All Students'] } ])
  const [income, setIncome] = useState([]);

  const toggleClassManagement = (itemId) => {
    setClassManagement((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const toggleStudentManagement = (itemId) => {
    setStudentItem((prevItems) =>
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
  const handleDashboard = async () => {
    setNoteView("Dashboard");
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);

    try {
      const response = await fetch(`http://localhost:8080/student/getpayment/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setIncome(resJson);
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
  const handleClassForm = () => {
    setNoteView('classForm');
  }
  const handleSubjectForm = () => {
    setNoteView('subjectForm');
  }
  const handleCourseForm = () => {
    setNoteView('courseForm');
  }
  const handleAddStudentDetails = () => {
    setNoteView('addStudentForm');
  }
  const handleAllStudentDetails = () => {
    setNoteView('allStudentForm');
  }
  const handleStudentPaymentForm = () => {
    setNoteView('studentPaymentForm');
  }
  const handleBatchForm = () => {
    setNoteView('batchForm');
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
                      <li style={{ marginTop: 10, cursor: "pointer" }} onClick={handleCourseForm}>Add Courses</li>
                      <li style={{ marginTop: 10, cursor: "pointer" }} onClick={handleBatchForm}>Add Batch</li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>

          </div>
          {/* <div
            onClick={handleStudentForm}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Student
          </div> */}
          <div style={{paddingTop:20, textAlign:'left', marginLeft:0}} className='note__btn'>
        <ul style={{listStyleType: 'none'}}>
          {studentItem.map((studentItems) => (
            <li key={studentItems.id}>
              <span
                onClick={() => toggleStudentManagement(studentItems.id)}
                style={{cursor: 'pointer', fontSize:17, textAlign:'left' }} className='note__btn'
              >
                {studentItems.name}
              </span>
              {studentItems.isOpen && (
                <ul style={{padding:10}}>
                   {/* {studentItems.subItems.map((subItem) => (
                    <li onClick={handleStudentDetails} key={subItem}>{subItem}</li>
                  ))}  */}
                  <li style={{cursor:'pointer'}} onClick={handleAddStudentDetails}>Add Student</li>
                  <li style={{marginTop:10, cursor:'pointer'}} onClick={handleAllStudentDetails}>All Student</li>
                </ul>
              )}
            </li>
          ))}
        </ul>
     
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
        <Dashboard income={income} />
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
      {noteView === "batchForm" ? (
        <AddBatch />
      ) : null}
      {noteView === "addStudentForm" ? (
        <StudentForm />
      ) : null}
      {noteView === "allStudentForm" ? (
        <AllStudentForm />
      ) : null}
      {noteView === "studentPaymentForm" ? (
        <StudentPayment />
      ) : null}
    </div>
    </>
  );
};

export default SuperAdmin;
