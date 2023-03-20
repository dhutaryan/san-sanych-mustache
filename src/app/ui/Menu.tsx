import { MenuOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Dropdown, Grid, Menu as AntdMenu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useSessiontUser } from '@entities/session';

import { RoutePath } from '@shared/lib';

const { useBreakpoint } = Grid;

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

const ADMIN_MENU_ITEMS = [
  {
    key: RoutePath.ADD_PREDICTION,
    label: <Link to={RoutePath.ADD_PREDICTION}>Добавить прогноз</Link>,
  },
  {
    key: RoutePath.CHAMPIONSHIPS,
    label: <Link to={RoutePath.CHAMPIONSHIPS}>Чемпионаты</Link>,
  },
];

const MenuContainer = styled(AntdMenu)`
  margin-left: 3rem;
`;

const MenuIcon = styled(MenuOutlined)`
  margin-left: 1rem;
  font-size: 1.5rem;
`;

export const Menu = () => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const { lg } = useBreakpoint();
  const { isAdmin } = useSessiontUser();

  useEffect(() => setPath(location.pathname), [location]);

  const menuItems = useMemo(() => {
    if (isAdmin) {
      return [...MENU_ITEMS, ...ADMIN_MENU_ITEMS];
    }

    return MENU_ITEMS;
  }, [isAdmin]);

  if (lg) {
    return (
      <MenuContainer
        mode="horizontal"
        selectable={false}
        disabledOverflow={true}
        selectedKeys={[path]}
        items={menuItems}
      />
    );
  }

  return (
    <Dropdown
      menu={{ items: menuItems, selectable: true, selectedKeys: [path] }}
      arrow={true}
    >
      <MenuIcon />
    </Dropdown>
  );
};
