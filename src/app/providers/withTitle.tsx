import { useEffect, useState } from 'react';

import { TitleContext } from '@shared/lib';

export const withTitle = (component: () => React.ReactNode) => () => {
  const [title, setTitle] = useState('SanSanychMustache');

  useEffect(() => {
    document.title = `${title} - Усы Сан Саныча`;
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle }}>
      {component()}
    </TitleContext.Provider>
  );
};
