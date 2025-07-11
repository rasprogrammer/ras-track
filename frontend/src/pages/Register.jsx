import { Form, Button } from "antd";
import RegisterForm from "@/forms/RegisterForm";
import useLanguage from "@/locale/useLanguage";

import { register } from "@/redux/auth/action";
import { useDispatch, useSelector } from "react-redux";

import { selectAuth } from "@/redux/auth/selectors";
import Loading from "@/components/Loading";

const Register = () => {
  const dispath = useDispatch();
  const translate = useLanguage();

  const { isLoading, isSuccess } = useSelector(selectAuth);

  const onFinish = (values) => {
    dispath(register({ registerData: values }));
  };
  return (
    <>
      <Loading isLoading={isLoading}>
        <div style={{ padding: "20px" }}>
          <Form layout="vertical" onFinish={onFinish}>
            <h2>Register</h2>
            <RegisterForm></RegisterForm>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                size="large"
              >
                {translate("register")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Loading>
    </>
  );
};

export default Register;
