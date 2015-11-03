var gulp = require('gulp'),
  	connect = require('gulp-connect'),
	open = require("gulp-open");

gulp.task('connect', function () {
  connect.server({
    root: 'src',
    port: 3000,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./src/*.html', './src/style.css'], ['html']);
});

gulp.task('launch', function(){
	var options = {
    	url: 'http://localhost:3000',
    	app: 'google-chrome-stable'
  	};
  gulp.src('./src/index.html')
  .pipe(open('',options));
});

gulp.task('default', ['connect', 'watch', 'launch']);