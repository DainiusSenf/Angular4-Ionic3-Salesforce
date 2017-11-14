module.exports = function(gulp, config) {
	'use strict';

	const sourcemaps = require('gulp-sourcemaps')

	gulp.task('javascript:dev', () => {
		return gulp.src(['dist/*.js'])
			.pipe(gulp.dest('build'));
	});

	gulp.task('javascript:prod', () => {
		return gulp.src(['dist/*.js'])
			.pipe(gulp.dest('build'));
	});

	gulp.task('javascript-map:prod', () => {
		return gulp.src(['dist/*.js.map'])
			.pipe(gulp.dest('build'));
	});

	gulp.task('scripts:prod', gulp.parallel('javascript:prod','javascript-map:prod'));

	gulp.task('watch:scripts', () => {
		gulp.watch(['src/**/*.js', 'src/systemjs.config.js'], gulp.series('javascript:dev'));
	});
}
