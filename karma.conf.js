// Karma configuration
// Generated on Mon Apr 24 2017 18:04:02 GMT+0300 (EAT)

module.exports = (config) => {
  config.set({
    coverageReporter: {
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

  // Config values to allow TravisCI to run chrome in it's container
    browsers: ['Chrome', 'ChromeCanary'],
    customLaunchers: {
   // tell TravisCI to use chromium when testing
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-coveralls',
      'karma-coverage',
      'eslint-plugin-jasmine',
      'jasmine',
      'karma-babel-preprocessor'
    ],

    // list of files / patterns to load in the browser
    files: [
      './public/lib/angular/angular.js',
      './public/js/app.js',
      './public/js/services/*.js',
      './public/js/controllers/*.js',
      './public/js/directives.js',
      './test/client/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    preprocessors: {
      'src/test/client/**/*/*.js': ['babel']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter

    reporters: ['progress', 'coverage', 'coveralls'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN
    // || config.LOG_INFO || config.LOG_DEBUG


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
  // Detect if this is TravisCI running the tests and tell it to use chromium
  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
  }
};
