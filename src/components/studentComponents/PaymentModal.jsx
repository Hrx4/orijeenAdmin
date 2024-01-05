import { Box, Modal } from "@mui/material";
import React, { useState } from "react";
// import backend from "../../backend";

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
    "Ovtober",
    "November",
    "December",
  ];

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
      const response = await fetch(
        `https://orijeen-main.vercel.app/teacher/${paymentId}/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentMonth: studentSubjects,
            paymentYear: lastPaidYear,
          }),
        }
      );

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
        onClose={() => setModalOpen(false)}
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
          {paymentList?.map((item, index) => (
            <div style={{ width: "auto" }} className="form-container">
              <div className="form-group">
                <label>Teacher Name : {item?.teacherName} </label>
                <label>Teacher Subject : {item?.teacherSubject} </label>
                <label>teacher Course : {item?.teacherCourse} </label>
                <label>teacher payment Money : {item?.paymentMoney} </label>
              </div>
              <form onSubmit={(e) => updateList(e)}>
                {data.map((item, index) =>
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
                )}

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
