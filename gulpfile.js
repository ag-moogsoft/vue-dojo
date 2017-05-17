const gulp = require('gulp');
const sass = require('gulp-sass');

/**
 * Convenience SASS watcher.
 */
gulp.task('sass:watch', () => {
    gulp.watch([
        'scss/*.scss'
    ], ['sass']);
});

gulp.task('sass', () => gulp
    .src([
        'scss/main.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('main.css')));