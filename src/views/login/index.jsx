
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
import { login } from '../../server/http/user';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const onFinish = values => {
  login(values).then(res => {
    console.log(16, res);
  })
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Login = () => (
  <div className="login-wrap">
    <div className="login-panel">
      <Form
        {...layout}
        name="basic"
        onFinish={ onFinish }
        onFinishFailed={ onFinishFailed }>
        <Form.Item
          name="username"
          placeholder="Please input your username"
          rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input 
            autoComplete="off"
            prefix={<UserOutlined style={{ fontSize: '16px', marginRight: '10px', color: '#889aa4' }} />}
            className="input-account" />
        </Form.Item>
        <Form.Item
          name="password"
          placeholder="Please input your password"
          rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input.Password 
            autoComplete="off"
            prefix={<LockOutlined style={{ fontSize: '16px', marginRight: '10px', color: '#889aa4' }} />}
            className="input-password" />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button  className="login-button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  </div>
)

export default Login;
