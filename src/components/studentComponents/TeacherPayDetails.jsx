import React, { useState } from "react";
// import PaymentHistoryTab from "./PaymentHistoryTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentModal from "./PaymentModal";
import TeacherPayHistory from "./TeacherPayHistory";
// import PaymentModal from './'

const TeacherPayDetails = ({ teacherPayList }) => {
  const [payHistory, setPayHistory] = useState();
  const [paymentList, setPaymentList] = useState([]);
  const [modalOpen, setModalOpen] = useState(true);
  const [lastPaidMonth, setLastPaidMonth] = useState();
  const [lastPaidYear, setLastPaidYear] = useState();
  // const [routeKey , setRouteKey] = useState('')

  // const PayHistoryTab = (studentEnrollment) =>{

  const handleAllStudentTable = async (studentEnrollment) => {
    // e.preventDefault();
    try {
      const res = await fetch(
        `https://orijeen-main.vercel.app/teacher/payment/${studentEnrollment}/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setPaymentList(resJson);
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
    setPayHistory("PaymentHistory");
  };
  const handleAllStudentTable1 = async (studentEnrollment) => {
    // e.preventDefault();
    try {
      const res = await fetch(
        `https://orijeen-main.vercel.app/teacher/payment/${studentEnrollment}/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setPaymentList(resJson);
        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
        const x = resJson[0].paymentDetails.length;
        setLastPaidMonth(resJson[0].paymentDetails[x - 1].paymentMonth);
        setLastPaidYear(resJson[0].paymentDetails[x - 1].paymentYear);
      }
    } catch (err) {
      toast.error("Error Occured", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }
    setPayHistory("PaymentModal");
    setModalOpen(true);
  };

  // useEffect(() => {
  //   console.log(paymentList);
  // }, [paymentList]);

  return (
    <>
      <ToastContainer />
      <div
        className="table-scroll"
        style={{
          marginTop: 40,
          overflowX: "scroll",
          overflowY: "scroll",
          width: "100%",
        }}
      >
        <table>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={{ border: "1px solid #000", padding: "8px" }}>Id</th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
              <th style={{ border: "1px solid #000", padding: "8px" }}>
                Action
              </th>
            </tr>
          </thead>

          {teacherPayList.map((item, index) => (
            <tr
              style={{ border: "1px solid black", padding: 5 }}
              key={item._id}
            >
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {index + 1}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                {item.teacherName}
              </td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
                <button
                  onClick={() => {
                    handleAllStudentTable1(item.paymentId);
                  }}
                >
                  Add Payment
                </button>{" "}
                <button
                  onClick={() => {
                    handleAllStudentTable(item.paymentId);
                  }}
                  style={{marginTop:10}}
                >
                  View Payments
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      {payHistory === "PaymentHistory" ? (
        <TeacherPayHistory
          paymentList={paymentList}
          setPaymentList={setPaymentList}
        />
      ) : null}
      {payHistory === "PaymentModal" ? (
        <PaymentModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          paymentList={paymentList}
          setPaymentList={setPaymentList}
          paymentId={paymentList[0].paymentId}
          lastPaidMonth={lastPaidMonth}
          lastPaidYear={lastPaidYear}
        />
      ) : null}
    </>
  );
};

export default TeacherPayDetails;
