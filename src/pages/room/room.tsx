import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/loader/loader';
import { GET_ROOM } from './query';

export const RoomPage: React.FC = () => {
  const { roomId } = useParams();
  const { loading, error, data } = useQuery(GET_ROOM, { variables: { id: roomId } });

  if (loading || !data) return <Loader />;

  const { id, title, users, messages } = data.room;

  return (
    <div>
      <div>ROOM PAGE</div>
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>users: {JSON.stringify(users)}</p>
      <p>messages: {JSON.stringify(messages)}</p>
    </div>
  );
};
