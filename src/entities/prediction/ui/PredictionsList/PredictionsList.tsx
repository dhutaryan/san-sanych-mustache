import { Col, Row } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { Prediction } from '@shared/types';

import { PastPredictionCard, PredictionCard } from '../PredictionCard';

type CardType = 'upcoming' | 'past';
type CardProps = {
  prediction: Prediction;
};

const components: Record<CardType, FC<CardProps>> = {
  upcoming: PredictionCard,
  past: PastPredictionCard,
};

type Props = PropsWithChildren<{
  predictions: Prediction[];
  cardType: CardType;
}>;

export const PredictionsList: FC<Props> = ({ predictions, cardType }) => {
  const Card = components[cardType];

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
