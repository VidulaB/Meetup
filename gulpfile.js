'use strict'

var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create(); // 
var reload = browserSync.reload;

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src('./js/main.js')
    // This will output the non-minified version
    .pipe(gulp.dest('./js'))
    // This will minify and rename to main.min.js
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('./js'));
});

gulp.task('minify-css', function() {
  // Get source file for css
  return gulp.src('./css/main.css')
    // Output the non-minified version of the css file
    .pipe(gulp.dest('./css'))
    // Minify the css file, rename to main.min.css, and save under ./css folder
    .pipe(cleanCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
   browserSync.init({
     server: {
       port: 'localhost:8888',
       baseDir: "./",
       index: "index.html"
     }
   });

   gulp.watch("*.html").on("change", reload);
   gulp.watch("./js/*.js").on("change", reload);
   gulp.watch("./css/*.css").on("change", reload);
});
