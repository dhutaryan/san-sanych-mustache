import { createContext } from 'react';

export const TitleContext = createContext({
  title: 'SanSanychMustache',
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setTitle: (value: string) => {},
});
