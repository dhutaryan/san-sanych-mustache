import { Space } from 'antd';

import { PastPredictions } from '@widgets/predictions';

import { PageTitle } from '@shared/ui';

const StatisticsPage = () => {
  return (
    <Space direction="vertical">
      <PageTitle title="Статистика" />
      <PastPredictions />
    </Space>
  );
  return;
};

export default StatisticsPage;
