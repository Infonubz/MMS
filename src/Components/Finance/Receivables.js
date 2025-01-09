import React, { useState } from "react";
import { ConfigProvider, Table, Tooltip } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "../../App.css";


export default function Receivables({ setIsModalPopup, setRowCount, currentItems }) {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: (
        <span className="text-[0.95vw] pl-[0.4vw] font-normal">Invoice ID</span>
      ),
      dataIndex: "id",
      align: "center",
      sorter: (a, b) => a.id?.localeCompare(b.id),
      render: (id) => (
        <span className="text-[0.95vw] flex p-[0.72vw] pl-[4vw]">{id}</span>
      ),
    },
    {
      title: (
        <span className="text-[0.95vw] pl-[2vw] font-normal">
          Customer Name
        </span>
      ),
      dataIndex: "name",
      width: "14vw",
      sorter: (a, b) => a.name?.localeCompare(b.name),
      render: (name) =>
        name?.length > 20 ? (
          <Tooltip placement="top" title={name} className="cursor-pointer">
            <div className="text-[0.85vw] pl-[2.5vw]">
              {name?.slice(0, 22)}...
            </div>
          </Tooltip>
        ) : (
          <div className="text-[0.85vw] pl-[2.5vw]">{name}</div>
        ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Invoice Date</span>,
      dataIndex: "invoicedate",
      align: "center",
      sorter: (a, b) => a.invoicedate?.localeCompare(b.invoicedate),
      render: (invoicedate) => (
        <span className="text-[0.85vw]">{invoicedate}</span>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Due Date</span>,
      dataIndex: "duedate",
      align: "center",
      sorter: (a, b) => a.duedate?.localeCompare(b.duedate),
      render: (duedate) => <span className="text-[0.85vw]">{duedate}</span>,
    },
    {
      title: <span className="text-[0.95vw] font-normal">Total Amount</span>,
      dataIndex: "amount",
      align: "center",
      sorter: (a, b) => a.amount?.localeCompare(b.amount),
      render: (amount) => <span className="text-[0.85vw]">{amount}</span>,
    },
    {
      title: <span className="text-[0.95vw] font-normal">Balance Due</span>,
      dataIndex: "balance",
      align: "center",
      sorter: (a, b) => a.balance?.localeCompare(b.balance),
      render: (balance) => <span className="text-[0.85vw]">{balance}</span>,
    },
    {
      title: <span className="text-[0.95vw] font-normal">Payment Status</span>,
      dataIndex: "status",
      align: "center",
      width: "5vw",
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
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setIsModalPopup(newSelectedRowKeys?.length > 0);
    setRowCount(newSelectedRowKeys?.length);
  };

  const rowSelection = { selectedRowKeys,
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
                // Customize hover styles
                rowHoverBg: "rgb(255, 255, 255, 0)",
                rowSelectedBg: "rgb(255, 255, 255, 0)",
                rowSelectedHoverBg: "rgb(255, 255, 255, 0)",
                borderRadius: "2vw", // Row border-radius
                shadowHover: "0 0.5vw 1vw rgba(0, 0, 0, 0.15)", // Shadow for hover
                //shadowSelected: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for selected
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
