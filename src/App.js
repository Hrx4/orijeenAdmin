import React from "react";
import { Route, Routes } from "react-router";
import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";

function App() {

  return (
   
    <div >
      
      
      <Routes>        
        <Route path="/" element={<Admin/>} />
        <Route path="/superadmin" element={<SuperAdmin/>}/>       
      </Routes>
    </div>
  );
}

export default App;