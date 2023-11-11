import React from "react";
import { Route, Routes } from "react-router";
import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";
import SnavBar from "./SnavBar";

function App() {

  return (
   
    <div >
      {/* <Navbar/> */}
      <SnavBar/>
      
      <Routes>        
        <Route path="/" element={<Admin/>} />
        <Route path="/superadmin" element={<SuperAdmin/>}/>       
      </Routes>
    </div>
  );
}

export default App;