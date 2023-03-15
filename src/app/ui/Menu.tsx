import { MenuOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Dropdown, Grid, Menu as AntdMenu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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

  useEffect(() => setPath(location.pathname), [location]);

  if (lg) {
    return (
      <MenuContainer
        mode="horizontal"
        selectable={false}
        disabledOverflow={true}
        selectedKeys={[path]}
        items={MENU_ITEMS}
      />
    );
  }

  return (
    <Dropdown
      menu={{ items: MENU_ITEMS, selectable: true, selectedKeys: [path] }}
      arrow={true}
    >
      <MenuIcon />
    </Dropdown>
  );
};
