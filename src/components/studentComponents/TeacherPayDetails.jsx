import React,{useState} from "react";
import TeacherPayHistory from "./TeacherPayHistory";



const TeacherPayDetails = () =>{
    const [teacherpayHistory, setTeacherPayHistory] = useState();

    const handleAllTeacherTable = () => {
        setTeacherPayHistory("teacherPaymentHistory");
    }
    return(
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
          <tbody>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td style={{ border: "1px solid #000", padding: "8px" }}>1</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>Pamela</td>
              <td style={{ border: "1px solid #000", padding: "8px" }}>
              <button>
                  Add Payment
                </button>{" "}
                <button onClick={() =>{handleAllTeacherTable()}}>
                  View Payments
                </button>
              </td>
            </tr>
          </tbody>
          </table>
          </div>
          {teacherpayHistory === "teacherPaymentHistory" ? (
        <TeacherPayHistory/>
      ) : null}
        </>
    )
}


export default TeacherPayDetails;