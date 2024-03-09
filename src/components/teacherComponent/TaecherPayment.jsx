import React, { useEffect, useState } from "react";
import TeacherNav from "./TeacherNav";
import backend from "../../backend";
import { Box, Button, Modal } from "@mui/material";

const TeacherPaymentForTeacherPanel = () => {
  const [open, setOpen] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState();
  const [invoiceDate, setInvoiceDate] = useState();
  const [modalInfo, setModalInfo] = useState({});

  const handlePrint = () => {
    window.print();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [paymentList, setPaymentList] = useState([]);
  const x = JSON.parse(localStorage.getItem("teacher"));

  useEffect(() => {
    const handleContactTable = async () => {
      try {
        const response = await fetch(`${backend}/teacher/payment/${x._id}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
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
    handleContactTable();
  }, [x._id]);

  return (
    <>
      <div style={{width:"100%"}}>

        <h1 style={{ margin: 10 }}> Payment</h1>
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
                    {item.paymentMoney}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.paymentDate}
                  </td>
                  <td className="actionButtons">
                    <button
                      className="actionButton"
                      onClick={() => {
                        console.log(paymentList[0]);
                        setOpen(true);
                        setInvoiceNo(index + 1);
                        setInvoiceDate(item.paymentDate);
                        setModalInfo(paymentList[index]);
                      }}
                    >
                      View Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            height: 620,
            bgcolor: "background.paper",
            // boxShadow: 24,
            p: 4,
          }}
        >
          <img
            src="https://orijeen.in/img/logoOrijeen.png"
            alt="orijeen logo"
            style={{
              width: "150px",
              height: "auto",
              position: "absolute",
              top: "-40px",
              left: "0px",
            }}
          />
          <h4
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            oriJEEn Academy
          </h4>
          <h4
            style={{
              position: "absolute",
              top: "30px",
              right: "15px",
              fontSize: "20px",
              lineHeight: "30px",
            }}
          >
            Coaching Invoice
          </h4>
          <p style={{ position: "absolute", top: "60px" }}>From</p>
          <p style={{ position: "absolute", top: "80px", fontWeight: "bold" }}>
            oriJEEn Academy
          </p>
          <span style={{ position: "absolute", top: "80px", right: "110px" }}>
            invoice no.
          </span>
          <span
            style={{
              position: "absolute",
              top: "80px",
              right: "80px",
              fontWeight: "bold",
            }}
          >
            {invoiceNo}
          </span>
          <span style={{ position: "absolute", top: "100px", right: "100px" }}>
            invoice date
          </span>
          <span
            style={{
              position: "absolute",
              top: "100px",
              right: "0px",
              fontWeight: "bold",
            }}
          >
            {invoiceDate}
          </span>
          <div
            style={{
              position: "absolute",
              top: "140px",
              right: "20px",
              textAlign: "right",
            }}
          >
            <span style={{ fontWeight: "bold" }}>Bill to</span>
            <br />
            <span>{x?.teacherName}</span>
            <p style={{ marginBottom: "0rem" }}>{x?.teacherEmail}</p>
            <p style={{ marginBottom: "0rem" }}>{x?.teacherPhone}</p>
            <p style={{ marginBottom: "0rem" }}>{x?.teacherAddress}</p>
          </div>
          <div style={{ position: "absolute", top: "280px", right: 50 }}>
            <table
              style={{
                width: "100%",
                borderCollapse: " collapse",
                marginTop: "20px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#0ff",
                    }}
                  >
                    Teacher Name
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#0ff",
                    }}
                  >
                    Year
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#0ff",
                    }}
                  >
                    Month
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#0ff",
                    }}
                  >
                    Paid
                  </th>
                  <th
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#0ff",
                    }}
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr key={modalInfo._id}>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {x.teacherName}
                  </td>
                  <td
                    style={{
                      border: " 1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {modalInfo.paymentYear}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {data[modalInfo.paymentMonth]}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {modalInfo.paymentMoney}
                  </td>
                  <td
                    style={{
                      border: "1px solid #ddd",
                      padding: "8px",
                      textAlign: "left",
                      backgroundColor: "#f2f2f2",
                    }}
                  >
                    {modalInfo.paymentDate}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ position: "absolute", top: "550px", left: "20px" }}>
            <p style={{ fontWeight: "bold", marginBottom: "0px" }}>Note</p>
            <p>Thank you from oriJEEn Academy</p>
          </div>

          <div id="button">
            {/* <Button
              onClick={handleClose}
              variant="outlined"
              color="error"
              style={{ position: "absolute", bottom: "30px", left: "20px" }}
            >
              Close
            </Button> */}

            <Button
              variant="contained"
              color="primary"
              onClick={handlePrint}
              style={{ position: "absolute", bottom: "30px", right: "20px" }}
            >
              Print Document
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default TeacherPaymentForTeacherPanel;
