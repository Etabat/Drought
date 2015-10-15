var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('sync', function() {
  browserSync.init({
    proxy: 'localhost:1337',
    reloadDelay: 3000,
    logPrefix: "Drought",
    browser: "google chrome"
  });
  gulp.watch("public/index.html", ['reload']);
});

gulp.task('reload', ['min', 'inject'], function(){
  browserSync.reload();
});