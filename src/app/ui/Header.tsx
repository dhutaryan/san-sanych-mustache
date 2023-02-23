import { FC } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

const LayoutHeader = styled(Layout.Header)`
  box-shadow: 0 0.25rem 1.5rem rgb(0 0 0 / 12%);
`;

export const Header: FC = () => {
  return <LayoutHeader></LayoutHeader>;
};
