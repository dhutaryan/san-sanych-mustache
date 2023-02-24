import { FC } from 'react';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';

import { TitleContext } from '../../shared/context';

const { Title } = Typography;

const LayoutHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  box-shadow: 0 0.25rem 1.5rem rgb(0 0 0 / 12%);

  &.ant-layout-header {
    padding: 0;
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
