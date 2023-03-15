import { CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Dropdown, GlobalToken, MenuProps, Space, theme } from 'antd';

import { useAuth } from '@entities/auth';
import { useSessiontUser } from '@entities/session';

const { useToken } = theme;

const UserBlock = styled.div(
  ({ token }: { token: GlobalToken }) => `
  padding: 0.5rem;
  border-radius: 0.5rem;
  line-height: normal;
  cursor: pointer;
  
  &:hover {
    background-color: ${token.colorBgLayout};
  }
`,
);

export const SessionUserMenu = () => {
  const { token } = useToken();
  const { sessiontUser } = useSessiontUser();
  const { logout } = useAuth();

  const items: MenuProps['items'] = [
    {
      icon: <LogoutOutlined />,
      label: 'Выход',
      key: 'logout',
      onClick: logout,
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <UserBlock token={token}>
        <Space size={4}>
          {sessiontUser?.displayName} <CaretDownOutlined />
        </Space>
      </UserBlock>
    </Dropdown>
  );
};
