'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const CssImport = require('postcss-import');
const CssVariables = require('postcss-simple-vars');
const Autoprefixer = require('autoprefixer');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          {module: CssImport},
          require('postcss-nested'),
          {module: CssVariables},
          require('autoprefixer'),
          require('tailwindcss')('./config/tailwind.config.js'),
        ],
      },
    },
  });

  app.import('vendor/highlight/highlight.pack.js');
  app.import('vendor/highlight/styles/arduino-light.css');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
