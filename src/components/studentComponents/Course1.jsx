import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import "./Table.css";
import "./Classnote.css";

const Course1 = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { noteList } = state;
  const x = JSON.parse(localStorage.getItem("student"));
  const [isOpen, setIsOpen] = useState(false);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

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
            <div onClick={toggleBox} style={{ cursor: "pointer" }}>
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
              borderRadius: 10,
              border: "1px solid blue",
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
        {noteList.length !== 0 ? (
          <>
            <h1 style={{ margin: 10 }}>
              Dashboard {">"} Class Note{" > "}Course 1
            </h1>
            <table
              className="sdtable"
              style={{
                width: "60%",
                overflowX: "scroll",
                overflowY: "scroll",
                height: "50vh",
                border: "none",
                marginLeft: "10px",
              }}
            >
              <thead>
                <tr style={{ border: "2px solid black" }}>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Note Name
                  </th>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Class
                  </th>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Sub
                  </th>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {noteList?.map((item, index) => (
                  <tr>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      {item.noteTitle}
                    </td>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      {item.noteClass}
                    </td>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      {item.noteSubject}
                    </td>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      <button
                        className=" dlB"
                        component="label"
                        variant="contained"
                      >
                        <a
                          href={item.notePdf}
                          style={{ color: "white" }}
                          download={true}
                        >
                          Download
                        </a>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div style={{ marginTop: 90, marginLeft: 20 }}>
            <h2>No Note Available</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Course1;
