# Puppeteer and Karma

Requires node version > 8


https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai


## Running the tests

* use node > 8
* gulp testBasic to run karma setup verification, and illustrate code coverage
* gulp clean to remove reporting artifacts

reports will be in reports folder


## Alternative Launchers

For Chrome and Firefox

* added to the browsers section of the karma conf files
    browsers: ['Chrome'],
    browsers: ['Firefox'],

* added to the package.json file

    "karma-firefox-launcher": "1.1.0",
    karma-chrome-launcher will cover Chrome and ChromeHeadless



