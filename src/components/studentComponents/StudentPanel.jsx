import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './StudentPanel.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const StudentPanel = () => {
    const navigate = useNavigate();

    
    
    
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="back" >
                        <ArrowBackIcon onClick={() => navigate(-1)} />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        Logo
                    </Typography>
                    <Typography variant="subtitle1">
                        Hi, Pritam
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className="contact" style={{ padding: 20, position: "absolute", top: '45%', right: '8%', transform: 'translateY(-50%)', width: "20%" }}>
                <div className="call" style={{ fontSize: "35px", fontWeight: "bold", color: "#Be2561", marginBottom: "20%", lineHeight: "normal" }}>

                    For Any Technical Issue Call <span className='ph'>+919382637127</span>

                </div>
                <div className="soon" style={{ fontSize: "35px", fontWeight: "bold", color: "#808000", marginBottom: "20%", lineHeight: "normal" }}>

                    We are building online exam system soon

                </div>
                <div style={{ textAlign: 'center', padding: 20, marginTop:-20, marginLeft:"-25px"}}>
                <Button variant="outlined" color="primary">Sign Out</Button>
            </div>
            </div>
            <div className="mainContainer" style={{ padding: 20, width: "100%", height: "85%", textAlign: "center" }}>



                {/* <BrowserRouter> */}
                <div className="dContainer" style={{ marginTop: 40, margin: 20 }}>
                    <div
                        className="dInnerContainer"
                        style={{ display: "flex", margin: "20px", flexDirection: "row" }}
                    >
                        <div className="dBox">

                            <div
                                className="Dhalf dText"
                                style={{
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Link className='sLink' to="/profile" style={{ fontSize: "25px", fontWeight: "bold", textDecoration:"none", paddingTop:"50px", paddingLeft:"65px" }}>Profile</Link>


                            </div>
                        </div>
                        <div className="dBox">

                            <div
                                className="Dhalf dText"
                                style={{
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Link className="mlink" to="/updateprofile" style={{ fontSize: "25px", fontWeight: "bold",paddingTop:"40px",paddingLeft:"50px", textDecoration:"none", }}>Mobile No. Update </Link>


                            </div>
                        </div>
                        <div className="dBox">

                            <div
                                className="Dhalf dText"
                                style={{
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Link className='cLink' to="/classnote" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"50px", paddingLeft:"60px" }}>Class Note</Link>


                            </div>
                        </div>

                    </div>
                    <div
                        className="dInnerContainer"
                        style={{ display: "flex", margin: "20px", flexDirection: "row" }}
                    >
                        <div className="dBox">

                            <div
                                className="Dhalf dText"
                                style={{
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Link className='rLink' to="/result" style={{ fontSize: "25px", fontWeight: "bold" ,textDecoration:"none",paddingTop:"50px", paddingLeft:"50px" }}>Result</Link>


                            </div>
                        </div>
                        <div className="dBox">

                            <div
                                className="Dhalf dText"
                                style={{
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Link className='pLink' to="/payment" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"50px", paddingLeft:"50px"  }}>Payment</Link>


                            </div>
                        </div>
                        <div className="dBox">

                            <div
                                className="Dhalf dText"
                                style={{
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Link className='nLink' to="/notification" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"50px", paddingLeft:"50px"  }}>Notification</Link>


                            </div>
                        </div>

                    </div>
                    <div
                        className="dInnerContainer"
                        style={{ display: "flex", margin: "20px", flexDirection: "row" }}
                    >
                        <div className="dBox">

                            <div
                                className="Dhalf dText"
                                style={{
                                    color: "black",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                               <Link className='qLink' to="/queryform" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"30px", paddingLeft:"50px"  }}>Query Form</Link>


                            </div>
                        </div>

                    </div>
                </div>




            </div>
           
        </div>
    );
}

export default StudentPanel;