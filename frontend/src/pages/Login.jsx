import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "antd";
import LoginForm from "@/forms/LoginForm";

import useLanguage from "@/locale/useLanguage";

import { selectAuth } from "@/redux/auth/selectors";
import { login } from "@/redux/auth/action";

import NotificationShow from "@/components/NotificationShow";
import { useNotification } from "@/context/notificationContext";

function Login() {
  const translate = useLanguage();

  const { notify } = useNotification();

  const { isLoading, isSuccess } = useSelector(selectAuth);
  
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(login({loginData: values}));
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <NotificationShow></NotificationShow>
        <h2>Login</h2>
        <Form
          layout="vertical"
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <LoginForm></LoginForm>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="large"
            >
              {translate("log_in")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;
