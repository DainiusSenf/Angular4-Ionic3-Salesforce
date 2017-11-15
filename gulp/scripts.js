module.exports = function(gulp, config) {
	'use strict';

	gulp.task('javascript:dev', () => {
		return gulp.src(['www/*.js'])
			.pipe(gulp.dest('build'));
	});

	gulp.task('javascript:prod', () => {
		return gulp.src(['www/*.js'])
			.pipe(gulp.dest('build'));
	});

	gulp.task('javascript-map:prod', () => {
		return gulp.src(['www/*.js.map'])
			.pipe(gulp.dest('build'));
	});

  gulp.task('assets', () => {
    return gulp.src(['www/assets/**/*'])
      .pipe(gulp.dest('build/assets'));
 })

  gulp.task('build', () => {
    return gulp.src(['www/build/**/*'])
      .pipe(gulp.dest('build/build'));

})

	gulp.task('scripts:prod', gulp.parallel('javascript:prod','javascript-map:prod'));

	gulp.task('watch:scripts', () => {
		gulp.watch(['src/**/*.js', 'src/systemjs.config.js'], gulp.series('javascript:dev'));
	});
}
