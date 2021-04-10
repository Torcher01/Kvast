// Определяем константы Gulp
const { src, dest, parallel, series, watch } = require('gulp');

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function (done) {
    gulp.src('./app/sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./app/css'));
    done();
});

gulp.task('sass:watch', function (done) {
    gulp.watch('./app/sass/**/*.sass', gulp.series('sass'));
    done();
});