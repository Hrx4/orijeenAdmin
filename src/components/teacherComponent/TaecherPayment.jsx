import React, { useEffect, useState } from "react";
import TeacherNav from "./TeacherNav";
import backend from "../../backend";

const TeacherPayment = () => {
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

  const [paymentList, setPaymentList] = useState([]);

  useEffect(() => {
    const handleContactTable = async () => {
      const x = JSON.parse(localStorage.getItem("teacher"));
      console.log(x);
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
  }, []);

  return (
    <>
      <div>
        <TeacherNav />

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

export default TeacherPayment;
