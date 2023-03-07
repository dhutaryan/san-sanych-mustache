import { Space, Typography } from 'antd';

import { PastPredictions, UpcomingPredictions } from '@widgets/predictions';

const { Title } = Typography;

const PredictionsPage = () => {
  return (
    <Space direction="vertical" size={32}>
      <Space direction="vertical" size={16}>
        <Title level={3}>Ближайшие</Title>
        <UpcomingPredictions take={10} />
      </Space>
      <Space direction="vertical" size={16}>
        <Title level={3}>Последние</Title>
        <PastPredictions take={10} />
      </Space>
    </Space>
  );
};

export default PredictionsPage;
