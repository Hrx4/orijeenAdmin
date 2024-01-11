import { Box, Button, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import backend from './backend'

const AllNotification = () => {
  const [notificationData, setNotificationData] = useState([]);
  const [table, setTable] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);


  const handleContactTable = async () => {
    try {
      const response = await fetch(`${backend}/notification/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setNotificationData(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${backend}/notification/${id}/`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      await response.json();

      // props.setApplyList( [...props.applyList.filter(item => item._id !== id)]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend}/notification/${table._id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notificationTitle : table.notificationTitle,
          notificationLink : table.notificationLink,
          notificationDetails : table.notificationDetails
        }),
      });

      const resJson = await response.json();
      alert("Notification Updated");
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
  };

const handleChange =(item)=>{
  setModalOpen(true)
  setTable(item)
}

  useEffect(() => {
    handleContactTable();
  }, []);

  return (
    <>
      <div
        className="table-scroll"
        style={{
          width: "100%",
          overflowX: "scroll",
          overflowY: "scroll",
          padding: 10,
          height: "100vh",
        }}
      >
        <table>
          <tbody>
            {
              <tr>
                <th style={{ border: "1px solid black", padding: 5 }}>Title</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Details
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Link
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Buttons
                </th>
              </tr>
            }
            {notificationData?.map((item) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.notificationTitle}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.notificationDetails}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.notificationLink}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button
                    onClick={() => handleDelete(item._id)}
                    style={{ marginBottom: 5 }}
                    variant="contained"
                    color="error"
                    size="small"
                  >
                    Delete
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={()=>handleChange(item)}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
          <form onSubmit={handleSubmit}>
          <h1>Notification Details:</h1>
          <div className="form-group">
            <label>Notification Title:</label>
            <input
              type="text"
              value={table.notificationTitle}
              onChange={(e) => setTable({...table , notificationTitle : e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Notification Link:</label>
            <input
              type="text"
              value={table.notificationLink}
              onChange={(e) => setTable({...table , notificationLink : e.target.value})}
            />
          </div>{" "}
          <div className="form-group">
            <label>Notification Details:</label>
            <input
              type="text"
              value={table.notificationDetails}
              onChange={(e) => setTable({...table , notificationDetails : e.target.value})}
            />
          </div>        
          
          
          <button type="submit">Submit</button>
        </form>
        </Box>
      </Modal>
    </>
  );
};

export default AllNotification;
