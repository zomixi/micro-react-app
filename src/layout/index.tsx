import { Breadcrumb, Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "./Header";
import AppSider from "./Sider";

const { Content, Footer } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <AppHeader />

      <Layout>
        <AppSider />

        <Layout>
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
    </Layout>
  );
};

export default AppLayout;
