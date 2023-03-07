import { Space, Typography } from 'antd';

import { PastPredictions } from '@widgets/predictions';

const { Title } = Typography;

const StatisticsPage = () => {
  return (
    <Space direction="vertical" size={16}>
      <Title level={3}>Статистика</Title>
      <PastPredictions />
    </Space>
  );
  return;
};

export default StatisticsPage;
