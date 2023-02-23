import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';

const white = '#ffffff';

const theme: ThemeConfig = {
  token: { colorBgLayout: white },
  components: {
    Layout: {
      colorBgHeader: white,
    },
  },
};

export const withTheme = (component: () => React.ReactNode) => () =>
  <ConfigProvider theme={theme}>{component()}</ConfigProvider>;
