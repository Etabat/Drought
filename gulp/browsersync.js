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

gulp.task('reload', ['inject'], function(){
  browserSync.reload();
});

//gulp.task('js', function () {
//  return gulp.src('js/*js')
//      .pipe(browserify())
//      .pipe(uglify())
//      .pipe(gulp.dest('dist/js'));
//});
//
//// create a task that ensures the `js` task is complete before
//// reloading browsers
//gulp.task('inject-watch', ['inject'], browserSync.reload);
//
//// use default task to launch Browsersync and watch JS files
//gulp.task('serve', ['js'], function () {
//
//  // Serve files from the root of this project
//  browserSync.init({
//    server: {
//      baseDir: "./"
//    }
//  });
//
//  // add browserSync.reload to the tasks array to make
//  // all browsers reload after tasks are complete.
//  // instead off js-watch I can add 'min'
//  // on the watch I can add the files to watch. All of app/**.* and public/**.*
//
//});