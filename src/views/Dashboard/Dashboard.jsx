import React from "react";
import { Layout, theme } from "antd";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import DashboardFooter from "../../components/Dashboard/DashboardFooter";
import DashboardMenu from "../../components/Dashboard/DashboardMenu";
import "./Dashboard.css";

const { Content } = Layout;

function Dashboard() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DashboardNavbar />
      <Layout>
        <DashboardMenu />
        <Content className="dashboard-content">
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            content
          </div>
          <DashboardFooter />
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
