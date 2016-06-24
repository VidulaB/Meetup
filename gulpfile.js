'use strict'

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src('js/main.js')
    // This will output the non-minified version
    .pipe(gulp.dest('./js'))
    // This will minify and rename to main.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

