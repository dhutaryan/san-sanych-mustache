/* eslint-disable @typescript-eslint/restrict-template-expressions */
import styled from '@emotion/styled';
import { Tag } from 'antd';
import { FC } from 'react';

type Props = {
  active?: boolean;
  onClick?: () => void;
};

const ClickableTag = styled(Tag)(
  ({ onClick }) => `
  ${onClick && 'cursor: pointer'}
`,
);

export const ActivityTag: FC<Props> = ({ active, onClick }) => {
  return (
    <ClickableTag color={active ? 'success' : 'warning'} onClick={onClick}>
      {active ? 'Активен' : 'Неактивен'}
    </ClickableTag>
  );
};
