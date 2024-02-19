import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import './Notification.css';
import backend from "../../backend";


const Notification = () => {
    const navigate = useNavigate();
    const [notificationList, setNotificationList] = useState([])
    const x = JSON.parse(localStorage.getItem("student"));
    const [display, setDisplay] = useState(false)

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

    useEffect(() => {
        handleNotificationTable()
    }, [])


    return (
        <>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="back" >
                            <ArrowBackIcon onClick={() => navigate(-1)} />
                        </IconButton>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Logo
                        </Typography>
                        <div onClick={()=>setDisplay((display)=>!display)} style={{cursor:"pointer"}} >Hi, {x?.studentName}</div>

                    </Toolbar>
                </AppBar>
                <div
          style={{
            height: 100,
            width: "100%",
            position: "absolute",
            display : (display ? "block" : "none")
          }}
        >
          <div
            style={{
              height: 100,
              width: 100,
              marginLeft: "auto",
            }}
          >
            <Button style={{backgroundColor:"red" , color:"white"}}>Sign Out</Button>
          </div>
        </div>
                <h1 style={{ margin: 10 }}>Dashboard {'>'} Notification</h1>
                <div className="Nbox" style={{ width: "30%", border: "3px solid #1976d2", margin: "30px", height: "400px", padding: "20px", boxSizing: "border-box" }}>
                    <ul>

                        {
                            notificationList?.map((item, index) => (
                                (item.notificationDetails) ?
                                    <li key={item._id} onClick={() => alert(item.notificationDetails)} style={{ cursor: "pointer" }} >{item.notificationTitle}</li>
                                    :
                                    <a href={item?.notificationLink} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                                        <li key={item._id}>{item.notificationTitle}</li>
                                    </a>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Notification;
