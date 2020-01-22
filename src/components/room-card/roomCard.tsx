import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

interface IProps {
  category: any;
  room: any;
}

export const RoomCard: React.FC<IProps> = (props: IProps) => {
  const {
    room: { id, title },
    category: { id: categoryId, title: categoryTitle },
  } = props;

  return (
    <Card title={`room#${title} ${title}`} bordered={false} style={{ width: 300 }}>
      <Link to={`/categories/${categoryId}/rooms/${id}`}>
        <p>id: {id}</p>
        <p>title: {title}</p>
      </Link>
    </Card>
  );
};
