import React, { useState } from "react";
import { Layout, Menu, Button, Typography } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  AppstoreOutlined,
  InsertRowAboveOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import "../style/appNavBar.css";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

interface AppNavBarProps {
  children?: React.ReactNode;
}

const AppNavBar: React.FC<AppNavBarProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home Page",
    },
    {
      key: "3",
      icon: <InsertRowAboveOutlined />,
      label: "Properties Page",
    },
    {
      key: "sub1",
      icon: <MailOutlined />,
      label: "Properties",
      children: [
        {
          key: "5",
          label: "Option 5",
        },
        {
          key: "6",
          label: "Option 6",
        },
        {
          key: "7",
          label: "Option 7",
        },
        {
          key: "8",
          label: "Option 8",
        },
      ],
    },
    ...(location.pathname === "/Property"
      ? [
          {
            key: "sub2",
            icon: <AppstoreOutlined />,
            label: "Apartments",
            children: [
              {
                key: "9",
                label: "Option 9",
              },
              {
                key: "10",
                label: "Option 10",
              },
            ],
          },
        ]
      : []),
  ];

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#001529" }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
        </Header>
        <Content className="content-box">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppNavBar;
