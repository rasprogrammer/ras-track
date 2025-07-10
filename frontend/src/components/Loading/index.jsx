import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function Loading({ isLoading, children }) {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <Spin spinning={isLoading}>
        {children}
      </Spin>
    </>
  );
};
