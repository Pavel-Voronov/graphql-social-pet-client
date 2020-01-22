import React from 'react';
import { Form, Input, Tooltip, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

type IGetFieldDecorator = WrappedFormUtils['getFieldDecorator'];

interface IProps {
  fieldDecorator: IGetFieldDecorator;
}

export const PriceInput: React.FC<IProps> = (props: IProps) => {
  const { fieldDecorator } = props;

  return (
    <Form.Item
      label={
        <span>
          Price&nbsp;
          <Tooltip title="Event price?">
            <Icon type="question-circle-o" />
          </Tooltip>
        </span>
      }
    >
      {fieldDecorator('price', {
        rules: [
          {
            required: true,
            message: 'Please input event price!',
            whitespace: true,
          },
        ],
      })(<Input type="number" />)}
    </Form.Item>
  );
};

export default PriceInput;
