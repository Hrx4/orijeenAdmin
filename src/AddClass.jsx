import React, { useEffect, useState } from "react";
import ClassDetails from "./ClassDetails";
import backend from './backend'

const AddClass = () => {
  const [classDetails, setClassDetails] = useState("");
  const [classList, setClassList] = useState([]);
  const [check, setCheck] = useState(false);
  const handleClassDetails = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backend}/class/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          className: classDetails,
        }),
      });

      const resJson = await response.json();

      console.log(resJson);
      setCheck(!check);
      alert("Class Added")
        setClassDetails("")
    } catch (err) {
      console.log(err);
    }
  };

  const getList = async () => {
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

  useEffect(() => {
    getList();
  }, [check]);

  return (
    <div style={{ marginTop: 40, margin: 20, width: "100%" }}>
      <h1 className="dHeading" style={{ marginLeft: 15 }}>
        Add Class
      </h1>
      <form
        style={{ marginLeft: 10, width: "20%" }}
        onSubmit={handleClassDetails}
      >
        <input
          style={{ height: 50 }}
          type="text"
          placeholder="Enter Your Class Name"
          value={classDetails}
          onChange={(e) => setClassDetails(e.target.value)}
        />

        <button style={{ marginTop: 10 }}>Submit</button>
      </form>

      {<ClassDetails classList={classList} />}
    </div>
  );
};

export default AddClass;
