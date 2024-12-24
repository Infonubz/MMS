import React, { useState } from "react";
import Sidebar from "./Components/Common/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Finance from "./Components/Finance/Finance";
import ChartBar from "./Components/Common/ChartBar";
import Sales from "./Components/Sales/Sales";
import Financial from "./Components/Finance/Financial";
import User from "./Components/User/User";
import Inventory from "./Components/Inventory/Inventory";
import Purchase from "./Components/Purchase/Purchase";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <Router>
      <div className="flex bg-custom-gradient h-full">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="flex-1 p-[0.5vw] relative rounded-tl-[1vw] rounded-tr-[1vw] rounded-bl-[1vw] bg-white my-[1vw] h-[95.7vh] overflow-hidden"
          style={{ zIndex: 1 }}
        >
          <Routes className="absolute">
            <Route path="/" element={<Financial />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/user" element={<User />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/purchase" element={<Purchase />} />
          </Routes>
        </div>
        <div className="relative h-[99.8vh]">
        <ChartBar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        </div>
      </div>
    </Router>
  );
}

export default App;
