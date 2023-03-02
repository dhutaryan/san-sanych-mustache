import styled from '@emotion/styled';
import { Layout, Typography } from 'antd';
import { FC } from 'react';

import { TitleContext } from '@shared/lib';

const { Title } = Typography;

const LayoutHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  box-shadow: 0 0.25rem 1.5rem rgb(0 0 0 / 12%);

  &.ant-layout-header {
    padding: 0 1rem;
  }
`;

export const Header: FC = () => {
  return (
    <LayoutHeader>
      <Title level={3}>
        <TitleContext.Consumer>{(value) => value.title}</TitleContext.Consumer>
      </Title>
    </LayoutHeader>
  );
};
