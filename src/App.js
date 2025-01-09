import React, { useState, useEffect } from "react";
import Sidebar from "./Components/Common/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Finance from "./Components/Finance/Finance";
import ChartBar from "./Components/Common/ChartBar";
import Sales from "./Components/Sales/Sales";
import Financial from "./Components/Finance/Financial";
import Inventory from "./Components/Inventory/Inventory";
import Purchase from "./Components/Purchase/Purchase";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserManagement from "./Components/User/UserManagement";
import TablePopupModal from "./Components/Popup/TablePopupModal";
import Login_Page from "./Components/Login/Login_Page";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedModule, setSelectedModule] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [authtoken, setAuthtoken] = useState(sessionStorage.getItem("token"));

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setAuthtoken(token);
    }
  }, [sessionStorage.getItem("token")]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    setAnimate(true);

    // Reset animation after it completes (2 seconds)
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  };

  return (
    <Router>
       {authtoken ? (
      <div className="flex relative bg-custom-gradient h-full">
        <div className="relative z-50">
          {isSidebarOpen ? (
            <div className="absolute mt-[3.5vw] left-[14vw]">
              <svg
                width="1.6vw"
                height="1.6vw"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleSidebar}
                className={`cursor-pointer animated-svg ${
                  animate ? "move-right-left" : ""
                }`}
              >
                <circle cx="17.624" cy="17.5029" r="16.6729" fill="#58724F" />
                <path
                  d="M8.65625 18.3691C7.98958 17.9842 7.98958 17.0219 8.65625 16.637L21.3588 9.30323C22.0255 8.91833 22.8588 9.39945 22.8588 10.1693V24.8369C22.8588 25.6067 22.0255 26.0878 21.3588 25.7029L8.65625 18.3691Z"
                  fill="white"
                />
              </svg>
            </div>
          ) : (
            <div className="absolute mt-[3.5vw] left-[4vw]">
              <svg
                width="1.6vw"
                height="1.6vw"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleSidebar}
                className={`cursor-pointer animated-svg ${
                  !isSidebarOpen ? "move-right-left" : ""
                }`}
              >
                <circle
                  cx="16.6729"
                  cy="16.6729"
                  r="16.6729"
                  transform="matrix(-1 0 0 1 33.5674 0.637695)"
                  fill="#58724F"
                />
                <path
                  d="M25.8623 18.1768C26.529 17.7919 26.529 16.8296 25.8623 16.4447L13.1598 9.1109C12.4931 8.726 11.6598 9.20713 11.6598 9.97693L11.6598 24.6446C11.6598 25.4144 12.4931 25.8955 13.1598 25.5106L25.8623 18.1768Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>

        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setIsSidebarOpen={setIsSidebarOpen}
          setSelectedModule={setSelectedModule}
          selectedModule={selectedModule}
        />

        <div
          className="flex-1 pt-[0.5vw] px-[0.9vw] relative rounded-tl-[1vw] rounded-tr-[1vw] rounded-bl-[1vw] bg-white my-[1vw] overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <Routes className="absolute">
            <Route path="/" element={<Financial />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/user" element={<UserManagement />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/popup" element={<TablePopupModal />} />
          </Routes>
        </div>
        <div className="relative">
          <ChartBar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            setIsSidebarOpen={setIsSidebarOpen}
            selectedModule={selectedModule}
          />
        </div>

        <div className="relative z-50">
          {isSidebarOpen ? (
            <div className="absolute mt-[3.5vw] right-[7.1vw]">
              <svg
                width="1.6vw"
                height="1.6vw"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleSidebar}
                className={`cursor-pointer animated-svg`}
              >
                <circle cx="17.624" cy="17.5029" r="16.6729" fill="#58724F" />
                <path
                  d="M8.65625 18.3691C7.98958 17.9842 7.98958 17.0219 8.65625 16.637L21.3588 9.30323C22.0255 8.91833 22.8588 9.39945 22.8588 10.1693V24.8369C22.8588 25.6067 22.0255 26.0878 21.3588 25.7029L8.65625 18.3691Z"
                  fill="white"
                />
              </svg>
            </div>
          ) : (
            <div className="absolute mt-[3.8vw] right-[17vw]">
              <svg
                width="1.6vw"
                height="1.6vw"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={toggleSidebar}
                className="cursor-pointer"
              >
                <circle
                  cx="16.6729"
                  cy="16.6729"
                  r="16.6729"
                  transform="matrix(-1 0 0 1 33.5674 0.637695)"
                  fill="#58724F"
                />
                <path
                  d="M25.8623 18.1768C26.529 17.7919 26.529 16.8296 25.8623 16.4447L13.1598 9.1109C12.4931 8.726 11.6598 9.20713 11.6598 9.97693L11.6598 24.6446C11.6598 25.4144 12.4931 25.8955 13.1598 25.5106L25.8623 18.1768Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
       ) : (
        <Routes>
          <Route
            path="/"
            element={<Login_Page setAuthtoken={setAuthtoken} />}
          />
        </Routes>
       )}
    </Router>
  );
}

export default App;
