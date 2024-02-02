import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Modal, Box } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./StudentPanel.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backend from "../../backend";

const StudentPanel = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modalOpen1, setModalOpen1] = useState(false)


  const handleSubmit1 = async (e) => {
    e.preventDefault();
    // setLoading(true)

    try {
      const res = await fetch(`${backend}/contact/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactName: name,
          contactEmail: email,
          contactPhone: phone,
          contactMessage: message
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");

        alert("form submitted");
      } else {
        alert("all field required");
        console.log("Some error occured");
      }
    } catch (err) {
      alert("all field required");
      console.log(err);
    }

    // setLoading(false)
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
              Logo
            </Typography>
            <Typography variant="subtitle1">Hi, Pritam</Typography>
          </Toolbar>
        </AppBar>
        <div
          className="contact"
          style={{
            padding: 20,
            position: "absolute",
            top: "55%",
            right: "8%",
            transform: "translateY(-50%)",
            width: "20%",
            marginLeft:"25px"
          }}
        >
          <div
            className="call"
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#Be2561",
              marginBottom: "20%",
              lineHeight: "normal",
            }}
          >
            For Any Technical Issue Call <span className="ph">+919382637127</span>
          </div>
          <div
            className="soon"
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#808000",
              marginBottom: "20%",
              lineHeight: "normal",
            }}
          >
            We are building online exam system soon
          </div>
          <div
            style={{
              textAlign: "center",
              padding: 20,
              marginTop: -20,
              marginLeft: "-25px",
            }}
          >
            <Button variant="outlined" color="primary" className="panelButton">
              Sign Out
            </Button>
          </div>
        </div>
        <div
          className="mainContainer"
          style={{
            padding: 20,
            width: "100%",
            height: "85%",
            textAlign: "center",
          }}
        >
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
                  <Link
                    className="sLink"
                    to="/profile"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "65px",
                    }}
                  >
                    Profile
                  </Link>
                </div>
              </div>
              <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer"
                  }}
                  onClick={() => setModalOpen1(true)}
                >
                  <div
                    className="mlink"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      paddingTop: "40px",
                      paddingLeft: "50px",
                      textDecoration: "none",
                      color: "blue"
                    }}
                  >
                    Query Form{" "}
                  </div>
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
                  <Link
                    className="cLink"
                    to="/classnote"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "60px",
                    }}
                  >
                    Class Note
                  </Link>
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
                  <Link
                    className="rLink"
                    to="/result"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                    }}
                  >
                    Result
                  </Link>
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
                  <Link
                    className="pLink"
                    to="/payment"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                    }}
                  >
                    Payment
                  </Link>
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
                  <Link
                    className="nLink"
                    to="/notification"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "50px",
                      paddingLeft: "50px",
                    }}
                  >
                    Notification
                  </Link>
                </div>
              </div>
            </div>
            <div className="dInnerContainer" style={{ display: "flex", margin: "20px", flexDirection: "row" }}>
                <div className="dBox">
                <div
                  className="Dhalf dText"
                  style={{
                    color: "black",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Link
                    className="sLink"
                    to="/queryforum"
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      textDecoration: "none",
                      paddingTop: "40px",
                      paddingLeft: "65px",
                    }}
                  >
                    Query Forum
                  </Link>
                </div>
                </div>
            </div>
          </div>

        </div>
      </div>

      <Modal
        open={modalOpen1}
        onClose={() => setModalOpen1(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", md: 500 },
            height: "70vh",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "scroll",
          }}
        >
          <form onSubmit={handleSubmit1}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div><div className="form-group">
              <label>Phone no:</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div><div className="form-group">
              <label>Message:</label>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </Box>
      </Modal>
    </>

  );
};

export default StudentPanel;
