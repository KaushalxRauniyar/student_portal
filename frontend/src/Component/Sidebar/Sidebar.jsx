import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaCalculator,
  FaHeartbeat,
  FaBook,
  FaGamepad,
  FaComments,
  FaChartLine,
} from "react-icons/fa";
import "./sidebar.css";
import {
  Book,
  BookAIcon,
  Computer,
  Gamepad,
  Home,
  Hospital,
  TestTube2,
  User,
  Lightbulb,
} from "lucide-react";

const Sidebar = () => {
  const navItems = [
    { path: "/", icon: <FaHome />, label: "Home" },
    { path: "/profile", icon: <FaUser />, label: "Profile" },
    {
      path: "/elective",
      icon: <FaGraduationCap />,
      label: "Elective Suggestion",
    },
    {
      path: "/grade-prediction",
      icon: <FaChartLine />,
      label: "Grade Prediction",
    },
    { path: "/sgpa", icon: <FaCalculator />, label: "SGPA Calculator" },
    { path: "/health", icon: <FaHeartbeat />, label: "Health Status" },
    { path: "/books", icon: <FaBook />, label: "Book Suggestion" },
    { path: "/test", icon: <FaGamepad />, label: "Test" },
    { path: "/feedback", icon: <FaComments />, label: "Feedback" },
  ];

  return (
    <div className="w-[17%] border-t-2 border-blue-800 overflow-y-auto min-h-screen bg-slate-800">
      <div className="flex flex-col text-[15px]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-white navv ${isActive ? "active" : ""}`
            }
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
