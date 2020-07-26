import React from 'react';
import { Form, Input, Button, Checkbox, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Content = styled.div`
  max-width: 400px;
  min-width: 200px;
  box-shadow: 0px 21px 67px -5px rgba(212, 212, 212, 1);
  padding: 40px;
  border-radius: 10px;
  h1 {
    color: #727272;
    text-align: center;
    margin-bottom: 30px;
  }
  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }
`;
function RegisterForm() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row
      type="flex"
      align="middle"
      justify="center"
      className="px-3"
      style={{ minHeight: '100vh' }}>
      <Content>
        <h1>Register</h1>
        <Form
          name="normal_login"
          className="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            name="fullname"
            rules={[
              { required: true, message: 'Please input your full name!' },
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Full name"
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Please input your Username!' },
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your Password!' },
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Register
            </Button>
            Or <Link to="/auth/login">Login now!</Link>
          </Form.Item>
        </Form>
      </Content>
    </Row>
  );
}

export default RegisterForm;
