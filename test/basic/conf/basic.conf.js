// Karma configuration
// Generated on Mon Feb 25 2019 13:40:53 GMT-0600 (CST)
// https://medium.com/@metalex9/replace-phantomjs-with-headless-chromium-for-javascript-unit-testing-in-karma-59812e6f8ce4
//https://www.npmjs.com/package/karma-fixture
//point the chrome exe to puppeteer
//process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude) take it to the route of the nb project
        basePath: '../../../',
        autoWatch: false,
        concurrency: Infinity,
        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'fixture', 'viewport'],
        // list of files / patterns to load in the browser
        // in the file section below
        // can include libs like jquery here
        files: [
            'public_html/js/jquery.min.js',
            'test/basic/code/*.js',
            'test/basic/tests/*.js',
            {
                pattern: 'public_html/**/*.jpg',
                watched: false,
                type: "dom",
                included: false,
                served: true
            },
            // place the sheet reference in the fixture as well as this entry
            { pattern: 'public_html/**/*.css', watched: false, type: "css", included: false, served: true },
            'test/basic/fixtures/**/*'

        ],
        // this will allow references to images and css via
        // '/css/test.css' and /images/fred.jpg
        proxies: {
            "/images/": "/base/public_html/images/",
            "/css/": "/base/public_html/css/"
        },

        htmlReporter: {
            outputFile: 'reports/basic/html_out/basic_unit_tests.html'

        },
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/basic/code/*.js': ['coverage'],
            'test/basic/fixtures/**/*.html': ['html2js']

        },
        junitReporter: {
            outputDir: "reports/basic/",
            outputFile: 'jasmine-test-results.xml',
            suite: 'Basic Tests'
        },
        //    plugins: [
        //      'karma-fixture',
        //      'karma-html2js-preprocessor'
        //
        //    ],
        coverageReporter: {
            reporters: [{
                    type: 'html',
                    dir: 'reports/basic/html_coverage/',
                    subdir: 'basic-chrome',
                    file: 'basic-chrome.xml'
                },
                {
                    type: 'cobertura',
                    dir: 'reports/basic/coverage/',
                    subdir: 'chrome',
                    file: 'basic-chrome.xml'
                }, {
                    type: 'json',
                    dir: 'reports/basic/coverage/',
                    subdir: 'json',
                    file: 'basic-coverage.json'
                }
            ]
        },
        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'html', 'dots', 'junit'],
        // web server port
        port: 9876,
        // enable / disable colors in the output (reporters and logs)
        colors: true,
        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,
        // If browser does not capture in given timeout [ms], kill it
        // captureTimeout: 60000,
        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // browsers: ['Chrome'],
        browsers: ['ChromeHeadless'],
        // browsers: ['Firefox'],
        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};