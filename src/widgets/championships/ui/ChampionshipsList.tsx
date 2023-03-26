import { Card, Col, Row } from 'antd';

import {
  EditChampionship,
  ToggleChampionshipActivation,
} from '@features/championships';

import { useChampionships } from '../hooks';

export const ChampionshipsList = () => {
  const { championships } = useChampionships();

  return (
    <Row gutter={[0, 8]}>
      {championships.map((champ) => (
        <Col flex="100%" key={champ.id}>
          <Card>
            <Row justify="space-between">
              <Col>
                {champ.name} <EditChampionship championship={champ} />
              </Col>
              <Col>
                <ToggleChampionshipActivation championship={champ} />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
