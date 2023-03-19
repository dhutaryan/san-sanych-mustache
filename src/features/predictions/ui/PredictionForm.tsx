import { Col, DatePicker, Divider, Form, Input, Row, Select } from 'antd';
import { ColSize } from 'antd/es/grid';
import { FC } from 'react';

import { DATE_FORMAT, TIME_FORMAT, useFormRules } from '@shared/lib';

export interface PredictionFormValue {
  date: string;
  time: string;
}

type Props = {
  submit: (value: PredictionFormValue) => void;
};

const lg: ColSize = { span: 12 };
const lgTeam: ColSize = { span: 8 };
const span = 24;

export const PredictionForm: FC<Props> = ({ submit }) => {
  const { required } = useFormRules();

  return (
    <Form
      id="prediction-form"
      layout="vertical"
      requiredMark="optional"
      onFinish={submit}
    >
      <Row gutter={16}>
        <Col lg={lg} span={span}>
          <Form.Item name="date" label="Дата" rules={[required()]}>
            <DatePicker
              format={`${DATE_FORMAT} ${TIME_FORMAT}`}
              showNow={false}
            />
          </Form.Item>
        </Col>
        <Col lg={lg} span={span}>
          <Form.Item name="championship" label="Чемпионат" rules={[required()]}>
            <Select placeholder="Выберите чемпионат" showSearch />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16} wrap>
        <Col lg={lgTeam} span={span}>
          <Form.Item name="team1" label="Команда 1" rules={[required()]}>
            <Input />
          </Form.Item>
        </Col>
        <Col lg={lgTeam} span={span}>
          <Form.Item
            name="primaryPoint"
            label="Основной счет"
            rules={[required()]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col lg={lgTeam} span={span}>
          <Form.Item name="secondaryPoint1" label="Дополнительный счет">
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16} wrap>
        <Col lg={lgTeam} span={span}>
          <Form.Item name="team2" label="Команда 2" rules={[required()]}>
            <Input />
          </Form.Item>
        </Col>
        <Col lg={lgTeam} span={span}>
          <Form.Item
            name="secondaryPoint"
            label="Основной счет"
            rules={[required()]}
          >
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col lg={lgTeam} span={span}>
          <Form.Item name="secondaryPoint2" label="Дополнительный счет">
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
