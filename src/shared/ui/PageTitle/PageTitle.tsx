import styled from '@emotion/styled';
import { Typography } from 'antd';
import { FC } from 'react';

const { Title } = Typography;

type Props = {
  title: string;
};

const TitleWrapper = styled(Title)`
  &.ant-typography {
    margin-bottom: 1rem;
  }
`;

export const PageTitle: FC<Props> = ({ title }) => {
  return <TitleWrapper level={3}>{title}</TitleWrapper>;
};
