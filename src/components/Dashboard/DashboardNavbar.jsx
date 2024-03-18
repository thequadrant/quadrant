import React from "react";
import { Layout, theme } from "antd";
import DashboardNavbarUser from "./DashboardNavbarUser";
import "./DashboardNavbar.css";

const { Header } = Layout;

function DashboardNavbar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header
      style={{
        padding: 0,
        background: colorBgContainer,
        display: "flex",
      }}
    >
      <div className="dashboard-logo">The Quadrant</div>
      <DashboardNavbarUser />
    </Header>
  );
}

export default DashboardNavbar;
