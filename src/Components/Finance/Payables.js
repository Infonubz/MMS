import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "../../App.css";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Payables({currentItems}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: <span className="text-[1vw] pl-[0.4vw]">Invoice ID</span>,
      dataIndex: "id",
      align: "center",
      sorter: (a, b) => a.id?.localeCompare(b.id),
      render: (id) => <span className="text-[0.9vw] flex p-[0.8vw] pl-[4vw]">{id}</span>,
    },
    {
      title: <span className="text-[1vw]">Customer Name</span>,
      dataIndex: "name",
      align: "center",
      sorter: (a, b) => a.name?.localeCompare(b.name),
      render: (name) => <span className="text-[0.9vw]">{name}</span>, // Use parentheses here to directly return the JSX
    },
    {
      title: <span className="text-[1vw]">Invoice Date</span>,
      dataIndex: "invoicedate",
      align: "center",
      sorter: (a, b) => a.invoicedate?.localeCompare(b.invoicedate),
      render: (invoicedate) => (
        <span className="text-[0.9vw]">{invoicedate}</span>
      ),
    },
    {
      title: <span className="text-[1vw]">Due Date</span>,
      dataIndex: "duedate",
      align: "center",
      sorter: (a, b) => a.duedate?.localeCompare(b.duedate),
      render: (duedate) => <span className="text-[0.9vw]">{duedate}</span>,
    },
    {
      title: <span className="text-[1vw]">Total Amount</span>,
      dataIndex: "amount",
      align: "center",
      sorter: (a, b) => a.amount?.localeCompare(b.amount),
      render: (amount) => <span className="text-[0.9vw]">{amount}</span>,
    },
    {
      title: <span className="text-[1vw]">Balance Due</span>,
      dataIndex: "balance",
      align: "center",
      sorter: (a, b) => a.balance?.localeCompare(b.balance),
      render: (balance) => <span className="text-[0.9vw]">{balance}</span>,
    },
    {
      title: <span className="text-[1vw]">Payment Status</span>,
      dataIndex: "status",
      align: "center",
      width:"5vw",
      render: (status) => (
        <div className="flex flex-row gap-[1vw] justify-center items-center">
          <span
            className={`flex justify-center items-center border-[0.1vw] p-[0.5vw] rounded-[1vw] h-[1.5vw] w-[5.9vw]  
            ${
              status === "Paid"
                ? "border-[#c6eec2] bg-[#ECFDF3]"
                : status === "Overdue"
                ? "border-[#FF0C0C4D] bg-[#FDECEC]"
                : "border-[#FF9D004D] bg-[#FFEAA5]"
            }`}
          >
            <h1
              className={`text-[0.80vw] font-medium 
              ${
                status === "Paid"
                  ? "text-[#34AE2A]"
                  : status === "Overdue"
                  ? "text-[#E52A2A]"
                  : "text-[#FF9D00]"
              }`}
            >
              {status}
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
