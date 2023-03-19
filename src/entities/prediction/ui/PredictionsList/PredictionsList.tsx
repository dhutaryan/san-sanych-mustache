import { Col, Row } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { Prediction } from '@shared/types';

type CardProps = {
  prediction: Prediction;
};

type Props = PropsWithChildren<{
  predictions: Prediction[];
  cardComponent: FC<CardProps>;
}>;

export const PredictionsList: FC<Props> = ({
  predictions,
  cardComponent: Card,
}) => {
  return (
    <Row gutter={[0, 8]}>
      {predictions.map((prediction) => (
        <Col flex="100%" key={prediction.id}>
          <Card prediction={prediction} />
        </Col>
      ))}
    </Row>
  );
};
