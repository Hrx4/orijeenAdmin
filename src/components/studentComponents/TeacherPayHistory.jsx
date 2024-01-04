import React from "react";


const TeacherPayHistory = () =>{
    return(
        <>
             <div className='table-scroll' style={{marginTop:40 , overflowX:"scroll",overflowY:"scroll",width:'100%'}}>
            <table  style={{borderCollapse: 'collapse', width:'100%', border: '1px solid #000'}}>
                <thead >
                    <tr style={{backgroundColor: '#f2f2f2'}}>
                        <th style={{border: '1px solid #000', padding: '8px', width:'25px'}}>ID</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Year</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Month</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Payment Type</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Paid</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Date</th>
                        <th style={{border: '1px solid #000', padding: '8px'}}>Action</th>
                    </tr>
                    </thead>
                    <tbody >

                    </tbody>
                    </table>
                    </div>
        </>
    )
}

export default TeacherPayHistory;