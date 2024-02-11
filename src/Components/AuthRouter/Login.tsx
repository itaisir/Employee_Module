import React, { useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Image, Input } from 'antd';
import Link from 'antd/es/typography/Link';
import Title from 'antd/es/typography/Title';
import './Login.css'
import { loginUser } from '../../APIFunctions/Auth/auth';
import { isResponseError } from '../../Helpers/CommonHelpers';
import { showToast } from '../../Helpers/ToastHelpers';
import { AuthContext } from '../../Contexts/AuthContext';

const Login: React.FC = () => {

  async function LoginClick() {
    var response = await loginUser("moh", "1122")
    if (!isResponseError(response)) {
      setLocalToken(response.token)
      showToast("success", "Login Successfully")
    }
  }
  const { setLocalToken } = useContext(AuthContext)

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (

    <div id='formContainer'>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Image
          width={80}
          src="/ExcelCodes.png"
          preview={false}
        />
      </div>
      <Title level={2} style={{ textAlign: "center", marginBottom: '40px' }}>LOGIN </Title>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{ width: "100%", maxWidth: '500px' }}
        size={'large'}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: "100%", marginBottom: '20px' }} onClick={LoginClick}>
            Log in
          </Button>Don't have an account?
          <Link href="/create-account" style={{textDecoration:'underline'}}>Sign up</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;