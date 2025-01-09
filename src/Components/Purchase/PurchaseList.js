import React, { useState } from "react";
import { ConfigProvider, Table, Tooltip } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "../../App.css";
import Popup from "../Popup/Popup";
import TablePopupModal from "../Popup/TablePopupModal";

export default function PurchaseList({ currentItems }) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [rowCount, setRowCount] = useState();

  const columns = [
    {
      title: <span className="text-[0.95vw] pl-[0.4vw] font-normal">Image</span>,
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
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">PO Number</span>,
      dataIndex: "poNumber",
      align: "center",
      sorter: (a, b) => a.poNumber?.localeCompare(b.poNumber),
      render: (poNumber) => (
        <span className="text-[0.85vw] font-bold">{poNumber}</span>
      ),
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
      title: <span className="text-[0.95vw] font-normal pl-[2vw]">
        Style Name
      </span>,
      dataIndex: "styleName",
      sorter: (a, b) => a.styleName?.localeCompare(b.styleName),
      render: (styleName) =>
        styleName?.length > 15 ? (
          <Tooltip
            placement="top"
            title={styleName}
            className="cursor-pointer"
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
      title: <span className="text-[0.95vw] font-normal">Supplier</span>,
      dataIndex: "supplier",
      align: "center",
      sorter: (a, b) => a.supplier?.localeCompare(b.supplier),
      render: (supplier) =>
        supplier?.length > 20 ? (
          <Tooltip
            placement="top"
            title={supplier}
            className="cursor-pointer"
          >
            <div className="text-[0.85vw]">{supplier?.slice(0, 22)}...</div>
          </Tooltip>
        ) : (
          <div className="text-[0.85vw]">{supplier}</div>
        ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">PO Issued Date</span>,
      dataIndex: "issueDate",
      align: "center",
      sorter: (a, b) => a.issueDate?.localeCompare(b.issueDate),
      render: (issueDate) => (
        <span className="text-[0.85vw]">{issueDate}</span>
      ),
    },
    {
      title: (
        <span className="text-[0.95vw] font-normal">Purchase Status</span>
      ),
      dataIndex: "purchaseStatus",
      align: "center",
      width: "5vw",
      render: (purchaseStatus) => (
        <div className="flex flex-row gap-[1vw] justify-center items-center pl-[1vw]">
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
    setIsModalOpen(newSelectedRowKeys?.length > 0); // Toggle modal visibility
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
      {isModalOpen && (
        <TablePopupModal
          className="border border-[#1f487c] h-[100%] border-b-8 border-r-8 border-b-[#1f487c] border-r-[#1f487c] rounded-md"
          show={isModalOpen}
          closeicon={false}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="flex items-center justify-center">
          <Popup rowCount = {rowCount} />
          </div>
        </TablePopupModal>
      )}
    </>
  );
}
