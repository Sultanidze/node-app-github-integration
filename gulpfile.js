"use strict";

let gulp = require('gulp');
let jshint = require('gulp-jshint');

gulp.task('jshint', () => {
	return gulp.src('./*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
gulp.task('test', done => {
	require('./test.js');
	done();
});
gulp.task('serve', () => 	{
	require('./main.js');
});

gulp.task('default', gulp.series('jshint', 'test', 'serve'));