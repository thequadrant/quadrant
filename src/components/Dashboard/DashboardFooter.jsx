import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

function DashboardFooter() {
  return (
    <Footer
      style={{
        textAlign: "center",
      }}
    >
      The Quadrant ©
      {new Date().getFullYear()}
    </Footer>
  );
}

export default DashboardFooter;
