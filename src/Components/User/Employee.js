import React, { useState } from "react";
import { ConfigProvider, Table, Tooltip } from "antd";
import { HiOutlineDotsVertical } from "react-icons/hi";
import "../../App.css";
import profile from "../../Assets/profile.png";


export default function Employee({ setIsModalPopup, setRowCount, currentItems }) {

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: (
        <span className="text-[0.95vw] font-normal pl-[2vw]">
          Employee Details
        </span>
      ),
      dataIndex: "details",
      width: "15vw",
      sorter: (a, b) => a.profile?.localeCompare(b.profile),
      render: (_, record) => (
        <div className="flex flex-row p-[0.59vh] pl-[1vw] gap-2">
          <span className="flex h-[2vw] w-[2vw]">
            <img alt="profile" src={profile} />
          </span>
          <span className="flex flex-col">
            {record.details?.length > 20 ? (
              <Tooltip
                placement="top"
                title={record.details}
                className="cursor-pointer"
                //color="#1F487C"
              >
                <p className="text-[0.85vw] font-bold">
                  {record.details?.slice(0, 20)}...
                </p>
              </Tooltip>
            ) : (
              <p className="text-[0.85vw] font-bold">{record.details}</p>
            )}
            <p className="text-[0.65vw]">{record.email}</p>
          </span>
        </div>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Employee ID</span>,
      dataIndex: "id",
      align: "center",
      sorter: (a, b) => a.id?.localeCompare(b.id),
      render: (id) => <span className="text-[0.85vw]">{id}</span>,
    },
    {
      title: <span className="text-[0.95vw] font-normal pl-[4vw]">Role</span>,
      dataIndex: "role",
      sorter: (a, b) => a.role?.localeCompare(b.role),
      render: (role) => (
        <span className="text-[0.85vw] pl-[1.5vw]">{role}</span>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Created Date</span>,
      dataIndex: "createdDate",
      align: "center",
      sorter: (a, b) => a.createdDate?.localeCompare(b.createdDate),
      render: (createdDate) => (
        <span className="text-[0.85vw]">{createdDate}</span>
      ),
    },
    {
      title: <span className="text-[0.95vw] font-normal">Mobile Number</span>,
      dataIndex: "mobile",
      align: "center",
      sorter: (a, b) => a.mobile?.localeCompare(b.mobile),
      render: (mobile) => <span className="text-[0.85vw]">{mobile}</span>,
    },
    {
      title: <span className="text-[0.95vw] font-normal">Status</span>,
      dataIndex: "status",
      align: "center",
      width: "5vw",
      render: (status) => (
        <div className="flex flex-row gap-[1vw] justify-center items-center">
          <span
            className={`flex justify-center items-center border-[0.1vw] p-[0.5vw] rounded-[1vw] h-[1.5vw] w-[5.9vw]  
            ${
              status === "Active"
                ? "border-[#c6eec2] bg-[#ECFDF3]"
                : "border-[#FF0C0C4D] bg-[#FDECEC]"
            }`}
          >
            <h1
              className={`text-[0.80vw] font-medium 
              ${status === "Active" ? "text-[#34AE2A]" : "text-[#E52A2A]"}`}
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
