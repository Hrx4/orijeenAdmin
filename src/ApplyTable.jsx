import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Table.css";
import "./Form.css";
import backend from './backend'


const ApplyTable = () => {
  const [applyList, setApplyList] = useState([]);

  const handleDelete = async (id) => {
    const key = JSON.parse(id);
    console.log("====================================");
    console.log(key, id);
    console.log("====================================");

    try {
      const response = await fetch(`${backend}/apply/${key}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      await response.json();
      console.log("====================================");
      console.log(response);
      console.log("====================================");

      setApplyList([
        ...applyList.filter((item) => item._id !== id),
      ]);
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleApplyTable = async () => {
  
      try {
        const response = await fetch(`${backend}/apply/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
  
        const resJson = await response.json();
  
        if (response.status === 200) {
          setApplyList(resJson);
          console.log("====================================");
          console.log(resJson);
          console.log("====================================");
        } else {
          console.log("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleApplyTable()

  }, [])
  

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
                  Phn No.
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>Class</th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Course
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Message
                </th>
                <th style={{ border: "1px solid black", padding: 5 }}>
                  Buttons
                </th>
              </tr>
            }
            {applyList.map((item) => (
              <tr
                style={{ border: "1px solid black", padding: 5 }}
                key={item._id}
                onClick={() => {
                  console.log(item._id);
                }}
              >
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.applyName}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.applyEmail}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.applyPhone}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.applyClass}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.applyCourse}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item.applyMessage}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button
                    style={{ marginBottom: 5 }}
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => handleDelete(JSON.stringify(item._id))}
                  >
                    Delete
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

export default ApplyTable;
