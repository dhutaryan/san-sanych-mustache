import { Form, Input } from 'antd';
import { FC } from 'react';

import { useFormRules } from '@shared/lib';

interface ChampionshipFormValue {
  name: string;
}

type Props = {
  submit: (value: ChampionshipFormValue) => void;
};

export const ChampionshipForm: FC<Props> = ({ submit }) => {
  const { required } = useFormRules();

  return (
    <Form
      id="championship-form"
      layout="vertical"
      requiredMark="optional"
      preserve={false}
      onFinish={submit}
    >
      <Form.Item name="name" label="Название" rules={[required()]}>
        <Input />
      </Form.Item>
    </Form>
  );
};
