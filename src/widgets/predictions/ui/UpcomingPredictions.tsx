import { Space, Typography } from 'antd';

import { PredictionsList } from '@entities/prediction';

import { usePredictions } from '../hooks';

const { Title } = Typography;

export const UpcomingPredictions = () => {
  const { predictions } = usePredictions({ hasScore: false, take: 10 });

  return (
    <Space direction="vertical" size={16}>
      <Title level={3}>Ближайшие</Title>
      <PredictionsList cardName="upcoming" predictions={predictions} />
    </Space>
  );
};
