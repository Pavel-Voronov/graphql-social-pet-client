import React from 'react';
import { Form, Input, Tooltip, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type IGetFieldDecorator = WrappedFormUtils['getFieldDecorator'];

interface IProps {
  fieldDecorator: IGetFieldDecorator;
}

export const TitleInput: React.FC<IProps> = (props: IProps) => {
  const { fieldDecorator } = props;

  return (
    <Form.Item
      label={
        <span>
          Title&nbsp;
          <Tooltip title="Event title?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      }
    >
      {fieldDecorator('title', {
        rules: [
          {
            required: true,
            message: 'Please input event title!',
            whitespace: true,
          },
        ],
      })(<Input />)}
    </Form.Item>
  );
};

export default TitleInput;
