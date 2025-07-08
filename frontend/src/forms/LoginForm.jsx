import { Form, Input } from "antd";
import { UserOutlined,  LockOutlined } from "@ant-design/icons";

const LoginForm = () => {
  return (
    <>
      <Form.Item label="Email" name="email" rules={[{ required: true }, { type: "email" }]} >
        <Input prefix={<UserOutlined />} placeholder="admin@demo.com" size="large" />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{required: true}]}>
        <Input prefix={<LockOutlined />} placeholder="password" size="large" />
      </Form.Item>
    </>
  );
};

export default LoginForm;
