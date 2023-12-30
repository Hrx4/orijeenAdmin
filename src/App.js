import React from "react";
import { Route, Routes } from "react-router";
import Admin from "./Admin";
import SuperAdmin from "./SuperAdmin";
import StudentPanel from "./components/studentComponents/StudentPanel";
import StudentProfile from "./components/studentComponents/StudentProfile";
import UpdateProfile from "./components/studentComponents/UpdateProfile";
import ClassNote from "./components/studentComponents/ClassNote";
import Result from "./components/studentComponents/Result";
import Payment from "./components/studentComponents/Payment";
import Routine from "./components/studentComponents/Routine";
import Notification from "./components/studentComponents/Notification";
import QueryForm from "./components/studentComponents/QueryForm";
import Support from "./components/studentComponents/Support";
function App() {

  return (

    <div >
      <Routes>
        <Route  path="/profile" element={<StudentProfile />} />
        <Route  path="/updateprofile" element={<UpdateProfile />} />
        <Route  path="/classnote" element={<ClassNote />} />
        <Route  path="/result" element={<Result />} />
        <Route  path="/payment" element={<Payment />} />
        <Route  path="/routine" element={<Routine />} />
        <Route  path="/notification" element={<Notification />} />
        <Route  path="/queryform" element={<QueryForm />} />
        <Route  path="/support" element={<Support />} />
        <Route path="/student" element={<StudentPanel/>}/>        
        <Route path="/" element={<Admin/>} />
        <Route path="/superadmin" element={<SuperAdmin/>}/>       
      </Routes>
    </div>
  );
}

export default App;