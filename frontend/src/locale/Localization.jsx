import { ConfigProvider } from "antd";

function Localization({ children }) {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#339393",
            colorLink: "#1640D6",
            borderRadius: 0,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </>
  );
}

export default Localization;
