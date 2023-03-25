import { Card, Col, Row } from 'antd';

import { EditChampionship } from '@features/championships';

import { ActivityTag } from '@shared/ui';

import { useChampionships } from '../hooks';

export const ChampionshipsList = () => {
  const { championships } = useChampionships();

  return (
    <Row gutter={[0, 8]}>
      {championships.map((champ) => (
        <Col flex="100%" key={champ.id}>
          <Card actions={[<EditChampionship championship={champ} />]}>
            <Row justify="space-between">
              <Col>{champ.name}</Col>
              <Col>
                <ActivityTag active={champ.active} />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
