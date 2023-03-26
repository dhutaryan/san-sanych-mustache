import styled from '@emotion/styled';
import { Row, Typography } from 'antd';
import { FC, ReactNode } from 'react';

const { Title } = Typography;

type Props = {
  title: string;
  action?: ReactNode;
};

const Container = styled(Row)`
  margin-bottom: 0.5rem;
`;

const TitleWrapper = styled(Title)`
  &.ant-typography {
    margin-bottom: 0.5rem;
  }
`;

export const PageTitle: FC<Props> = ({ title, action }) => {
  return (
    <Container justify="space-between">
      <TitleWrapper level={3}>{title}</TitleWrapper>
      {action}
    </Container>
  );
};
