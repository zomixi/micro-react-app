import routes, { RouteType } from "@/routes";
import { UnorderedListOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

const renderMenuItem = (route: RouteType) => {
  if (route.hideInMenu) {
    return null;
  }

  if (route.children && route.children.length > 0) {
    return (
      <SubMenu
        key={route.path}
        title={route.title}
        icon={<UnorderedListOutlined />}
      >
        {route.children.map((child) => renderMenuItem(child))}
      </SubMenu>
    );
  }

  return (
    <Menu.Item key={route.path} icon={<UnorderedListOutlined />}>
      <NavLink to={route.path!}>{route.title}</NavLink>
    </Menu.Item>
  );
};

export default function AppSider() {
  return (
    <Sider collapsible>
      <Menu theme="dark" mode="inline">
        {routes.map((route) => renderMenuItem(route))}
      </Menu>
    </Sider>
  );
}
