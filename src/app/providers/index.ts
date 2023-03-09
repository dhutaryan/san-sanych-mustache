import compose from 'compose-function';

import { withAntd } from './withAtnd';
import { withRouter } from './withRouter';

export const withProviders = compose(withRouter, withAntd);
