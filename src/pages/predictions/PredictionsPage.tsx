import { Space } from 'antd';

import { PastPredictions, UpcomingPredictions } from '@widgets/predictions';

const PredictionsPage = () => {
  return (
    <Space direction="vertical" size={32}>
      <UpcomingPredictions />
      <PastPredictions />
    </Space>
  );
};

export default PredictionsPage;
