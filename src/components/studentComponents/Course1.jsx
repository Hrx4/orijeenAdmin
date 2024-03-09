import React from "react";
import "./Table.css";
import "./Classnote.css";

const Course1 = ({noteList}) => {

  return (
    <>
      <div>
       
       
        {noteList.length !== 0 ? (
          <>
            <h1 style={{ margin: 10 }}>
              Class Note
            </h1>
            <table
              className="sdtable"
              style={{
                width: "60%",
                overflowX: "scroll",
                overflowY: "scroll",
                height: "50vh",
                border: "none",
                marginLeft: "10px",
              }}
            >
              <thead>
                <tr style={{ border: "2px solid black" }}>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Note Name
                  </th>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Class
                  </th>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Sub
                  </th>
                  <th
                    style={{
                      border: "2px solid black",
                      padding: 10,
                      margin: 0,
                      fontWeight: "bold",
                    }}
                  >
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                {noteList?.map((item, index) => (
                  <tr>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      {item.noteTitle}
                    </td>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      {item.noteClass}
                    </td>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      {item.noteSubject}
                    </td>
                    <td style={{ border: "2px solid black", padding: 10 }}>
                      <button
                        className=" dlB"
                        component="label"
                        variant="contained"
                      >
                        <a
                          href={item.notePdf}
                          style={{ color: "white" }}
                          download={true}
                        >
                          Download
                        </a>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) 
        : (
          <div style={{ marginTop: 90, marginLeft: 20 }}>
            <h2>No Note Available</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Course1;
