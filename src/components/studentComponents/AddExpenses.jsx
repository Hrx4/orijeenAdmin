import React, { useState } from "react";
import { Button } from "@mui/material";
import backend from "../../backend";

const AddExpenses = () => {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend}/expense/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          expenseTitle: expenseTitle,
          expenseDescription: description,
          expenseAmount: amount,
          expenseDate: date,
        }),
      });

      const resJson = await response.json();
      alert("expense added");
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className="form-container"
        style={{ marginTop: 60, marginBottom: 50 }}
      >
        <form>
          <h1>Add Your Expense:</h1>
          <div className="form-group">
            <label>Expense Title:</label>
            <input
              type="text"
              value={expenseTitle}
              onChange={(e) => setExpenseTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>{" "}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <Button onClick={handleSubmit} variant="contained">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default AddExpenses;
