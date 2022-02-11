import { Button, ConfigProvider, DatePicker, Space } from "antd";
import zhCN from "antd/lib/locale/zh_CN"; // 由于 antd 组件的默认文案是英文，所以需要修改为中文
import moment from "moment";
import "moment/locale/zh-cn";
import React from "react";
import "./styles/index.less";

moment.locale("zh-cn");

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Space>
        <Button>点我！</Button>
        <DatePicker />
      </Space>
    </ConfigProvider>
  );
};

export default App;
