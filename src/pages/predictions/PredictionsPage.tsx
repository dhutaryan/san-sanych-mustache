import { Space } from 'antd';
import { useContext, useEffect } from 'react';

import { PredictionCard } from '@entities/prediction';

import { TitleContext } from '@shared/lib';

import { usePredictions } from './hooks';

const PredictionsPage = () => {
  document.title = 'Прогнозы';
  const { setTitle } = useContext(TitleContext);
  const { predictions } = usePredictions();

  useEffect(() => setTitle('Прогнозы'));

  return (
    <Space direction="vertical" size={16}>
      {predictions.map((prediction) => (
        <PredictionCard key={prediction.id} prediction={prediction} />
      ))}
    </Space>
  );
};

export default PredictionsPage;
