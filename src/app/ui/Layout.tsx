import { FC, PropsWithChildren } from 'react';
import { Layout } from 'antd';
import styled from '@emotion/styled';

import { Header } from './Header';

const LayoutContent = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 2rem 1rem 1rem;
`;

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout className="h-100">
      <Header />
      <LayoutContent>{children}</LayoutContent>
    </Layout>
  );
};
