import { Layout } from "antd";
import AppLogo from "./Logo";

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header style={{ padding: 0 }}>
      <AppLogo />
    </Header>
  );
}
