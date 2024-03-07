import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import { Box,Button } from "@mui/material";
import backend from "./backend";
import { Link } from "react-router-dom";



const Forum = () => {
    const [classData, setClassData] = useState([]);
    const [classValue, setClassValue] = useState("");
    const [subjectData, setSubjectData] = useState([]);
    const [subjectValue, setSubjectValue] = useState("");
    const [courseData, setCourseData] = useState([]);
    const [courseValue, setCourseValue] = useState("");
    useEffect(() => {
        const fetchClassValue = async () => {
            try {
                const response = await fetch(`${backend}/class/`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });
                const result = await response.json();
                setClassData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchClassValue();
        const fetchSubjectValue = async () => {
            try {
                const response = await fetch(`${backend}/subject/`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });
                const result = await response.json();
                setSubjectData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchSubjectValue();

        const fetchCourseValue = async () => {
            try {
                const response = await fetch(`${backend}/course/`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                });
                const result = await response.json();
                setCourseData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCourseValue();
    }, []);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#0ff', color: 'white' }}>
                <div className="logo"><img src="https://orijeen.in/img/logoOrijeen.png" alt='logo' style={{ width: "120px", margin: '-40px', marginLeft: "10px" }} /></div>
                <div className="forumNav" style={{ display: 'flex', marginRight: "20px", position: "absolute", left: "13%" }}>
                    <a href="https://orijeen.in/" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px', marginRight: "25px", fontWeight: "bold", fontSize: "20px" }}>Home</a>
                    <a href="https://orijeen.in/about.html" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px', fontWeight: "bold", fontSize: "20px" }}>About</a>
                </div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <h1>All Questions</h1>
                    <Button variant="contained" style={{ textTransform: "capitalize", height: "45px" }} onClick={() => { setOpen(true) }}>Ask Question</Button>
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginLeft: "26%", marginTop: "30px", fontSize: "20px" }} className="qno">
                    <span style={{ paddingRight: "10px" }}>250000</span><p>Questions</p>
                </div>
                <hr />
                <div style={{ marginTop: "30px", marginLeft: "26%", marginRight: "26%" }} className="qdiv">
                    <ul className="qlist">
                        <li style={{ color: "hsl(210,77%,46%)", listStyle: "none", margin: "5px",cursor:"pointer" }}>
                           <Link to="/answer" style={{textDecoration:"none"}}> How to send MIME(Multipart Media Encapsulation) content type message using erlang http method </Link></li>
                        <li style={{ listStyle: "none", margin: "5px", fontSize: "small" }}>So, no idea what's happened here. Am on 17.8.5, multiple windows forms projects in C# (targeting 4.8.1) are throwing this error: Error CS8630 Invalid 'nullable' value: 'Enable' for C# 7.1.</li>
                        <li style={{ listStyle: "none", fontSize: "12px", display: "flex", flexDirection: "row" }}><img alt="check" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740" style={{ width: "40px" }}></img>
                            <li style={{ marginTop: "10px", marginLeft: "5px", marginRight: "5px" }}>Pamela Roy choudhury</li>
                            <li style={{ marginTop: "10px", marginLeft: "5px", marginRight: "5px", fontWeight: "bold" }}>50 asked</li>
                        </li>
                    </ul>
                    <ul className="qlist">
                        <li style={{ color: "hsl(210,77%,46%)", listStyle: "none", borderTop: "1px solid #808080", margin: "5px" }}>All VS projects now throwing Error CS8630 Invalid 'nullable' value: 'Enable' for C# 7.1. Please use language version '8.0'</li>
                        <li style={{ listStyle: "none", margin: "5px", fontSize: "small" }}>We have a website and a marketing automation platform with a tracking domain something like: https://mywebsite.com https://go.mywebsite.com Cross domain tracking is set up in GA4.</li>
                        <li style={{ listStyle: "none", fontSize: "12px", display: "flex", flexDirection: "row" }}><img alt="check" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740" style={{ width: "40px" }}></img>
                            <li style={{ marginTop: "10px", marginLeft: "5px", marginRight: "5px" }}>Pamela Roy choudhury</li>
                            <li style={{ marginTop: "10px", marginLeft: "5px", marginRight: "5px", fontWeight: "bold" }}>90 asked</li>
                        </li>
                    </ul>
                    <ul className="qlist">
                        <li style={{ color: "hsl(210,77%,46%)", listStyle: "none", borderTop: "1px solid #808080", margin: "5px" }}>Why am I seeing weird strings of letters & numbers in URLs when using cross-domain tracking in GA4?</li>
                        <li style={{ listStyle: "none", margin: "5px", fontSize: "small" }}>Cross domain tracking is set up in GA4. The same Google Tag is manually installed on the landing pages in the marketing automation platform as well as on our website.</li>
                        <li style={{ listStyle: "none", fontSize: "12px", display: "flex", flexDirection: "row" }}><img alt="check" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=740" style={{ width: "40px" }}></img>
                            <li style={{ marginTop: "10px", marginLeft: "5px", marginRight: "5px" }}>Pamela Roy choudhury</li>
                            <li style={{ marginTop: "10px", marginLeft: "5px", marginRight: "5px", fontWeight: "bold" }}>98 asked</li>
                        </li>
                    </ul>
                </div>
                <Modal open={open} onClose={handleClose}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 500,
                            height: 600,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                            overflowY:"scroll"
                        }}
                        className="forum-modal"
                    >
                        <form >
                            <label for="profilePicture">Upload a profile picture:</label>
                            <input type="file" id="profilePicture" name="profilePicture" accept="image/*"style={{marginBottom:10}} />
                            <label for="name" >Name: *</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required style={{marginBottom:10}}/>
                            <label for="positionDropdown" style={{ margin: "10px", marginLeft: "0px" }}>Position: *</label>
                            <select id="positionDropdown" required style={{marginBottom:10}}>
                                <option value="" selected disabled>
                                    Select Your Position
                                </option>
                                <option value="superAdmin">Super admin</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select><br />
                            <label style={{ marginRight: 10 }}>Subject:</label>
                            <select
                                type="text"
                                value={subjectValue}
                                onChange={(e) => setSubjectValue(e.target.value)}
                                style={{marginBottom:10}}
                            >
                                <option value="" selected disabled>
                                    Select Your Subject
                                </option>
                                {subjectData?.map((item) => (
                                    <option key={item?.id} value={item?.value}>
                                        {item?.subjectName}
                                    </option>
                                ))}
                            </select><br />
                            <label style={{ marginTop: 10, marginRight: 10 }}>Class:</label>
                            <select
                                type="text"
                                value={classValue}
                                onChange={(e) => setClassValue(e.target.value)}
                                style={{marginBottom:10}}
                            >
                                <option value="" selected disabled>
                                    Select Your Class
                                </option>
                                {classData?.map((item) => (
                                    <option key={item?.id} value={item?.value}>
                                        {item?.className}
                                    </option>
                                ))}
                            </select><br/>
                            <label style={{marginTop: 10, marginRight: 10 }}>Course:</label>
                            <select
                                type="text"
                                value={courseValue}
                                onChange={(e) => setCourseValue(e.target.value)}
                                style={{marginBottom:10}}
                            >
                                <option value="" selected disabled>
                                    Select Your Course
                                </option>
                                {courseData?.map((item) => (
                                    <option key={item?.id} value={item?.value}>
                                        {item?.courseName}
                                    </option>
                                ))}
                            </select>
                            <input type="text" id="name" name="name" placeholder="Enter your Question Title *" required style={{marginTop: 10}}/>
                            <textarea id="questionDescription" name="questionDescription" rows="4" cols="37" placeholder="Your Question Description *" style={{marginTop: 10}} required></textarea><br/>
                            <label for="profilePicture" style={{marginTop:10}}>Upload Your Question picture:</label>
                            <input type="file" id="questionPicture" name="questionPicture" accept="image/*" />
                            <Button variant="contained" style={{marginTop:"15px", textTransform:"capitalize"}}>Submit</Button>
                        </form>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default Forum;
