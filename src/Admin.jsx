import { Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Admin.css";
import { useState } from "react";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backend from "./backend";

// import SuperAdmin from "./SuperAdmin";
// import Navbar from '../Navbar/Navbar'

const Admin = () => {
  const navigate = useNavigate();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 200,
    margin: "auto",
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // border: "2px solid white",
    borderRadius: 5,
    backgroundColor: "cyan",
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [path, setPath] = useState("");
  const handleOpen = () => {
    setPath("/superadmin/");
    setOpen(true);
  };
  const handleStudentOpen = () => {
    setOpen(true);
    setPath("/student/details/");
  };
  const handleTeacherOpen = () => {
    setOpen(true);
    setPath("/teacher/all/details/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    // const d = new Date();
    // Handle form submission here (e.g., send the data to the server)

    try {
      let res = null;
      if (path !== "/teacher/all/details/") {
        res = await fetch(`${backend}${path}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: username,
            password: password,
          }),
        });
      } else {
        res = await fetch(`${backend}${path}`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
      }

      let resJson = await res.json();
      console.log(resJson.data);
      if (res.status === 200) {
        console.log("fine");

        toast.success(resJson.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        if (path === "/student/details/") {
          localStorage.setItem("student", JSON.stringify(resJson.data));
          navigate("/student");
        } else if (path === "/teacher/all/details/") {
          localStorage.setItem("teacher", JSON.stringify(resJson.data));
          navigate("/teacher");
        } else {
          navigate(path);
        }
      } else {
        toast.error(resJson.message, {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Some error occured");
      }
    } catch (err) {
      toast.error("All field fill required", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }

    // setLoading(false)
  };

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
          paddingTop: 110,
          paddingBottom: 110,
        }}
      >
        <div
          className="admin__row"
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <div
            className="admin__card"
            style={{
              height: 200,
              borderRadius: 10,
              // backgroundColor: "#f0fbfc",
              // color: "black",
              fontSize: 20,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleOpen}
          >
            Super Admin
          </div>
          <div
            className="admin__card"
            style={{
              height: 200,
              borderRadius: 10,
              fontSize: 20,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleStudentOpen}
          >
            Student
          </div>
          <div
            className="admin__card"
            style={{
              height: 200,
              borderRadius: 10,
              fontSize: 20,
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleTeacherOpen}
          >
            Teacher
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {path !== "/teacher/all/details/" ? (
            path === "/superadmin/" ?
            (<input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="username"
              type="text"
              placeholder="UserName"
              style={{ height: 30 }}
            />)
            :
            (<input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="username"
              type="text"
              placeholder="Enrollment No"
              style={{ height: 30 }}
            />)
          ) : (
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="email"
              type="text"
              placeholder="Email"
              style={{ height: 30 }}
            />
          )}
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            type="password"
            placeholder="Password"
            style={{ height: 30 }}
          />

          <button
            style={{
              backgroundColor: "blue",
              height: 40,
              width: 70,
              color: "white",
              border: "none",
              borderRadius: 3,
              fontStyle: "normal",
              fontWeight: "bold",
            }}
            onClick={handleSubmit}
          >
            Login
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default Admin;
