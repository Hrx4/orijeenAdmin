import React, { useState } from "react";
import "./Dashboard.css";
import { FaAddressBook } from "react-icons//fa6";
import { FaCreativeCommonsBy } from "react-icons//fa6";
import { FaCreativeCommonsNc } from "react-icons//fa6";
import { FaCommentDollar } from "react-icons//fa6";
import SubDashBoard from "./SubDashboard";
// import backend from './backend'

const Dashboard = ({ income, expenseDetails }) => {
  const [subDash, setSubDash] = useState("noteform");
  // const [expenseDetails, setExpenseDetails] = useState([])

  const handleMonthlyIncome = () => {
    setSubDash("MonthlyIncome");
  };

  const handleTotalIncome = () => {
    setSubDash("TotalIncome");
  };

  const handleMonthlyDue = () => {
    setSubDash("MonthlyDue");
  };

  const handleTotalDue = () => {
    setSubDash("TotalDue");
  };

  //   const handleAllStudentTable = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const res = await fetch(`${backend}/expense/details/`, {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       let resJson = await res.json();
  //       if (res.status === 200) {
  //         console.log("fine");
  //         setExpenseDetails(resJson)
  //       }
  //     } catch (err) {

  //       console.log(err);
  //     }
  //   };
  //   useEffect(() => {
  //  handleAllStudentTable()
  //   }, [])

  return (
    <div
      className="dContainer"
      style={{ marginTop: 40, margin: 20, width: "100%" }}
    >
      <h1 className="dHeading" style={{ marginLeft: 15, display: "flex" }}>
        Dashboard
      </h1>
      <div
        className="dInnerContainer"
        style={{
          display: "flex",
          marginTop: "20px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#00c0ef " }}
            >
              <FaAddressBook size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              TOTAL STUDENT
              <div>{income?.totalStudent}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <FaCreativeCommonsBy size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              TOTAL TEACHER
              <div>{expenseDetails?.totalTeacher}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#00a65a" }}
            >
              <FaCommentDollar size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={handleMonthlyIncome}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              MONTHLY INCOME
              <div>{income?.monthlyIncome}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dInnerContainer"
        style={{
          display: "flex",
          marginTop: "20px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <FaCreativeCommonsNc size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                flexDirection: "column",
              }}
              onClick={handleMonthlyDue}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              MONTHLY DUE
              <div>{income?.monthlyDue}</div>
            </div>
          </div>
        </div>

        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#f39c12 " }}
            >
              <FaCommentDollar size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={handleTotalIncome}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              TOTAL INCOME
              <div>{income?.totalIncome}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#f39c12 " }}
            >
              <FaCreativeCommonsNc size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                flexDirection: "column",
              }}
              onClick={handleTotalDue}
              onDoubleClick={(e) => {
                setSubDash("");
              }}
            >
              TOTAL DUE
              <div>{income?.totalDue}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dInnerContainer"
        style={{
          display: "flex",
          marginTop: "20px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#00c0ef " }}
            >
              <FaAddressBook size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              MONTHLY EXPENSE
              <div>{expenseDetails?.monthlyExpense}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <FaCreativeCommonsBy size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                display: "flex",
                flexDirection: "column",
              }}
            >
              TOTAL EXPENSE
              <div>{expenseDetails?.totalExpense}</div>
            </div>
          </div>
        </div>
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#00a65a" }}
            >
              <FaCommentDollar size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
              }}
            >
              MONTHLY PROFIT & LOSS
              {income.monthlyIncome - expenseDetails.monthlyExpense > 0 ? (
                <div style={{ color: "green", fontWeight: "bold" }}>
                  {income.monthlyIncome - expenseDetails.monthlyExpense}
                </div>
              ) : (
                <div style={{ color: "red", fontWeight: "bold" }}>
                  {income.monthlyIncome - expenseDetails.monthlyExpense}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="dInnerContainer"
        style={{
          display: "flex",
          marginTop: "20px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <div className="dBox">
          <div className="inner-box">
            <div
              className="half yellow-bg"
              style={{ backgroundColor: "#dd4b39" }}
            >
              <FaCreativeCommonsNc size={50} />
            </div>
            <div
              className="Dhalf dText"
              style={{
                color: "black",
                cursor: "pointer",
                flexDirection: "column",
                display: "flex",
              }}
            >
              TOTAL PROFIT & LOSS
              {income.totalIncome - expenseDetails.totalExpense > 0 ? (
                <div style={{ color: "green", fontWeight: "bold" }}>
                  {income.totalIncome - expenseDetails.totalExpense}
                </div>
              ) : (
                <div style={{ color: "red", fontWeight: "bold" }}>
                  {income.totalIncome - expenseDetails.totalExpense}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {subDash === "MonthlyIncome" ? (
        <SubDashBoard headingDash="Monthly Income" apiRoute="monthlyincome" />
      ) : null}
      {subDash === "TotalIncome" ? (
        <SubDashBoard headingDash="Total Income" apiRoute="totalincome" />
      ) : null}
      {subDash === "MonthlyDue" ? (
        <SubDashBoard headingDash="Monthly Due" apiRoute="monthlydue" />
      ) : null}
      {subDash === "TotalDue" ? (
        <SubDashBoard headingDash="Total Due" apiRoute="totaldue" />
      ) : null}
    </div>
  );
};

export default Dashboard;
