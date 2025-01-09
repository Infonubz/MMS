import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import simplelogo from "../../Assets/simplelogo.png";
import "../../App.css";
import Modal from "../Modal/DateModal";
import { RiLogoutBoxFill } from "react-icons/ri";

const Sidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  selectedModule,
  setSelectedModule,
}) => {
  const navigation = useNavigate();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [nearbyModules, setNearbyModules] = useState({
    up: 0,
    down: 2,
  });

  const handleSelectModule = (module) => {
    setSelectedModule(module);
    setNearbyModules({
      up: module - 1,
      down: module + 1,
    });
  };

  useEffect(() => {
    const currentModule = (selectedModule) => {
      if (selectedModule === 1) {
        navigation("/dashboard");
      } else if (selectedModule === 2) {
        navigation("/user");
      } else if (selectedModule === 3) {
        navigation("/dashboard");
      } else if (selectedModule === 4) {
        navigation("/sales");
      } else if (selectedModule === 5) {
        navigation("/purchase");
      } else if (selectedModule === 6) {
        navigation("/inventory");
      } else if (selectedModule === 7) {
        navigation("/");
      } else if (selectedModule === 8) {
        navigation("/dashboard");
      } else if (selectedModule === 9) {
        navigation("/dashboard");
      } else if (selectedModule === 10) {
        navigation("/dashboard");
      }
    };

    currentModule(selectedModule);
  }, [selectedModule, navigation]);

  return (
    <div
      className={`h-screen transition-all duration-300 ease-in-out overflow-hidden ${
        isSidebarOpen ? "w-[15vw]" : "w-[5vw]"
      } text-white flex flex-col relative z-20`}
    >
      <div className="p-[1vw]">
        <img
          src={isSidebarOpen ? Logo : simplelogo}
          // src={simplelogo}
          alt="logo"
          // className="w-[4vw] h-[3vw]"
          className="w-[10vw]"
        />
      </div>
      {/* <div className="absolute right-[0vw] top-[4vw] z-10">
        {isSidebarOpen ? (
          <svg
            width="1.5vw"
            height="1.5vw"
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
        ) : (
          <svg
            width="1.5vw"
            height="1.5vw"
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
        )}
      </div> */}
      {isSidebarOpen && selectedModule === 1 && nearbyModules.down === 2 ? (
        <>
          <div className="absolute right-0 top-[4vw]">
            <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
          </div>
          <div className="absolute right-0 top-[4vw]">
            <div className="w-[3.5vw] h-[3.5vw] bg-[#8FB497] rounded-br-full"></div>
          </div>
        </>
      ) : (
        ""
      )}
      {!isSidebarOpen && selectedModule === 1 && nearbyModules.down === 2 ? (
        <>
          <div className="absolute right-0 top-[3.8vw]">
            <div className="w-[1.8vw] h-[1.8vw] bg-white"></div>
          </div>
          <div className="absolute right-0 top-[3.8vw]">
            <div className="w-[1.8vw] h-[1.8vw] bg-[#9bb893] rounded-br-full"></div>
          </div>
        </>
      ) : (
        ""
      )}
      <label className="text-[1vw] pl-[2vw]">{isSidebarOpen && "MENU"}</label>
      <div className="flex flex-col  pt-[1vw]">
        <div
          onClick={() => handleSelectModule(1)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1.1vw]"
          } cursor-pointer relative ${
            selectedModule === 1 ? "bg-white text-[#58724F] rounded-l-full" : ""
          }`}
        >
          {isSidebarOpen && nearbyModules.up === 1 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-[#8EB397] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && nearbyModules.up === 1 ? (
            <>
              <div className="absolute right-0 top-[1.5vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.9vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#9bb893] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            // width="1.5vw"
            // height="1.5vw"
            viewBox="0 0 40 40"
            fill="none"
            className={` ${
              isSidebarOpen ? "w-[1.5vw] h-[1.5vw]" : "w-[1.90vw] h-[1.90vw]"
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.13492 1.23932C0.225361 2.49545 0.00976562 3.35329 0.00976562 9.87903C0.00976562 16.2209 0.225361 17.1707 1.85772 18.3656C3.12049 19.2847 6.38522 19.6217 11.3131 19.3766C16.241 19.1315 17.1034 18.7945 18.3045 16.7724C18.8897 15.792 18.9513 15.2099 18.9513 9.87903C18.9513 3.35329 18.7665 2.64864 16.6414 1.23932C15.6866 0.565304 15.3478 0.534668 9.40355 0.534668C3.45928 0.534668 3.15129 0.565304 2.13492 1.23932Z"
              fill={selectedModule === 1 ? "#58724F" : "white"}
            />
            <path
              d="M22.7869 1.21649C20.9494 2.44353 20.5513 3.48651 20.3982 7.71979C20.2144 12.812 20.5207 15.8796 21.3475 17.1373C22.6644 19.0392 23.2769 19.2233 29.7082 19.3153C34.9758 19.3767 35.6189 19.3153 36.6908 18.7631C39.0796 17.5668 39.1715 17.2293 39.2633 10.0818C39.3246 4.16138 39.294 3.67057 38.7121 2.71961C37.4564 0.664322 36.8133 0.510942 29.9532 0.510942C24.0732 0.510942 23.7363 0.54162 22.7869 1.21649Z"
              fill={selectedModule === 1 ? "#58724F" : "white"}
            />
            <path
              d="M4.13687 21.0314C2.53531 21.3071 1.36493 22.0424 0.625751 23.2985C0.0713642 24.187 0.00976562 24.861 0.00976562 30.2532C0.00976562 36.8402 0.194561 37.6674 1.95012 38.9541C2.7509 39.5363 3.33609 39.5975 9.09555 39.6894C16.241 39.812 16.6722 39.6894 18.1197 37.5448C18.9205 36.3193 18.9513 36.0742 19.0437 31.8157C19.2285 25.0142 18.6433 22.9002 16.3026 21.5216C15.4094 21.0007 14.6086 20.9088 10.3275 20.8475C7.61719 20.8169 4.81445 20.9088 4.13687 21.0314Z"
              fill={selectedModule === 1 ? "#58724F" : "white"}
            />
            <path
              d="M27.0481 21.3375C24.6922 22.0728 22.4586 24.0642 21.3572 26.4232C20.4699 28.2921 20.3781 31.5397 21.1124 33.7149C21.7549 35.6144 24.0497 38.1267 25.9772 39.0152C28.0272 39.9955 31.76 40.0262 33.7794 39.1071C35.707 38.2492 37.3592 36.5335 38.3995 34.3889C39.1338 32.8571 39.2868 32.1524 39.2868 30.2529C39.2868 27.5262 38.4913 25.5348 36.6555 23.6965C34.7891 21.8277 32.8309 21.0617 30.1078 21.0924C28.8533 21.0924 27.4765 21.2149 27.0481 21.3375Z"
              fill={selectedModule === 1 ? "#58724F" : "white"}
            />
          </svg>
          <label className="text-[1.1vw] font-sans cursor-pointer ">
            {isSidebarOpen && "Dashboard"}
          </label>
        </div>
        <div
          onClick={() => handleSelectModule(2)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 2 ? "bg-white text-[#58724F] rounded-l-full" : ""
          }  `}
        >
          {isSidebarOpen && selectedModule !== 2 && nearbyModules.down === 2 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#8DB396] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule !== 2 &&
          nearbyModules.down === 2 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#9bb893] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {/* {selectedModule !== 2 && nearbyModules.down === 2 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[1.4vw] h-[1.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.5vw] h-[1.5vw] bg-[#8DB396] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )} */}
          {isSidebarOpen && selectedModule === 3 && nearbyModules.up === 2 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-[#8CB396] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 3 && nearbyModules.up === 2 ? (
            <>
              <div className="absolute right-0 top-[1.2vw]">
                <div className="w-[1.9vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.9vw] h-[2.5vw] bg-[#9bb893] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.7vw] h-[1.7vw]" : "w-[2.1vw] h-[2.1vw]"
            }`}
            viewBox="0 0 54 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3349 1.48587C19.6714 3.13307 18.002 5.71515 18.002 9.81087C18.002 19.1598 31.2184 22.2761 35.6239 13.9956C36.6442 12.0368 36.876 8.16368 36.0413 6.11582C34.882 3.08855 30.9402 0.640018 27.2767 0.640018C26.1173 0.640018 24.3551 1.04069 23.3349 1.48587Z"
              fill={selectedModule === 2 ? "#58724F" : "white"}
            />
            <path
              d="M7.47486 6.42678C3.44035 8.78627 3.02299 13.995 6.64013 17.0667C9.42255 19.3817 13.7353 19.3372 16.054 16.9777L17.0742 15.9093L16.1004 13.7724C15.3584 12.1697 15.1729 11.0122 15.312 9.05338C15.4975 6.69389 15.4048 6.4713 14.4309 6.02611C12.6687 5.22477 9.14431 5.44737 7.47486 6.42678Z"
              fill={selectedModule === 2 ? "#58724F" : "white"}
            />
            <path
              d="M39.9823 6.02642C39.1476 6.42709 39.0549 6.78324 39.2404 9.05369C39.3795 11.0125 39.194 12.17 38.452 13.7727C37.5245 15.8205 37.4782 15.9541 38.2665 16.8C41.3736 20.1389 47.4949 19.1594 49.5817 15.0637C51.9467 10.3002 48.7933 5.4922 43.2749 5.58123C42.0228 5.58123 40.5388 5.80383 39.9823 6.02642Z"
              fill={selectedModule === 2 ? "#58724F" : "white"}
            />
            <path
              d="M6.63978 20.6285C4.59934 21.4744 2.41977 23.6558 1.6778 25.5256C0.750322 27.9296 0.332959 31.313 0.84307 32.2924C1.63142 33.6725 5.15582 34.9635 8.40198 35.0526L11.2308 35.1416L11.8336 31.2685C12.4365 27.2173 13.8741 23.7893 15.6363 22.2757C16.9347 21.1182 16.8884 20.8511 15.1725 20.2724C12.9002 19.5155 8.72659 19.6936 6.63978 20.6285Z"
              fill={selectedModule === 2 ? "#58724F" : "white"}
            />
            <path
              d="M20.4138 20.94C16.1011 22.9879 14.6171 25.659 13.5042 33.3608L12.7158 39.0146L13.7824 39.8605C16.0547 41.6412 19.6255 42.2645 27.2772 42.2645C34.9288 42.2645 38.4996 41.6412 40.7719 39.8605L41.8385 39.0146L41.0501 33.3162C40.1227 26.9946 38.8706 24.0563 36.32 22.1866C33.7231 20.3168 31.729 19.7825 27.138 19.7825C23.4281 19.7825 22.5007 19.9606 20.4138 20.94Z"
              fill={selectedModule === 2 ? "#58724F" : "white"}
            />
            <path
              d="M39.2411 20.3169C37.6644 20.8511 37.618 21.1627 38.9165 22.2757C40.6787 23.7893 42.1163 27.2173 42.7191 31.2685L43.322 35.1416L46.1971 35.0526C49.3969 34.9635 52.9213 33.628 53.756 32.2034C54.2198 31.313 53.756 27.8405 52.8749 25.5256C52.133 23.6558 49.9534 21.4744 47.913 20.6285C45.8725 19.7381 41.3279 19.5601 39.2411 20.3169Z"
              fill={selectedModule === 2 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              User
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => handleSelectModule(3)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 3 ? "bg-white text-[#8DB396] rounded-l-full" : ""
          } `}
        >
          {isSidebarOpen && selectedModule === 4 && nearbyModules.up === 3 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-[#8CB397] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && nearbyModules.down === 3 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#8DB397] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && nearbyModules.down === 3 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[1.9vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.9vw] h-[2.5vw] bg-[#9bb893] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 4 && nearbyModules.up === 3 ? (
            <>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.9vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.9vw] h-[2.5vw] bg-[#9bb893] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.5vw] h-[1.6vw]" : "w-[2.1vw] h-[2.1vw]"
            }`}
            viewBox="0 0 48 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.46224 1.17983C7.99582 2.42213 6.71315 2.92681 5.275 2.38331C4.34215 2.03391 4.07007 2.11156 3.33156 2.81035C2.59305 3.54796 2.55418 3.78089 3.02061 4.82908C3.4093 5.83844 3.4093 6.18784 2.86513 7.0031C2.51531 7.5466 1.89341 7.97364 1.46585 7.97364C0.805083 7.97364 0.688477 8.24539 0.688477 9.52651C0.688477 10.8464 0.805083 11.0794 1.69907 11.3123C2.904 11.6229 3.60364 13.1369 2.98174 14.2239C2.12662 15.8545 3.79798 17.6403 5.46934 16.8638C6.71315 16.3203 8.38451 16.9803 8.53998 18.1449C8.65659 18.9214 8.8898 19.0378 10.2113 19.0378C11.5329 19.0378 11.7661 18.9214 11.8827 18.1449C12.077 16.9803 13.7095 16.3203 15.0311 16.9026C15.8473 17.2909 16.1194 17.2132 16.9745 16.3591C17.8296 15.5051 17.8685 15.2721 17.4409 14.4569C16.7802 13.2146 17.4409 11.6229 18.7236 11.3123C19.6176 11.0794 19.7342 10.8464 19.7342 9.52651C19.7342 8.24539 19.6176 7.97364 18.9568 7.97364C18.5293 7.97364 17.9074 7.5466 17.5576 7.0031C17.0134 6.18784 17.0134 5.83844 17.4021 4.82908C17.8685 3.78089 17.8296 3.54796 17.0911 2.81035C16.3526 2.07273 16.0805 2.03391 15.0311 2.42213C13.5541 3.00446 12.0382 2.42213 11.8827 1.21865C11.805 0.597506 11.4551 0.364574 10.2891 0.286932C9.04528 0.170465 8.81206 0.286932 8.46224 1.17983ZM12.2325 5.13965C14.0205 5.95491 15.0699 7.74071 15.0699 9.83708C15.0699 11.157 14.8367 11.7394 13.7484 12.9428C12.5046 14.2628 12.2714 14.3792 10.2113 14.3792C8.15129 14.3792 7.91808 14.2628 6.67428 12.9428C5.62482 11.7782 5.35274 11.157 5.35274 9.91473C5.35274 6.84781 7.25731 4.79026 10.3279 4.5185C10.6389 4.5185 11.494 4.79026 12.2325 5.13965Z"
              fill={selectedModule === 3 ? "#58724F" : "white"}
            />
            <path
              d="M10.9107 8.43952C9.31711 10.0312 9.23937 10.0312 8.50087 9.37124C7.64575 8.5948 6.51855 8.78891 6.51855 9.64299C6.51855 10.3418 8.53973 12.244 9.27824 12.244C10.25 12.244 13.9814 8.20659 13.6704 7.46897C13.2817 6.45961 12.6598 6.65372 10.9107 8.43952Z"
              fill={selectedModule === 3 ? "#58724F" : "white"}
            />
            <path
              d="M20.9009 9.99253C20.9009 11.196 20.4733 11.7395 19.2295 12.2054C18.1023 12.6324 17.908 13.37 18.5687 14.6123C19.3461 16.0099 16.4309 19.038 15.2649 18.0675C14.3709 17.3298 13.0105 17.7569 12.7384 18.8439C12.5829 19.5039 12.1165 19.8921 11.2614 20.1638L10.0176 20.5132V35.1879V49.9013H25.5651H41.1126V42.7193C41.1126 38.7595 41.0349 35.5373 40.9572 35.5373C40.9183 35.5373 40.3353 36.3525 39.6745 37.4007C38.8971 38.643 37.5756 39.8853 35.5155 41.2829L32.4838 43.3404L32.7558 40.7782L33.0279 38.2548H27.5863C22.5722 38.2548 20.7065 37.9442 22.3001 37.3231C22.65 37.2066 25.1764 37.0901 27.9361 37.0901C31.5509 37.0901 32.9502 36.9737 32.9502 36.6243C32.9502 36.3913 33.6498 34.9937 34.5049 33.5573C35.3601 32.1209 36.0597 30.7622 36.0597 30.5292C36.0597 30.2187 33.7276 30.1022 28.8301 30.1022C24.127 30.1022 21.7171 29.9857 21.8726 29.714C22.028 29.4811 25.021 29.3258 29.5686 29.3258H37.0314L39.0915 25.6765C41.0738 22.1049 41.1126 21.9496 41.1126 18.8827V15.7382H37.8088H34.5049V12.4383V9.13845H27.7029C20.9009 9.13845 20.9009 9.13845 20.9009 9.99253ZM17.5581 20.4356L15.3037 22.7261L14.1377 21.5614C12.8161 20.2415 13.0493 19.465 14.4098 20.7073L15.3037 21.5614L17.2083 19.6203C18.2189 18.5721 19.2684 17.7957 19.4627 17.951C19.6571 18.0675 18.8019 19.1933 17.5581 20.4356ZM30.929 18.7274C31.0456 19.1156 29.9962 19.2321 26.5757 19.2321C24.127 19.2321 22.028 19.0768 21.9114 18.8827C21.5228 18.2616 22.5333 18.1063 26.6923 18.1839C29.5297 18.2227 30.8124 18.4169 30.929 18.7274ZM38.0031 21.7555C38.0031 22.2602 36.8759 22.3379 30.0739 22.3379C22.8443 22.3379 21.2118 22.1437 21.9503 21.4061C22.0669 21.2897 25.7595 21.1732 30.1128 21.1732C36.8759 21.1732 38.0031 21.2508 38.0031 21.7555ZM19.7348 26.1036C19.7348 26.5306 15.7313 30.4904 15.3037 30.4904C14.8373 30.4904 13.1271 28.8987 13.1271 28.4717C13.1271 27.9282 13.9822 28.1223 14.7596 28.8211C15.4592 29.4422 15.5758 29.4034 17.3249 27.6564C19.0351 25.9095 19.7348 25.4824 19.7348 26.1036ZM30.7347 26.8024C30.6181 27.2294 23.1164 27.5788 22.1835 27.1906C21.8726 27.1129 21.756 26.8024 21.8726 26.6082C22.2224 26.0647 30.8513 26.2589 30.7347 26.8024ZM19.7348 34.295C19.7348 34.4502 18.7631 35.5373 17.597 36.7019L15.4592 38.7983L14.2154 37.5948C12.7773 36.1196 13.0493 35.3431 14.4875 36.7019L15.4981 37.6336L17.3249 35.809C19.074 34.062 19.7348 33.635 19.7348 34.295ZM31.0068 34.722C31.0068 35.3431 29.8407 35.5373 26.3425 35.5373C22.7666 35.5373 21.5228 35.3043 21.9114 34.722C22.1835 34.2561 31.0068 34.2561 31.0068 34.722ZM17.5193 44.5827L15.2649 46.7567L14.1377 45.6309C12.7773 44.311 13.0882 43.5345 14.4098 44.7768L15.3037 45.6309L17.2083 43.6898C18.2578 42.6028 19.2684 41.904 19.4627 42.0981C19.6182 42.2534 18.7631 43.3792 17.5193 44.5827ZM31.0068 42.9134C31.0068 43.1463 29.2577 43.3016 26.5757 43.3016C24.0104 43.3016 22.028 43.1463 21.8726 42.9134C21.7171 42.6805 23.3107 42.5252 26.3036 42.5252C29.1799 42.5252 31.0068 42.6805 31.0068 42.9134ZM38.0031 45.825C38.0031 46.3297 36.8759 46.4073 30.0739 46.4073C22.8443 46.4073 21.2118 46.2132 21.9503 45.4756C22.0669 45.3592 25.7595 45.2427 30.1128 45.2427C36.8759 45.2427 38.0031 45.3203 38.0031 45.825Z"
              fill={selectedModule === 3 ? "#58724F" : "white"}
            />
            <path
              d="M35.6699 12.3605V14.9615H38.0021C39.2847 14.9615 40.3342 14.8063 40.3342 14.651C40.3342 14.4957 39.2847 13.331 38.0021 12.0499L35.6699 9.75943V12.3605Z"
              fill={selectedModule === 3 ? "#58724F" : "white"}
            />
            <path
              d="M43.9494 19.5037C43.0166 19.8531 43.4441 20.5907 45.1155 21.4836C47.1755 22.5706 47.331 22.5706 47.331 21.406C47.331 19.7366 45.6596 18.8049 43.9494 19.5037Z"
              fill={selectedModule === 3 ? "#58724F" : "white"}
            />
            <path
              d="M41.1904 23.7743C35.4767 33.635 34.4661 35.5373 34.6993 35.9255C34.8159 36.1196 35.6711 36.7019 36.5262 37.129C38.0809 37.9442 38.1587 37.9442 38.664 37.2454C39.6745 35.8867 46.6709 23.5025 46.5155 23.3472C46.4377 23.2696 45.5437 22.7649 44.5332 22.1826L42.7063 21.1344L41.1904 23.7743Z"
              fill={selectedModule === 3 ? "#58724F" : "white"}
            />
            <path
              d="M33.9599 37.944C33.6489 39.1863 33.6878 40.9721 34.0376 40.9721C34.504 40.9721 37.2249 39.031 37.2249 38.6816C37.2249 38.4487 34.7761 37.0899 34.3486 37.0899C34.2708 37.0899 34.1153 37.4781 33.9599 37.944Z"
              fill={selectedModule === 3 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Request
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => handleSelectModule(4)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 4 ? "bg-white text-[#58724F] rounded-l-full" : ""
          } ${nearbyModules.down === 4 ? "rounded-tr-full" : ""}`}
        >
          {isSidebarOpen && selectedModule === 3 && nearbyModules.down === 4 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#8AB296] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 3 &&
          nearbyModules.down === 4 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[1.9vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.9vw] h-[2.5vw] bg-[#9bb893] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && selectedModule === 5 && nearbyModules.up === 4 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-[#8AB296] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 5 && nearbyModules.up === 4 ? (
            <>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#9bb893] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}

          <svg
            className={` ${
              isSidebarOpen ? "w-[1.6vw] h-[1.7vw]" : "w-[2.1vw] h-[2.1vw]"
            }`}
            viewBox="0 0 44 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2085 1.57913C18.3098 3.65984 16.1692 8.40928 16.1246 12.8421V15.3751L13.5381 16.0989C12.111 16.5059 10.6394 17.1844 10.238 17.6368C9.88123 18.0891 7.51765 23.2456 5.02029 29.0807C0.0701728 40.615 -0.152805 41.7458 1.94319 43.8265C2.70132 44.5503 15.9462 50.7924 16.7044 50.7924C16.749 50.7924 16.7936 44.5503 16.7936 36.8607C16.7936 20.5317 16.4814 21.7077 22.1896 17.2749C24.241 15.6918 25.9357 14.2443 25.9357 14.0634C25.9357 13.3849 24.241 13.2944 21.9221 13.9277C18.4436 14.8776 18.3544 14.8323 18.3544 12.8873C18.3544 7.86649 21.6099 2.84565 24.7762 2.84565C27.0506 2.84565 28.7452 4.20263 30.1723 7.0523C32.3129 11.5756 32.0899 18.7676 29.6817 20.8935C27.8533 22.5219 28.5222 24.5574 30.8858 24.5574C32.1345 24.5574 32.625 23.8789 32.625 22.0696C32.625 20.7578 33.3386 20.215 33.6953 21.2102C34.5426 23.4718 32.9818 25.9144 30.6628 25.9144C29.2358 25.9144 27.2735 24.1051 27.2735 22.7933C27.2735 22.2957 27.8979 21.1649 28.656 20.2603C29.7709 18.9938 30.0831 18.1796 30.2615 15.9632C30.4844 13.8372 30.3952 13.2492 29.9047 13.2492C29.2358 13.2492 19.8261 20.4864 18.9342 21.7077C18.4882 22.2957 18.3544 26.1858 18.3544 37.494V52.466L19.5139 53.6873L20.718 54.8633H30.4844C36.3265 54.8633 40.6077 54.6824 41.1428 54.411C43.1942 53.2802 43.328 52.1494 43.328 37.3583C43.328 27.1809 43.1496 23.1099 42.7482 22.2957C42.4361 21.7077 40.3847 19.7627 38.1103 17.9986C34.1413 14.9228 34.0075 14.7871 34.0075 12.9326C33.9183 8.54498 31.4209 3.29798 28.433 1.44343C26.4708 0.222149 22.9924 0.26738 21.2085 1.57913ZM31.2872 32.7445C31.2872 33.0159 31.9561 33.8753 32.7588 34.6443C34.2751 36.0917 33.7399 37.0869 32.1791 35.6394C31.7331 35.2323 30.8858 34.9609 30.3061 35.0514C29.4587 35.1419 29.2804 35.4585 29.2804 36.7702C29.2804 38.1724 29.4141 38.3534 30.7966 38.6248C32.5804 38.9866 33.3386 39.7104 33.7399 41.384C34.0075 42.3791 33.7845 42.8767 32.6696 44.0527C31.9115 44.8217 31.2872 45.6359 31.2872 45.862C31.2872 46.0882 30.975 46.2691 30.6182 46.2691C30.2615 46.2691 29.9493 46.043 29.9493 45.7716C29.9493 45.4549 29.4587 44.7764 28.8344 44.1884C28.2101 43.6004 27.7195 42.9219 27.7195 42.6505C27.7195 41.9268 28.9236 42.1077 29.2358 42.9219C29.5925 43.8265 31.6885 43.6004 32.3575 42.5148C33.0264 41.4744 32.2237 40.2532 30.7074 39.9365C27.7195 39.3485 26.7384 36.3179 28.8344 34.3277C29.4587 33.7396 29.9493 33.0611 29.9493 32.7445C29.9493 32.4731 30.2615 32.247 30.6182 32.247C30.975 32.247 31.2872 32.4731 31.2872 32.7445Z"
              fill={selectedModule === 4 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Sales
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => handleSelectModule(5)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 5 ? "bg-white text-[#58724F] rounded-l-full" : ""
          }`}
        >
          {isSidebarOpen && selectedModule === 4 && nearbyModules.down === 5 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#8AB296] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 4 &&
          nearbyModules.down === 5 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#9bb893] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && selectedModule === 6 && nearbyModules.up === 5 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3.5vw] h-[3vw] bg-[#8AB296] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 6 && nearbyModules.up === 5 ? (
            <>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#9bb893] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.6vw] h-[1.5vw]" : "w-[2.1vw] h-[2.1vw]"
            }`}
            viewBox="0 0 44 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_10985_16728)">
              <path
                d="M29.5318 2.42694C27.7506 2.99939 26.033 4.1125 24.5698 5.73446C21.0392 9.58263 20.6893 15.021 23.6792 19.537C25.7149 22.6855 30.1679 24.7209 33.9848 24.2756C37.6427 23.8304 41.1415 21.4452 42.8273 18.2013C44.0359 15.8796 44.195 11.6498 43.1771 8.97837C42.2229 6.40232 39.6147 3.76267 37.0701 2.84038C35.1617 2.10891 31.2494 1.91809 29.5318 2.42694ZM38.0561 8.2469C38.9149 9.10558 38.406 10.0915 35.2571 13.6852C33.4759 15.7206 31.8219 17.438 31.5674 17.5334C30.8359 17.8196 30.2315 17.3744 28.005 15.0528C26.2556 13.24 26.033 12.8901 26.351 12.3495C26.5419 11.9679 26.9554 11.5544 27.3053 11.3636C27.846 11.0774 28.1959 11.2364 29.5 12.4767L31.0267 13.9078L33.1896 11.459C36.4658 7.70625 37.1019 7.29281 38.0561 8.2469Z"
                fill={selectedModule === 5 ? "#58724F" : "white"}
              />
              <path
                d="M2.19356 4.24269C1.92059 4.4133 1.78411 4.99335 1.85235 5.67576L1.95471 6.83586L5.2644 7.00646C7.72108 7.14294 8.7447 7.31354 9.15415 7.72299C9.49535 8.09832 10.4507 11.8175 11.8155 18.3004L13.931 28.3318L12.9074 28.5365C9.59771 29.1507 7.99405 32.1533 9.46123 34.9853C10.519 37.0325 10.5531 37.0325 26.6239 37.0325C37.5083 37.0325 41.3298 36.9302 41.6369 36.6231C42.2169 36.043 42.1487 35.1218 41.5004 34.5076C41.0568 34.0299 39.2143 33.9617 26.6921 33.9617C12.6003 33.9617 12.3956 33.9617 12.1909 33.2793C11.6449 31.5732 11.7473 31.5732 27.0674 31.5732C43.377 31.5732 41.6028 31.9827 42.524 27.9223C43.3429 24.2373 43.4112 24.3056 40.4427 25.8069C37.4401 27.3423 34.8469 27.7859 31.5713 27.4105C24.8837 26.6599 18.9809 20.5182 18.5714 13.9329L18.4008 11.4421H15.9783H13.5216L13.078 9.19017C12.5662 6.66525 11.5085 5.12983 9.7342 4.4133C8.50586 3.90149 2.91009 3.76501 2.19356 4.24269Z"
                fill={selectedModule === 5 ? "#58724F" : "white"}
              />
              <path
                d="M18.8445 39.421C18.401 39.8646 18.1621 40.547 18.1621 41.4682C18.1621 43.2766 19.0834 44.1979 20.8918 44.1979C22.7001 44.1979 23.6214 43.2766 23.6214 41.4682C23.6214 39.6598 22.7001 38.7386 20.8918 38.7386C19.9705 38.7386 19.2881 38.9774 18.8445 39.421Z"
                fill={selectedModule === 5 ? "#58724F" : "white"}
              />
              <path
                d="M33.2097 39.6256C32.8002 40.1374 32.4932 40.9563 32.4932 41.4681C32.4932 41.9799 32.8002 42.7988 33.2097 43.3106C34.1651 44.5049 36.4511 44.5731 37.543 43.413C38.5666 42.3211 38.5325 40.4445 37.5089 39.4891C36.3147 38.3632 34.1309 38.4655 33.2097 39.6256Z"
                fill={selectedModule === 5 ? "#58724F" : "white"}
              />
            </g>
            <defs>
              <clipPath id="clip0_10985_16728">
                <rect
                  width="43.6743"
                  height="43.6743"
                  fill="white"
                  transform="translate(0.172852 0.523438)"
                />
              </clipPath>
            </defs>
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Purchase
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => handleSelectModule(6)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 6 ? "bg-white text-[#58724F] rounded-l-full" : ""
          }`}
        >
          {isSidebarOpen && selectedModule === 5 && nearbyModules.down === 6 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#8AB296] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 5 &&
          nearbyModules.down === 6 ? (
            <>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#9bb893] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && selectedModule === 7 && nearbyModules.up === 6 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[4vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[4vw] h-[3vw] bg-[#8CB397] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 7 && nearbyModules.up === 6 ? (
            <>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#97b4a2] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.6vw] h-[1.6vw]" : "w-[2.1vw] h-[2.1vw]"
            }`}
            viewBox="0 0 46 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9365 0.940033C18.7412 1.36972 18.5459 4.14316 18.5459 7.19003V12.6588L17.335 12.776C15.7725 12.9322 15.0303 13.9478 15.7334 15.0416C15.9678 15.4713 16.2021 15.8619 16.2021 15.9791C16.2021 16.0572 13.585 17.1119 10.3428 18.3619L4.4834 20.6275L2.53027 24.065C1.47559 25.9791 0.577148 27.8541 0.577148 28.2447C0.577148 28.7135 1.12402 29.1432 2.25684 29.5338L3.89746 30.1588L4.09277 35.8619C4.20996 38.9869 4.36621 41.6432 4.4834 41.7603C4.7959 42.0338 21.7881 48.6353 22.2568 48.6353C22.4521 48.6353 24.249 48.0103 26.2021 47.2291L29.7959 45.7838L31.085 47.2291C33.0381 49.4947 34.9912 50.315 37.9209 50.1197C39.9521 50.0025 40.6553 49.7682 41.8271 48.7916C44.2881 46.8385 44.874 45.7447 45.0303 42.9713C45.2646 39.651 44.1709 37.2682 41.749 35.7838C40.0693 34.7682 40.0693 34.7291 40.0303 32.5807V30.3541L41.9834 29.651C43.3896 29.1432 43.9365 28.7525 43.9365 28.2057C43.9365 27.815 43.0381 25.94 41.9443 24.026L39.9131 20.5885L34.1318 18.3619C30.9287 17.1119 28.3115 16.0572 28.3115 15.9791C28.3115 15.8619 28.5459 15.4713 28.7803 15.0416C29.4834 13.9478 28.7412 12.9322 27.1787 12.776L25.9678 12.6588V7.42441C25.9678 4.53378 25.8115 1.76035 25.5771 1.21347C25.2256 0.236908 25.0693 0.197845 22.2959 0.197845C19.7959 0.197845 19.2881 0.315033 18.9365 0.940033ZM19.5225 20.1197C20.8115 21.7603 21.5928 22.4635 22.2178 22.4635C22.8428 22.4635 23.6631 21.7603 24.9521 20.1197C25.9678 18.8307 26.8662 17.776 26.9053 17.776C26.9443 17.776 29.1318 18.5963 31.71 19.6119L36.3975 21.4869L29.3271 24.2213L22.2568 26.9557L15.1475 24.1822L7.99902 21.4088L12.6084 19.651C15.1084 18.6744 17.2959 17.8541 17.4521 17.815C17.6084 17.776 18.5459 18.8307 19.5225 20.1197ZM13.624 33.9478C16.2021 34.9635 18.5068 35.7057 18.7803 35.5885C19.0537 35.4713 19.6396 34.69 20.1084 33.7916C20.5381 32.9322 21.0068 32.2291 21.085 32.2291C21.2021 32.2291 21.2803 35.3541 21.2803 39.2213V46.2135L13.6631 43.2447L6.0459 40.315V35.7057V31.0963L7.53027 31.6041C8.31152 31.9166 11.085 32.9713 13.624 33.9478ZM38.0771 32.8932C38.0771 34.3775 38.0381 34.3775 36.3975 34.4947C32.6865 34.7291 29.4834 38.1666 29.4834 41.9947V43.7916L26.3584 45.0025L23.2334 46.2135V39.1041V32.0338L24.4053 33.8697C25.0693 34.9244 25.8115 35.7447 26.085 35.7447C26.3193 35.7057 28.9365 34.7682 31.8271 33.5963C34.7178 32.4635 37.335 31.4869 37.6084 31.4869C37.8818 31.4478 38.0771 31.9947 38.0771 32.8932ZM40.2256 37.2682L41.3975 37.8932L40.3818 38.0103C39.835 38.0885 38.7021 38.7916 37.9209 39.6119C36.5146 41.0572 36.3975 41.0963 35.3428 40.5885C33.3506 39.5728 31.3584 41.0963 32.0225 43.1275C32.374 44.2994 35.2256 46.6822 36.2803 46.6822C36.9053 46.6822 38.0771 45.7447 40.1865 43.5572L43.1553 40.4322V42.3463C43.1553 44.6119 42.0615 46.4478 40.0303 47.5025C36.2021 49.5728 31.4365 46.7994 31.4365 42.5025C31.4365 39.651 32.8428 37.6588 35.6162 36.7213C37.2178 36.1353 38.3896 36.2916 40.2256 37.2682Z"
              fill={selectedModule === 6 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Inventory
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => handleSelectModule(7)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 7 ? "bg-white text-[#58724F] rounded-l-full" : ""
          }`}
        >
          {isSidebarOpen && selectedModule === 6 && nearbyModules.down === 7 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#87B096] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 6 &&
          nearbyModules.down === 7 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && selectedModule === 8 && nearbyModules.up === 7 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[4vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[4vw] h-[3vw] bg-[#86B096] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 8 && nearbyModules.up === 7 ? (
            <>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1.1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.5vw] h-[1.5vw]" : "w-[2.1vw] h-[2.1vw]"
            }`}
            viewBox="0 0 39 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.93965 0.740002C8.8084 0.838438 8.70996 4.18531 8.70996 8.12281V15.2759H9.8584C10.7771 15.2759 11.0396 15.4072 11.2037 16.0963C11.4334 17.015 12.2865 17.3759 13.5662 17.0806C14.3209 16.9166 14.6818 17.1134 15.7318 18.1963C16.7818 19.2791 16.9131 19.5744 16.6178 20.1322C16.06 21.1494 16.749 22.4619 17.8318 22.4947C18.0943 22.4947 18.2256 21.9041 18.2256 20.69C18.2256 19.6728 18.4553 18.4259 18.7178 17.9009C19.6693 16.0634 20.3912 15.9322 28.5615 15.9322H35.9443V11.0103V6.08844H33.7787C30.5631 6.08844 30.3662 5.89156 30.3662 2.97125V0.510313H19.7678C13.9271 0.510313 9.03809 0.608751 8.93965 0.740002ZM19.1115 5.26813C21.0803 6.58063 21.7365 9.30406 20.5225 11.2728C18.2584 14.9478 13.1068 14.0291 12.1553 9.76344C11.9912 8.97594 12.1225 8.31969 12.6475 7.26969C13.8615 4.74313 16.8803 3.82438 19.1115 5.26813ZM30.0381 5.92438C30.0381 6.31813 29.4475 6.41656 26.7568 6.41656C24.0662 6.41656 23.4756 6.31813 23.4756 5.92438C23.4756 5.53063 24.0662 5.43219 26.7568 5.43219C29.4475 5.43219 30.0381 5.53063 30.0381 5.92438ZM29.9725 9.10719C29.7756 9.69781 23.7381 9.69781 23.574 9.10719C23.4428 8.81188 24.2303 8.71344 26.7568 8.71344C29.2834 8.71344 30.0709 8.81188 29.9725 9.10719ZM29.9725 12.2244C30.0709 12.5525 29.2834 12.6509 26.7896 12.6509C23.7381 12.6509 23.0818 12.4869 23.7053 11.8634C24.1318 11.4697 29.8084 11.7978 29.9725 12.2244Z"
              fill={selectedModule === 7 ? "#58724F" : "white"}
            />
            <path
              d="M15.3724 6.18688C14.5521 7.00719 14.3552 8.64782 15.0115 9.30407C15.3068 9.59938 15.274 9.69782 14.8474 9.69782C13.9286 9.69782 14.224 10.7806 15.4052 11.9291C16.0286 12.5197 16.6193 12.9791 16.7505 12.9791C16.8818 12.9791 17.4068 12.5853 17.9318 12.0931C19.0146 11.0759 19.1458 9.89469 18.3255 8.97594C17.8333 8.41813 17.8333 8.38532 18.3255 8.38532C19.1458 8.38532 18.9818 7.40094 17.9974 6.35094C16.9474 5.26813 16.3568 5.23532 15.3724 6.18688ZM16.9802 10.4197C16.6193 10.7806 15.9302 10.5181 15.9302 10.0259C15.9302 9.89469 16.2255 9.82907 16.6193 9.9275C17.0458 10.0588 17.1771 10.2228 16.9802 10.4197Z"
              fill={selectedModule === 7 ? "#58724F" : "white"}
            />
            <path
              d="M31.3506 2.80719V5.10406H33.7131H36.0756L33.8115 2.80719C32.5646 1.5275 31.4818 0.510315 31.449 0.510315C31.3834 0.510315 31.3506 1.5275 31.3506 2.80719Z"
              fill={selectedModule === 7 ? "#58724F" : "white"}
            />
            <path
              d="M7.39824 17.0478C7.10293 17.9009 5.1998 18.5243 4.44512 18.065C4.21543 17.9337 3.65762 18.229 3.13262 18.7212C2.41074 19.4103 2.24668 19.7712 2.47637 20.1978C2.90293 20.9853 2.21387 22.6915 1.2623 23.1181C0.179492 23.6103 0.179492 25.6446 1.2623 26.1368C2.21387 26.5634 2.90293 28.2696 2.47637 29.0571C2.0498 29.8775 3.69043 31.4196 4.70762 31.1243C5.69199 30.8946 7.29981 31.5837 7.49668 32.3712C7.75918 33.3228 10.2201 33.2571 10.5154 32.3056C10.7779 31.4853 12.1561 30.9275 13.3045 31.19C14.4201 31.4196 15.7654 30.1071 15.5029 29.0243C15.2404 28.0728 16.0936 26.104 16.717 26.104C17.1107 26.104 17.242 25.7431 17.242 24.6275C17.242 23.5446 17.1107 23.1509 16.7498 23.1509C16.0607 23.1509 15.2076 21.3462 15.4701 20.3618C15.7654 19.1478 14.5514 17.8681 13.3373 18.0978C12.1889 18.3275 10.7779 17.7696 10.5154 16.9493C10.3514 16.3915 10.0232 16.2603 9.00605 16.2603C7.92324 16.2603 7.66074 16.3915 7.39824 17.0478ZM10.4826 21.3462C13.3045 22.6915 13.3045 26.5634 10.4826 27.9087C8.12012 29.0243 5.42949 27.3509 5.42949 24.7259C5.42949 23.1837 6.21699 21.904 7.5623 21.3134C8.84199 20.7556 9.23574 20.7556 10.4826 21.3462Z"
              fill={selectedModule === 7 ? "#58724F" : "white"}
            />
            <path
              d="M20.0313 17.7369L19.2109 18.5244V28.4994C19.2109 38.0478 19.2438 38.4744 19.8672 39.1634C20.5234 39.8853 20.7203 39.8853 28.8578 39.8853C36.8641 39.8853 37.1922 39.8525 37.7828 39.1963C38.3734 38.5728 38.4063 37.8181 38.5047 29.2541C38.6359 19.2463 38.4719 17.9338 37.0938 17.3103C36.5031 17.0478 33.7141 16.9166 28.5297 16.9166H20.8188L20.0313 17.7369ZM35.2891 22.3306V23.8072L28.825 23.7416L22.3281 23.6431L22.2297 22.2322L22.1313 20.8541H28.6938H35.2891V22.3306ZM25.6094 27.5806C25.6094 28.1384 25.3797 28.2369 24.2969 28.2369C23.1813 28.2369 22.9844 28.1384 22.8859 27.4822C22.7875 26.7603 22.8859 26.7275 24.1984 26.8259C25.3469 26.8916 25.6094 27.0556 25.6094 27.5806ZM30.2031 27.5806C30.2031 28.1384 29.9734 28.2369 28.8906 28.2369C27.775 28.2369 27.5781 28.1384 27.4797 27.4822C27.3813 26.7603 27.4797 26.7275 28.7922 26.8259C29.9406 26.8916 30.2031 27.0556 30.2031 27.5806ZM34.7969 27.5806C34.7969 28.1384 34.5672 28.2369 33.4844 28.2369C32.3688 28.2369 32.1719 28.1384 32.0734 27.4822C31.975 26.7603 32.0734 26.7275 33.3859 26.8259C34.5344 26.8916 34.7969 27.0556 34.7969 27.5806ZM25.6094 31.5181C25.6094 32.0759 25.3797 32.1744 24.2969 32.1744C23.1813 32.1744 22.9844 32.0759 22.8859 31.4197C22.7875 30.6978 22.8859 30.665 24.1984 30.7634C25.3469 30.8291 25.6094 30.9931 25.6094 31.5181ZM30.2031 31.5181C30.2031 32.0759 29.9734 32.1744 28.8906 32.1744C27.775 32.1744 27.5781 32.0759 27.4797 31.4197C27.3813 30.6978 27.4797 30.665 28.7922 30.7634C29.9406 30.8291 30.2031 30.9931 30.2031 31.5181ZM34.7969 31.5181C34.7969 32.0103 34.5344 32.2072 33.6813 32.2728C32.4344 32.4041 31.8109 31.9775 32.1391 31.19C32.2703 30.7963 32.6641 30.6978 33.55 30.7634C34.5344 30.8291 34.7969 30.9931 34.7969 31.5181ZM25.6094 35.4556C25.6094 36.0134 25.3797 36.1119 24.2969 36.1119C23.1813 36.1119 22.9844 36.0134 22.8859 35.3572C22.7875 34.6353 22.8859 34.6025 24.1984 34.7009C25.3469 34.7666 25.6094 34.9306 25.6094 35.4556ZM30.2031 35.4556C30.2031 36.0134 29.9734 36.1119 28.8906 36.1119C27.775 36.1119 27.5781 36.0134 27.4797 35.3572C27.3813 34.6353 27.4797 34.6025 28.7922 34.7009C29.9406 34.7666 30.2031 34.9306 30.2031 35.4556ZM34.7969 35.4556C34.7969 35.9478 34.5344 36.1447 33.6813 36.2103C32.4344 36.3416 31.8109 35.915 32.1391 35.1275C32.2703 34.7338 32.6641 34.6353 33.55 34.7009C34.5344 34.7666 34.7969 34.9306 34.7969 35.4556Z"
              fill={selectedModule === 7 ? "#58724F" : "white"}
            />
            <path
              d="M17.0442 27.0228C16.4536 27.4166 16.2567 28.4338 16.6176 29.1228C16.9129 29.6806 16.7817 29.9759 15.6989 31.0916C14.6161 32.2072 14.3208 32.3384 13.4348 32.1744C12.0567 31.9447 11.4333 32.2072 11.2036 33.1916C11.0395 33.8478 10.777 33.9791 9.82544 33.9791C8.87388 33.9791 8.677 34.0775 8.84106 34.5041C8.9395 34.7994 9.03794 35.0947 9.03794 35.1603C9.03794 35.2259 11.1051 35.2916 13.6317 35.2916H18.2254V31.0259C18.2254 26.7603 18.0942 26.3009 17.0442 27.0228Z"
              fill={selectedModule === 7 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Financial
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => handleSelectModule(8)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 8 ? "bg-white text-[#58724F] rounded-l-full" : ""
          }`}
        >
          {isSidebarOpen && selectedModule === 7 && nearbyModules.down === 8 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#8AB296] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 7 &&
          nearbyModules.down === 8 ? (
            <>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 9 && nearbyModules.up === 8 ? (
            <>
              <div className="absolute right-0 top-[1.8vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1.8vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.6vw] h-[1.6vw]" : "w-[2.1vw] h-[2.1vw]"
            }`}
            viewBox="0 0 42 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3792 0.621382C14.6361 1.29367 12.212 3.50263 10.9999 6.41589C10.2344 8.30471 10.362 11.9223 11.287 13.8751C12.9137 17.3646 15.912 19.2534 19.7715 19.2855C22.8654 19.3175 24.9706 18.3891 26.9163 16.2441C32.1792 10.3536 28.4473 0.941521 20.6327 0.429298C19.5482 0.365271 18.081 0.429298 17.3792 0.621382Z"
              fill={selectedModule === 8 ? "#58724F" : "white"}
            />
            <path
              d="M30.0651 18.7331C29.8211 18.9779 29.6469 19.7124 29.6469 20.412C29.6469 21.4613 29.5075 21.7061 28.6363 22.0559C27.7302 22.3707 27.5211 22.3357 26.8241 21.6012C25.5347 20.2371 23.7226 20.6568 23.7226 22.3357C23.7226 22.7554 24.1059 23.4549 24.559 23.8747C25.2908 24.5742 25.3605 24.819 25.0469 25.6935C24.7332 26.5679 24.5241 26.7078 23.409 26.7078C21.9453 26.7078 21.2832 27.1975 21.2832 28.2817C21.2832 29.366 21.9453 29.8557 23.3741 29.8557C24.4196 29.8557 24.7332 30.0306 25.0817 30.7651C25.465 31.6045 25.3953 31.8144 24.5938 32.6538C23.5484 33.7731 23.4787 34.9273 24.4196 35.452C25.2908 35.9067 26.1969 35.6618 27.0332 34.7874C27.5211 34.2278 27.7999 34.1578 28.6363 34.4726C29.5075 34.7874 29.6469 34.9973 29.6469 36.1165C29.6469 37.5156 30.1348 38.2501 31.0757 38.2501C32.0166 38.2501 32.7832 37.2708 32.7832 36.0116C32.7832 35.1022 32.9575 34.8224 33.7939 34.5076C34.6651 34.1928 34.909 34.2628 35.6757 35.0323C36.3378 35.6968 36.756 35.8367 37.453 35.6618C38.8121 35.3121 39.0211 33.878 37.9408 32.7588C37.1742 31.9893 37.1045 31.7444 37.4181 30.87C37.7317 30.0306 38.0105 29.8557 38.9166 29.8557C40.1712 29.8557 41.1469 29.0862 41.1469 28.1418C41.1469 27.1975 40.4151 26.7078 39.056 26.7078C38.0105 26.7078 37.7666 26.5679 37.453 25.7284C37.1393 24.889 37.1742 24.6092 37.906 23.7697C38.7772 22.7204 38.9166 21.811 38.2893 21.1815C37.6272 20.5169 36.4424 20.6918 35.5711 21.6362C34.8393 22.4406 34.7348 22.4406 33.7939 21.9509C32.9923 21.5662 32.7832 21.2164 32.7832 20.307C32.7832 18.9779 32.2605 18.3134 31.2151 18.3134C30.7969 18.3134 30.309 18.4882 30.0651 18.7331ZM33.4802 25.6235C34.0378 26.1831 34.5954 27.0576 34.7348 27.5822C35.2923 29.7857 32.7135 32.374 30.5181 31.8144C29.9954 31.6745 29.1241 31.1149 28.5666 30.5552C27.1029 29.1212 27.1726 27.3723 28.7408 25.7984C30.309 24.2244 32.0514 24.1545 33.4802 25.6235Z"
              fill={selectedModule === 8 ? "#58724F" : "white"}
            />
            <path
              d="M15.1125 20.7586C9.65823 21.2388 4.80995 23.1917 2.5453 25.7528C1.04616 27.4815 0.599609 28.7941 0.599609 31.5473C0.599609 33.212 0.727196 33.6602 1.42892 34.4926L2.25823 35.485H11.4444H20.6306L20.4712 34.2044C20.3436 33.3401 20.4712 32.6998 20.822 32.1555C21.4918 31.0991 21.46 31.003 20.535 31.003C19.3548 31.003 18.1427 29.6585 18.1427 28.3779C18.1427 26.9693 18.8444 26.0089 20.216 25.5607C21.2686 25.2085 21.3005 25.1445 20.8539 24.5042C20.3117 23.7359 20.216 22.2633 20.6944 21.4309C20.9496 20.9187 20.822 20.8226 19.8013 20.6306C19.1634 20.5345 18.3979 20.4705 18.1427 20.5025C17.8875 20.5025 16.516 20.6306 15.1125 20.7586Z"
              fill={selectedModule === 8 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Roles
            </label>
          )}
        </div>{" "}
        <div className="flex items-center justify-center py-[0.3vw] relative">
          {/* border */}
          <div className="border-[0.1vw] w-[60%]  border-[#FFFFFF80] "></div>
          {isSidebarOpen && selectedModule === 8 && nearbyModules.down === 9 ? (
            <>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[3vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[3vw] h-[3vw] bg-[#84AE95] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 8 &&
          nearbyModules.down === 9 ? (
            <>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && selectedModule === 9 && nearbyModules.up === 8 ? (
            <>
              <div className="absolute right-0 top-[-2.8vw]">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[-2.8vw]">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#8AB296] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && selectedModule === 9 && nearbyModules.up === 8 ? (
            <>
              <div className="absolute right-0 top-[1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[1vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#8AB296] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div
          onClick={() => handleSelectModule(9)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 9 ? "bg-white text-[#58724F] rounded-l-full" : ""
          }`}
        >
          {isSidebarOpen && selectedModule === 10 && nearbyModules.up === 9 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3vw] h-[3vw] bg-[#83AE95] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 10 && nearbyModules.up === 9 ? (
            <>
              <div className="absolute right-0 top-[0.9vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.9vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.5vw] h-[1.5vw]" : "w-[1.9vw] h-[1.9vw]"
            }`}
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7052 0.621029C8.65364 3.02931 2.61496 9.21177 0.566126 17.1196C-0.188709 19.9951 -0.188709 25.9619 0.566126 28.8375C2.65091 36.925 9.33659 43.5747 17.3163 45.4438C20.2278 46.1268 25.7632 46.1268 28.7107 45.4438C34.6775 44.042 40.5364 39.4411 43.3761 33.9416C45.353 30.0955 46 27.4356 46 22.9785C46 18.5573 45.353 15.8615 43.4479 12.1592C40.788 7.0551 36.2231 3.06525 30.7955 1.12425C27.3448 -0.133808 20.084 -0.385418 16.7052 0.621029ZM26.2305 11.5482C28.9982 12.95 30.3282 15.8974 29.5015 18.7011C29.2858 19.456 28.2075 21.0735 27.1291 22.3315C25.6913 23.985 25.1522 24.8836 25.0803 25.8181C24.9725 27.1121 24.9725 27.1121 23.1033 27.22L21.1983 27.3278V26.0697C21.1983 24.2006 21.7374 23.1223 23.6785 21.0735C25.6913 18.9527 26.2305 17.8025 25.9789 16.4007C25.7273 15.1426 24.613 14.3518 23.0674 14.3518C21.4858 14.3518 20.6232 14.8551 19.9402 16.1491L19.4011 17.1915L18.0711 16.6523C16.0942 15.8256 15.9863 15.6099 16.849 14.2081C18.8259 11.009 22.8877 9.85877 26.2305 11.5482ZM24.7927 30.9582C25.1881 31.3895 25.5116 32.1084 25.5116 32.5757C25.5116 33.6181 24.002 35.1997 23.0674 35.1997C21.8812 35.1997 20.4794 33.8338 20.4794 32.6476C20.4794 30.419 23.2831 29.3407 24.7927 30.9582Z"
              fill={selectedModule === 9 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Support
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => handleSelectModule(10)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 10
              ? "bg-white text-[#58724F] rounded-l-full"
              : ""
          }`}
        >
          {isSidebarOpen &&
          selectedModule === 9 &&
          nearbyModules.down === 10 ? (
            <>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[3.5vw] h-[3.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3.5vw] h-[3.5vw] bg-[#81AD95] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 9 &&
          nearbyModules.down === 10 ? (
            <>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {isSidebarOpen && selectedModule === 11 && nearbyModules.up === 10 ? (
            <>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.2vw]">
                <div className="w-[3vw] h-[3vw] bg-[#82AD95] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen &&
          selectedModule === 11 &&
          nearbyModules.up === 10 ? (
            <>
              <div className="absolute right-0 top-[0.9vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[0.9vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-br-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.5vw] h-[1.5vw]" : "w-[1.9vw] h-[1.9vw]"
            }`}
            viewBox="0 0 46 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.7234 1.63887C18.3281 2.03418 17.9328 3.1123 17.7891 4.08261C17.4297 6.74199 17.2859 6.99356 16.1 7.38887C15.0938 7.74824 14.8063 7.67637 13.1531 6.52637C10.35 4.58574 9.37969 4.76543 6.57656 7.53262C3.80938 10.3357 3.62969 11.3061 5.57031 14.1092C6.72031 15.7623 6.79219 16.0498 6.43281 17.0561C6.0375 18.242 5.78594 18.3857 3.12656 18.7451C0.359375 19.1045 0 19.7154 0 23.9561C0 28.1967 0.359375 28.8076 3.12656 29.167C5.78594 29.5264 6.0375 29.6701 6.43281 30.8561C6.79219 31.8623 6.72031 32.1498 5.57031 33.8029C3.62969 36.6061 3.80938 37.5764 6.57656 40.3795C9.37969 43.1467 10.35 43.3264 13.1531 41.3857C14.8063 40.2357 15.0938 40.1639 16.1 40.5232C17.2859 40.9186 17.4297 41.1701 17.7891 43.8295C18.1484 46.5967 18.7594 46.9561 23 46.9561C27.2406 46.9561 27.8516 46.5967 28.2109 43.8295C28.5703 41.1701 28.7141 40.9186 29.9 40.5232C30.9063 40.1639 31.1938 40.2357 32.8469 41.3857C35.65 43.3264 36.6203 43.1467 39.4234 40.3795C42.1906 37.5764 42.3703 36.6061 40.4297 33.8029C39.2797 32.1498 39.2078 31.8623 39.5672 30.8561C39.9625 29.6701 40.2141 29.5264 42.8734 29.167C45.6406 28.8076 46 28.1967 46 23.9561C46 19.7154 45.6406 19.1045 42.8734 18.7451C40.2141 18.3857 39.9625 18.242 39.5672 17.0561C39.2078 16.0498 39.2797 15.7623 40.4297 14.1092C42.3703 11.3061 42.1906 10.3357 39.4234 7.53262C36.6203 4.76543 35.65 4.58574 32.8469 6.52637C31.1938 7.67637 30.9063 7.74824 29.9 7.38887C28.7141 6.99356 28.5703 6.74199 28.2109 4.08261C27.8516 1.31543 27.2406 0.956055 23 0.956055C19.9453 0.956055 19.2984 1.06387 18.7234 1.63887ZM26.5938 15.367C28.5703 16.2654 30.3672 17.9186 31.3734 19.8232C32.4156 21.7279 32.4516 26.0404 31.4812 27.9092C30.5469 29.6701 28.8219 31.4311 27.1328 32.3295C25.1203 33.4076 20.8797 33.4076 18.8672 32.3295C17.1781 31.4311 15.4531 29.6701 14.5188 27.9092C13.5484 26.0404 13.5844 21.7279 14.6266 19.8232C16.9984 15.4029 22.3172 13.4264 26.5938 15.367Z"
              fill={selectedModule === 10 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Settings
            </label>
          )}
        </div>{" "}
        <div
          onClick={() => setOpenLogoutModal(true)}
          className={`flex items-center gap-x-[1vw] py-[0.75vw] ${
            isSidebarOpen ? "pl-[2vw]" : "pl-[1vw]"
          } cursor-pointer relative ${
            selectedModule === 11
              ? "bg-white text-[#58724F] rounded-l-full"
              : ""
          }`}
        >
           {isSidebarOpen &&
          selectedModule === 10 &&
          nearbyModules.down === 11 ? (
            <>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[3vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[3vw] h-[3vw] bg-[#82AD94] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
           {!isSidebarOpen &&
          selectedModule === 10 &&
          nearbyModules.down === 11 ? (
            <>
              <div className="absolute right-0 top-[0vw]">
                <div className="w-[1.8vw] h-[2.5vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-0">
                <div className="w-[1.8vw] h-[2.5vw] bg-[#90b49d] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {/* {isSidebarOpen && selectedModule === 11 ? (
            <>
              <div className="absolute right-0 top-[3.15vw] outline-none">
                <div className="w-[3vw] h-[3vw] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[3.15vw] outline-none">
                <div className="w-[3vw] h-[3vw] bg-[#7FAC95] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}
          {!isSidebarOpen && selectedModule === 11 ? (
            <>
              <div className="absolute right-0 top-[3.4vw] outline-none">
                <div className="w-[1.8vw] h-[3vh] bg-white"></div>
              </div>
              <div className="absolute right-0 top-[3.4vw] outline-none">
                <div className="w-[1.8vw] h-[3vh] bg-[#90b49d] rounded-tr-full"></div>
              </div>
            </>
          ) : (
            ""
          )}  */}
          <svg
            className={` ${
              isSidebarOpen ? "w-[1.5vw] h-[1.5vw]" : "w-[1.9vw] h-[1.9vw]"
            }`}
            viewBox="0 0 42 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3792 0.621382C14.6361 1.29367 12.212 3.50263 10.9999 6.41589C10.2344 8.30471 10.362 11.9223 11.287 13.8751C12.9137 17.3646 15.912 19.2534 19.7715 19.2855C22.8654 19.3175 24.9706 18.3891 26.9163 16.2441C32.1792 10.3536 28.4473 0.941521 20.6327 0.429298C19.5482 0.365271 18.081 0.429298 17.3792 0.621382Z"
              fill={selectedModule === 11 ? "#58724F" : "white"}
            />
            <path
              d="M30.0651 18.7331C29.8211 18.9779 29.6469 19.7124 29.6469 20.412C29.6469 21.4613 29.5075 21.7061 28.6363 22.0559C27.7302 22.3707 27.5211 22.3357 26.8241 21.6012C25.5347 20.2371 23.7226 20.6568 23.7226 22.3357C23.7226 22.7554 24.1059 23.4549 24.559 23.8747C25.2908 24.5742 25.3605 24.819 25.0469 25.6935C24.7332 26.5679 24.5241 26.7078 23.409 26.7078C21.9453 26.7078 21.2832 27.1975 21.2832 28.2817C21.2832 29.366 21.9453 29.8557 23.3741 29.8557C24.4196 29.8557 24.7332 30.0306 25.0817 30.7651C25.465 31.6045 25.3953 31.8144 24.5938 32.6538C23.5484 33.7731 23.4787 34.9273 24.4196 35.452C25.2908 35.9067 26.1969 35.6618 27.0332 34.7874C27.5211 34.2278 27.7999 34.1578 28.6363 34.4726C29.5075 34.7874 29.6469 34.9973 29.6469 36.1165C29.6469 37.5156 30.1348 38.2501 31.0757 38.2501C32.0166 38.2501 32.7832 37.2708 32.7832 36.0116C32.7832 35.1022 32.9575 34.8224 33.7939 34.5076C34.6651 34.1928 34.909 34.2628 35.6757 35.0323C36.3378 35.6968 36.756 35.8367 37.453 35.6618C38.8121 35.3121 39.0211 33.878 37.9408 32.7588C37.1742 31.9893 37.1045 31.7444 37.4181 30.87C37.7317 30.0306 38.0105 29.8557 38.9166 29.8557C40.1712 29.8557 41.1469 29.0862 41.1469 28.1418C41.1469 27.1975 40.4151 26.7078 39.056 26.7078C38.0105 26.7078 37.7666 26.5679 37.453 25.7284C37.1393 24.889 37.1742 24.6092 37.906 23.7697C38.7772 22.7204 38.9166 21.811 38.2893 21.1815C37.6272 20.5169 36.4424 20.6918 35.5711 21.6362C34.8393 22.4406 34.7348 22.4406 33.7939 21.9509C32.9923 21.5662 32.7832 21.2164 32.7832 20.307C32.7832 18.9779 32.2605 18.3134 31.2151 18.3134C30.7969 18.3134 30.309 18.4882 30.0651 18.7331ZM33.4802 25.6235C34.0378 26.1831 34.5954 27.0576 34.7348 27.5822C35.2923 29.7857 32.7135 32.374 30.5181 31.8144C29.9954 31.6745 29.1241 31.1149 28.5666 30.5552C27.1029 29.1212 27.1726 27.3723 28.7408 25.7984C30.309 24.2244 32.0514 24.1545 33.4802 25.6235Z"
              fill={selectedModule === 11 ? "#58724F" : "white"}
            />
            <path
              d="M15.1125 20.7586C9.65823 21.2388 4.80995 23.1917 2.5453 25.7528C1.04616 27.4815 0.599609 28.7941 0.599609 31.5473C0.599609 33.212 0.727196 33.6602 1.42892 34.4926L2.25823 35.485H11.4444H20.6306L20.4712 34.2044C20.3436 33.3401 20.4712 32.6998 20.822 32.1555C21.4918 31.0991 21.46 31.003 20.535 31.003C19.3548 31.003 18.1427 29.6585 18.1427 28.3779C18.1427 26.9693 18.8444 26.0089 20.216 25.5607C21.2686 25.2085 21.3005 25.1445 20.8539 24.5042C20.3117 23.7359 20.216 22.2633 20.6944 21.4309C20.9496 20.9187 20.822 20.8226 19.8013 20.6306C19.1634 20.5345 18.3979 20.4705 18.1427 20.5025C17.8875 20.5025 16.516 20.6306 15.1125 20.7586Z"
              fill={selectedModule === 11 ? "#58724F" : "white"}
            />
          </svg>
          {isSidebarOpen && (
            <label className="text-[1.1vw] font-sans cursor-pointer">
              Logout
            </label>
          )}
        </div>{" "}
      </div>
      {/* {isSidebarOpen && selectedModule === 11 ? (
        <>
          <div className="absolute right-0 bottom-[1.6vw] outline-none">
            <div className="w-[3vw] h-[3vw] bg-white"></div>
          </div>
          <div className="absolute right-0 bottom-[1.6vw] outline-none">
            <div className="w-[3vw] h-[3vw] bg-[#7FAC95] rounded-tr-full"></div>
          </div>
        </>
      ) : (
        ""
      )} */}

      <Modal
        isOpen={openLogoutModal}
        width={"10vw"}
        onClose={() => setOpenLogoutModal(false)}
      >
        <div className="flex flex-col px-[4vw] py-[1vw] justify-center items-center">
          <span className="text-center pt-[1vw]">
            <RiLogoutBoxFill color="#117283" size={"3vw"} />
          </span>
          <span className="text-[1.3vw] pt-[1vw] text-black font-bold text-center">
            Are you sure?
          </span>
          <span className="text-[1vw] text-black text-center pt-[1vw]">
            Want to Logout this Account?
          </span>
        </div>
        <div className="flex flex-row pb-[1vw] gap-[1vw] justify-center items-center mt-[0.5vw]">
          <button
            className="h-[2.5vw] w-[6.5vw] bg-white border border-[#117283] text-black rounded-[0.5vw]"
            onClick={() => {
              setOpenLogoutModal(false);
            }}
          >
            No
          </button>
          <button
            className="h-[2.5vw] w-[6.5vw] bg-[#117283] rounded-[0.5vw]"
            onClick={() => {
              navigation("/");
              window.location.reload();
              sessionStorage.removeItem("token");
            }}
          >
            Yes
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
