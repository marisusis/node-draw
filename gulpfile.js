var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('default', function() {
  // place code for your default task here
  console.log("Default gulp task");
});

gulp.task('sass', function () {
  return gulp.src('./client/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./client/css'));
});