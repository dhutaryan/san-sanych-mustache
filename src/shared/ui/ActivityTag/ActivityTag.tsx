import { Tag } from 'antd';
import { FC } from 'react';

type Props = {
  active?: boolean;
};

export const ActivityTag: FC<Props> = ({ active }) => {
  return (
    <Tag color={active ? 'green' : 'red'}>
      {active ? 'Активен' : 'Неактивен'}
    </Tag>
  );
};
