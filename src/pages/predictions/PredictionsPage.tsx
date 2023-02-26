import { Space } from 'antd';
import { useContext, useEffect } from 'react';

import { PredictionCard } from '@entities/prediction';

import { TitleContext } from '@shared/context';

const PredictionsPage = () => {
  const { setTitle } = useContext(TitleContext);
  document.title = 'Прогнозы';
  useEffect(() => setTitle('Прогнозы'));

  return (
    <Space direction="vertical" size={16}>
      <PredictionCard />
      <PredictionCard />
      <PredictionCard />
      <PredictionCard />
    </Space>
  );
};

export default PredictionsPage;
