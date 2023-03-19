import styled from '@emotion/styled';
import { Row, Typography } from 'antd';
import { FC, ReactNode } from 'react';

const { Title } = Typography;

type Props = {
  title: string;
  action?: ReactNode;
};

const TitleWrapper = styled(Title)`
  &.ant-typography {
    margin-bottom: 1rem;
  }
`;

export const PageTitle: FC<Props> = ({ title, action }) => {
  return (
    <Row justify="space-between">
      <TitleWrapper level={3}>{title}</TitleWrapper>
      {action}
    </Row>
  );
};
