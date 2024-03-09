import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Divider,
} from "@mui/material";
import "./Notification.css";
import backend from "../../backend";
import gif from "./blink.gif";

const Notification = () => {
  const [notificationList, setNotificationList] = useState([]);
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
    border: "1px solid cyan",
    backgroundColor: "white",
  };

  useEffect(() => {
    handleNotificationTable();
  }, []);

  return (
    <>
      <div style={{width:"100%"}}>
        
      
        <h1 style={{ margin: 10 }}> Notification</h1>
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
          <ul style={{}}>
            {notificationList?.map((item, index) =>
              item.notificationDetails ? (
                <li
                  
                >
                  <div key={item._id}
                  onClick={() => {
                    setOpen(true);
                    setDes(item);
                  }}
                  style={{ cursor: "pointer", display: "flex" }}>
                    {item.notificationTitle}
                    <div style={{ height: 30, width: 30 }}>
                      <img
                        src={gif}
                        alt=""
                        style={{ height: "100%", width: "100%" }}
                      />
                    </div>
                  </div>
                </li>
              ) : (
                <li>
                  <a
                    href={item?.notificationLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div key={item._id} style={{ display: "flex" }}>
                      {item.notificationTitle}
                      <div style={{ height: 30, width: 30 }}>
                        <img
                          src={gif}
                          alt=""
                          style={{ height: "100%", width: "100%" }}
                        />
                      </div>
                    </div>
                  </a>
                </li>
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
