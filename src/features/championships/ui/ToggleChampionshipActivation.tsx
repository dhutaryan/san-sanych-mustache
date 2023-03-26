import { Modal } from 'antd';
import { FC } from 'react';

import { useChampionship } from '@entities/championship';

import { Championship } from '@shared/types';
import { ActivityTag } from '@shared/ui';

const { confirm } = Modal;

type Props = {
  championship: Championship;
};

export const ToggleChampionshipActivation: FC<Props> = ({ championship }) => {
  const { toggleActivation } = useChampionship();
  const activationText = championship.active
    ? 'Деактивировать'
    : 'Активировать';

  const onShowConfirm = () => {
    confirm({
      title: `Вы действительно хотите ${activationText.toLowerCase()} чемпионат "${
        championship.name
      }"`,
      okText: activationText,
      okType: championship.active ? 'danger' : 'primary',
      cancelText: 'Отмена',
      onOk: () => toggleActivation(championship.id, !championship.active),
    });
  };

  return <ActivityTag active={championship.active} onClick={onShowConfirm} />;
};
