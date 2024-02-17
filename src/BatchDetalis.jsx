import React from 'react'
import backend from './backend';
import { Button } from '@mui/material';

const BatchDetalis = ({ batchList }) => {
    const handleDelete = async (id) => {
      try {
        const response = await fetch(`${backend}/batch/${id}/`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
  
        await response.json();
  
        // props.setApplyList( [...props.applyList.filter(item => item._id !== id)]);
        window.location.reload(true);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div style={{ marginTop: 150 }}>
        <div>
          <table
            style={{
              borderCollapse: "collapse",
              width: "70%",
              border: "1px solid #000",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={{ border: "1px solid #000", padding: "8px" }}>Id</th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>Name</th>
                <th style={{ border: "1px solid #000", padding: "8px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {batchList?.map((item, index) => (
                <tr key={item._id} style={{ backgroundColor: "#f2f2f2" }}>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {index + 1}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    {item.batchName}
                  </td>
                  <td style={{ border: "1px solid #000", padding: "8px" }}>
                    <Button
                      onClick={() => handleDelete(item._id)}
                      style={{ margin: 5 }}
                      variant="contained"
                      color="error"
                      size="small"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default BatchDetalis