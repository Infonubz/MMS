import React, { useState } from "react";
import { ConfigProvider, Table } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "../../App.css";

export default function PurchaseList({ currentItems }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: <span className="text-[1vw] pl-[0.4vw]">Image</span>,
      dataIndex: "image",
      align: "center",
      render: (image) => (
        <span className="flex h-[3vw] w-[7vw] justify-center pl-[2vw]">{image}</span>
      ),
    },
    {
      title: <span className="text-[1vw]">SKU Code</span>,
      dataIndex: "skuCode",
      align: "center",
      sorter: (a, b) => a.skuCode?.localeCompare(b.skuCode),
      render: (skuCode) => <span className="text-[0.9vw]">{skuCode}</span>, // Use parentheses here to directly return the JSX
    },
    {
      title: <span className="text-[1vw]">PO Number</span>,
      dataIndex: "poNumber",
      align: "center",
      sorter: (a, b) => a.poNumber?.localeCompare(b.poNumber),
      render: (poNumber) => <span className="text-[0.9vw]">{poNumber}</span>,
    },
    {
      title: <span className="text-[1vw]">Style ID</span>,
      dataIndex: "styleId",
      align: "center",
      sorter: (a, b) => a.styleId?.localeCompare(b.styleId),
      render: (styleId) => <span className="text-[0.9vw]">{styleId}</span>,
    },
    {
      title: <span className="text-[1vw]">Style Name</span>,
      dataIndex: "styleName",
      align: "center",
      sorter: (a, b) => a.styleName?.localeCompare(b.styleName),
      render: (styleName) => <span className="text-[0.9vw]">{styleName}</span>,
    },
    {
      title: <span className="text-[1vw]">Supplier</span>,
      dataIndex: "supplier",
      align: "center",
      sorter: (a, b) => a.supplier?.localeCompare(b.supplier),
      render: (supplier) => <span className="text-[0.9vw]">{supplier}</span>,
    },
    {
      title: <span className="text-[1vw]">PO Issued Date</span>,
      dataIndex: "issueDate",
      align: "center",
      sorter: (a, b) => a.issueDate?.localeCompare(b.issueDate),
      render: (issueDate) => <span className="text-[0.9vw]">{issueDate}</span>, // Use parentheses here to directly return the JSX
    },
    {
      title: <span className="text-[1vw]">Purchase Status</span>,
      dataIndex: "purchaseStatus",
      align: "center",
      render: (purchaseStatus) => (
        <div className="flex flex-row gap-[1vw] justify-center items-center">
          <span
            className={`flex justify-center items-center border-[0.1vw] p-[0.5vw] rounded-[1vw] h-[1.5vw] w-[5.9vw]  
                   ${
                    purchaseStatus === "Approved"
                       ? "border-[#c6eec2] bg-[#ECFDF3]"
                       : purchaseStatus === "Cancelled"
                       ? "border-[#FF0C0C4D] bg-[#FDECEC]"
                       : "border-[#FF9D004D] bg-[#FFEAA5]"
                   }`}
          >
            <h1
              className={`text-[0.80vw] font-medium 
                     ${
                        purchaseStatus === "Approved"
                         ? "text-[#34AE2A]"
                         : purchaseStatus === "Cancelled"
                         ? "text-[#E52A2A]"
                         : "text-[#FF9D00]"
                     }`}
            >
              {purchaseStatus}
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
