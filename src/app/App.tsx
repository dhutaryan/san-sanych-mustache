import { withProviders } from './providers';

import { Routing } from '../pages';
import './styles/index.scss';

const App = () => {
  return <Routing />;
};

export default withProviders(App);
