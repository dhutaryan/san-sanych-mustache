import { Card } from 'antd';
import { CSSProperties } from 'react';

const bodyStyle: CSSProperties = {
  padding: '1rem',
  boxShadow: '0 0.25rem 1.5rem rgb(0 0 0 / 12%)',
};

export const PredictionCard = () => {
  return <Card bodyStyle={bodyStyle}>card test</Card>;
};
