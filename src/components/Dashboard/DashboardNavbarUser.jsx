import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { logout } from "../../services/authentication";
import { useAuth } from "../../store/AuthContext";

function DashboardNavbarUser() {
  const auth = useAuth();

  const items = [
    {
      label: "Logout",
      key: "logout",
    },
  ];

  const onClick = ({ key }) => {
    if (key === "logout") {
      logout();
    }
  };

  return (
    <Dropdown
      menu={{
        items,
        onClick,
      }}
      trigger={["click"]}
    >
      <div style={{ marginLeft: "auto", marginRight: 20, cursor: "pointer" }}>
        <Space>
          {auth?.authedUser?.displayName}
          <DownOutlined />
        </Space>
      </div>
    </Dropdown>
  );
}

export default DashboardNavbarUser;
