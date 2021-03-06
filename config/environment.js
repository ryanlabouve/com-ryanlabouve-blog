/* jshint node: true */

require('dotenv').config({silent: true});

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'com-ryanlabouve-blog',
    metricsAdapters: [
      {
        name: 'GoogleAnalytics',
        environments: ['production'],
        config: {
          id: process.env.GA_KEY,
        },
      },
    ],
    bugsnag: {
      apiKey: process.env.BUGSNAG_KEY,
      notifyReleaseStages: ['production'],
      releaseStage: environment,
    },
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  ENV.API = {};

  // var enableMirage = (environment == 'test' || environment === 'development');
  var enableMirage =
    environment === 'test' || process.env.ENABLE_MIRAGE == 'true';

  ENV['ember-cli-mirage'] = {
    enabled: false,
  };

  if (enableMirage) {
    ENV['ember-cli-mirage'] = {
      enabled: true,
    };
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // ENV.API.host = 'http://localhost:3079/api/v1/';
    ENV.API.host = 'http://localhost:3080/api';
  }

  if (environment === 'production') {
    // Rails
    // ENV.API.host = 'https://blog-ryanlabouve-api.herokuapp.com/api/v1/';

    // Phoenix
    ENV.API.host = 'https://ryanlabouve-api-phoenix.herokuapp.com/api';
  }

  if (environment === 'test') {
    ENV.APP.autoboot = false;

    ENV.API.host = 'http://localhost:3080/api';
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV['ember-cli-mirage'] = {
      enabled: true,
      autostart: true,
    };
  }

  if (environment === 'production') {
  }

  return ENV;
};
