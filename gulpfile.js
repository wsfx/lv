let gulp = require('gulp');
let connect = require('gulp-connect');
let sass = require('gulp-sass');
let sequence = require('gulp-sequence');
gulp.task('server',['sass'],function(){
    connect.server({
        port:8000,
        root:'./',
        livereload:true
    })
    gulp.watch(['./index.html','./js/*.js','./dist/index.css'],['html'])
    gulp.watch(['./scss/*.scss'],['sass'])
})
gulp.task('html',function(){
    gulp.src(['./index.html']).pipe(connect.reload())
})
gulp.task('sass',function(){
    gulp.src('scss/*.scss').pipe(sass()).pipe(gulp.dest('dist'));
})
