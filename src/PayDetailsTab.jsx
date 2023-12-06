import React from "react";



const PayDetailsTab = () =>{
    return(
        <div style={{ marginTop: 150 }}>
        <div>
          <table
            style={{
              borderCollapse: "collapse",
              width: "100%",
              border: "1px solid #000",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ border: "1px solid #000", padding: "8px" }}>Id</th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Name
                </th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
                <tr  style={{ border: "1px solid black", padding: 5 }}>
                <td style={{ border: "1px solid #000", padding: "8px" }}>1
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                Pamela
                </td>
                <td style={{ border: "1px solid #000", padding: "8px" }}>
                  <button style={{width:150}}>
                    Add Payment
                  </button>{" "}
                  <button style={{width:150}}>
                    View Payments
                  </button>
                </td>
                </tr>
            </tbody>
            </table>
            </div>
            </div>
    )
}

export default PayDetailsTab;