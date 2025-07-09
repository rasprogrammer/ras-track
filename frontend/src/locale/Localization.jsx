import { ConfigProvider } from "antd";
import NotificationShow from "@/components/NotificationShow";

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
        <NotificationShow>{children}</NotificationShow>
      </ConfigProvider>
    </>
  );
}

export default Localization;
