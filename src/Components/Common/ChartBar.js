import React from "react";
import ChartFun from "./ChartFun";
import { MdNotificationsActive } from "react-icons/md";
import profile from "../../Assets/profile.png";
export default function ChartBar({ setIsSidebarOpen, isSidebarOpen }) {
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div
      className={`h-full transition-all duration-300 ease-in-out overflow-hidden ${
        isSidebarOpen === false ? "w-[18vw]" : "w-[8vw]"
      }  text-white flex flex-col relative`}
    >
      {/* Logo Section */}
      {/* <div className="p-[1vw] text-2xl font-bold text-center border-b border-green-600"> */}
      {/* {isSidebarOpen == false && (
          <span>
            Track<span className="text-blue-400">N</span>Trace
          </span>
        )} */}
      {/* </div> */}

      {/* Sidebar Toggle Button */}
      {/* <button
        onClick={toggleSidebar}
        className=" bg-white text-black p-2  mt-4"
      >
        {isSidebarOpen == false ? "hide" : "show"}
      </button> */}
      <div
        className=" absolute left-[1vw] top-[1vw] flex items-center gap-x-[0.5vw]"
        style={{
          zIndex: 2,
        }}
      >
        <MdNotificationsActive size={"2.5vw"} />
        <img src={profile} alt="profile" className="w-[2.25vw] h-[2.25vw]" />
        {isSidebarOpen === false && (
          <div className="flex flex-col">
            <label className="text-[0.9vw] font-semibold">James Muriel</label>
            <label className="text-[0.7vw]">jamesmuriel12@gmail.com</label>
          </div>
        )}
      </div>
      <div className={`absolute top-[4.5vw] left-0 `}>
        <svg
          width="2vw"
          height="2vw"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleSidebar}
          className="cursor-pointer"
          style={{
            transform: "rotate(180deg)",
          }}
        >
          <circle cx="17.624" cy="17.5029" r="16.6729" fill="#58724F" />
          <path
            d="M8.65625 18.3691C7.98958 17.9842 7.98958 17.0219 8.65625 16.637L21.3588 9.30323C22.0255 8.91833 22.8588 9.39945 22.8588 10.1693V24.8369C22.8588 25.6067 22.0255 26.0878 21.3588 25.7029L8.65625 18.3691Z"
            fill="white"
          />
        </svg>
      </div>
      <div className=" absolute top-[2.1vw] left-0">
        <div className="w-[2vw] h-[2vw] bg-white"></div>
      </div>
      <div className=" absolute top-[2.1vw] left-0">
        <div className="w-[2vw] h-[2vw] bg-[#39878A] rounded-bl-full"></div>
      </div>
      <div className="w-full h-full pr-[1vh] pb-[1vw] pt-[4.1vw]">
        <div className="h-full text-black w-full bg-white rounded-br-[1vw] rounded-tr-[1vw]">
          <ChartFun />
        </div>
      </div>
    </div>
  );
}
