import React, { useState, useRef, useEffect } from "react";
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
import NoteForm from "./components/studentComponents/NoteForm";
import NoteTable from "./components/studentComponents/NoteTable";
import AddTeacher from "./components/studentComponents/AddTeacher";
import AllTeacher from "./components/studentComponents/AllTeacher";
import TeacherPayment from "./components/studentComponents/TeacherPayment";
import AddExpenses from "./components/studentComponents/AddExpenses";
import AllExpenses from "./components/studentComponents/AllExpenses";
import AddNotification from "./AddNotification";
import AllNotification from "./AllNotification";
import QueryForum from "./components/studentComponents/QueryForum";

// import SnavBar from './SnavBar';

const SuperAdmin = () => {
  const ref = useRef(null);
  const [noteList, setNoteList] = useState([]);
  const [notificationList, setNotificationList] = useState([]);
  const [noteView, setNoteView] = useState(
    JSON.parse(localStorage.getItem("superadmin")).noteView
  );
  const [slideOpen, setSlideOpen] = useState(false);
  const [teacherPart, setTeacherPart] = useState([
    {
      id: 1,
      name: "▶ Teacher",
      isOpen: false,
      subItems: ["Add Teacher", "All Teacher"],
    },
  ]);
  const [noteItem, setNoteItem] = useState([
    {
      id: 1,
      name: "▶ Note",
      isOpen: false,
      subItems: ["Add Note", "All Note"],
    },
  ]);
  const [notificationItem, setNotificationItem] = useState([
    {
      id: 1,
      name: "▶ Notification",
      isOpen: false,
      subItems: ["Add Notification", "All Notification"],
    },
  ]);
  const [extraExpenses, setExtraExpenses] = useState([
    {
      id: 1,
      name: "▶ Extra Expenses",
      isOpen: false,
      subItems: ["Add Expenses", "All Expenses"],
    },
  ]);

  const [classManagement, setClassManagement] = useState([
    {
      id: 1,
      name: "▶ Class Management ",
      isOpen: false,
      subItems: ["Add Class", "Add Subject", "Add Courses", "Add Batch"],
    },
  ]);
  const [studentItem, setStudentItem] = useState([
    {
      id: 1,
      name: "▶ Student",
      isOpen: false,
      subItems: ["Add Student", "All Students"],
    },
  ]);

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
  const toggleNoteMenu = (itemId) => {
    setNoteItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const toggleNotificationMenu = (itemId) => {
    setNotificationItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const toggleExtraExpenses = (itemId) => {
    setExtraExpenses((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  const toggleTeacherMenu = (itemId) => {
    setTeacherPart((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const handleContactTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "contacttable" })
    );
    setNoteView("contacttable")

  };
  const handleApplyTable = async () => {
    ref.current.classList.add("slider__close");
    ref.current.classList.remove("slider__open");
    setSlideOpen(false);
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "applytable" })
    );
    setNoteView("applytable")

  };
  const handleDashboard = async () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "Dashboard" })
    );
    setNoteView("Dashboard")
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
  const handleClassForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "classForm" })
    );
    setNoteView("classForm")

  };
  const handleSubjectForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "subjectForm" })
    );
    setNoteView("subjectForm")

  };
  const handleCourseForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "courseForm" })
    );
    setNoteView("courseForm")

  };
  const handleAddStudentDetails = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "addStudentForm" })
    );
    setNoteView("addStudentForm")

  };
  const handleAllStudentDetails = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "allStudentForm" })
    );
    setNoteView("allStudentForm")

  };
  const handleStudentPaymentForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "studentPaymentForm" })
    );
    setNoteView("studentPaymentForm")

  };
  const handleStudentPaymentForm1 = async () => {
    localStorage.setItem("superadmin", JSON.stringify({ noteView: "forum" }));
    setNoteView("forum")

  };
  const handleBatchForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "batchForm" })
    );
    setNoteView("batchForm")

  };
  const handleNoteForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "addNoteForm" })
    );
    setNoteView("addNoteForm")

  };
  const handleNoteTable = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "allNoteTable" })
    );
    setNoteView("allNoteTable")

  };
  const handleNotificationForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "addNotificationForm" })
    );
    setNoteView("addNotificationForm")

  };
  const handleNotificationTable = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "allNotificationTable" })
    );
    setNoteView("allNotificationTable")

  };
  const handleAddTeacherDetails = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "addTeacher" })
    );
    setNoteView("addTeacher")
  };
  const handleAllTeacherDetails = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "allTeacher" })
    );
    setNoteView("allTeacher")

  };
  const handleTeachertPaymentForm = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "teacherPaymentForm" })
    );
    setNoteView("teacherPaymentForm")

  };
  const handleAddExtraExpenses = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "addExtraExpenses" })
    );
    setNoteView("addExtraExpenses")

  };
  const handleAllExtraExpenses = () => {
    localStorage.setItem(
      "superadmin",
      JSON.stringify({ noteView: "allExtraExpenses" })
    );
    setNoteView("allExtraExpenses")
  };

  useEffect(() => {
    // handleDashboard();
  }, []);

  return (
    <>
      <SnavBar />
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
            onClick={handleDashboard}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Dashboard
          </div>
          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {noteItem.map((noteItems) => (
                <li key={noteItems.id}>
                  <span
                    onClick={() => toggleNoteMenu(noteItems.id)}
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
                      <li onClick={handleNoteForm}>Add Note</li>
                      <li style={{ marginTop: 10 }} onClick={handleNoteTable}>
                        All Note
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {notificationItem.map((notificationItems) => (
                <li key={notificationItems.id}>
                  <span
                    onClick={() => toggleNotificationMenu(notificationItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {notificationItems.name}
                  </span>
                  {notificationItems.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li onClick={handleNotificationForm}>Add Notification</li>
                      <li
                        style={{ marginTop: 10 }}
                        onClick={handleNotificationTable}
                      >
                        All Notification
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
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
          <div style={{ paddingTop: 20 }} className="note__btn">
            <ul style={{ listStyleType: "none" }}>
              {classManagement.map((classManagementItems) => (
                <li key={classManagementItems.id}>
                  <span
                    onClick={() =>
                      toggleClassManagement(classManagementItems.id)
                    }
                    style={{ cursor: "pointer" }}
                    className="note__btn"
                  >
                    {classManagementItems.name}
                  </span>
                  {classManagementItems.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li
                        style={{ cursor: "pointer" }}
                        onClick={handleClassForm}
                      >
                        Add Class
                      </li>
                      <li
                        style={{ marginTop: 10, cursor: "pointer" }}
                        onClick={handleSubjectForm}
                      >
                        Add Subject
                      </li>
                      <li
                        style={{ marginTop: 10, cursor: "pointer" }}
                        onClick={handleCourseForm}
                      >
                        Add Courses
                      </li>
                      <li
                        style={{ marginTop: 10, cursor: "pointer" }}
                        onClick={handleBatchForm}
                      >
                        Add Batch
                      </li>
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
          <div
            style={{ paddingTop: 20, textAlign: "left", marginLeft: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {studentItem.map((studentItems) => (
                <li key={studentItems.id}>
                  <span
                    onClick={() => toggleStudentManagement(studentItems.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {studentItems.name}
                  </span>
                  {studentItems.isOpen && (
                    <ul style={{ padding: 10 }}>
                      {/* {studentItems.subItems.map((subItem) => (
                    <li onClick={handleStudentDetails} key={subItem}>{subItem}</li>
                  ))}  */}
                      <li
                        style={{ cursor: "pointer" }}
                        onClick={handleAddStudentDetails}
                      >
                        Add Student
                      </li>
                      <li
                        style={{ marginTop: 10, cursor: "pointer" }}
                        onClick={handleAllStudentDetails}
                      >
                        All Student
                      </li>
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

          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {teacherPart.map((teacherParts) => (
                <li key={teacherParts.id}>
                  <span
                    onClick={() => toggleTeacherMenu(teacherParts.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {teacherParts.name}
                  </span>
                  {teacherParts.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li onClick={handleAddTeacherDetails}>Add Teacher</li>
                      <li
                        style={{ marginTop: 10 }}
                        onClick={handleAllTeacherDetails}
                      >
                        All Teacher
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={handleTeachertPaymentForm}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            ▶ Teacher Payment
          </div>
          <div
            style={{ paddingTop: 20, cursor: "pointer", paddingBottom: 0 }}
            className="note__btn"
          >
            <ul style={{ listStyleType: "none" }}>
              {extraExpenses.map((extraExpense) => (
                <li key={extraExpense.id}>
                  <span
                    onClick={() => toggleExtraExpenses(extraExpense.id)}
                    style={{
                      cursor: "pointer",
                      fontSize: 17,
                      textAlign: "left",
                    }}
                    className="note__btn"
                  >
                    {extraExpense.name}
                  </span>
                  {extraExpense.isOpen && (
                    <ul style={{ padding: 10 }}>
                      <li onClick={handleAddExtraExpenses}>Add Expenses</li>
                      <li
                        style={{ marginTop: 10 }}
                        onClick={handleAllExtraExpenses}
                      >
                        All Expenses
                      </li>
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div
            onClick={handleStudentPaymentForm1}
            style={{ padding: 20, cursor: "pointer", paddingLeft: 30 }}
            className="note__btn"
          >
            <div style={{ textDecoration: "none", color: "black" }}>
              {" "}
              ▶ Query Forum
            </div>
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
          {noteView === "Dashboard" ? <Dashboard /> : null}
          {noteView === "contacttable" ? <ContactTable /> : null}
          {noteView === "applytable" ? <ApplyTable /> : null}
          {noteView === "classForm" ? <AddClass /> : null}
          {noteView === "addNoteForm" ? <NoteForm /> : null}
          {noteView === "allNoteTable" ? (
            <NoteTable noteList={noteList} setNoteList={setNoteList} />
          ) : null}
          {noteView === "addNotificationForm" ? <AddNotification /> : null}
          {noteView === "allNotificationTable" ? (
            <AllNotification
              notificationList={notificationList}
              setNotificationList={setNotificationList}
            />
          ) : null}
          {noteView === "subjectForm" ? <AddSubject /> : null}
          {noteView === "courseForm" ? <AddCourses /> : null}
          {noteView === "batchForm" ? <AddBatch /> : null}
          {noteView === "addStudentForm" ? <StudentForm /> : null}
          {noteView === "allStudentForm" ? <AllStudentForm /> : null}
          {noteView === "studentPaymentForm" ? <StudentPayment /> : null}
          {noteView === "addTeacher" ? <AddTeacher /> : null}
          {noteView === "allTeacher" ? <AllTeacher /> : null}
          {noteView === "teacherPaymentForm" ? <TeacherPayment /> : null}
          {noteView === "addExtraExpenses" ? <AddExpenses /> : null}
          {noteView === "allExtraExpenses" ? <AllExpenses /> : null}
          {noteView === "forum" ? <QueryForum /> : null}
        </div>
      </div>
    </>
  );
};

export default SuperAdmin;
