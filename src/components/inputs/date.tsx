import React from 'react';
import { Form, Tooltip, Icon, DatePicker } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type IGetFieldDecorator = WrappedFormUtils['getFieldDecorator'];

interface IProps {
  fieldDecorator: IGetFieldDecorator;
}

export const DateInput: React.FC<IProps> = (props: IProps) => {
  const { fieldDecorator } = props;

  return (
    <Form.Item
      label={
        <span>
          Date&nbsp;
          <Tooltip title="When you want event to begin?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      }
    >
      {fieldDecorator('date', {
        rules: [
          {
            type: 'object',
            required: true,
            message: 'Please input event start date!',
            whitespace: true,
          },
        ],
      })(<DatePicker />)}
    </Form.Item>
  );
};

export default DateInput;
