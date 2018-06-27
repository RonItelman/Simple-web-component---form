var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify'); //*

gulp.task('default', function(callback) {
  runSequence(['browserSync', 'watch', 'sass'], callback); //*
});

gulp.task('sass', function() {
  console.log('sass updated');
  return gulp.src('./sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('js', function() {
  console.log('js updated');
  browserSync.reload();
});

gulp.task('watch', ['browserSync'], function() {
  gulp.watch('./sass/**/*.scss', ['sass']); //update then reload
  gulp.watch('./sass/**/*.scss', browserSync.reload);
  gulp.watch('./public/javascripts/**/*.js', ['js']);
  gulp.watch('./views/**/*.jade', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
      notify: false,
      proxy: "localhost:3000",
      port:3000,
      reloadDelay: 500,
    });
});
