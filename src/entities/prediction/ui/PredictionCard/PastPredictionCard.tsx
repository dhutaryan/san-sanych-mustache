import { Badge } from 'antd';
import { FC } from 'react';

import { PredictionCard, Props as PredictionCardProps } from './PredictionCard';

type Props = PredictionCardProps;

export const PastPredictionCard: FC<Props> = ({ prediction }) => {
  return (
    <Badge.Ribbon
      text={
        <>
          {prediction.team1.score} - {prediction.team2.score}
        </>
      }
    >
      <PredictionCard prediction={prediction} />
    </Badge.Ribbon>
  );
};
