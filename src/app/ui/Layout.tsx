import { FC, PropsWithChildren } from 'react';
import { Layout } from 'antd';

import { Header } from './Header';

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  );
};
