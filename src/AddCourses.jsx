import React , {useState} from "react";
import CourseDetails from "./CourseDetails";


const AddCourses = () =>{
    const [subjectDetails, setSubjectDetails] = useState();
    const handleSubjectDetails = async (e) => {
        e.preventDefault();
        setSubjectDetails('subjectDetails')

        try {
            const response = await fetch(`https://orijeen-main.vercel.app/course/`, {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: {
                courseName : CourseDetails
              }
            });
      
            const resJson = await response.json();
      
            console.log(resJson);
          } catch (err) {
            console.log(err);
          }
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