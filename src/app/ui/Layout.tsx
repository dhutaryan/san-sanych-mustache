import styled from '@emotion/styled';
import { Layout } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { Header } from './Header';

const LayoutContent = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
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
