import { Badge, theme } from 'antd';
import { FC } from 'react';

import { PredictionCard, Props as PredictionCardProps } from './PredictionCard';

const { useToken } = theme;

type Props = PredictionCardProps;

export const PastPredictionCard: FC<Props> = ({ prediction }) => {
  const { token } = useToken();
  const defaultPoint = 'N/A';
  const score1 = prediction.team1.score || defaultPoint;
  const score2 = prediction.team2.score || defaultPoint;

  return (
    <Badge
      color={token.colorPrimary}
      offset={[-16, 4]}
      count={`${score1} - ${score2}`}
    >
      <PredictionCard prediction={prediction} />
    </Badge>
  );
};
