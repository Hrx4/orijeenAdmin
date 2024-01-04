import React,{useState, useEffect} from "react";
import './Form.css';

const NoteForm = () =>{
    const [title, setTitle] = useState('');
  const [classData , setClassData] = useState([]);
  const [classValue, setClassValue] = useState('');
  const [subjectData , setSubjectData] = useState([]);
  const [subjectValue, setSubjectValue] = useState('');
  const [courseData , setCourseData] = useState([]);
  const [courseValue, setCourseValue] = useState('');
  const [batch, setBatch] = useState('Batch 1');
  const [pdf, setPdf] = useState('');
  useEffect(() => {
    const fetchClassValue = async () => {
      try {
        const response = await fetch('https://orijeen-main.vercel.app/class/', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setClassData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchClassValue();
    const fetchSubjectValue = async () => {
      try {
        const response = await fetch('https://orijeen-main.vercel.app/subject/', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setSubjectData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSubjectValue();

    const fetchCourseValue = async () => {
      try {
        const response = await fetch('https://orijeen-main.vercel.app/course/', {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        const result = await response.json();
        setCourseData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCourseValue();
  }, []);



  const handleSubmit =async (e) => {
    e.preventDefault();
  }
    return(
        <>
           <div className="form-container" style={{marginTop:60 , marginBottom:50}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Note Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label style={{marginRight:10}}>Subject:</label>
          <select type="text" value={subjectValue} onChange={(e) => setSubjectValue(e.target.value)} >
          <option value="" selected disabled>Select Your Subject</option>
             {subjectData?.map((item) => (
          <option key={item?.id} value={item?.value}>
            {item?.subjectName}
          </option>
             ))}
          </select>
        </div>

        <div className="form-group">
          <label style={{marginRight:10}}>Class:</label>
          <select  type="text" value={classValue} onChange={(e) => setClassValue(e.target.value)}>
            <option value="" selected disabled>Select Your Class</option>
             {classData?.map((item) => (
          <option key={item?.id} value={item?.value}>
            {item?.className}
          </option>
        ))}
          </select>
        </div>

        <div className="form-group">
          <label style={{marginRight:10}}>Batch:</label>
          <select type="text" value={batch} onChange={(e) => setBatch(e.target.value)}>
            <option value="Batch 1">Batch 1</option>
            <option value="Batch 2">Batch 2</option>
            <option value="Batch 3">Batch 3</option>

          </select>
        </div>

        <div className="form-group">
          <label>Upload File:</label>
          <input type="file" accept=".pdf"   />
        </div>

        <div className="form-group">
          <label  style={{marginRight:10}}>Course:</label>
          <select type="text" value={courseValue} onChange={(e) => setCourseValue(e.target.value)}>
          <option value="" selected disabled>Select Your Course</option>
             {courseData?.map((item) => (
          <option key={item?.id} value={item?.value}>
            {item?.courseName}
          </option>
        ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
        </>
    )
}

export default NoteForm;