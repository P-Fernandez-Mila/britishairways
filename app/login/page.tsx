"use client";
import React, { useContext } from "react";
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
    <section className="bg-white justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-center w-full">Login</h1>
      <div className=" m-5 rounded-lg">
        <Form
          name="basic"
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
          className="flex items-center flex-col"
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

          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox style={{ color: "rgb(58 94 149)" }}>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
};

export default Login;
