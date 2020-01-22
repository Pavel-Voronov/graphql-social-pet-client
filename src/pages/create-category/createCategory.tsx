import React from 'react';
import { FormComponentProps } from 'antd/lib/form/Form';
import { Form, Button } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_CATEGORY } from './mutation';
import { TitleInput } from '../../components/inputs';

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

const CreateCategoryForm: React.FC<FormComponentProps> = (props: FormComponentProps) => {
  const { getFieldDecorator, validateFieldsAndScroll } = props.form;

  const [createCategory, { data, loading, error }] = useMutation(CREATE_CATEGORY);

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    validateFieldsAndScroll((err, values) => {
      if (err) {
        console.log(err);
        return null;
      }

      createCategory({ variables: values });
    });
  };

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <TitleInput fieldDecorator={getFieldDecorator} />
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={handleSubmit}>
          Create Category
        </Button>
      </Form.Item>
    </Form>
  );
};

export const CreateCategoryPage = Form.create({ name: 'createEvent' })(CreateCategoryForm);
