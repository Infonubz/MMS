import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { CgImport } from "react-icons/cg";
import { PiExportBold } from "react-icons/pi";
import { Select, ConfigProvider } from "antd";
import { RxCaretDown } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import Modal from "../Modal/Modal";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { addDays, subMonths, subYears, startOfDay, endOfDay } from "date-fns";
import { DateRangePicker } from "react-date-range";
import ReactPaginate from "react-paginate";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { IoAddOutline } from "react-icons/io5";
import kurti from "../../Assets/kurti.jpg";
import PurchaseList from "./PurchaseList";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function Purchase() {
      const [isModalOpen, setIsModalOpen] = useState(false);
    
      const itemsPerPage = 10; // Define the number of items per page
    
      const [itemOffset, setItemOffset] = useState(0);
      const [pageNumber, setPageNumber] = useState(1); // Initialize state for the page number
      const [state, setState] = useState([
        {
          startDate: "",
          endDate: "",
          key: "selection",
        },
      ]);
      
      const dataSource = [
        {
          key: 1,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Approved",
        },
        {
          key: 2,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Pending",
        },
        {
          key: 3,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Pending",
        },
        {
          key: 4,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Cancelled",
        },
        {
          key: 5,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Pending",
        },
        {
          key: 6,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Cancelled",
        },
        {
          key: 7,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Approved",
        },
        {
          key: 8,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Approved",
        },
        {
          key: 9,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Approved",
        },
        {
          key: 10,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Pending",
        },
        {
          key: 11,
          image: <img src={kurti} alt="kurti" />,
          skuCode: "RdM018281pS",
          poNumber: "0560/24",
          styleId: "#23454GH6J",
          styleName: "Kurti",
          supplier: "Sri Bhagya Lakshmi Garments",
          issueDate: "3rd Dec 2024",
          purchaseStatus: "Approved",
        },
      ];
    
      const pageCount = Math.ceil(dataSource?.length / itemsPerPage);
    
      // Slice dataSource for pagination
      const currentItems = dataSource?.slice(itemOffset, itemOffset + itemsPerPage);
      const goToFirstPage = () => {
        setItemOffset(0);
        setPageNumber(1);
      };
    
      const goToLastPage = () => {
        setItemOffset((pageCount - 1) * itemsPerPage);
        setPageNumber(pageCount);
      };
    
      const handlePageClick = ({ selected }) => {
        const newOffset = selected * itemsPerPage;
        setItemOffset(newOffset);
        setPageNumber(selected + 1);
      };
    
      const handleGoToPage = () => {
        if (pageNumber > 0 && pageNumber <= pageCount) {
          const newOffset = (pageNumber - 1) * itemsPerPage;
          setItemOffset(newOffset);
        }
      };
    
      const handleCustomRange = (rangeType) => {
        const today = new Date();
    
        switch (rangeType) {
          case "lastWeek":
            setState([
              {
                startDate: startOfDay(addDays(today, -7)),
                endDate: endOfDay(today),
                key: "selection",
              },
            ]);
            break;
          case "lastMonth":
            setState([
              {
                startDate: startOfDay(subMonths(today, 1)),
                endDate: endOfDay(today),
                key: "selection",
              },
            ]);
            break;
          case "last6Months":
            setState([
              {
                startDate: startOfDay(subMonths(today, 6)),
                endDate: endOfDay(today),
                key: "selection",
              },
            ]);
            break;
          case "lastYear":
            setState([
              {
                startDate: startOfDay(subYears(today, 1)),
                endDate: endOfDay(today),
                key: "selection",
              },
            ]);
            break;
          case "allTime":
            // Customize this range for your "All Time" logic.
            setState([
              {
                startDate: new Date("2000-01-01"),
                endDate: endOfDay(today),
                key: "selection",
              },
            ]);
            break;
          default:
            break;
        }
      };
    
      // Handler for "Cancel" button
      const handleCancel = () => {
        console.log("Canceled");
        setIsModalOpen(false);
      };
    
      // Handler for "Done" button
      const handleDone = () => {
        setIsModalOpen(false);
      };
    

  return (
    <div className="h-full w-full">
        <div className="flex flex-row gap-[2vw] h-[4vh] justify-between">
          <div className="flex flex-row">
            <h1 className="text-[1.5vw] font-semibold">PURCHASE MANAGEMENT</h1>
          </div>
          <div className="flex gap-[2vw] justify-end ml-auto">
            {" "}
            <div>
              <div>
                <input
                  id="xlsxFile"
                  name="xlsxFile"
                  type="file"
                  style={{ display: "none" }}
                />
                <button className="bg-[#ffffff] border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.8vw] justify-center gap-[0.5vw] 
                items-center rounded-[0.6vw]">
                  <CgImport size={"1vw"} color="#323232" />
                  <span className="font-bold text-[0.7vw] text-[#323232]">
                    Import
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div>
                <input
                  id="xlsxFile"
                  name="xlsxFile"
                  type="file"
                  style={{ display: "none" }}
                />
                <button className="bg-[#ffffff] border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.8vw] justify-center 
                gap-[0.5vw] items-center rounded-[0.6vw]">
                  <PiExportBold size={"1vw"} color="#323232" />
                  <span className="font-bold text-[#323232] text-[0.7vw]">
                    Export
                  </span>
                </button>
              </div>
            </div>
            <div>
            <button className="bg-[#3348FF] border border-[#3348FF] shadow-md shadow-[#c4c0c0] flex px-[0.75vw] h-[1.8vw] justify-center 
                gap-[0.5vw] items-center rounded-[0.7vw]">
                  <IoAddOutline size={"1.3vw"} color="#FFFFFF" />
                  <span className="font-bold text-white text-[0.7vw]">
                    Add Purchase
                  </span>
                </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row bg-[#F9F9F9] rounded-[1vw] mt-[0.5vh] justify-between p-[0.4vw]">
          <div className="flex">
            <div className="relative flex items-center w-[13.85vw]">
              <BiSearchAlt
                className="absolute left-[0.8vw] top-[50%] transform -translate-y-1/2"
                size={"1vw"}
                color="#323232"
              />

              <input
                type="text"
                className="bg-white outline-none pl-[3vw] pr-[3vw] w-[15vw] h-[2vw] border-[0.1vw] border-[#dddddd] rounded-[0.7vw] shadow-md"
                placeholder="Search anything..."
              />
            </div>
          </div>
          <div className="flex gap-[1.5vw] justify-end ml-auto=">
            <div className="">
              <ConfigProvider
                theme={{
                  token: {
                    fontSize: 13,
                    lineHeight: 0,
                  },
                  components: {
                    DatePicker: {
                      cellWidth: 34,
                      cellHeight: 22,
                    },
                  },
                }}
              >
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="flex flex-row h-[2vw] w-[15vw] rounded-[0.65vw] p-[0.3vw] items-center shadow-md placeholder-black justify-between cursor-pointer border-[0.1vw] bg-[#ffffff] border-[#e5e7eb]"
                >
                  <div>
                    <SlCalender size="0.8vw" color="#323232" />
                  </div>
                  <div className="flex flex-row justify-evenly w-[16vw]">
                    <span className="text-[0.8vw]">
                      {state[0]?.startDate instanceof Date
                        ? state[0].startDate.toLocaleDateString()
                        : "mm/dd/yy"}
                    </span>
                    <span>
                      <svg
                        className="mt-[0.15vw]"
                        width="0.8vw"
                        height="0.8vw"
                        viewBox="0 0 21 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.57324 6.9043L19.5344 6.9043"
                          stroke="#404040"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M19.7194 6.87804L13.8117 0.631443L16.0549 4.78262L13.8117 6.87855L19.7194 6.87804Z"
                          fill="#404040"
                          stroke="#404040"
                          stroke-width="1.12742"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="text-[0.8vw]">
                      {state[0]?.endDate instanceof Date
                        ? state[0].endDate.toLocaleDateString()
                        : "mm/dd/yy"}
                    </span>
                  </div>
                  <div>
                    <RxCaretDown
                      style={{
                        color: "rgba(0,0,0,.45)",
                      }}
                    />
                  </div>
                </div>
              </ConfigProvider>
            </div>
            <div className="">
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      borderRadius: "0.7vw",
                    },
                  },
                }}
              >
                <Select
                  className="h-[2vw] relative flex justify-center items-center w-[10vw] rounded-[1vw] shadow-md placeholder:text-[1vw]"
                  allowClear
                  options={[
                    {
                      value: 1,
                      label: "Pending",
                    },
                    {
                      value: 2,
                      label: "Approved",
                    },
                    {
                      value: 3,
                      label: "Cancelled",
                    },
                  ]}
                  placeholder="Status"
                  style={{ textAlign: "center" }} // Center the text
                />

                <span className="pt-[-3vw]">
                  <svg
                    className="mt-[-1.8vw] pl-[0.3vw] absolute"
                    width="1.4vw"
                    height="1.4vw"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.3958 2.49324C14.5746 2.30813 14.8483 2.03735 15.0848 1.93578C15.3213 1.8342 15.5841 1.75289 15.8415 1.75066C16.0989 1.74842 16.4708 1.83833 16.709 1.93578C16.9472 2.03322 17.3145 2.3569 17.4965 2.53887C17.6785 2.72084 17.8714 3.03543 17.9688 3.27361C18.0663 3.5118 18.1567 3.80501 18.1545 4.06234C18.1522 4.31968 18.0704 4.62431 17.9688 4.86076C17.8672 5.09722 17.6816 5.35387 17.4965 5.53265L11.6559 11.4215C11.5032 11.5741 10.9953 11.9372 10.7863 11.9914L7.03321 12.8951L8.05577 9.07872C8.10998 8.86974 8.31054 8.57158 8.46321 8.41891L14.3958 2.49324ZM18.2402 1.66444C17.9252 1.34946 17.5513 1.0996 17.1397 0.929136C16.7281 0.758668 16.287 0.670929 15.8415 0.670929C15.396 0.670929 14.9549 0.758668 14.5433 0.929136C14.1317 1.0996 13.7578 1.34946 13.4428 1.66444L7.56957 7.53685C7.23377 7.87276 6.99386 8.29229 6.87467 8.75203L5.6884 13.3288C5.65669 13.4513 5.65751 13.58 5.69078 13.702C5.72406 13.8241 5.78863 13.9354 5.87811 14.0248C5.96759 14.1143 6.07887 14.1789 6.20096 14.2121C6.32305 14.2454 6.45172 14.2462 6.57422 14.2145L11.1516 13.0284C11.6115 12.909 12.0312 12.6688 12.367 12.3327L18.2402 6.46024C18.8761 5.82421 19.2334 4.96169 19.2334 4.06234C19.2334 3.163 18.8761 2.30047 18.2402 1.66444ZM9.54184 1.64022C10.323 1.64022 11.0809 1.74294 11.801 1.93578L10.7863 2.6926C9.276 2.47688 7.22945 2.94743 5.87811 3.65538C4.52677 4.36333 3.30777 5.79688 2.62551 7.16123C1.94324 8.52558 1.81919 10.1157 2.06357 11.6214C2.30794 13.1271 3.1566 14.7509 4.23536 15.8295C5.31412 16.9081 6.77602 17.6656 8.28191 17.9099C9.78781 18.1543 11.5822 17.9641 12.9467 17.2819C14.3112 16.5997 15.6058 15.0532 16.3139 13.702C17.0219 12.3509 17.3554 10.6265 17.1397 9.11639L17.9688 8.10277C18.4409 9.86285 18.3497 11.7266 17.708 13.4321C17.0664 15.1377 15.9065 16.5995 14.3913 17.6122C12.8762 18.6249 11.0818 19.1376 9.26027 19.0784C7.43872 19.0191 5.68149 18.3909 4.23536 17.2819C2.78923 16.1729 1.72685 14.6388 1.19743 12.8951C0.668005 11.1514 0.69813 9.28573 1.28357 7.56005C1.86902 5.83436 2.98037 4.33538 4.46155 3.27361C5.94273 2.21185 7.71933 1.64064 9.54184 1.64022Z"
                      fill="#323232"
                    />
                  </svg>
                </span>
              </ConfigProvider>
            </div>
          </div>
        </div>
        <div className="flex-1 h-[70vh]">
              <PurchaseList currentItems={currentItems} />
        </div>
        <div className="flex mt-[6vh] h-[10vh] bg-[#f9f9f900] justify-between items-center">
        <div className="flex ml-[2vw]">
          <p className="text-[0.8vw]">
            Showing {itemOffset + 1} -{" "}
            {Math.min(itemOffset + itemsPerPage, dataSource?.length)} of{" "}
            {dataSource?.length} items
          </p>
        </div>

        <div className="flex items-center bg-[#f9f9f900] gap-[1vw]">
          <button
            onClick={goToFirstPage}
            disabled={itemOffset === 0}
            className={`text-[0.8vw] bg-[#f9f9f9] rounded-[1vw] h-[1.5vw] w-[2.3vw] flex justify-center items-center ${
              itemOffset === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#3348FF] cursor-pointer hover:underline"
            }`}
          >
            <RxDoubleArrowLeft size="0.9vw" />
          </button>
          <ReactPaginate
            className="pagination flex gap-[0.4vw] bg-[#f9f9f900]"
            breakLabel="......"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            activeClassName="font-bold bg-[#3348FF] px-[0.3vw] text-white text-center rounded-[1vw]"
            pageClassName="text-[0.8vw] cursor-pointer hover:underline px-[0.3vw] py-[0.1vw] rounded-[1vw]"
            previousClassName="text-[0.8vw] cursor-pointer hover:underline"
            nextClassName="text-[0.8vw] cursor-pointer hover:underline"
            previousLabel={
              <SlArrowLeft
                className="mt-[0.4vw]"
                size="0.65vw"
                color="#323232"
              />
            }
            nextLabel={
              <SlArrowRight
                className="mt-[0.4vw]"
                size="0.65vw"
                color="#323232"
              />
            }
            forcePage={pageNumber - 1}
            marginPagesDisplayed={0}
          />
          <button
            onClick={goToLastPage}
            disabled={itemOffset >= (pageCount - 1) * itemsPerPage}
            className={`text-[0.8vw] bg-[#F9F9F9] rounded-[1vw] h-[1.5vw] w-[2.3vw] flex justify-center items-center ${
              itemOffset >= (pageCount - 1) * itemsPerPage
                ? "text-gray-400 cursor-not-allowed"
                : "text-[#3348FF] cursor-pointer hover:underline"
            }`}
          >
            <RxDoubleArrowRight size="0.9vw" />
          </button>
        </div>

        <div className="flex flex-row gap-[0.5vw] bg-[#f9f9f900] items-center pr-[0.5vw]">
          <span className="text-[0.8vw]">Go to page</span>
          <div className="relative flex items-center">
            <input
              type="number"
              min={1}
              max={pageCount}
              value={pageNumber}
              onChange={(e) => setPageNumber(Number(e.target.value))}
              className="bg-[#F9F9F9] rounded-[0.5vw] px-[0.4vw] h-[1.5vw] text-[0.8vw] w-[3vw] text-center pr-[2vw]"
            />
            <div className="absolute right-[0.2vw] top-[0.8vw] transform -translate-y-1/2 flex flex-col">
              <button
                onClick={() =>
                  setPageNumber((prev) => Math.min(prev + 1, pageCount))
                }
                className="mb-[-0.3vw]"
              >
                <MdKeyboardArrowUp color="#323232" size={"1vw"} />
              </button>
              <button
                onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))} // Decrement
                className="p-[-0.5vw]"
              >
                <MdKeyboardArrowDown color="#323232" size={"1vw"} />
              </button>
            </div>
          </div>

          <button
            className="bg-[#3348FF] text-[0.8vw] text-white border border-[#3348FF] shadow-md shadow-[#d8d6d6] flex px-[0.6vw] h-[1.5vw] justify-center items-center rounded-[1vw]"
            onClick={handleGoToPage}
          >
            Go
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex w-full">
          <div className="flex flex-col w-full">
            {/* Custom Header with Buttons */}
            <div className="flex justify-center gap-4 mt-[0.5vw] border-b-[0.1vw] pb-[0.5vw] border-b-[#e5e7eb]">
              <button
                className="bg-[#ffffff] text-[0.7vw] text-black border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.5vw] justify-center items-center rounded-[0.6vw]"
                onClick={() => handleCustomRange("lastWeek")}
              >
                Last Week
              </button>
              <button
                className="bg-[#ffffff] text-[0.7vw] text-black border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.5vw] justify-center items-center rounded-[0.6vw]"
                onClick={() => handleCustomRange("lastMonth")}
              >
                Last Month
              </button>
              <button
                className="bg-[#ffffff] text-[0.7vw] text-black border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.5vw] justify-center items-center rounded-[0.6vw]"
                onClick={() => handleCustomRange("last6Months")}
              >
                Last 6 Month
              </button>
              <button
                className="bg-[#ffffff] text-[0.7vw] text-black border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.5vw] justify-center items-center rounded-[0.6vw]"
                onClick={() => handleCustomRange("lastYear")}
              >
                Last Year
              </button>
              <button
                className="bg-[#ffffff] text-[0.7vw] text-black border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.5vw] justify-center items-center rounded-[0.6vw]"
                onClick={() => handleCustomRange("allTime")}
              >
                All Time
              </button>
            </div>

            {/* Date Range Picker */}
            <div className="flex justify-center">
              <DateRangePicker
                onChange={(item) => {
                  setState([item.selection]);
                  console.log(item, "item");
                }}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={false}
                months={2}
                ranges={state}
                direction="horizontal"
                preventSnapRefocus={true}
                calendarFocus="backwards"
                staticRanges={[]} // Removes the default static ranges
                inputRanges={[]} // Removes the default input ranges
              />
            </div>
            {/* Custom Footer with "Cancel" and "Done" */}
            <div className="footer-buttons flex justify-end gap-[1vw] mt-2">
              <button
                className="bg-[#ffffff] text-[0.8vw] text-black border border-[#ebebeb] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.3vw] justify-center items-center rounded-[0.6vw]"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="bg-[#3348FF] text-[0.8vw] text-white border border-[#3348FF] shadow-md shadow-[#d8d6d6] flex px-[0.75vw] h-[1.3vw] justify-center items-center rounded-[0.6vw]"
                onClick={handleDone}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
