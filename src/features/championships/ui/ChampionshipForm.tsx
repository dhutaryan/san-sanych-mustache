import { QuestionCircleOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input, Tooltip } from 'antd';
import { FC } from 'react';

import { useFormRules } from '@shared/lib';

interface ChampionshipFormValue {
  name: string;
  global: boolean;
}

type Props = {
  initialValues?: ChampionshipFormValue;
  submit: (value: ChampionshipFormValue) => void;
};

export const ChampionshipForm: FC<Props> = ({ initialValues, submit }) => {
  const { required } = useFormRules();

  return (
    <Form
      id="championship-form"
      layout="vertical"
      requiredMark="optional"
      initialValues={initialValues}
      preserve={false}
      onFinish={submit}
    >
      <Form.Item name="name" label="Название" rules={[required()]}>
        <Input />
      </Form.Item>

      <Form.Item name="global" valuePropName="checked">
        <Checkbox>
          Глобальный{' '}
          <Tooltip title="Для чемпионата с этим параметром будут доступны все команды при создании прогноза.">
            <QuestionCircleOutlined />
          </Tooltip>
        </Checkbox>
      </Form.Item>
    </Form>
  );
};
