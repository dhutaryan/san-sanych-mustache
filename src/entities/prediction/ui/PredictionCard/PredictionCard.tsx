import { Card, Row } from 'antd';
import { format } from 'date-fns';
import { CSSProperties, FC } from 'react';

import { Prediction } from '@shared/types';

import { usePoints } from '../../hooks';

import { PredictionCardItem } from './PredictionCardItem';

type Props = {
  prediction: Prediction;
};

const bodyStyle: CSSProperties = {
  padding: '1rem',
  boxShadow: '0 0.25rem 1.5rem rgb(0 0 0 / 12%)',
};

export const PredictionCard: FC<Props> = ({ prediction }) => {
  const points = usePoints(prediction);
  const teamNames = `${prediction.team1.name} - ${prediction.team2.name}`;
  const startTime = format(
    prediction.startTime.seconds * 1000,
    'dd/MM/yyyy HH:mm',
  );

  return (
    <Card bodyStyle={bodyStyle}>
      <Row gutter={[8, 4]}>
        <PredictionCardItem
          flex="150px"
          title="Дата и время"
          description={startTime}
        />

        <PredictionCardItem
          flex="266px"
          title="Чемпионат"
          description={prediction.championship.name}
        />

        <PredictionCardItem
          flex="1 1 auto"
          title="Команды"
          description={teamNames}
        />

        <PredictionCardItem flex="100px" title="Счет" description={points} />
      </Row>
    </Card>
  );
};