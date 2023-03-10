import compose from 'compose-function';

import { withAntd } from './withAntd';
import { withRouter } from './withRouter';

export const withProviders = compose(withRouter, withAntd);
