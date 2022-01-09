const gulp = require('gulp');
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('autoprefixerMain', () => {
    return gulp.src('./css/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css/build'))
});

gulp.task('default', gulp.parallel('autoprefixerMain'));

gulp.task('watch',() => {
  gulp.watch('./css/*.css',gulp.series('autoprefixerMain'));
});