import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import backend from "../../backend";

const Payment = () => {
  const data = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Augast",
    "September",
    "October",
    "November",
    "December",
  ];
  const x = JSON.parse(localStorage.getItem("student"));

  const navigate = useNavigate();
  const [paymentList, setPaymentList] = useState([]);

  const handleContactTable = async () => {
    console.log(x);
    try {
      const response = await fetch(`${backend}/student/getpayment/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentId: x.studentEnrollment,
        }),
      });

      const resJson = await response.json();
      console.log(resJson);
      if (response.status === 200) {
        setPaymentList(resJson[0].paymentDetails);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleContactTable();
  }, []);

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
            <Typography variant="subtitle1">Hi, {x?.studentName}</Typography>
          </Toolbar>
        </AppBar>
        <div
          className="anocontact"
          style={{
            padding: 20,
            position: "absolute",
            top: "40%",
            right: "5%",
            transform: "translateY(-50%)",
            width: "20%",
          }}
        >
          

        </div>
        <h1 style={{ margin: 10 }}>Dashboard {">"} Payment</h1>
        <div
          className="table-scroll"
          style={{
            width: "70%",
            overflowX: "scroll",
            overflowY: "scroll",
            padding: 10,
            height: "100vh",
          }}
        >
          <table>
            <thead>
              <tr>
                <th
                  style={{
                    border: "1px solid #000",
                    padding: "8px",
                    width: "25px",
                  }}
                >
                  ID
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Year
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Month
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Payment Type
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Paid
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Date
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentList?.map((item, index) => (
                <tr key={item._id}>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {index + 1}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.paymentYear}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {data[item.paymentMonth]}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.paymentType}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.paymentMoney}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.paymentDate}
                  </td>
                  <td className="actionButtons">
                    {" "}
                    <button className="actionButton">View Invoice</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Payment;
