import styled from '@emotion/styled';
import { Layout, Image, Menu, Spin } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { GoogleLoginButton } from '@features/auth';
import { SessionUserMenu } from '@features/session';

import { useSessiontUser } from '@entities/session';

import { RoutePath } from '@shared/lib';

const MENU_ITEMS: ItemType[] = [
  {
    key: RoutePath.PREDICTIONS,
    label: <Link to={RoutePath.PREDICTIONS}>Прогнозы</Link>,
  },
  {
    key: RoutePath.STATISTICS,
    label: <Link to={RoutePath.STATISTICS}>Статистика</Link>,
  },
];

const LayoutHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  box-shadow: 0 0.25rem 1.5rem rgb(0 0 0 / 12%);

  &.ant-layout-header {
    padding: 0 1rem;
  }
`;

const MenuContainer = styled(Menu)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
`;

export const Header: FC = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const { isAuth, isPending } = useSessiontUser();

  const userAuthContent = isAuth ? <SessionUserMenu /> : <GoogleLoginButton />;

  useEffect(() => setPath(location.pathname), [location]);

  return (
    <LayoutHeader>
      <Image className="logo" src="/logo.png" height={64} preview={false} />
      <MenuContainer
        mode="horizontal"
        selectable={false}
        disabledOverflow={true}
        selectedKeys={[path]}
        items={MENU_ITEMS}
      />
      {isPending ? <Spin delay={300} /> : userAuthContent}
    </LayoutHeader>
  );
};
