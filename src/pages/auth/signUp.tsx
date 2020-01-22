import React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Form, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from './mutation';
import { EmailInput, PasswordInput, NameInput } from '../../components/inputs';
import { AUTH_MODE_TYPES } from './auth';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

interface IProps extends FormComponentProps {
  switchMode: (nextMode: AUTH_MODE_TYPES) => void;
  handleSignUpSuccess: (response: any) => void;
}

const SignUpForm: React.FC<IProps> = (props: IProps) => {
  const { form, switchMode, handleSignUpSuccess } = props;

  const { getFieldDecorator, validateFieldsAndScroll } = form;

  const [signUp, { data, loading, error }] = useMutation(SIGN_UP, {
    onCompleted: handleSignUpSuccess,
  });

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (err) {
        console.log(err);
        return null;
      }

      signUp({ variables: values });
    });
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <EmailInput fieldDecorator={getFieldDecorator} />
      <PasswordInput fieldDecorator={getFieldDecorator} />
      <NameInput fieldDecorator={getFieldDecorator} />
      <Form.Item {...tailFormItemLayout}>
        <>
          <Button type="primary" htmlType="submit">
            {AUTH_MODE_TYPES.SIGN_UP}
          </Button>
          <Button type="danger" htmlType="button" onClick={switchMode.bind(null, AUTH_MODE_TYPES.SIGN_IN)}>
            Switch to {AUTH_MODE_TYPES.SIGN_IN}
          </Button>
        </>
      </Form.Item>
    </Form>
  );
};

export const SignUp = Form.create<IProps>({ name: 'signUp' })(SignUpForm);
