var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('inject', function () {
  gulp.src('./public/index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./public/dist'))
});