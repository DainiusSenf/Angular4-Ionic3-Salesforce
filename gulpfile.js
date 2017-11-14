'use strict';

const gulp = require('gulp'),
	fs = require('fs'),
	gls = require('gulp-live-server');

let config = require('./config');
let server = gls.new('app.js');

gulp.task('serve-start', () => {
	return server.start();
});

// All tasks are located in other files within the gulp folder
require('./gulp/scripts')(gulp, config);
require('./gulp/html')(gulp, config);
require('./gulp/deploy')(gulp, config);

gulp.task('watch:all', gulp.parallel('watch:html'))
gulp.task('default', gulp.series('html:prod', 'visualforce:prod', gulp.parallel('watch:all')));
gulp.task('serve', gulp.series('ng-build', 'serve-start'));
