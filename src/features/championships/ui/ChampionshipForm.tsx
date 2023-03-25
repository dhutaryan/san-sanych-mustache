import { Form, Input } from 'antd';
import { FC } from 'react';

import { useFormRules } from '@shared/lib';

interface ChampionshipFormValue {
  name: string;
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
    </Form>
  );
};
