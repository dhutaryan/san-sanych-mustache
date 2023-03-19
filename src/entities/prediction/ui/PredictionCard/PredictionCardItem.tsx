import { Col, Grid, Row, Typography } from 'antd';
import { FC } from 'react';

const { Text } = Typography;

const { useBreakpoint } = Grid;

type Props = {
  flex: string;
  title: string;
  description: string | undefined;
};

export const PredictionCardItem: FC<Props> = ({ flex, title, description }) => {
  const { lg } = useBreakpoint();

  const justify = lg ? 'start' : 'space-between';

  return (
    <Col flex={lg ? flex : '100%'}>
      <Row gutter={0} justify={justify} wrap>
        <Col flex={lg ? '100%' : 'none'}>
          <Text type="secondary">{title}</Text>
        </Col>
        <Col flex={lg ? '100%' : 'none'}>
          <Text>{description}</Text>
        </Col>
      </Row>
    </Col>
  );
};
