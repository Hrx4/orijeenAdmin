import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Modal,
  Box,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./Notification.css";
import backend from "../../backend";

const Notification = () => {
  const navigate = useNavigate();
  const [notificationList, setNotificationList] = useState([]);
  const x = JSON.parse(localStorage.getItem("student"));
  const [display, setDisplay] = useState(false);
  const [open, setOpen] = useState(false);
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
              onClick={() => setDisplay((display) => !display)}
              style={{ cursor: "pointer" }}
            >
              Hi, {x?.studentName}
            </div>
          </Toolbar>
        </AppBar>
        <div
          style={{
            height: 100,
            width: "100%",
            position: "absolute",
            display: display ? "block" : "none",
          }}
        >
          <div
            style={{
              height: 100,
              width: 100,
              marginLeft: "auto",
            }}
          >
            <Button style={{ backgroundColor: "red", color: "white" }}>
              Sign Out
            </Button>
          </div>
        </div>
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
                  style={{ cursor: "pointer" }}
                >
                  {item.notificationTitle}
                </li>
              ) : (
                <a
                  href={item?.notificationLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <li key={item._id}>{item.notificationTitle}</li>
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
