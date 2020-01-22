import React from 'react';
import { Form, Input, Tooltip, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type IGetFieldDecorator = WrappedFormUtils['getFieldDecorator'];

interface IProps {
  fieldDecorator: IGetFieldDecorator;
}

export const NameInput: React.FC<IProps> = (props: IProps) => {
  const { fieldDecorator } = props;

  return (
    <Form.Item
      label={
        <span>
          Name&nbsp;
          <Tooltip title="What do you want others to call you?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      }
    >
      {fieldDecorator('name', {
        rules: [
          {
            required: true,
            message: 'Please input your name!',
            whitespace: true,
          },
        ],
      })(<Input />)}
    </Form.Item>
  );
};

export default NameInput;
