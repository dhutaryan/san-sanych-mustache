import styled from '@emotion/styled';
import { Layout, Image, Spin, Grid } from 'antd';
import { FC } from 'react';

import { GoogleLoginButton } from '@features/auth';
import { SessionUserMenu } from '@features/session';

import { useSessiontUser } from '@entities/session';

import { Menu } from './Menu';

const { useBreakpoint } = Grid;

const LayoutHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  box-shadow: 0 0.25rem 1.5rem rgb(0 0 0 / 12%);

  &.ant-layout-header {
    padding: 0 1rem;
  }
`;

const AuthContainer = styled.div`
  margin-left: auto;
`;

export const Header: FC = () => {
  const { isAuth, isPending } = useSessiontUser();
  const { lg } = useBreakpoint();

  const userAuthContent = isAuth ? <SessionUserMenu /> : <GoogleLoginButton />;

  return (
    <LayoutHeader>
      <Image src="/logo.png" width={lg ? 64 : 48} preview={false} />
      <Menu />
      <AuthContainer>
        {isPending ? <Spin delay={300} /> : userAuthContent}
      </AuthContainer>
    </LayoutHeader>
  );
};
