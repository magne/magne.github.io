var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function() {
  return bower()
    .pipe(gulp.dest('lib/'))
});

gulp.task('default', function() {
  // place code for your default task here
});
