import { Button, Modal } from 'antd';
import { useState } from 'react';

import { CreateChampionship, useChampionship } from '@entities/championship';

import { ChampionshipForm } from './ChampionshipForm';

export const AddChampionship = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isPending, create } = useChampionship();

  const onShowModal = () => {
    setIsModalOpen(true);
  };

  const onCancel = () => {
    setIsModalOpen(false);
  };

  const onSubmit = async (values: CreateChampionship) => {
    await create(values);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={onShowModal}>
        Добавить
      </Button>
      <Modal
        title="Новый чемпионат"
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
            Создать
          </Button>,
        ]}
        onCancel={onCancel}
      >
        <ChampionshipForm submit={onSubmit} />
      </Modal>
    </>
  );
};
