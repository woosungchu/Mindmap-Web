/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mindmap-web',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:4200';
    ENV.APP.API_NAMESPACE = 'api';
    //mirage
    ENV['ember-cli-mirage'] = {
      enabled: true
    };

    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    //mirage
    ENV['ember-cli-mirage'] = {
      enabled: true
    };

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'https://alt-mindmap.herokuapp.com';
    ENV.APP.API_NAMESPACE = 'api';
  }
  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:jwt'
  };
  ENV['ember-simple-auth-token'] = {
    refreshAccessTokens: true,
    serverTokenEndpoint: ENV.APP.API_HOST+'/api-token-auth/',
    //jwt
    serverTokenRefreshEndpoint: '/api-token-refresh/',
    tokenExpireName: 'exp',
    refreshLeeway: 0,
    //ext
    identificationField: 'username',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'JWT ',//'Token ',
    authorizationHeaderName: 'Authorization',
  };


  return ENV;
};
