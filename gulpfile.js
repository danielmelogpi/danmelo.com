var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('css-compile', function(){
  return gulp.src('src/style/*.less')
    .pipe(less())
    .pipe(gulp.dest('public/css'))
});

gulp.task('css-package', function(){
  return gulp.src('public/css/*.css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', [ 'css-compile' ]);
gulp.task('production', [ 'css-package' ])