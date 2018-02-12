const path = require('path')
const del = require('del')
const gulp = require('gulp')
const responsive = require('gulp-responsive')

const x1 = { suffix: '@1x' }
const x2 = { suffix: '@2x' }

gulp.task('clean', () => del('dist'))

gulp.task('images', () => {
  return gulp
    .src('src-assets/*.{png,jpg}')
    .pipe(
      responsive(
        {
          'bc_photo.jpg': [
            {
              crop: 'center',
              width: 480,
              height: '100%',
              rename: x1
            },
            {
              crop: 'center',
              width: 960,
              height: '100%',
              rename: x2
            },
            {
              width: '100%'
            }
          ],
          'aidan.png': [
            {
              width: 140
            },
            {
              width: 280,
              rename: x2
            }
          ],
          'ross.png': [
            {
              width: 140
            },
            {
              width: 280,
              rename: x2
            }
          ],
          'reinventure-logo.png': [
            {
              width: 400
            },
            {
              width: 800,
              rename: x2
            }
          ]
        },
        {
          errorOnUnusedImage: false
        }
      )
    )
    .pipe(gulp.dest('assets'))
})

gulp.task('fonts', () => {
  return gulp
    .src(path.join(require.resolve('typeface-pt-mono'), '../files/*'))
    .pipe(gulp.dest('assets/fonts'))
})

gulp.task(
  'default',
  gulp.series(['clean', gulp.parallel(['fonts', 'images'])])
)
