import compose from 'compose-function';

import { withAntd } from './withAntd';
import { withRouter } from './withRouter';
import { withSession } from './withSession';

export const withProviders = compose(withRouter, withAntd, withSession);
