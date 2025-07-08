import {Form, Button} from "antd";
import LoginForm from "@/forms/LoginForm";

function Login() {
  return (
    <>
      <div style={{padding: "20px"}}>
        <h2>Login</h2>
        <Form layout="vertical">
          <LoginForm></LoginForm>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button"
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;
