import { APP_NAME } from "@/config/constants";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider collapsible>
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          {APP_NAME}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="home" icon={<PieChartOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<DesktopOutlined />}>
            <Link to="about">About</Link>
          </Menu.Item>
          <SubMenu key="exception" icon={<TeamOutlined />} title="Exception">
            <Menu.Item key="404">
              <Link to="NotFound">404</Link>
            </Menu.Item>
            <Menu.Item key="403">
              <Link to="Forbidden">403</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Layout style={{ minHeight: "100%", overflow: "auto" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: "#ffffff", height: 0 }}>
              <Outlet />
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
