import { Form, Button } from "antd";
import RegisterForm from "@/forms/RegisterForm";
import useLanguage from "@/locale/useLanguage";

const Register = () => {
  const translate = useLanguage();
  const onFinish = (values) => {
    console.log(values);
  }
  return (
    <>
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
    </>
  );
};

export default Register;
