"use client";
import React from "react";
import { useContext } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LoginStateContext } from "@/utils/LoginState";
import { useRouter } from "next/navigation";

type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};
const Login: React.FC = () => {
  const [, setIsLogged] = useContext(LoginStateContext);
  const router = useRouter();
  const onFinish = () => {
    setIsLogged(true);
    router.push("/profile");
  };

  return (
    <>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox style={{ color: "rgb(58 94 149)" }}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
