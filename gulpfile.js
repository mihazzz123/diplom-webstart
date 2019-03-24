var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('minify-css', function(done) {
  return gulp.src('./src/css/style.css')
  .pipe(cleanCSS({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('dist/css/'))

  done();
});


gulp.task('htmlmin', function(done) {
  return gulp.src('./src/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('dist'))
  
  done();
});

gulp.task('fonts', function(done) {
  return gulp.src('./src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts/'))
  
  done();
});

gulp.task('tinypng', function (done) {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
  .pipe(tinypng({
    key: '98Qy10jrW6zRszWbgLCh02Lzp5qkxgLf',
  }))
  .pipe(gulp.dest('dist/img/'));
  done();
});

gulp.task('min-js', function () {
    return gulp.src(["./src/js/*.js", "!./src/js/*.min.js"])
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js/'))
});
  
gulp.task('move-js', function(done) {
  return gulp.src("./src/js/*.min.js")
  .pipe(gulp.dest('dist/js/'))

  done();
});
  
gulp.task('default', gulp.series('minify-css', 'min-js', 'move-js', 'fonts', 'tinypng', 'htmlmin', function(done) {
  // do more stuff
  done();
}));