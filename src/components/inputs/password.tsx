import React from 'react';
import { Form, Input } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type IGetFieldDecorator = WrappedFormUtils['getFieldDecorator'];

interface IProps {
  fieldDecorator: IGetFieldDecorator;
}

export const PasswordInput: React.FC<IProps> = (props: IProps) => {
  const { fieldDecorator } = props;

  return (
    <Form.Item label="Password" hasFeedback>
      {fieldDecorator('password', {
        rules: [
          {
            required: true,
            message: 'Please input your password!',
          },
        ],
      })(<Input.Password />)}
    </Form.Item>
  );
};

export default PasswordInput;
