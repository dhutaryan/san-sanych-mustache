import styled from '@emotion/styled';
import { Spin } from 'antd';

const Container = styled(Spin)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = () => {
  return <Container delay={300} className="overlay" size="large" />;
};
