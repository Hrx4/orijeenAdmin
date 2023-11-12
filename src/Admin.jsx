import { Box, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Admin.css";
import { useState } from "react";
import Navbar from "./Navbar";
// import Navbar from '../Navbar/Navbar'

const Admin = () => {
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
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
            onClick={handleOpen}
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
            onClick={handleOpen}
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
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="username"
            type="text"
            placeholder="UserName"
            style={{ height: 30 }}
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id="password"
            type="text"
            placeholder="Password"
            style={{ height: 30 }}
          />
          {username === "username" && password === "password" ? (
            <Link
              to={"/superadmin"}
              style={{
                backgroundColor: "blue",
                height: 30,
                width: 70,
                color: "white",
                border: "none",
                borderRadius: 3,
                textDecoration: "none",
                textAlign: "center",
                fontStyle: "normal",
                fontWeight: "bold",
              }}
            >
              Login
            </Link>
          ) : (
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
            >
              Login
            </button>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Admin;
