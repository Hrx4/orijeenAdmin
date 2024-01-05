import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TeacherPayDetails from "./TeacherPayDetails";
// import TeacherPayHistory from "./TeacherPayHistory";

const TeacherPayment = () => {
  const [teacher, setTeacher] = useState();
  const [teacherPayDetails, setTeacherPayDetails] = useState();
  const [teacherPayList, setteacherPayList] = useState([]);
  const [routeKey, setRouteKey] = useState("");

  const [teacherData, setTeacherData] = useState([]);
  const handleContactTable = async () => {
    try {
      const response = await fetch(`https://orijeen-main.vercel.app/teacher/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setTeacherData(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleTeacherPayment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://orijeen-main.vercel.app/teacher/payment/${routeKey}/`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const resJson = await response.json();

      if (response.status === 200) {
        setteacherPayList(resJson);
        setTeacherPayDetails("addTeacherPayDetails");
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await fetch(
  //       `https://orijeen-main.vercel.app/teacher/${id}/`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     await response.json();

  //     // props.setApplyList( [...props.applyList.filter(item => item._id !== id)]);
  //     window.location.reload(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    handleContactTable();
  }, []);

  return (
    <>
      <div className="PayBox" style={{ marginTop: 40, margin: 20 }}>
        <h1 id="heading" style={{ marginBottom: "15px" }}>
          Teacher Payment
        </h1>
        <div style={{ border: "2px solid rgb(30, 144, 255)", padding: 20 }}>
          <h2 style={{ textTransform: "capitalize" }}>Select Teacher</h2>
          <form onSubmit={handleTeacherPayment}>
            <label style={{ marginBottom: 10 }}>Teacher Name:</label>

            <Box>
              <FormControl
                style={{ width: "60%", backgroundColor: "white" }}
                className="student__field"
              >
                <InputLabel style={{ color: "black" }}>
                  Select Your Teacher
                </InputLabel>
                <Select
                  // value={courseForPay}
                  label=""
                  // onChange={(e) => setCourseForPay(e.target.value)}
                  style={{ color: "black" }}
                  value={teacher}
                  onChange={(e) => {
                    setTeacher(e.target.value);
                  }}
                >
                  {teacherData?.map((item, index) => (
                    <MenuItem
                      value={item.teacherName}
                      onClick={() => setRouteKey(item._id)}
                    >
                      {item.teacherName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <button style={{ marginTop: 15 }}>Submit</button>
          </form>
        </div>
        {teacherPayDetails === "addTeacherPayDetails" ? (
          <TeacherPayDetails teacherPayList={teacherPayList} />
        ) : null}
      </div>
    </>
  );
};

export default TeacherPayment;
