import React , {useState} from "react";
import CourseDetails from "./CourseDetails";


const AddCourses = () =>{
    const [subjectDetails, setSubjectDetails] = useState();
    const handleSubjectDetails = (e) => {
        e.preventDefault();
        setSubjectDetails('subjectDetails')
    }
    return(
        <div style={{ marginTop: 40, margin: 20, width: "100%" }}>
        <h1 className="dHeading" style={{ marginLeft: 15 }}>
            Add Course
        </h1>
        <form style={{ marginLeft: 10, width: "20%" }} onSubmit={handleSubjectDetails}>
            <input style={{ height: 50 }} type="text" placeholder="Enter Your Subject" />

            <button style={{ marginTop: 10 }}>Submit</button>
        </form>


        {
            (subjectDetails === 'subjectDetails') ?
                <CourseDetails /> :
                null
        }
    </div>
    )
}

export default AddCourses;