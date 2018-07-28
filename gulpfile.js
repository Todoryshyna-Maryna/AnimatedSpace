var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  cleanCss = require('gulp-clean-css');


var path = {
  // libs:{},

  src:{
    scss: './assets/src/scss/main.scss',
    js: './assets/src/js/'
  },

  public:{
    css: './assets/public/css/',
    mainJs: './assets/public/js/'
  },

  watch: {
    styles: './assets/src/scss/**/*.scss',
    scripts: './assets/src/js/**/*.js'
  },

  build: {
    mincss: './',
    minjs: './'
  }
}


gulp.task('compile-scss', function () {
  gulp.src([path.src.scss])
    .pipe(sass())
    .pipe(gulp.dest(path.public.css))
})

gulp.task('concat-minify-css', function () {
  return gulp.src(path.public.css + "*.css")
    .pipe(concat('main.css'))
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: ".min"}))
    .pipe(gulp.dest(path.build.mincss))
})

gulp.task('concat-js', function () {
  return gulp.src(path.src.js + '*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.public.mainJs))

})

gulp.task('minify-js', function () {
  return gulp.src(path.public.mainJs + '*.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min"}))
    .pipe(gulp.dest(path.build.minjs))
})

gulp.task('watch', function () {
  gulp.watch(path.watch.styles, ['compile-scss','concat-minify-css',
    'concat-js', 'minify-js']);
})

gulp.task('default', ['compile-scss', 'concat-minify-css', 'concat-js', 'minify-js', 'watch'])
