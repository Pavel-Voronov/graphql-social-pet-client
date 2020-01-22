import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/loader/loader';
import { RoomCard } from '../../components/room-card/roomCard';
import { GET_CATEGORY } from './query';

export const CategoryPage: React.FC = () => {
  const { categoryId } = useParams();
  const { loading, error, data } = useQuery(GET_CATEGORY, { variables: { id: categoryId } });

  if (loading || !data) return <Loader />;

  const { id, title, rooms } = data.category;

  return (
    <div>
      <div>CATEGORY PAGE</div>
      <p>id: {id}</p>
      <p>title: {title}</p>
      {rooms.map((item: any) => (
        <RoomCard room={item} category={{ id, title }} key={item.id} />
      ))}
    </div>
  );
};
