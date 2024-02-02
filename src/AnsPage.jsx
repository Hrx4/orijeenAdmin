import React,{useState, useEffect} from "react";
import { Button } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import backend from "./backend";


const AnsPage = () => {
    const [open, setOpen] = useState(false);
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
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: "5%" }}>
                <h2 style={{ display: 'flex', justifyContent: "space-evenly", color: "hsl(210,77%,46%)" }}> How to send MIME(Multipart Media Encapsulation) content type message using erlang http method</h2>
                <div style={{display:"flex", flexDirection:"row", marginTop:"15px", marginBottom:"15px"}}>
                    <span style={{marginRight:"10px", fontWeight:"bold", fontSize:"small"}}>Asked Today</span><span style={{marginRight:"10px",fontWeight:"bold", fontSize:"small"}}>Modified Today</span><span style={{marginRight:"10px",fontWeight:"bold", fontSize:"small"}}>Viewed 7 Times</span>
                </div>
                <hr />
                <div>
                    <h3>Description:</h3>
                    <p style={{fontSize:"large"}} className="ansDescrip">

                        One thing I need to do in my smart contract is to calculate the current epoch's round. The reason why I need it is that my smart contract should not do anything in the first 5-10 minutes of an epoch (so the first 50-100 rounds?).

                        For this I thought that I could use the current block round, divide it by the rounds per epoch and what's over is the current round in the current epoch.

                        So far so good? BUT that's not working. Take this example from the devnet:

                        Round: 5017252 Rounds per epoch: 1200 Epoch = 5017252 / 1200 = ~4181.04333 But the actual epoch is: 4150

                        On mainnet this calculation DOES work. Anyone has a better idea?
                        <br/>
                        <br/>
                        The filePath variable points to the folder where with the files I'm working with. The command line looks like this: C:\Users\Me\Powershell\DocumentCount.ps1 -filePath $filePath
                        <br/>
                        <br/>
                        This is my first of a few scripts that will use a hashtable. the following scripts will work with info from each previous hashtable. My conundrum is that when I run the script using a command line that points to it, the hashtable variables do not get updated, yet when I run the script as a whole, copy and pate it all into PS, the hashtable variable is exactly as it should be. I then add/remove a file or two from the directory, paste the full script again and the results are perfect again. I do run PS as an Administrator to process these scripts.
                    </p>
                    <h3>Your Answer:</h3>
                    <textarea style={{width:"100%", height:"200px"}}></textarea>
                    <label >Upload Your Answer picture:</label>
                            <input type="file"  accept="image/*" />
                    <Button variant="contained" style={{marginTop:"10px", textTransform:"capitalize"}} onClick={() => { setOpen(true)}} >Submit</Button>
                </div>
                <Modal open={open} onClose={handleClose}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 370,
                            height: 380,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <form >
                            <label for="profilePicture">Upload a profile picture:</label>
                            <input type="file" id="profilePicture" name="profilePicture" accept="image/*" />
                            <label for="name">Name: *</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                            <label for="positionDropdown" style={{ margin: "10px", marginLeft: "0px" }}>Position: *</label>
                            <select id="positionDropdown" required>
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
                            <Button variant="contained" style={{margin:"15px", position:"absolute", right:"15px", bottom:"10px", textTransform:"capitalize"}}>Submit</Button>
                        </form>
                    </Box>
                </Modal>
            </div>
        </>
    );
}

export default AnsPage;