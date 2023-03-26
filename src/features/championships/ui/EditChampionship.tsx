import { EditTwoTone, InfoCircleOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Modal, Typography } from 'antd';
import { FC, useState } from 'react';

import { CreateChampionship, useChampionship } from '@entities/championship';

import { Championship } from '@shared/types';

import { ChampionshipForm } from './ChampionshipForm';

const { Text } = Typography;

const InfoIcon = styled(InfoCircleOutlined)`
  margin-right: 0.5rem;
`;

type Props = {
  championship: Championship;
};

export const EditChampionship: FC<Props> = ({ championship }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isPending, update } = useChampionship();
  const { name } = championship;

  const onShowModal = () => {
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (values: CreateChampionship) => {
    await update(championship.id, values);
    setIsModalOpen(false);
  };

  return (
    <>
      <EditTwoTone key="edit" onClick={onShowModal} />
      <Modal
        title={'Редактирование "' + championship.name + '"'}
        open={isModalOpen}
        destroyOnClose
        footer={[
          <Button key="cancel" onClick={onCancel}>
            Отмена
          </Button>,
          <Button
            key="create"
            htmlType="submit"
            form="championship-form"
            type="primary"
            loading={isPending}
          >
            Изменить
          </Button>,
        ]}
        onCancel={onCancel}
      >
        <ChampionshipForm initialValues={{ name }} submit={onSubmit} />
        <Text type="secondary">
          <InfoIcon />
          Новое название чемпионата будет применено ко всем существующим
          прогнозам с этим чемпионатом.
        </Text>
      </Modal>
    </>
  );
};
