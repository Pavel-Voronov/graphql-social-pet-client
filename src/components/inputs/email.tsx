import React from 'react';
import { Form, Input } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type IGetFieldDecorator = WrappedFormUtils['getFieldDecorator'];

interface IProps {
  fieldDecorator: IGetFieldDecorator;
}

export const EmailInput: React.FC<IProps> = (props: IProps) => {
  const { fieldDecorator } = props;

  return (
    <Form.Item label="E-mail">
      {fieldDecorator('email', {
        rules: [
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ],
      })(<Input />)}
    </Form.Item>
  );
};

export default EmailInput;
