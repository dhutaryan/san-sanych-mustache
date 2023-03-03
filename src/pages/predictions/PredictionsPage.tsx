import { Space } from 'antd';
import { useContext, useEffect } from 'react';

import { PastPredictions, UpcomingPredictions } from '@widgets/predictions';

import { TitleContext } from '@shared/lib';

const PredictionsPage = () => {
  document.title = 'Прогнозы';
  const { setTitle } = useContext(TitleContext);

  useEffect(() => setTitle('Прогнозы'));

  return (
    <Space direction="vertical" size={32}>
      <UpcomingPredictions />
      <PastPredictions />
    </Space>
  );
};

export default PredictionsPage;
