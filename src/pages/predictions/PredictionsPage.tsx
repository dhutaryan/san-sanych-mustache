import { Space } from 'antd';

import { PastPredictions, UpcomingPredictions } from '@widgets/predictions';

import { PageTitle } from '@shared/ui';

const PredictionsPage = () => {
  return (
    <Space direction="vertical" size={32}>
      <Space direction="vertical">
        <PageTitle title="Ближайшие" />
        <UpcomingPredictions take={10} />
      </Space>
      <Space direction="vertical">
        <PageTitle title="Последние" />
        <PastPredictions take={10} />
      </Space>
    </Space>
  );
};

export default PredictionsPage;
