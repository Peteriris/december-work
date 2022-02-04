import "./sidebar.css";
import {
  Home,
  EventAvailable,
  BorderColor,
  Class,
  Subject,
  Info,
  Star,
  Feedback,
  ChatBubbleOutline,
  Attachment,
  Warning,
  PersonAdd,
  Payment,
  Note,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import logo from "./index.jpg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
        <img src={logo} alt=" sorrry"  className="topimage" />
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem">
              <Home className="sidebarIcon" />
              Home
            </li>
            </Link >
            <Link to="/Time Table" className="link">
            <li className="sidebarListItem active">
              <EventAvailable className="sidebarIcon" />
              Time Table
            </li>
            </Link>
            <Link to="/Exam notifaction" className="link">
            <li className="sidebarListItem">
              <BorderColor className="sidebarIcon" />
              Exam notifaction
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Student Menu</h3> 
          <ul className="sidebarList">
            <Link to="/Add Class" className="link">
              <li className="sidebarListItem">
                <Class className="sidebarIcon" />
                Add Class 
              </li>
            </Link>
            <Link to="/New student" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                New student
              </li>
            </Link>
            <Link to="/Studenet attendance" className="link">
            <li className="sidebarListItem">
              <Attachment className="sidebarIcon" />
              Studenet attendance
            </li>
            </Link>
            <Link to="/Subject" className="link">
              <li className="sidebarListItem">
                <Subject className="sidebarIcon" />
                Subject
              </li>
            </Link>
            <Link to="/student info" className="link">
            <li className="sidebarListItem">
              <Info className="sidebarIcon" />
              student info
            </li>
            </Link>
            <Link to="/Extra student's activity" className="link">
            <li className="sidebarListItem">
              <Star className="sidebarIcon" />
              Extra student's activity
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <Link to="/Feedback" className="link">
            <li className="sidebarListItem">
              <Feedback className="sidebarIcon" />
              Feedback
            </li>
            </Link>
            <Link to="/Messages" className="link">
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
            </Link>
            <Link to="/Notice" className="link">
            <li className="sidebarListItem">
              <Note className="sidebarIcon" />
              Notice
            </li>
            </Link>
            <Link to="/Fees notice" className="link">
            <li className="sidebarListItem">
              <Payment className="sidebarIcon" />
              Fees notice
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Teacher's Menu</h3>
          <ul className="sidebarList">
            <Link to="/Teachers attendance" className="link">
            <li className="sidebarListItem">
              <Attachment className="sidebarIcon" />
              Teachers attendance
            </li>
            </Link>
            <Link to="/Teachers info" className="link">
            <li className="sidebarListItem">
              <Info className="sidebarIcon" />
              Teachers info
            </li>
            </Link>
            <Link to="/New teacher" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                New teacher
              </li>
            </Link>
            <Link to="/Teachers complaints" className="link">
            <li className="sidebarListItem">
              <Warning className="sidebarIcon" />
              Teachers complaints
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
