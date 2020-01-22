import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Loader } from '../../components/loader/loader';
import { CategoryCard } from '../../components/category-card/categoryCard';
import { GET_CATEGORIES } from './query';

export const CategoriesPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading || !data) return <Loader />;

  const { categories } = data;

  return (
    <div>
      <div>CATEGORIES PAGE</div>
      {categories.map((item: any) => (
        <CategoryCard category={item} key={item.id} />
      ))}
    </div>
  );
};
