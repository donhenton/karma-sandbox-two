var gulp = require('gulp');
//var open = require('gulp-open');
var karma = require('karma');
var del = require('del');


function cleanFunction(done) {
  del(['reports']);
  done();
}
 
 gulp.task('testBasic', function (done) {

  return new karma.Server({
    configFile: __dirname + '/test/basic/conf/basic.conf.js',
    singleRun: true
  }, function () {
    console.log("bite me 1");
    done();
    console.log("bite me 2");
  }).on('error', function (err) {
    throw err;
  }).start();
});

 
  

/*
gulp.task('testBasic', function (done) {

  var server = new karma.Server(
        {
          configFile: __dirname + '/test/basic/conf/basic.conf.js',
          singleRun: true
        }
  );

  server.on('run_complete', function (browsers, results) {
    if (results.error || results.failed) {
      done(new Error('There are test failures'));
    } else {
      done();
    }
  })

  server.start();



})

*/


gulp.task('clean', gulp.series(cleanFunction));



//https://github.com/karma-runner/gulp-karma/pull/23#issuecomment-232313832