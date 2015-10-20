var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', ['inject'], function(){
  nodemon ({
    script: 'server.js',
    ext: 'js',
    tasks: ['test']
  })
});