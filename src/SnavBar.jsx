import React, {useState } from "react";
import { Link } from "react-router-dom";
import lakshyamLogo from "./logoOrijeen.png";
import logo from "./logoOrijeen.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./SnavBar.css";

const SnavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        style={{
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ececec",
        }}
      >
      <Link to={'/'}>
      <ArrowBackIcon style={{ margin: 10, cursor: "pointer" }} color="cyan" />
      </Link>

        <div style={{ height: 100, width: 100,cursor:"pointer" }}>
          <a href="https://orijeen.in/">
          <img src={logo} alt="" style={{ height: "100%", width: "100%" }} />
          </a>
        </div>
        <div
          onClick={toggleBox}
          style={{ cursor: "pointer", margin: 10, fontWeight: "bold" }}
        >
          {" "}
          Hi , Admin!{" "}
        </div>
      </div>

      {isOpen ? (
        <div
          className="navBox"
          style={{
            maxHeight: 400,
            width: 300,
            position: "absolute",
            right: "3%",
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
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
              src={lakshyamLogo}
              alt="Logo"
              style={{ height: "100%", marginLeft: "190px" }}
            />
          </div>
          <button>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Sign Out
            </Link>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default SnavBar;
