import { withProviders } from './providers';

import { AppLayout } from './ui';
import { Routing } from '../pages';
import './styles/index.scss';

const App = () => {
  return (
    <AppLayout>
      <Routing />
    </AppLayout>
  );
};

export default withProviders(App);
