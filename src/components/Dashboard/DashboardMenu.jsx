import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Sider } = Layout;

function DashboardMenu() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [{ key: 0, label: "Home", icon: <HomeOutlined /> }];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: colorBgContainer,
      }}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["0"]}
        items={items}
      />
    </Sider>
  );
}

export default DashboardMenu;
