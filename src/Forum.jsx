import { Button } from "@mui/material";
import React, { useState } from "react";


const Forum = () => {
    const [questions, setQuestion] = useState('');
    const [showQuestions, setShowQuestions] = useState([]);
    const handleShowQuestions = () => {
        if (questions.trim() !== '') {
            // Add the new search query to the search history
            setShowQuestions([...showQuestions, questions]);
            // Clear the search input
            setQuestion('');
        }
    }
    return (
        <>
            <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', backgroundColor: '#0ff', color: 'white' }}>
                <div className="logo"><img src="https://orijeen.in/img/logoOrijeen.png" style={{ width: "80px", margin: '-20px' }} /></div>
                <div className="nav-links" style={{ display: 'flex', marginRight: "20px" }}>
                    <a href="https://orijeen.in/" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px', fontWeight: "bold", fontSize: "20px" }}>Home</a>
                    <a href="https://orijeen.in/about.html" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px', fontWeight: "bold", fontSize: "20px" }}>About</a>
                </div>
            </div>
            <div style={{ marginLeft: "20px" }}>
                <h1>Top Questions</h1>
                <input type="text" placeholder="Search" style={{ width: "50%", height: "50px", borderRadius: "10px" }} value={questions} onChange={(e) => setQuestion(e.target.value)} />
                <Button variant="contained" style={{ marginLeft: "10px", textTransform: "capitalize" }} onClick={handleShowQuestions}>Ask Question</Button>
                <div style={{ marginTop: "30px" }}>
                    <h3 >Searched Items:</h3>
                    <ul >
                        {showQuestions.map((query, index) => (
                            <li key={index} style={{fontSize:"25px", color:"hsl(210,77%,46%)"}} >{query}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Forum;