import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import useLanguage from "@/locale/useLanguage";

const LoginForm = () => {
  const translate = useLanguage();
  return (
    <>
      <Form.Item
        label={translate("email")}
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="admin@demo.com"
          className="site-form-item-icon"
          size="large"
        />
      </Form.Item>

      <Form.Item
        label={translate("password")}
        name="password"
        rules={[{ required: true }]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          className="site-form-item-icon"
          placeholder="admin123"
          size="large"
        />
      </Form.Item>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>{translate("remember_me")}</Checkbox>
        </Form.Item>

        <a
          className="login-form-forgot"
          href="/forgotpassword"
          style={{ marginLeft: "0px" }}
        >
          {translate('forgot_password')}
        </a>
      </Form.Item>
    </>
  );
};

export default LoginForm;
