import React, { useEffect, useState } from "react";
import TeacherNav from "./TeacherNav";
import './TeacherProfile.css';


const TeacherProfile = () =>{
  const [details, setDetails] = useState({});
  useEffect(() => {
    setDetails(JSON.parse(localStorage.getItem("teacher")));
  }, []);
    return(
        <>
            <div>
                <TeacherNav/>
                <div
          className="anocontact"
          style={{
            padding: 20,
            position: "absolute",
            top: "38%",
            right: "5%",
            transform: "translateY(-50%)",
            width: "20%",
          }}
        >
          <div
            style={{
              height: 140,
              width: 120,
              backgroundColor: "red",
            }}
          >
            <img
              src=""
              style={{ height: "100%", width: "100%"}}
              alt=""
            />
          </div>
          <div
            className="anocall"
            style={{
              fontSize: "35px",
              fontWeight: "bold",
              color: "#Be2561",
              marginBottom: "20%",
              lineHeight: "normal",
              textAlign: "center",
            }}
          >
            For Any Technical Issue Call{" "}
            <span className="ph">+919382637127</span>
          </div>
        </div>
        <div>
          <h1 style={{ margin: 10 }}>Dashboard {">"} Profile</h1>
          <table
            className="sdtable"
            style={{
              width: "60%",
              overflowX: "scroll",
              overflowY: "scroll",
              height: "100vh",
              border: "none",
              marginLeft: "10px",
            }}
          >
             <tbody>
              <h2
                style={{
                  padding: "10px",
                  height: "65px",
                  border: "2px solid black",
                  marginTop: "15px",
                  width: "200%",
                  marginBottom: "-3px",
                  backgroundColor: "#00ffff",
                }}
              >
                Basic Details
              </h2>
              <tr style={{ border: "2px solid black" }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    width: "50%",
                    margin: 0,
                    fontWeight: "bold",
                  }}
                >
                  Name
                </td>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    width: "50%",
                  }}
                >
                {details.teacherName}
                </td>
              </tr>
              <tr style={{ border: "2px solid black" }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Email
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                 {details.teacherEmail}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Password
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                {details.teacherPassword}
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Course Name
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Batch No.
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Subjects Choose
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
             
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Father's Name
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                 
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Phone No.
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Address
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
              
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Payment Type
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Monthly Fee
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                 
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Admission Fee
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
               
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Blood Group
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  
                </td>
              </tr>
              <tr style={{ border: "2px solid black", padding: 5 }}>
                <td
                  style={{
                    border: "2px solid black",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Catagory
                </td>
                <td style={{ border: "2px solid black", padding: 10 }}>
                  
                </td>
              </tr>
              </tbody>
          </table>
          </div>
            </div>
        </>
    )
}

export default TeacherProfile;