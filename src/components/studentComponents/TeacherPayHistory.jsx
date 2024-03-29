import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";

const TeacherPayHistory = ({
  paymentList,
  studentAddress,
  studentEmail,
  studentPhone,
}) => {
  const [open, setOpen] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState();
  const [invoiceDate, setInvoiceDate] = useState();
  const [sName, setSName] = useState();
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

  return (
    <>
      <div
        className="table-scroll"
        style={{
          marginTop: 40,
          overflowX: "scroll",
          overflowY: "scroll",
          width: "100%",
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            border: "1px solid #000",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th
                style={{
                  border: "1px solid #000",
                  padding: "8px",
                  width: "25px",
                }}
              >
                ID
              </th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>Year</th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>
                Month
              </th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>Paid</th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>Date</th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {paymentList[0].paymentDetails?.map((item, index) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
              >
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
                      console.log(paymentList);
                      setOpen(true);
                      setInvoiceNo(index + 1);
                      setInvoiceDate(item.paymentDate);
                      setSName(paymentList[0]?.teacherName);
                      setModalInfo(paymentList[0]?.paymentDetails[index]);
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
            <span>{sName}</span>
            <p style={{ marginBottom: "0rem" }}>{studentEmail}</p>
            <p style={{ marginBottom: "0rem" }}>{studentPhone}</p>
            <p style={{ marginBottom: "0rem" }}>{studentAddress}</p>
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
                    {sName}
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

export default TeacherPayHistory;
