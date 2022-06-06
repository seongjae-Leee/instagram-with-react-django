import React, { useState, useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";
import { Navigate, useNavigate } from "react-router-dom";
import Axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [filedErrors, setFieldErrors] = useState({});

  const onFinish = values => {
    async function fn() {
      const { username, password } = values;

      setFieldErrors({});

      const data = { username, password };
      try {
        await Axios.post("/accounts/signup/", data);

        notification.open({
          message: "회원가입 성공",
          description: "로그인 페이지로 이동합니다.",
          icon: <SmileOutlined style={{ color: "#108ee9" }} />
        });

        navigate("/accounts/login");
      } catch (error) {
        if (error.response) {
          notification.open({
            message: "회원가입 실패",
            description: "아이디/암호를 확인해주세요.",
            icon: <FrownOutlined style={{ color: "#ff3333" }} />
          });

          const { data: fieldsErrorMessages } = error.response;
          // fieldsErrorMessages => { username: "m1 m2", password: [] }
          // python: mydict.items()
          setFieldErrors(
            Object.entries(fieldsErrorMessages).reduce(
              (acc, [fieldName, errors]) => {
                // errors : ["m1", "m2"].join(" ") => "m1 "m2"
                acc[fieldName] = {
                  validateStatus: "error",
                  help: errors.join(" ")
                };
                return acc;
              },
              {}
            )
          );
        }
      }
    }
    fn();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
      onFinishFailed={onFinishFailed}
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
        hasFeedback{
        ...filedErrors.username
        }
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


  // const [inputs, setInputs] = useState({ username: "", password: "" });
  // const [errors, setErrors] = useState({});
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [formDisabled, setFormDisabled] = useState(true);
  // const [loading, setLoading] = useState(false);

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setErrors({});

  //   console.log("onSubmit함수 실행 : ", inputs);
  //   Axios.post("http://localhost:8000/accounts/signup", inputs)
  //     .then(response => {
  //       console.log("response : ", response);
  //       Navigate("/accounts/login");
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         const errorMessage =
  //           setErrors({
  //             username: (error.response.data.username || []).join("  "),
  //             password: (error.response.data.password || []).join("  "),
  //           });
  //       }

  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });

  // };

  // useEffect(() => {
  //   const isEnabled = Object.values(inputs).every(s => setErrors.length > 0);
  //   const isDisabled = inputs.username.length === 0 || inputs.password.length === 0;
  //   setFormDisabled(isDisabled);
  //   // setFormDisabled(!isEnabled);
  // }, [inputs]);

  // const onChange = e => {
  //   const { name, value } = e.target;
  //   setInputs(prev => ({
  //     ...prev,
  //     [name]: value
  //   })

  //   );
  // };

  // return (
  //   <div>
  //     <form onSubmit={onSubmit}>
  //       {/* input의 name은 모델 필드명과 똑같이 해야 함 */}
  //       <div>
  //         <input type="text" name='username' onChange={onChange} />
  //         {errors.username && <Alert type='error' message={errors.username} />}
  //       </div>
  //       <div>
  //         <input type="password" name='password' onChange={onChange} />
  //         {errors.password && <Alert type='error' message={errors.password} />}
  //       </div>
  //       <input type="submit" value="가입하기" disabled={loading || formDisabled} />
  //     </form>
  //   </div>
  // );
}

export default Signup;