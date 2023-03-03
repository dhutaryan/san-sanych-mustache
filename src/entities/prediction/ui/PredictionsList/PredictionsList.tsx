import { Col, Row } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { Prediction } from '@shared/types';

import { PastPredictionCard, PredictionCard } from '../PredictionCard';

type CardName = 'upcoming' | 'past';
type CardProps = {
  prediction: Prediction;
};

const components: Record<CardName, FC<CardProps>> = {
  upcoming: PredictionCard,
  past: PastPredictionCard,
};

type Props = PropsWithChildren<{
  predictions: Prediction[];
  cardName: CardName;
}>;

export const PredictionsList: FC<Props> = ({ predictions, cardName }) => {
  const Card = components[cardName];

  return (
    <Row gutter={[0, 16]}>
      {predictions.map((prediction) => (
        <Col flex="100%" key={prediction.id}>
          <Card prediction={prediction} />
        </Col>
      ))}
    </Row>
  );
};
