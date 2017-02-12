var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
var del = require('del');

gulp.task('clean:css', function () {
  return del([
    'public/css/*'
  ]);
});

var cssSource = ['src/style/*.less', 'public/components/normalize-css/normalize.css'];

gulp.task('css-compile', ['clean:css'], function(){
  return gulp.src(cssSource)
    .pipe(less())
    .pipe(gulp.dest('public/css'))
});

gulp.task('css-package', ['clean:css'], function(){
  return gulp.src(cssSource)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public/css'))
});

gulp.task('default', [ 'css-compile' ]);
gulp.task('production', [ 'css-package' ]);


// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch(['src/**/*'], ['default'] )
});
