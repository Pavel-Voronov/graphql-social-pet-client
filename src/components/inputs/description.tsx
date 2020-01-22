import React from 'react';
import { Form, Input } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type IGetFieldDecorator = WrappedFormUtils['getFieldDecorator'];

interface IProps {
  fieldDecorator: IGetFieldDecorator;
}

export const DescriptionInput: React.FC<IProps> = (props: IProps) => {
  const { fieldDecorator } = props;

  return (
    <Form.Item label="description">
      {fieldDecorator('description', {
        rules: [
          {
            required: true,
            message: 'Please input event description!',
            whitespace: true,
          },
        ],
      })(<Input />)}
    </Form.Item>
  );
};

export default DescriptionInput;
