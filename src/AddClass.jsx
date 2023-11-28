import React, { useState } from "react";
import ClassDetails from "./ClassDetails";

const AddClass = () => {
    const [classDetails, setClassDetails] = useState();
    const handleClassDetails = (e) => {
        e.preventDefault();
        setClassDetails('classDetails')
    }
    return (
        <div style={{ marginTop: 40, margin: 20, width: "100%" }}>
            <h1 className="dHeading" style={{ marginLeft: 15 }}>
                Add Class
            </h1>
            <form style={{ marginLeft: 10, width: "20%" }} onSubmit={handleClassDetails}>
                <input style={{ height: 50 }} type="text" placeholder="Enter Your Class Name" />

                <button style={{ marginTop: 10 }}>Submit</button>
            </form>


            {
                (classDetails === 'classDetails') ?
                    <ClassDetails /> :
                    null
            }
        </div>
    )
}

export default AddClass;