import React, { useState } from "react";
import { Button } from "@mui/material";

const AddExpenses = () => {
    const [expenseTitle, setExpenseTitle] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(); 

    return (
        <>
            <div className="form-container" style={{ marginTop: 60, marginBottom: 50 }}>
                <form >
                    <h1>Add Your Expense:</h1>
                    <div className="form-group">
                        <label>Expense Title:</label>
                        <input type="text" value={expenseTitle} onChange={(e) => setExpenseTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Amount:</label>
                        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>{" "}
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <Button variant="contained">Submit</Button>
                </form>
            </div>
        </>
    )
}

export default AddExpenses;