import React, { useState } from "react";
import backend from './backend'

const AddNotification = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState([]);
  const [link, setLink] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true)

    try {
      const res = await fetch(`${backend}/notification/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          notificationTitle: title,
          notificationDetails: details,
          notificationLink: link,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        console.log("fine");
        setTitle("");
        setTitle("");
        setLink("");
        alert("form submitted");
      } else {
        alert("all field required");
        console.log("Some error occured");
      }
    } catch (err) {
      alert("all field required");
      console.log(err);
    }
  };

  return (
    <>
      <>
        <div
          className="form-container"
          style={{ marginTop: 60, marginBottom: 50 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Note Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Note Details:</label>
              <input
                type="text"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Note Link:</label>
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    </>
  );
};

export default AddNotification;
