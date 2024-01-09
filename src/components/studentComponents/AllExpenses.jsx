import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import backend from "../../backend";

const AllExpenses = () => {
  const [expenseData, setExpenseData] = useState([]);
  const handleContactTable = async () => {
    try {
      const response = await fetch(`${backend}/expense/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const resJson = await response.json();

      if (response.status === 200) {
        setExpenseData(resJson);
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${backend}/expense/${id}/`, {
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
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: 5 }}>
                Expense Title
              </th>
              <th style={{ border: "1px solid black", padding: 5 }}>
                Description
              </th>
              <th style={{ border: "1px solid black", padding: 5 }}>Amount</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Date</th>
              <th style={{ border: "1px solid black", padding: 5 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {expenseData?.map((item, index) => (
              <tr>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.expenseTitle}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.expenseDescription}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.expenseAmount}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  {item?.expenseDate}
                </td>
                <td style={{ border: "1px solid black", padding: 5 }}>
                  <Button variant="contained">Edit</Button>{" "}
                  <Button
                    onClick={() => handleDelete(item._id)}
                    variant="contained"
                    color="error"
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

export default AllExpenses;
