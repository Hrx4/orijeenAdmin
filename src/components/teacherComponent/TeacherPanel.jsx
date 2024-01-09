import React from "react";
import TeacherNav from "./TeacherNav";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import './TeacherPanel.css';


const TeacherPanel = () => {
    return (
        <>
            <div>
                <TeacherNav />
                <div className="contact" style={{ padding: 20, position: "absolute", top: '45%', right: '8%', transform: 'translateY(-50%)', width: "20%" }}>
                    <div className="call" style={{ fontSize: "35px", fontWeight: "bold", color: "#Be2561", marginBottom: "20%", lineHeight: "normal" }}>

                        For Any Technical Issue Call <span className='ph'>+919382637127</span>

                    </div>
                    <div className="soon" style={{ fontSize: "35px", fontWeight: "bold", color: "#808000", marginBottom: "20%", lineHeight: "normal" }}>

                        We are building online exam system soon

                    </div>
                    <div style={{ textAlign: 'center', padding: 20, marginTop: -20, marginLeft: "-25px" }}>
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
                                <Link className='sLink' to="/teacherprofile" style={{ fontSize: "25px", fontWeight: "bold", textDecoration:"none", paddingTop:"50px", paddingLeft:"65px" }}>Profile</Link>


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
                                <Link className="mlink" to="/teachermobileupdate" style={{ fontSize: "25px", fontWeight: "bold",paddingTop:"40px",paddingLeft:"50px", textDecoration:"none", }}>Mobile No. Update </Link>


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
                                <Link className='cLink' to="/teacheraddnote" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"50px", paddingLeft:"60px" }}>Add Note</Link>


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
                                <Link className='rLink' to="/teacherallnote" style={{ fontSize: "25px", fontWeight: "bold" ,textDecoration:"none",paddingTop:"50px", paddingLeft:"50px" }}>All Note</Link>


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
                                <Link className='pLink' to="/teacherpayment" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"50px", paddingLeft:"50px"  }}>Payment</Link>


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
                                <Link className='nLink' to="/teachernotification" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"50px", paddingLeft:"50px"  }}>Notification</Link>


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
                               <Link className='qLink' to="/teacherqueryform" style={{ fontSize: "25px", fontWeight: "bold",textDecoration:"none",paddingTop:"30px", paddingLeft:"50px"  }}>Query Form</Link>


                            </div>
                        </div>

                    </div>
                </div>




            </div>
            </div>
        </>
    )
}

export default TeacherPanel;