import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Bottbar from "./components/Bottum/Bottbar";
import Newstudent from "./page/newstudentuser/Newstudentuser";
import NewTeacher from "./page/newTeacheruser/Newteacheruse";
import Addclass from "./page/AddClass/Addclass";
import Teattendance from "./page/teachattendance/Teattendance";
import Fessnotice from "./page/FeesNotice/fessnotice";
import StudentAttantance from"./page/student attendance/studentattendance";
function App() {
  return (
    <div>
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">

          </Route>
          <Route path="/Time Table">
          </Route>
          <Route path="/Exam notifaction">

          </Route>
          <Route path="/Add Class">
            <Addclass/>
          </Route>
          <Route path="/New student">
            <Newstudent/>
          </Route>
          <Route path="/Subject">

          </Route>
          <Route path="/student info">
            
          </Route>
          <Route path="/Studenet attendance">
            <StudentAttantance/>
          </Route>
          <Route path="/Extra student's activity">

          </Route>
          <Route path="/Feedback">
            
          </Route>
          <Route path="/Messages">

          </Route>
          <Route path="/Notice">
            
          </Route>
          <Route path="/Fees notice">
            <Fessnotice/>
          </Route>
          <Route path="/Teachers attendance">
            <Teattendance/>
          </Route>
          <Route path="/Teachers info">
            
          </Route>
          <Route path="/New teacher">
            <NewTeacher/>
          </Route>
          <Route path="/Teachers complaints">
            
          </Route>
        </Switch>
      </div>
    </Router>
    <Bottbar/>
    </div>
  );
}

export default App;
