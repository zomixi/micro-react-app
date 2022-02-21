import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN"; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from "moment";
import "moment/locale/zh-cn";
import React from "react";
import AppLayout from "./layout";
import "./styles/index.less";

moment.locale("zh-cn");

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <AppLayout />
    </ConfigProvider>
  );
};

export default App;
