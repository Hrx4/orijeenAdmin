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
import QueryForm from "./components/studentComponents/QueryForum";
import Support from "./components/studentComponents/Support";
import Course1 from "./components/studentComponents/Course1";
import TeacherPanel from "./components/teacherComponent/TeacherPanel";
import TeacherProfile from "./components/teacherComponent/TeacherProfile";
import TeacherUpdate from "./components/teacherComponent/TeacherUpdate";
import TeacherAddNote from "./components/teacherComponent/TeacherAddNote";
import TeacherAllNote from "./components/teacherComponent/TeacherAllNote";
import TeacherPayment from "./components/teacherComponent/TaecherPayment";
import TeacherNotification from "./components/teacherComponent/TeacherNotification";
import TeacherQueryForm from "./components/teacherComponent/TeacherQueryForm";
import Forum from "./Forum";
import AnsPage from "./AnsPage";
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
        <Route path="/teacher" element={<TeacherPanel/>}/>
        <Route  path="/teacherprofile" element={<TeacherProfile />} />
        <Route  path="/teachermobileupdate" element={<TeacherUpdate />} />
        <Route  path="/teacheraddnote" element={<TeacherAddNote />} />
        <Route  path="/teacherallnote" element={<TeacherAllNote />} />
        <Route  path="/teacherpayment" element={<TeacherPayment />} />
        <Route  path="/teachernotification" element={<TeacherNotification />} />
        <Route  path="/teacherqueryform" element={<TeacherQueryForm/>} />
        <Route path="/course1/:noteCourse" element={<Course1/>}/>
        <Route path="/queryforum" element={<Forum/>}/>
        <Route path="/answer" element={<AnsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;