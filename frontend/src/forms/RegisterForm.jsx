import { Form, Input } from "antd";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import useLanguage from "@/locale/useLanguage";

const RegisterForm = () => {
  const translate = useLanguage();
  return (
    <>
      <Form.Item
        label={translate("name")}
        name="name"
        rules={[{ required: true }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="admin"
          className="site-form-item-icon"
          size="large"
        ></Input>
      </Form.Item>

      <Form.Item
        label={translate("email")}
        name="email"
        rules={[{ required: true }, { type: "email" }]}
      >
        <Input
          prefix={<MailOutlined />}
          className="site-form-item-icon"
          placeholder="admin@gmail.com"
          size="large"
        ></Input>
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
        ></Input.Password>
      </Form.Item>

      <Form.Item label={translate("country")} name="country" rules={[{ required: true }]}>
        <Input className="site-form-item-icon" size="large" placeholder="India"></Input>
      </Form.Item>
    </>
  );
};

export default RegisterForm;
