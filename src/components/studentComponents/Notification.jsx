import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Modal,
  Box,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./Notification.css";
import backend from "../../backend";
import gif from "./blink.gif";

const Notification = () => {
  const navigate = useNavigate();
  const [notificationList, setNotificationList] = useState([]);
  const x = JSON.parse(localStorage.getItem("student"));
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };
    const [des, setDes] = useState();
  const handleNotificationTable = async () => {
    try {
      const response = await fetch(`${backend}/notification/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNotificationList(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 300,
    margin: "auto",
    p: 4,
    display: "block",
    flexDirection: "column",
    justifyContent: "space-evenly",
    // border: "2px solid white",
    borderRadius: 5,
    backgroundColor: "cyan",
  };

  useEffect(() => {
    handleNotificationTable();
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
            <div
onClick={toggleBox} 
             style={{ cursor: "pointer" }}
            >
              Hi, {x?.studentName}
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
        <h1 style={{ margin: 10 }}>Dashboard {">"} Notification</h1>
        <div
          className="Nbox"
          style={{
            width: "30%",
            border: "3px solid #1976d2",
            margin: "30px",
            height: "400px",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <ul>
            {notificationList?.map((item, index) =>
              item.notificationDetails ? (
                <li
                  key={item._id}
                  onClick={() => {
                    setOpen(true);
                    setDes(item);
                  }}
                  style={{ cursor: "pointer" , display:"flex" }}
                >
                  {item.notificationTitle}
                  <div style={{ height: 30, width: 30 }}>
                        <img
                          src={gif}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                </li>
              ) : (
                <a
                  href={item?.notificationLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <li key={item._id} style={{display:"flex"}}>{item.notificationTitle}
                  <div style={{ height: 30, width: 30 }}>
                        <img
                          src={gif}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div></li>
                </a>
              )
            )}
          </ul>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h5>{des?.notificationTitle}</h5>
          <Divider style={{ backgroundColor: "black" }} />
          <div>{des?.notificationDetails}</div>
        </Box>
      </Modal>
    </>
  );
};

export default Notification;
