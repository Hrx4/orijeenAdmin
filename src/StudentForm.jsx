import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import "./StudentForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CircularProgress } from "@mui/material";
import backend from './backend'

const StudentForm = () => {
  const [studentEnrollment, setStudentEnrollment] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentDoj, setStudentDoj] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [studentCourse, setStudentCourse] = useState([]);
  const [fatherName, setFatherName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [studentAddress, setStudentAddress] = useState("");
  const [studentPaymentType, setStudentPaymentType] =
    useState("Monthly Payment");
  const [studentSubjects, setstudentSubjects] = useState([]);
  const [monthlyFee, setMonthlyFee] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [category, setCategory] = useState("General");
  const [classList, setClassList] = useState([]);
  const [subjectList, setSubjectList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [batch, setBatch] = useState("Batch A");
  const [isChecked, setChecked] = useState(false);
  const [admissionAmount, setAdmissionAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (!isChecked) {
      setAdmissionAmount("");
    }
  };

  const uploadFiles = async (e) => {
    const { files } = e.target;
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "solardealership");
    data.append("cloud_name", "dkm3nxmk5");
    await fetch("https://api.cloudinary.com/v1_1/dkm3nxmk5/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (files[0].type === "image/jpeg" || files[0].type === "image/png")
          setPhoto(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const getSubjectList = async () => {
    try {
      const response = await fetch(`${backend}/subject/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      console.log(resJson);
      setSubjectList(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  const getCourseList = async () => {
    try {
      const response = await fetch(`${backend}/course/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      console.log(resJson);
      setCourseList(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  const getClassList = async () => {
    try {
      const response = await fetch(`${backend}/class/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      console.log(resJson);
      setClassList(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = (e) => {
    e.target.checked
      ? setstudentSubjects([...studentSubjects, e.target.value])
      : setstudentSubjects([
          ...studentSubjects.filter((item) => item !== e.target.value),
        ]);
  };

  const handleCheck1 = (e) => {
    e.target.checked
      ? setStudentCourse([...studentCourse, e.target.value])
      : setStudentCourse([
          ...studentCourse.filter((item) => item !== e.target.value),
        ]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)
    const d = new Date();
    // Handle form submission here (e.g., send the data to the server)
    console.log(password);
    try {
      const res = await fetch(`${backend}/student/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEnrollment: studentEnrollment,
          studentName: studentName,
          studentDoj: studentDoj,
          studentClass: studentClass,
          studentBatch: batch,
          studentPassword: password,
          studentPhoto: photo,
          studentCourse: studentCourse,
          studentSubjects: studentSubjects,
          studentPhone: studentPhone,
          studentAddress: studentAddress,
          studentPaymentType: studentPaymentType,
          studentFee: monthlyFee,
          studentBlood: bloodGroup,
          studentCategory: category,
          guardianName: fatherName,
          admissionAmount: admissionAmount,
          createdMonth: d.getMonth(),
          createdYear: d.getFullYear(),
        }),
      });
      // let resJson = await res.json();

      if (res.status === 200) {
        console.log("fine");

        toast.success("Form submitted", {
          position: toast.POSITION.TOP_CENTER,
        });
        setStudentEnrollment("");
        setStudentName("");
        setStudentClass("");
        setBatch("");
        setStudentCourse("");
        setSubjectList([]);
        setStudentPhone("");
        setStudentAddress("");
        setStudentPaymentType("");
        setFatherName("");
      } else {
        toast.error("All field fill required", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Some error occured");
      }
    } catch (err) {
      toast.error("All field fill required", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.log(err);
    }

    // setLoading(false)
  };

  useEffect(() => {
    getClassList();
    getSubjectList();
    getCourseList();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <ToastContainer />
      <div className="add-form">
        <form onSubmit={handleSubmit}>
          <div className="form-part">
            <h2 className="studentHeading">Student Details</h2>
            <div style={{ marginLeft: 40 }}>
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Student Enrollment No.
              </label>
              <br />
              <input
                type="text"
                className="student__field"
                value={studentEnrollment}
                onChange={(e) => setStudentEnrollment(e.target.value)}
                required
              />
            </div>

            <div style={{ marginLeft: 40 }}>
              <label style={{ marginRight: 10, marginTop: 10 }}>password</label>
              <br />
              <input
                type="text"
                className="student__field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div style={{ marginLeft: 40 }}>
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Student Name
              </label>
              <br />
              <input
                type="text"
                className="student__field"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
              />
            </div>
            <div style={{ marginLeft: 40 }}>
              <label style={{ marginRight: 10, marginTop: 10 }}>
Admission Date              </label>
              <br />
              <input
                type="date"
                className="student__field"
                value={studentDoj}
                onChange={(e) => setStudentDoj(e.target.value)}
                required
              />
            </div>

            <div style={{ marginLeft: 40 }}>
              <label style={{ marginRight: 10, marginTop: 10 }}>Class</label>
              <br />

              <Box sx={{ minWidth: 120 }}>
                <FormControl
                  style={{ width: "60%", backgroundColor: "white" }}
                  className="student__field"
                >
                  <InputLabel style={{ color: "black" }}>
                    Select Your Class
                  </InputLabel>
                  <Select
                    // value={courseForPay}
                    label=""
                    // onChange={(e) => setCourseForPay(e.target.value)}
                    style={{ color: "black" }}
                    value={studentClass}
                    onChange={(e) => {
                      setStudentClass(e.target.value);
                    }}
                  >
                    {classList?.map((item, index) => (
                      <MenuItem value={item.className}>
                        {item.className}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </div>

            <div
              style={{
                marginLeft: 40,
                marginTop: 20,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Courses <br />
              {courseList?.map((item, index) => (
                <label
                  className="checkbox"
                  style={{ marginRight: 10, fontWeight: "lighter" }}
                >
                  <input
                    type="checkbox"
                    name="subject"
                    value={item.courseName}
                    onClick={(e) => handleCheck1(e)}
                  />{" "}
                  {item.courseName}
                </label>
              ))}
            </div>

            <div
              style={{
                marginLeft: 40,
                marginTop: 20,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Subject <br />
              {subjectList?.map((item, index) => (
                <label
                  className="checkbox"
                  style={{ marginRight: 10, fontWeight: "lighter" }}
                >
                  <input
                    type="checkbox"
                    name="subject"
                    value={item.subjectName}
                    onClick={(e) => handleCheck(e)}
                  />{" "}
                  {item.subjectName}
                </label>
              ))}
            </div>

            <div style={{ marginLeft: 40 }}>
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Father's Name
              </label>
              <br />
              <input
                type="text"
                className="student__field"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
              />
              <div style={{ marginTop: 15 }}>
                <label>Image:</label>
                <br />
                <input
                  className="student__field"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div style={{ marginLeft: 40 }}>
              <label
                style={{ marginRight: 10, marginTop: 10, marginBottom: 5 }}
              >
                Batch No.
              </label>
              <br />
              <select
                className="student__field"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                required
              >
                <option>Batch A</option>
                <option>Batch B</option>
                <option>Batch C</option>
              </select>
            </div>
          </div>

          <div className="form-part" id="rightForm">
            <div className="Guardian">
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Phone no.
              </label>
              <br />
              <input
                type="text"
                className="student__field"
                value={studentPhone}
                onChange={(e) => setStudentPhone(e.target.value)}
                required
              />
            </div>

            <div className="Guardian">
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Photo of student
              </label>
              <br />
              <input
                type="file"
                className="student__field"
                accept="image/*"
                onChange={uploadFiles}
                required
              />
            </div>
            <div className="Guardian">
              <label style={{ marginRight: 10, marginTop: 10 }}>Address</label>
              <br />
              <input
                type="text"
                className="student__field"
                value={studentAddress}
                onChange={(e) => setStudentAddress(e.target.value)}
                required
              />
            </div>
            <div className="Guardian">
              <label
                style={{ marginRight: 10, marginTop: 10, marginBottom: 10 }}
              >
                Payment Type
              </label>
              <br />
              <select
                className="student__field"
                value={studentPaymentType}
                onChange={(e) => setStudentPaymentType(e.target.value)}
                required
              >
                <option>Monthly Payment</option>
                <option>Quarterly Payment</option>
                <option>Yearly Payment</option>
              </select>
            </div>
            <div className="Guardian">
              <label style={{ marginRight: 10, marginTop: 10 }}>
                Monthly Fee
              </label>
              <br />
              <input
                type="text"
                className="student__field"
                value={monthlyFee}
                onChange={(e) => setMonthlyFee(e.target.value)}
                required
              />
            </div>
            <div className="Guardian">
              <label
                className="checkbox"
                style={{ marginRight: 10, marginTop: 10 }}
              >
                Admission Fee
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{ marginLeft: 10 }}
                />
              </label>
              {isChecked && (
                <div className="Guardian">
                  <input
                    type="text"
                    placeholder="Admission Amount"
                    className="student__field"
                    value={admissionAmount}
                    onChange={(e) => setAdmissionAmount(e.target.value)}
                  />
                </div>
              )}
            </div>
            <div className="Guardian">
              <label style={{ marginRight: "10px", marginTop: 10 }}>
                Blood Group
              </label>
              <br />
              <input
                type="text"
                className="student__field"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                required
              />
            </div>
            <div className="Guardian">
              <label
                style={{ marginRight: 10, marginTop: 10, marginBottom: 10 }}
              >
                Category{" "}
              </label>
              <br />
              <select
                className="student__field"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option>General</option>
                <option>SC/ST</option>
                <option>OBC</option>
              </select>
            </div>

            <div className="Guardian">
              <button style={{ marginTop: 15 }}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default StudentForm;
