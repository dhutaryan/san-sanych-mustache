const { EnvironmentPlugin } = require('webpack');

// If you're using dotenv
require('dotenv').config();

// Export a configuration object
// See [Wepack's documentation](https://webpack.js.org/configuration/) for additional ideas of how to
// customize your build beyond what Angular provides.
module.exports = {
  plugins: [
    new EnvironmentPlugin([
      'FIRESTORE_API_KEY',
      'FIRESTORE_AUTH_DOMAIN',
      'FIRESTORE_PROJECT_ID',
      'FIRESTORE_STORAGE_BUCKET',
      'FIRESTORE_AMESSAGING_SENDER_ID',
      'FIRESTORE_APP_ID',
    ]),
  ],
};
