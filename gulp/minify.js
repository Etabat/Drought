var gulp = require('gulp');
var html = require('gulp-minify-html');
var css = require('gulp-minify-css');

// minification of public files. runs tasks in series
gulp.task('css', function () {
  return gulp.src('./public/*.css')
      .pipe(css)
      .pipe(gulp.dest('./public/dist'))
});

gulp.task('min', ['css']);