import React from "react";
import logo from "./logoOrijeen.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navbar = () => {
  return (
    <>
      <div
        style={{
          height: 80,
          display: "flex",
          backgroundColor: "#ececec",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="https://radiant-heliotrope-3a5cd7.netlify.app/">
          <ArrowBackIcon style={{ margin: 10, cursor: "pointer" }} />
        </a>

        <div style={{ height: 100, width: 100, cursor: "pointer" }}>
          <a href="https://radiant-heliotrope-3a5cd7.netlify.app/">
            <img src={logo} alt="" style={{ height: "100%", width: "100%" }} />
          </a>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
