var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('css', function(){
  return gulp.src('src/style/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', [ 'css' ]);