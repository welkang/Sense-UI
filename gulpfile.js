// 引入 gulp
var path = require('path');
var gulp = require('gulp');
var less = require('gulp-less');
var gutil = require('gulp-util');

gulp.task('less', function () {
  gulp.src(['public/less/yui.less', 'public/less/style.less'])
    .pipe(less())
    .pipe(gulp.dest('public/css'))
    .on('error', gutil.log);
});

gulp.task('watch', function(){
	gulp.watch('**/*.less', ['less']);
});

// 默认任务
gulp.task('default', ['less', 'watch']);