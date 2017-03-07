var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function(){
	connect.server({
		root: './',
		port: '8090',
		fallback: 'index.html'
	});
});

gulp.task('default', ['server']);
