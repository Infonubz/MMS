import React, { useState } from "react";
import { ConfigProvider, Table, Tooltip } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "../../App.css";


export default function Offline({ setIsModalPopup, setRowCount, currentItems }) {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: (
        <span className="text-[0.95vw] pl-[0.4vw] font-normal">Image</span>
      ),
      dataIndex: "image",
      align: "center",
      render: (image) => (
        <span className="flex h-[2.95vw] w-[7vw] justify-center pl-[2vw]">
          {image}
        </span>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">SKU Code</span>,
      dataIndex: "skuCode",
      align: "center",
      sorter: (a, b) => a.skuCode?.localeCompare(b.skuCode),
      render: (skuCode) => (
        <span className="text-[0.85vw] font-bold">{skuCode}</span>
      ), // Use parentheses here to directly return the JSX
    },
    {
      title: <span className="text-[0.95vw] font-normal">Style ID</span>,
      dataIndex: "styleId",
      align: "center",
      sorter: (a, b) => a.styleId?.localeCompare(b.styleId),
      render: (styleId) => (
        <span className="text-[0.85vw] font-bold">{styleId}</span>
      ),
    },
    {
      title: (
        <span className="text-[0.95vw] font-normal pl-[2vw]">Style Name</span>
      ),
      dataIndex: "styleName",
      sorter: (a, b) => a.styleName?.localeCompare(b.styleName),
      render: (styleName) =>
        styleName?.length > 15 ? (
          <Tooltip
            placement="top"
            title={styleName}
            className="cursor-pointer"
            //color="#1F487C"
          >
            <div className="text-[0.85vw] pl-[1.5vw]">
              {styleName?.slice(0, 15)}...
            </div>
          </Tooltip>
        ) : (
          <div className="text-[0.85vw] pl-[1.5vw]">{styleName}</div>
        ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Quantity</span>,
      dataIndex: "quantity",
      align: "center",
      sorter: (a, b) => a.available?.localeCompare(b.available),
      render: (available) => (
        <span className="text-[0.85vw] font-bold">{available}</span>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Price</span>,
      dataIndex: "price",
      align: "center",
      sorter: (a, b) => a.received?.localeCompare(b.received),
      render: (received) => <span className="text-[0.85vw]">{received}</span>,
    },
    {
      title: (
        <span className="text-[0.95vw] font-normal">Available Colors</span>
      ),
      dataIndex: "availableColors",
      align: "center",
      sorter: (a, b) => a.lastupdated?.localeCompare(b.lastupdated),
      render: (lastupdated) => (
        <span className="text-[0.85vw]">{lastupdated}</span>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Delivery Status</span>,
      dataIndex: "deliveryStatus",
      align: "center",
      render: (deliveryStatus) => (
        <div className="flex flex-row gap-[1vw] justify-center items-center">
          <span
            className={`flex justify-center items-center border-[0.1vw] p-[0.5vw] rounded-[1vw] h-[1.5vw] w-[5.9vw]  
                     ${
                       deliveryStatus === "Delivered"
                         ? "border-[#c6eec2] bg-[#ECFDF3]"
                         : deliveryStatus === "Cancelled"
                         ? "border-[#FF0C0C4D] bg-[#FDECEC]"
                         : deliveryStatus === "Shipped"
                         ? "border-[#9DBED3] bg-[#D8F0FF]"
                         : "border-[#FF9D004D] bg-[#FFEAA5]"
                     }`}
          >
            <h1
              className={`text-[0.80vw] font-medium 
                       ${
                         deliveryStatus === "Delivered"
                           ? "text-[#34AE2A]"
                           : deliveryStatus === "Cancelled"
                           ? "text-[#E52A2A]"
                           : deliveryStatus === "Shipped"
                           ? "text-[#49A7E4]"
                           : "text-[#FF9D00]"
                       }`}
            >
              {deliveryStatus}
            </h1>
          </span>
        </div>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal ">Sales Status</span>,
      dataIndex: "salesStatus",
      width: "5vw",
      align: "center",
      render: (salesStatus) => (
        <div className="flex flex-row gap-[1vw] justify-center items-center pl-[1vw]">
          <span
            className={`flex justify-center items-center border-[0.1vw] p-[0.5vw] rounded-[1vw] h-[1.5vw] w-[5.9vw]  
                    ${
                      salesStatus === "Best Seller"
                        ? "border-[#c6eec2] bg-[#ECFDF3]"
                        : salesStatus === "Low"
                        ? "border-[#FF0C0C4D] bg-[#FDECEC]"
                        : "border-[#FF9D004D] bg-[#FFEAA5]"
                    }`}
          >
            <h1
              className={`text-[0.80vw] font-medium 
                      ${
                        salesStatus === "Best Seller"
                          ? "text-[#34AE2A]"
                          : salesStatus === "Low"
                          ? "text-[#E52A2A]"
                          : "text-[#FF9D00]"
                      }`}
            >
              {salesStatus}
            </h1>
          </span>
          <span className="flex justify-center items-center">
            <HiOutlineDotsVertical size={"1.2vw"} />
          </span>
        </div>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("Selected row keys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setIsModalPopup(newSelectedRowKeys?.length > 0);
    setRowCount(newSelectedRowKeys?.length);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys?.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys?.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-[0.4vw]">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                rowHoverBg: "rgb(255, 255, 255, 0)",
                rowSelectedBg: "rgb(255, 255, 255, 0)",
                rowSelectedHoverBg: "rgb(255, 255, 255, 0)",
                borderRadius: "2vw",
                shadowHover: "0 0.5vw 1vw rgba(0, 0, 0, 0.15)",
              },
            },
          }}
        >
          <Table
            className="custom-table"
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            pagination={false}
            dataSource={currentItems}
            rowClassName={(record, index) => `custom-row-${index}`}
          />
        </ConfigProvider>
      </div>
    </>
  );
}
