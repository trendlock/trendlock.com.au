const path = require('path');
const del = require('del');
const gulp = require('gulp');
const responsive = require('gulp-responsive');

const x1 = {suffix: '@1x'};
const x2 = {suffix: '@2x'};

const big = ({suffix, ...rest}) => ({suffix: `-big-${suffix}`, ...rest});

gulp.task('clean', () => del(['assets', 'dist']));

gulp.task('svg', () => {
  return gulp.src('src-assets/*.svg').pipe(gulp.dest('assets'));
});

gulp.task('responsive', () => {
  return gulp
    .src('src-assets/*.{png,jpg}')
    .pipe(
      responsive(
        {
          'icon.png': [
            {
              width: '100%',
            },
          ],
          'bc_photo.jpg': [
            {
              crop: 'center',
              width: 480,
              height: 480 * (16 / 9),
              withoutEnlargement: true,
              rename: x1,
            },
            {
              crop: 'center',
              width: 480 * 2,
              height: '100%',
              withoutEnlargement: true,
              rename: x2,
            },
            {
              width: '100%',
            },
          ],
          'city_teal_pink.jpg': [
            {
              width: 480,
              height: 480 * (16 / 9),
              rename: x1,
            },
            {
              width: 480 * 2,
              height: 480 * 2 * (16 / 9),
              rename: x2,
            },
            {
              width: 1440,
              height: 1440 * (9 / 16),
              rename: big(x1),
            },
            {
              width: 1440 * 2,
              height: 1440 * 2 * (9 / 16),
              rename: big(x2),
            },
          ],
          'aidan.png': [
            {
              width: 140,
            },
            {
              width: 280,
              rename: x2,
            },
          ],
          'ross.png': [
            {
              width: 140,
            },
            {
              width: 280,
              rename: x2,
            },
          ],
          'reinventure-logo.png': [
            {
              width: 400,
            },
            {
              width: 800,
              rename: x2,
            },
          ],
        },
        {
          errorOnUnusedImage: false,
        }
      )
    )
    .pipe(gulp.dest('assets'));
});

gulp.task('fonts', () => {
  return gulp
    .src(path.join(require.resolve('typeface-pt-mono'), '../files/*'))
    .pipe(gulp.dest('assets'));
});

gulp.task(
  'default',
  gulp.series(['clean', gulp.parallel(['fonts', 'svg', 'responsive'])])
);
