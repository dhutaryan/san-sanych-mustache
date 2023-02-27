import { Card, Typography } from 'antd';
import { CSSProperties, FC } from 'react';

import { Prediction } from '@shared/types';

const { Text } = Typography;

type Props = {
  prediction: Prediction;
};

const bodyStyle: CSSProperties = {
  padding: '1rem',
  boxShadow: '0 0.25rem 1.5rem rgb(0 0 0 / 12%)',
};

export const PredictionCard: FC<Props> = ({ prediction }) => {
  return (
    <Card bodyStyle={bodyStyle}>
      <Text>{prediction.team1.name}</Text>
      <Text>{prediction.championship?.name}</Text>
    </Card>
  );
};
