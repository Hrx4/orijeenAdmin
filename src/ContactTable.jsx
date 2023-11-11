import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import "./Table.css";
import "./Form.css";

const ContactTable = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);
  const [updateId, setUpdateId] = useState("");

  const handleCustomerClose = () => setModal(false);

  const CustomerModalOpen = (
    id,
    contactName,
    contactEmail,
    contactPhone,
    contactMessage
  ) => {
    const key = id;
    setUpdateId(key);
    setName(contactName);
    setEmail(contactEmail);
    setPhone(contactPhone);
    setMessage(contactMessage);
    setModal(true);
  };

  const handleDelete = async (id) => {
    const key = JSON.parse(id);
    console.log("====================================");
    console.log(key, id);
    console.log("====================================");

    try {
      const response = await fetch(
        `https://orijeen-main.vercel.app/contact/${key}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      await response.json();
      console.log("====================================");
      console.log(response);
      console.log("====================================");

      props.setContactList([
        ...props.contactList.filter((item) => item._id !== id),
      ]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const updateList = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://orijeen-main.vercel.app/contact/${updateId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contactName: name,
            contactEmail: email,
            contactPhone: phone,
            contactMessage: message,
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
    window.location.reload();
  };

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
                <th style={{ border: "1px solid black", padding: 5 }}>Name</th>
                <th style={{ border: "1px solid black", padding: 5 }}>Email</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Phone Number
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Message
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Buttons
                </th>
              </tr>
            }
            {props.contactList.map((item) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.contactName}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.contactEmail}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.contactPhone}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.contactMessage}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button
                    style={{ marginBottom: 5, marginLeft: 5 }}
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(JSON.stringify(item._id))}
                  >
                    Delete
                  </Button>
                  <Button
                    style={{ marginBottom: 5, marginLeft: 5 }}
                    variant="contained"
                    color="success"
                    size="small"
                    onClick={() =>
                      CustomerModalOpen(
                        item._id,
                        item.contactName,
                        item.contactEmail,
                        item.contactPhone,
                        item.contactMessage
                      )
                    }
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
        open={modal}
        onClose={handleCustomerClose}
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
          <div style={{ width: "auto" }} className="form-container">
            <form onSubmit={updateList}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email:</label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Message:</label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ContactTable;
