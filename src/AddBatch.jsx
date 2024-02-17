import React, { useEffect, useState } from "react";
import BatchDetalis from "./BatchDetalis";
import backend from "./backend";

const AddBatch  = () => {
    const [batchDetails, setBatchDetails] = useState("");
    const [batchList, setBatchList] = useState([]);
    const [check, setCheck] = useState(false);
    const handleBatchDetails = async (e) => {
      e.preventDefault();
  
      try {
        const response = await fetch(`${backend}/batch/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            batchName: batchDetails,
          }),
        });
  
        const resJson = await response.json();
  
        console.log(resJson);
        setCheck(!check);
      } catch (err) {
        console.log(err);
      }
    };
  
    const getList = async () => {
      try {
        const response = await fetch(`${backend}/batch/`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
  
        const resJson = await response.json();
  
        console.log(resJson);
        setBatchList(resJson);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getList();
    }, [check]);
  
    return (
      <div style={{ marginTop: 40, margin: 20, width: "100%" }}>
        <h1 className="dHeading" style={{ marginLeft: 15 }}>
          Add Batch
        </h1>
        <form
          style={{ marginLeft: 10, width: "20%" }}
          onSubmit={handleBatchDetails}
        >
          <input
            style={{ height: 50 }}
            type="text"
            placeholder="Enter Your Batch Name"
            value={batchDetails}
            onChange={(e) => setBatchDetails(e.target.value)}
          />
  
          <button style={{ marginTop: 10 }}>Submit</button>
        </form>
  
        {<BatchDetalis batchList={batchList} />}
      </div>
    );
  };
  

export default AddBatch;