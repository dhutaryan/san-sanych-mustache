import compose from 'compose-function';

import { withRouter } from './withRouter';
import { withTheme } from './withTheme';
import { withTitle } from './withTitle';

export const withProviders = compose(withRouter, withTheme, withTitle);
