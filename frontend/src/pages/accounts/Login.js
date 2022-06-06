import React, { useState, useEffect } from "react";
import { Card, Form, Input, Button, notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "store";
import { setToken } from "store";
import { parseErrorMessages } from "utils/forms";
// import { axiosInstance } from "api";
import Axios from 'axios';

function Login() {
  const { dispatch } = useAppContext();
  const location = useLocation();
  const navigate = useNavigate();
  const [fieldErrors, setFieldErrors] = useState({});

  const { from: loginRedirectUrl } = location.state || {
    from: { pathname: "/" }
  };

  const onFinish = values => {
    async function fn() {
      const { username, password } = values;

      setFieldErrors({});

      const data = { username, password };
      try {
        const response = await Axios.post("/accounts/token/", data);
        const {
          data: { token: jwtToken }
        } = response;

        dispatch(setToken(jwtToken));

        notification.open({
          message: "로그인 성공",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />
        });

        navigate.push(loginRedirectUrl);
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "로그인 실패",
            description: "아이디/암호를 확인해주세요.",
            icon: <FrownOutlined style={{ color: "#ff3333" }} />
          });

          const { data: fieldsErrorMessages } = error.response;
          // fieldsErrorMessages => { username: "m1 m2", password: [] }
          // python: mydict.items()
          setFieldErrors(parseErrorMessages(fieldsErrorMessages));
        }
      }
    }
    fn();
  };

  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="이름"
        name="username"
        rules={[
          {
            required: true,
            message: '이름을 꼭 적어주세요',
          },
          {
            min: 2, message: "두글자 이상 입력해주세요"
          }
        ]}
      // hasFeedback{
      // ...filedErrors.username
      // }
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="비밀번호"
        name="password"
        rules={[
          {
            required: true,
            message: '비밀번호를 꼭 입력해주세요',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >

      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;