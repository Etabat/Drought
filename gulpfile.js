var gulp = require('gulp');

gulp.task('default', ['nodemon', 'sync']);

require('require-dir')('./gulp');