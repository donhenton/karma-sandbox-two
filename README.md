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

## Switching to Debug Mode

To debug the actual environment of the Karma server (peek into how the html actually looks):

* switch browser from 'ChromeHeadless' to 'Chrome' in karma conf file
* set singleRun to false (either in conf or gulp file or both)
* when window remains click on the debug button
* then inspect the html

## Including css/html

* see the files and proxies section of the karma conf file
* set log level to debug to see if the img or css files return a 404
* tests need to pause a bit as css effects are not immediate
