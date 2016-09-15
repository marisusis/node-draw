var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');

gulp.task('default', function() {
  // place code for your default task here
  console.log("Default gulp task");
});

gulp.task('sass', function() {
  return gulp.src('./client/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/css'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./client/scss/**/*.scss', ['sass']);
});

gulp.task('templates', function() {
  gulp.src('./client/*.jade')
    .pipe(jade({
      client: true
    }))
    .pipe(gulp.dest('./client/'))
});
