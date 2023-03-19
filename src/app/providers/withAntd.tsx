import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import locale from 'antd/locale/ru_RU';
import 'dayjs/locale/ru';
import { extend } from 'dayjs';
import objectSupport from 'dayjs/plugin/objectSupport';

extend(objectSupport);

const white = '#ffffff';
const fontSize = 16;

const theme: ThemeConfig = {
  token: {
    fontSize,
    fontSizeHeading1: 40,
    fontSizeHeading2: 32,
    fontSizeHeading3: 28,
    fontSizeHeading4: 24,
    fontSizeHeading5: 20,
    lineHeightHeading1: 1,
    lineHeightHeading2: 1,
    lineHeightHeading3: 1,
    lineHeightHeading4: 1,
    lineHeightHeading5: 1,
  },
  components: {
    Badge: {
      fontSize,
      lineHeight: 1.375,
    },
    Layout: {
      colorBgHeader: white,
    },
  },
};

export const withAntd = (component: () => React.ReactNode) => () =>
  (
    <ConfigProvider theme={theme} locale={locale}>
      {component()}
    </ConfigProvider>
  );
