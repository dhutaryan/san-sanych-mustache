import { useContext, useEffect } from 'react';

import { TitleContext } from '@shared/context';

const PredictionsPage = () => {
  const { setTitle } = useContext(TitleContext);
  document.title = 'Прогнозы';
  useEffect(() => setTitle('Прогнозы'));

  return <span>Predictions</span>;
};

export default PredictionsPage;
