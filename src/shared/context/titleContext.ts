import { createContext } from 'react';

export const TitleContext = createContext({
  title: 'SanSanychMustache',
  setTitle: (value: string) => {},
});
