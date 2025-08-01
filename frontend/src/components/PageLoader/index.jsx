import { Spin } from "antd";

import { LoadingOutlined } from "@ant-design/icons";

function PageLoader() {
  const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;
  return (
    <>
      <div className="centerAbsolute">
        <Spin indicator={antIcon}></Spin>
      </div>
    </>
  );
}

export default PageLoader;
