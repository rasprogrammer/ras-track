import { notification } from "antd";
import { NotificationContext } from "@/context/notificationContext";
import { setNotifyFunction } from "@/utils/notificationService";

const NotificationShow = ({ children }) => {

  const [api, contextHolder] = notification.useNotification();

  const notify = (type, ...args) => {
    api[type](...args);
  };

  setNotifyFunction(notify);

  return (
    <>
      <NotificationContext.Provider value={{ notify }}>
        {contextHolder}
        {children}
      </NotificationContext.Provider>
    </>
  );
};
export default NotificationShow;
