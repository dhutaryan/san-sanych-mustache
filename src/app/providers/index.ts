import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withTheme } from './withTheme';

export const withProviders = compose(withRouter, withTheme);
