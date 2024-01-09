import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import backend from './backend'

const AllNotification = () => {
  const [notificationData, setNotificationData] = useState([]);

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
                    // onClick={()=>CustomerModalOpen(
                    //      item._id,item.noteTitle , item.noteSubject , item.noteClass , item.noteBatch , item.noteImage , item.notePdf, item.noteCourse
                    // )}
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllNotification;
