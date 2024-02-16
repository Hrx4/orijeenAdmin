import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
// import backend from "../../backend";
import backend from "./backend";

const PaymentModal = ({
  modalOpen,
  setModalOpen,
  paymentList,
  setPaymentList,
  paymentId,
  lastPaidMonth,
  lastPaidYear,
}) => {
  // useEffect(() => {
  //     setModalOpen(true)
  // }, [])
  const [studentSubjects, setStudentSubjects] = useState([]);
  const studentMonth = new Date(paymentList[0]?.studentDoj).getMonth();

  useEffect(() => {
    console.log(new Date(paymentList[0]?.studentDoj).getMonth());
    console.log(lastPaidMonth);
  }, [paymentList, lastPaidMonth]);

  const data = [
    "",
    "",
    "",
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
  const data1 = ["January", "February", "March"];

  const handleCheck = (e) => {
    e.target.checked
      ? setStudentSubjects([...studentSubjects, e.target.value])
      : setStudentSubjects([
          ...studentSubjects.filter((item) => item !== e.target.value),
        ]);
    console.log("====================================");
    console.log(studentSubjects);
    console.log("====================================");
  };

  const updateList = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backend}/student/payment/${paymentId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMonth: studentSubjects,
          paymentYear: lastPaidYear,
        }),
      });

      const resJson = await response.json();
      console.log(resJson);
      if (response.status === 201) {
        console.log("fine");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
    // window.location.reload()
  };

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setStudentSubjects([]);
        }}
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
          {paymentList.map((item, index) => (
            <div style={{ width: "auto" }} className="form-container">
              <div className="form-group">
                <label>Student Enrollment Id : {item?.paymentId} </label>
                <label>Student Subjects : {item?.studentSubjects} </label>
                <label>Student Course : {item?.studentCourse} </label>
                <label>Student Payment Type : {item?.paymentType} </label>
                <label>Student payment Money : {item?.paymentMoney} </label>
              </div>
              <form onSubmit={(e) => updateList(e)}>
                {studentMonth >= 0 && studentMonth <= 2
                  ? null
                  : data.map((item, index) => {
                      if (index > 2) {
                        return index > lastPaidMonth && lastPaidMonth > 2 ? (
                          <div className="form-group">
                            <label>{item}:</label>
                            <input
                              type="checkbox"
                              value={index}
                              onClick={(e) => handleCheck(e)}
                            />
                          </div>
                        ) : (
                          <div className="form-group">
                            <label>{item}:</label>
                            <input
                              type="checkbox"
                              checked={true}
                              value={index}
                            />
                          </div>
                        );
                      }
                      return null;
                    })}
                {lastPaidMonth>=0 && lastPaidMonth<=2
                  ? data1.map((item, index) =>
                      index > lastPaidMonth ? (
                        <div className="form-group">
                          <label>{item}:</label>
                          <input
                            type="checkbox"
                            value={index}
                            onClick={(e) => handleCheck(e)}
                          />
                        </div>
                      ) : (
                        <div className="form-group">
                          <label>{item}:</label>
                          <input type="checkbox" checked={true} value={index} />
                        </div>
                      )
                    )
                  : data1.map((item, index) =>
                       (
                        <div className="form-group">
                          <label>{item}:</label>
                          <input
                            type="checkbox"
                            value={index}
                            onClick={(e) => handleCheck(e)}
                          />
                        </div>
                      ) 
                      
                    )}
                {/* {
                  data1.map((item , index)=>
                    index > lastPaidMonth ? (
                    <div className="form-group">
                      <label>{item}:</label>
                      <input
                        type="checkbox"
                        value={index}
                        onClick={(e) => handleCheck(e)}
                      />
                    </div>
                  ) : (
                    <div className="form-group">
                      <label>{item}:</label>
                      <input type="checkbox" checked={true} value={index} />
                    </div>
                  ))
                } */}

                <button type="submit">Submit</button>
              </form>
            </div>
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default PaymentModal;
