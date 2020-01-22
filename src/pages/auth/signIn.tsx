import React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Form, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from './mutation';
import { EmailInput, PasswordInput } from '../../components/inputs';
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
  handleSignInSuccess: (response: any) => void;
}

const SignInForm: React.FC<IProps> = (props: IProps) => {
  const { form, switchMode, handleSignInSuccess } = props;

  const { getFieldDecorator, validateFieldsAndScroll } = form;

  const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
    onCompleted: handleSignInSuccess,
  });

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      if (err) {
        console.log(err);
        return null;
      }

      signIn({ variables: values });
    });
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <EmailInput fieldDecorator={getFieldDecorator} />
      <PasswordInput fieldDecorator={getFieldDecorator} />
      <Form.Item {...tailFormItemLayout}>
        <>
          <Button type="primary" htmlType="submit">
            {AUTH_MODE_TYPES.SIGN_IN}
          </Button>
          <Button type="danger" htmlType="button" onClick={switchMode.bind(null, AUTH_MODE_TYPES.SIGN_UP)}>
            Switch to {AUTH_MODE_TYPES.SIGN_UP}
          </Button>
        </>
      </Form.Item>
    </Form>
  );
};

export const SignIn = Form.create<IProps>({ name: 'signIn' })(SignInForm);
