import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";
import backend from "./backend";
import { FaArrowCircleLeft, FaUserCircle } from "react-icons/fa";

const AnsPage = ({
  close,
  setClose,
  answerList,
  setAnswerList,
  answerId,
  setAnswerId,
  itemDetails,
  setItemDetails,
}) => {
  const [open, setOpen] = useState(false);

  const [answer, setAnswer] = useState("");
  const [answerePhoto, setAnswerePhoto] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [loading, setLoading] = useState(false);

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
          setAnswerePhoto(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)

    try {
      const res = await fetch(`${backend}/answer/${answerId}/`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answers: {
            name: name,
            position: position,

            answerTitle: answer,
            answerPhoto: answerePhoto,
          },
        }),
      });
      // let resJson = await res.json();
      if (res.status === 201) {
        console.log("fine");

        alert("form submitted");
        window.location.reload(true);
        setOpen(false);
      } else {
        alert("all field required");
        console.log("Some error occured");
      }
    } catch (err) {
      alert("all field required");
      console.log(err);
    }
    // setLoading(false)
  };
  return (
    <>
      {loading ? (
        <div className="loader" style={{ color: "black" }}>
          Please Wait Your File is Uploading......
          <CircularProgress />
        </div>
      ) : null}
      <div
        style={{
          marginRight: "10%",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: 20,
          width: "100%",
        }}
      >
        <div style={{ marginLeft: "-10%" }}>
          <FaArrowCircleLeft
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => setClose(!close)}
          />
        </div>
        <h2
          style={{
            color: "hsl(210,77%,46%)",
          }}
        >
          {itemDetails.title}
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        >
          <span
            style={{
              marginRight: "10px",
              fontWeight: "bold",
              fontSize: "small",
            }}
          >
            Asked by : {itemDetails.name}
          </span>
        </div>
        <hr />
        <div>
          <h3>Description:</h3>
          <p style={{ fontSize: "large" }} className="ansDescrip">
            {itemDetails.description}
          </p>
          {itemDetails.photo !== "" ? (
            <img style={{ width: "50%" }} src={itemDetails.photo} alt="" />
          ) : null}
          <h3>Your Answer:</h3>
          <textarea
            style={{ width: "100%", height: "200px" }}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>
          <label>Upload Your Answer picture:</label>
          <input type="file" accept="image/*" onChange={uploadFiles} />
          <Button
            variant="contained"
            style={{ marginTop: "10px", textTransform: "capitalize" }}
            onClick={() => {
              setOpen(true);
            }}
          >
            Submit
          </Button>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "black",
              marginTop: 20,
            }}
          ></div>
          <h4>Answers</h4>
          <ul style={{ gap: 10, display: "flex", flexDirection: "column" }}>
            {answerList?.map((item, index) => (
              <li
                style={{
                  width: "90%",
                  border: "1px solid black",
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <div style={{ display: "block", width: "100%" }}>
                  <div>{item?.answerTitle}</div>
                  {item.answerPhoto !== "" ? (
                    <img
                      style={{ width: "50%", marginTop: 10 }}
                      src={item.answerPhoto}
                      alt=""
                    />
                  ) : null}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "black",
                    marginTop: 20,
                  }}
                ></div>
                Posted By : <FaUserCircle /> Kamal
              </li>
            ))}
          </ul>
        </div>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 370,
              height: 300,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
            }}
          >
            <form>
              {/* <label for="profilePicture">Upload a profile picture:</label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
              /> */}
              <label for="name">Name: *</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label
                for="positionDropdown"
                style={{ margin: "10px", marginLeft: "0px" }}
              >
                Position: *
              </label>
              <select
                id="positionDropdown"
                required
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="" selected disabled>
                  Select Your Position
                </option>
                <option value="superAdmin">Super admin</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
              <br />

              <Button
                variant="contained"
                style={{
                  margin: "15px",
                  position: "absolute",
                  right: "15px",
                  bottom: "10px",
                  textTransform: "capitalize",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default AnsPage;
