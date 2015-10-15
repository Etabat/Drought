var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');

// minification of public files. runs tasks in series
gulp.task('html', ['inject'] ,function () {
  var opts = {
    conditionals: true
  };
  return gulp.src('./public/*.html')
      .pipe(minifyHtml(opts))
      .pipe(gulp.dest('./public/dist'))
});

gulp.task('min', ['html']);