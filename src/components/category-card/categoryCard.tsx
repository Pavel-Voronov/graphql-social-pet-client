import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

interface IProps {
  category: any;
}

export const CategoryCard: React.FC<IProps> = (props: IProps) => {
  const { id, title } = props.category;

  return (
    <Card title={`category#${id} ${title}`} bordered={false} style={{ width: 300 }}>
      <Link to={`/categories/${id}`}>
        <p>id: {id}</p>
        <p>title: {title}</p>
      </Link>
    </Card>
  );
};
