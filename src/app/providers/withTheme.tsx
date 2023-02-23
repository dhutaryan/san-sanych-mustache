import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';

const theme: ThemeConfig = { token: { colorBgLayout: '#ffffff' } };

export const withTheme = (component: () => React.ReactNode) => () =>
  <ConfigProvider theme={theme}>{component()}</ConfigProvider>;
