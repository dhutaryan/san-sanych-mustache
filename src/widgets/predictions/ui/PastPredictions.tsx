import { Space, Typography } from 'antd';

import { PredictionsList } from '@entities/prediction';

import { usePredictions } from '../hooks';

const { Title } = Typography;

export const PastPredictions = () => {
  const { predictions } = usePredictions({ hasScore: true, take: 10 });

  return (
    <Space direction="vertical" size={16}>
      <Title level={3}>Последние</Title>
      <PredictionsList cardType="past" predictions={predictions} />
    </Space>
  );
};
