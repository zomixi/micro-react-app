import routes from "@/routes";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN"; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from "moment";
import "moment/locale/zh-cn";
import React from "react";
import { useRoutes } from "react-router-dom";
import "./styles/index.less";

moment.locale("zh-cn");

const App = () => {
  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  const element = useRoutes(routes);

  return <ConfigProvider locale={zhCN}>{element}</ConfigProvider>;
};

export default App;
